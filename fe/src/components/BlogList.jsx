// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import ContentBlog from './ContentBlog';

// eslint-disable-next-line react-refresh/only-export-components
export const isMobile = () => {
    return window.innerWidth < 640;
};

const BlogList = () => {
    const [showAll, setShowAll] = useState(false);
    const [isMobileView, setIsMobileView] = useState(isMobile());
    const [items] = useState([
        { title: 'Noteworthy technology acquisitions 2021', description: 'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.' },
        { title: 'The future of technology', description: 'Exploring the trends and innovations shaping the tech landscape.' },
        { title: 'AI and Machine Learning', description: 'Understanding the impact of AI and machine learning on various industries.' },
        { title: 'Cybersecurity in 2021', description: 'Key challenges and strategies in the evolving cybersecurity landscape.' },
        { title: 'Cloud Computing', description: 'The rise of cloud computing and its implications for businesses.' },
    ]);

    useEffect(() => {
        const handleResize = () => {
            setIsMobileView(isMobile());
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);



    // Determine the number of items to display
    const itemsToDisplay = showAll ? items : (isMobileView ? items.slice(0, 1) : items.slice(0, 4));

    return (
        <div className='mt-24 mx-4'>
            <div className='flex flex-col sm:flex-row justify-between items-center mb-4'>
                <h1 className='text-2xl font-bold mb-2 sm:mb-0'>Blog</h1>
                <button
                    onClick={() => setShowAll(!showAll)}
                    className='px-4 py-2 bg-blue-500 text-white rounded-lg'
                >
                    {showAll ? 'Show Less' : 'View All'}
                </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {itemsToDisplay.map((item, index) => (
                    <ContentBlog
                        key={index}
                        image={item.image}
                        title={item.title}
                        description={item.description}
                    />
                ))}
            </div>

        </div>
    );
};

export default BlogList;
