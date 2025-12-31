'use client';
import { useEffect, useRef, useState } from "react";
import { Send, MapPin, ExternalLink, Navigation } from "lucide-react";
import Image from 'next/image';
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

export default function Contact() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [formData, setFormData] = useState({
        //TODO: contact us에 넣을 formdata 정의하기
    })
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [statusMessage, setStatusMessage] = useState('');

    // Using Recaptcha Hook
    const { executeRecaptcha } = useGoogleReCaptcha();

    const t = {
        title: 'Contact Us',
        subtitle: '연락처',
        firstName: '이름',
        lastName: '회사명',
        email: '이메일 주소',
        message: '메시지',
        messagePlaceholder: '문의 내용을 입력해 주세요.',
        submit: 'Submit',
        address: '서울특별시 강남구 언주로157길 6, 3층',
        viewOnMaps: '지도에서 보기',
        getDirections: '길찾기',
    }

    // Address for Google Maps
    const address = '서울특별시 강남구 언주로 157길 6, 3층';
    const encodedAddress = encodeURIComponent(address);

    // Alternative embedded URL format
	const alternativeEmbedUrl = `https://maps.google.com/maps?q=${encodedAddress}&t=&z=16&ie=UTF8&iwloc=&output=embed`;

    // External Google Maps Link
    const googleMapsLink = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
	const directionsLink = `https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}`;

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-slide-up');
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value}));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!executeRecaptcha) {
			setStatusMessage('❌ 보안 모듈 로딩 중입니다. 잠시 후 다시 시도해주세요.');
            return;
        }

        setIsSubmitting(true);
        setStatusMessage('문의를 전송중입니다...');

        try {
            // getting reCAPTCHA token
            const recaptchaToken = await executeRecaptcha('contactFormSubmit');

            // data + token
            const dataToSend = {
                ...formData,
                recaptchaToken: recaptchaToken,
            };

            // API Route Call (sending Email)
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(dataToSend),
            });

            const result = await response.json();

            if (response.ok) {
                setStatusMessage('✅ 문의가 성공적으로 전송되었습니다! 곧 연락드리겠습니다.');
                // TODO:아래 formdata는 받을거 정의 하고 다시바꿔야함
				// setFormData({ firstName: '', lastName: '', email: '', message: '' });
            } else {
				setStatusMessage(`❌ 전송 실패: ${result.message || '서버 오류가 발생했습니다.'}`);
            }
        } catch (error) {
            console.error('Submission Error:', error);
            setStatusMessage('Internal Network Error');
        } finally {
            setIsSubmitting(false);
        }
    };

    const openInMaps = () => {
        window.open(googleMapsLink, '_blank', 'noopener,noreferrer');
    };

    const openDirections = () => {
		window.open(directionsLink, '_blank', 'noopener,noreferrer');
    };

return (
	<>
		<section id='contact' className="relative flex flex-col justify-center h-[60vh] inset-0 bg-cover bg-[length:100%_auto] bg-bottom no-repeat transition-transform duration-1000 bg-[url('/images/contactbg.png')]">
		{/* <section id='contact' className="relative h-[60vh] py-16 lg:py-24 z-10 bg-cover bg-bottom bg-[url('/images/contactbg.png')] bg-no-repeat flex flex-col justify-center"> */}
			<div className='relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				{/* Section Header */}
				<div className='text-center mb-12 lg:mb-16'>
                    <h2 className='text-4xl lg:text-5xl font-playfair-display text-white font-bold mb-2'>
						{t.title}
					</h2>
				</div>

				{/* Main Content */}
			</div>
		</section>
		<section className="bg-white py-24 md:py-32 max-w-7xl mx-auto">
				<div className='grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16'>
					{/* Contact Form */}
                    <div className='bg-gray-100 p-8 rounded-xl shadow-xl border border-gray-200'>
                        <h3 className='text-2xl font-sans text-gray-700 mb-6 border-b border-amber-400 pb-3'>
							문의하기
						</h3>

						<form onSubmit={handleSubmit} className='space-y-6'>
							{/* Name Fields */}
							<div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
								<div>
									<label
										htmlFor='name'
										className='block text-sm font-medium text-gray-400 mb-2 drop-shadow'
									>
										{t.firstName}
									</label>
									<input
										type='text'
										id='name'
										name='name'
                                        // TODO: formdata 정의
										// value={formData.firstName}
										onChange={handleInputChange}
										placeholder='이름을 입력해 주세요.'
                                        className='w-full px-4 py-3 pl-10 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-600 focus:border-amber-600 transition-all duration-200 bg-white text-gray-900 placeholder-gray-400 shadow-sm'
										required
									/>
								</div>
								<div>
									<label
										htmlFor='company'
										className='block text-sm font-medium text-gray-400 mb-2 drop-shadow'
									>
										{t.lastName}
									</label>
									<input
										type='text'
										id='company'
										name='company'
                                        // TODO: formdata 정의
										// value={formData.lastName}
										onChange={handleInputChange}
										placeholder='회사명을 입력해 주세요.'
                                        className='w-full px-4 py-3 pl-10 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-600 focus:border-amber-600 transition-all duration-200 bg-white text-gray-900 placeholder-gray-400 shadow-sm'
										required
									/>
								</div>
							</div>

							{/* Email */}
							<div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
								<div>
									<label
										htmlFor='email'
										className='block text-sm font-medium text-gray-400 mb-2 drop-shadow'
									>
										{t.email}
									</label>
									<input
										type='email'
										id='email'
										name='email'
										// TODO: formdata 정의
										// value={formData.email}
										onChange={handleInputChange}
										placeholder='이메일을 입력해 주세요.'
											className='w-full px-4 py-3 pl-10 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-600 focus:border-amber-600 transition-all duration-200 bg-white text-gray-900 placeholder-gray-400 shadow-sm'
										required
									/>
								</div>
								<div>
									<label
										htmlFor='phone'
										className='block text-sm font-medium text-gray-400 mb-2 drop-shadow'
									>
										{t.subtitle}
									</label>
									<input
										type='text'
										id='phone'
										name='phone'
										onChange={handleInputChange}
										placeholder='연락처를 입력해 주세요.'
										className='w-full px-4 py-3 pl-10 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-600 focus:border-amber-600 transition-all duration-200 bg-white text-gray-900 placeholder-gray-400 shadow-sm'
										required
									/>
								</div>
							</div>

							{/* Message */}
							<div>
								<label
									htmlFor='message'
									className='block text-sm font-medium text-gray-400 mb-2 drop-shadow'
								>
									{t.message}
								</label>
								<textarea
									id='message'
									name='message'
									rows={6}
                                    // TODO: formdata 정의
									// value={formData.message}
									onChange={handleInputChange}
									placeholder={t.messagePlaceholder}
                                        className='w-full px-4 py-3 pl-10 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-600 focus:border-amber-600 transition-all duration-200 bg-white text-gray-900 placeholder-gray-400 shadow-sm'
									required
								/>
							</div>

							{/* Submit Button */}
							<button
								type='submit'
								disabled={isSubmitting}
								className='w-full bg-[#bdb9dc] hover:bg-[#bdb9dc] backdrop-blur-sm text-white py-4 px-6 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center space-x-2 group hover:shadow-xl hover:scale-[1.02]'
							>
								<span>{isSubmitting ? '전송 중...' : t.submit}</span>
								<Send
									size={18}
									className='group-hover:translate-x-1 transition-transform duration-200'
								/>
							</button>
						</form>
					</div>

					{/* Google Maps Section */}
					<div className='h-full flex'>
                        <div className='w-full rounded-xl overflow-hidden shadow-xl border border-gray-200 group cursor-pointer relative'>
							{/* Google Maps iframe Container */}
							<div className='relative w-full h-full min-h-[600px]'>
								{/* Google Maps iframe */}
								<iframe
									src={alternativeEmbedUrl}
									width='100%'
									height='100%'
									style={{ border: 0, minHeight: '600px' }}
									allowFullScreen
									loading='lazy'
									referrerPolicy='no-referrer-when-downgrade'
									className='rounded-2xl'
									title={`Map showing ${t.address}`}
								/>

								{/* Overlay with address info and action buttons - appears on hover */}
                                <div className='absolute inset-0 bg-white/70 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-center items-center p-8 text-center'>
                                    <div className='text-gray-900 bg-white/90 backdrop-blur-md p-6 rounded-xl max-w-sm shadow-xl'>
										{/* GPVC Logo */}
										<div className='w-20 h-20 lg:w-24 lg:h-24 relative mx-auto mb-4'>
											<Image
												src='/branding/gpvc-symbol-logo-white.svg'
												alt='GPVC Logo'
												fill
												className='object-contain drop-shadow-2xl'
												sizes='96px'
											/>
										</div>

										{/* Address Information */}
										<div className='space-y-4'>
											<div className='flex items-center justify-center space-x-2 text-[#bdb9dc]'>
												<MapPin size={18} />
												<span className='font-semibold drop-shadow'>
													Office Location
												</span>
											</div>
											<p className='text-gray-500 text-sm leading-relaxed drop-shadow'>
												{t.address}
											</p>

											{/* Action Buttons */}
											<div className='flex flex-col space-y-3 mt-6'>
												<button
													onClick={openInMaps}
                                                    className='flex items-center justify-center space-x-2 bg-amber-100 hover:bg-amber-200 text-amber-800 py-2 px-4 rounded-lg transition-colors duration-300 backdrop-blur-sm shadow-sm'
												>
													<ExternalLink size={16} />
													<span className='text-sm font-medium'>
														{t.viewOnMaps}
													</span>
												</button>
												<button
													onClick={openDirections}
                                                    className='flex items-center justify-center space-x-2 bg-amber-200 hover:bg-amber-300 text-amber-800 py-2 px-4 rounded-lg transition-colors duration-300 backdrop-blur-sm shadow-sm'
												>
													<Navigation size={16} />
													<span className='text-sm font-medium'>
														{t.getDirections}
													</span>
												</button>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
		</section>
	</>
	);
}

