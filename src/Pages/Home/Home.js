import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import History from './History';
import Parts from './Parts';
import Report from './Report';
import Reviews from './Reviews';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Parts></Parts>
            <BusinessSummary></BusinessSummary>
            <Reviews></Reviews>
            <History></History>
            <Report></Report>
            <Footer></Footer>
        </div>
    );
};

export default Home;