import React from 'react';

interface serviceProps {
    data: any
}
const Services: React.FC<serviceProps> = ({ data }) => {
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap -m-4">
                    <div className="p-4 md:w-1/3">
                        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                            {/* <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="" alt="blog" /> */}
                            <div className="p-6">
                                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
                                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">The Catalyzer</h1>
                                <p className="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;