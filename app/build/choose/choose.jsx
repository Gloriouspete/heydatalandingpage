import React from 'react';
import './media.css';
import './style.css';
import { Link } from 'react-router-dom';
import { FaGooglePlay } from 'react-icons/fa6';
const Choose = () => {
    return (
        <>
            <p className='choosez'>Why Join Heydata?</p>

            <p className='shalaye'>
              HeyData provides the cheapest, High quality services and product, Our services are quick and Efficient, you also get to enjoy various bonuses and random gift packages🎁.
            </p>
            <p className='chooser'>Data Plans</p>
            <div className='choosebox'>
                <div className='choosein'>
                    <p className='chooseintext'>MTN</p>
                </div>
                <div className='choosein'>
                    <p className='chooseintext1'>Airtel</p>
                </div>
                <div className='choosein'>
                    <p className='chooseintext2'>9Mobile</p>
                </div>

                <div className='choosein'>
                    <p className='chooseintext3'>Glo</p>
                </div>
            </div>
            <p className='shalayes'>Remember, HeyData is not just a website; it's an ethos - A celebration of the anxious, unrestricted power of human thought!
            Join us today and be free from expensive services.🚀 </p>
            <div className='logbox'>
                    <a href='https://app.apple.com'><button className='signbutton'><FaGooglePlay size={20} /> Apps Store</button></a>
                    <a href='https://play.google.com'><button className='signbutton'><FaGooglePlay size={20} /> Google Play</button></a>
                </div>
        </>
    )
}

export default Choose;