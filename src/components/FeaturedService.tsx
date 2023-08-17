import React from 'react';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';


interface serviceProps {
    data: any
}

const FeaturedService: React.FC<serviceProps> = ({ data }) => {
    console.log(data);
    const rating = 4.8;
    const stars: any = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating - fullStars >= 0.5;

    for (let i = 0; i < fullStars; i++) {
        stars.push(<FaStar key={`full-${i}`} className="text-yellow-400" />);
    }

    if (hasHalfStar) {
        stars.push(<FaStarHalfAlt key="half" className="text-yellow-400" />);
    }

    return (
        <div className='py-20'>
            <div className='lg:mx-20'>
                <h3 className='text-3xl font-bold'>আমাদের ফিচারড সার্ভিস সমূহ </h3>
                <p>আমাদের ফিচারড সার্ভিস সমূহ নিম্নলিখিত আলোচ্য পার্টনারদের সাথে আমরা অত্যন্ত গর্বিত। এই সেবাগুলি আমাদের উপকারকারী গ্রাহকদের জন্য প্রদান করা হয়েছে, যারা বৈদ্যুতিনির্মাণে একটি নিষ্ঠাবদ্ধ এবং উন্নত সেবা প্রয়োজন রাখে।</p>

            </div>
            <div className='grid lg:grid-cols-3 lg:mx-20 '>
                {
                    data.slice(0, 3).map((service: any, index: number) =>
                        <div key={service._id} className="p-4 flex-grow">
                            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={service?.img[0]} alt="blog" />
                                <div className="p-6 flex flex-col justify-between">
                                    <div>
                                        <h1 className="title-font text-lg font-bold">{service?.title}</h1>
                                        <div className="flex items-center mb-3">
                                            {stars.map((star: any, index: any) => (
                                                <span key={index}>{star}</span>
                                            ))}
                                        </div>
                                        <p className="leading-relaxed mb-3 text-base">{service?.description.slice(0, 100)}...</p>
                                    </div>
                                    <button className='btn btn-primary btn-wide mt-2'>অ্যাপয়েন্টমেন্ট</button>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default FeaturedService;
