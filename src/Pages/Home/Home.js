import React from 'react';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import Clients from './Clients';
import Contact from './Contact';
import Parts from './Parts';
import Reviews from './Reviews';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Parts></Parts>
            <BusinessSummary></BusinessSummary>
            <Reviews></Reviews>
            <Clients></Clients>
            <Contact></Contact>
        </div>
    );
};

export default Home;