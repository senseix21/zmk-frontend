import Image from 'next/image';
import React from 'react';
// https://i.ibb.co/RgmGP0z/icons8-award-96.png
// https://i.ibb.co/PxnSkz9/icons8-mechanic-96.png
// https://i.ibb.co/TcxQZ2G/icons8-money-96.png
// https://i.ibb.co/j88tyGC/icons8-prize-money-96.png

const Stats: React.FC = () => {
    return (
        <div className="text-gray-600 body-font lg:mx-20">
            <div className="px-5 py-24 mx-auto flex flex-wrap">
                <div className="-mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
                    <div className="w-full sm:p-4 px-4 ">
                        <h2 className="title-font font-bold text-3xl text-gray-900">
                            <span className='text-primary'>আপনার বৈদ্যুতিনির্মাণের স্বপ্ন পূরণ</span> করার জন্য আমরা এখানে আছি
                        </h2>
                        <p className="leading-relaxed">
                            আপনার বৈদ্যুতিনির্মাণের স্বপ্ন পূরণ করার জন্য আমরা এখানে আছি - আপনার প্রয়োজনীয় বৈদ্যুতিক সমাধানে আমরা সবসময় আপনার পাশে আছি।
                            আমাদের সম্মানিত পেশাদার দল এবং ২৪/৭ পরিষেবা সারা দিন আপনার বৈদ্যুতিনির্মাণের প্রকল্প সাহায্য করতে প্রস্তুত।
                        </p>
                    </div>
                    <div className='flex justify-center '>
                        <div className="p-4  w-1/2">
                            <img src="https://i.ibb.co/TcxQZ2G/icons8-money-96.png" alt="" />
                            <p className="leading-relaxed">সর্বচ্চ কম দাম</p>
                        </div>

                        <div className="p-4  w-1/2">
                            <img src="https://i.ibb.co/RgmGP0z/icons8-award-96.png" alt="" />
                            <p className="leading-relaxed">১০০% গ্যারান্টি</p>
                        </div>
                        <div className="p-4  w-1/2">
                            <img src="https://i.ibb.co/PxnSkz9/icons8-mechanic-96.png" alt="" />
                            <p className="leading-relaxed">২৪/৭ উপলব্ধ</p>
                        </div>
                        <div className="p-4  w-1/2">
                            <img src="https://i.ibb.co/j88tyGC/icons8-prize-money-96.png" alt="" />
                            <p className="leading-relaxed">পুরস্কৃত প্রতিষ্ঠান</p>
                        </div>
                    </div>
                </div>
                <div className="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
                    <Image className="object-cover object-center" height={300} width={600} src="https://i.ibb.co/Ssq45ny/stats-hero.png" alt="stats" />
                </div>
            </div>
        </div>
    );
};

export default Stats;
