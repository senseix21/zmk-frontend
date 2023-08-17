import React from 'react';
import PricingCard from './ui/PricingCard';

const electricalServicePricing = [
    {
        title: 'বেসিক ইলেকট্রিক্যাল সার্ভিস',
        price: '৳1500',
        features: [
            'একটি রুমের ইলেকট্রিক্যাল সার্ভিস',
            'সুইচ এবং সংকেতক সহ',
            'নিরাপত্তা পরীক্ষা'
        ],
        buttonText: 'শুরু করুন'
    },
    {
        title: 'উন্নত ইলেকট্রিক্যাল সার্ভিস',
        price: '৳3000',
        features: [
            'সম্পূর্ণ বাড়ির ইলেকট্রিক্যাল সার্ভিস',
            'সুইচ, সংকেতক এবং সার্কিট সহিত',
            'নিরাপত্তা পরীক্ষা এবং বিদ্যুৎ বিজ্ঞান'
        ],
        buttonText: 'শুরু করুন',
        isPopular: true
    },
    {
        title: 'প্রিমিয়াম ইলেকট্রিক্যাল সার্ভিস',
        price: '৳5000',
        features: [
            'সম্পূর্ণ বাড়ির ইলেকট্রিক্যাল সার্ভিস',
            'সুইচ, সংকেতক, সার্কিট এবং প্যানেল সহিত',
            'প্রোফেশনাল নিরাপত্তা পরীক্ষা'
        ],
        buttonText: 'শুরু করুন',
        isPopular: true
    }
    // যেগুলি মূল্য বিকল্প আপনি দিতে চান, সেগুলি অ্যারেতে যোগ করুন
];


const ElectricalServicePricingSection: React.FC = () => {
    return (
        <section className="text-gray-600 body-font overflow-hidden">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                    <h1 className="sm:text-4xl text-3xl font-bold title-font mb-2 text-primary">বিদ্যুৎ সেবা মূল্য পরিশোধ</h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500">আপনার প্রয়োজনের মানসম্মত বিদ্যুৎ সেবা প্যাকেজ চয়ন করুন।</p>
                </div>
                <div className="flex flex-wrap -m-4">
                    {electricalServicePricing.map((item, index) => (
                        <div key={index} className="p-4 xl:w-1/3 md:w-1/2 w-full">
                            <PricingCard
                                title={item.title}
                                price={item.price}
                                features={item.features}
                                buttonText={item.buttonText}
                                isPopular={item.isPopular}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ElectricalServicePricingSection;
