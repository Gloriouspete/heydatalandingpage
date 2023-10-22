
import React from 'react';
import './media.css';
import './style.css';

import { Header } from '../../build/header/header';
import Content from '../../build/content/content';
import Footer from '../../build/footer/footer.tsx';
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
