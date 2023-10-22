
import React from 'react';
import './media.css';
import './style.css';

import { Header } from '../../build/header/page';
import Content from '../../build/content/page';
import Footer from '../../build/footer/page.tsx';
const Home = () => {
    return (
        <>
            <div className='body'>
               
                <Content />
                <Footer />
            </div>
        </>
    )
}
export default Home;
