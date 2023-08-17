import React from 'react';

const Hero: React.FC = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/pd4wW2N/zmk-hero-2.png)' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold"><span className='text-primary'>সুরক্ষিত এবং দ্রুত বৈদ্যুতিনির্মাণের জন্য</span> আমরা আপনার পাশে</h1>
                    <p className="mb-5">
                        আমরা একটি পেশাদার বৈদ্যুতিনির্মাণ কোম্পানি, এবং আমরা গর্বিতভাবে বিশেষজ্ঞ প্রযুক্তিগত সমাধান প্রদান করি। আপনার বাড়ি এবং ব্যবসা বেশি সুরক্ষিত ও উন্নত করতে আমরা নতুন উদ্যমিতা উপযোগী বৈদ্যুতিনির্মাণ সমাধান সরবরাহ করি। আমাদের দক্ষ দল সুরক্ষিত বৈদ্যুতিনির্মাণে আপনার ব্যবসা এবং বাড়ির উন্নতি সহায়ক!
                    </p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Hero;


