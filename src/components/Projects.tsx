import React from 'react';

const Projects = () => {
    return (
        <div className=" text-gray-600 body-font lg:mx-20">
            <div className="container px-5 py-24 mx-auto flex flex-wrap">
                <div className="flex w-full mb-20 flex-wrap">
                    <h1 className="sm:text-3xl text-2xl font-bold title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">আমাদের নতুন প্রোজেক্ট সমূহ</h1>
                    <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">যে কোনও কার্ডিগান, টোট ব্যাগ, টাম্বলার, হেক্সাগন, ব্রুকলিন, এসিমেট্রিকাল জেনট্রিফাই, সাবওয়ে টাইল, পোকে ফার্ম-টু-টেবিল। ফ্র্যাঞ্জেন, আপনি সম্ভবত তাদের কে শুনেনি, ম্যান বান, ডিপ জিয়ানবিং, সেলফিস, হেয়ারলুম।</p>
                </div>
                <div className="flex flex-wrap md:-m-2 -m-1">
                    <div className="flex flex-wrap w-full md:w-1/2">
                        <div className="md:p-2 p-1 w-1/2">
                            <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://i.ibb.co/tqDtg4k/residential-electrical0-services.png" />
                        </div>
                        <div className="md:p-2 p-1 w-1/2">
                            <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://i.ibb.co/phnQFmq/industrial.png" />
                        </div>
                        <div className="md:p-2 p-1 w-full">
                            <img alt="gallery" className="w-full h-full object-cover object-center block" src="https://i.ibb.co/CnfYbBg/emmergency.png" />
                        </div>
                    </div>
                    <div className="flex flex-wrap w-full md:w-1/2">
                        <div className="md:p-2 p-1 w-full">
                            <img alt="gallery" className="w-full h-full object-cover object-center block" src="https://i.ibb.co/V9rHZt5/automation.png" />
                        </div>
                        <div className="md:p-2 p-1 w-1/2">
                            <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://i.ibb.co/vmxrbRp/air-conditon.png" />
                        </div>
                        <div className="md:p-2 p-1 w-1/2">
                            <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://i.ibb.co/Ssq45ny/stats-hero.png" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
