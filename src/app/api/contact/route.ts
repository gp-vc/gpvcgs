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
    //TODO: request body로 받을 변수들 (이름, 이메일, 인콰이어리등 정하고 작성하기)
}

export async function GET() {
    return NextResponse.json({ message: 'Contact API is working'});
}