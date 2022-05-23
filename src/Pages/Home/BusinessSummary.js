import React from 'react';
import people from '../../assests/business/group.png';
import revenue from '../../assests/business/revenue.png';
import rating from '../../assests/business/rating.png';
import settings from '../../assests/business/settings.png';
import SummaryItem from './SummaryItem';

const BusinessSummary = () => {

    const summaries = [
        {
            _id: 1,
            img: people,
            amount: '5M+',
            topic: 'Consumers'
        },
        {
            _id: 2,
            img: revenue,
            amount: '150M+',
            topic: 'Annual Revenues'
        },
        {
            _id: 3,
            img: rating,
            amount: '500k+',
            topic: 'Feedbacks'
        },
        {
            _id: 4,
            img: settings,
            amount: '10M+',
            topic: 'Tools'
        }
    ]

    return (
        <div className='mt-24 px-5 '>
            <h2 className='text-primary text-3xl'>Business Summary</h2>
            <div className='flex justify-center'>
                <div className='justify-center items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
                    {
                        summaries.map(summary => <SummaryItem key={summary._id} summary={summary}></SummaryItem>)
                    }
                </div>
            </div>
        </div>
    );
};

export default BusinessSummary;