import { NextResponse } from "next/server";
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: false,
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    },
    tls: {
        ciphers: 'SSLv3',
        rejectUnauthorized: false,
    }
});

async function verifyRecaptcha(token: string) {
    const secretKey = process.env.RECAPTCHA_SECRET_KEY;
    if (!secretKey) {
        throw new Error("RECAPTCHA_SECRET_KEY 환경 변수가 설정되지 않았습니다.")
    }

    const verificationUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}`;

    const response = await fetch(verificationUrl, {
        method: 'POST',
    });

    return response.json();
}

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, company, email, phone, message, recaptchaToken } = body;

        if (!name || !company || !email || !phone || !message || !recaptchaToken) {
            return NextResponse.json({ error: '모든 필드를 채워주세요.' }, { status: 400 });
        }

        const recaptchaResult = await verifyRecaptcha(recaptchaToken);

        if (!recaptchaResult.success || recaptchaResult.score < 0.5) {
            return NextResponse.json({ error: 'reCAPTCHA 검증에 실패했습니다.' }, { status: 403 });
        }

        const mailOptions = {
            from: process.env.SMTP_USER,
            to: process.env.COMPANY_RECEIVER_EMAIL,
            replyTo: email,
            subject: `[와인 홈페이지 문의] ${name} 님으로부터`,
            html: `
                <h2>새로운 문의가 도착했습니다.</h2>
                <p><strong>이름:</strong> ${name}</p>
                <p><strong>회사명:</strong> ${company}</p>
                <p><strong>이메일:</strong> ${email}</p>
                <p><strong>연락처:</strong> ${phone}</p>
                <p><strong>메시지:</strong><br/>${message.replace(/\n/g, '<br/>')}</p>
            `,
        };

        await transporter.sendMail(mailOptions);
        
        return NextResponse.json({ message: '문의가 성공적으로 전송되었습니다.' }, { status: 200 });
    } catch (error) {
        console.error ('이메일 전송 오류:', error);
        return NextResponse.json({ error: '문의 전송 중 오류가 발생했습니다.' }, { status: 500 });
    }
}

export async function GET() {
    return NextResponse.json({ message: 'Contact API is working'}, { status: 200 });
}