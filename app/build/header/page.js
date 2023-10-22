'use client'
import React, { useState } from 'react';
import './media.css';
import './style.css';
import { Link } from 'react-router-dom';
import { HiMenuAlt3 } from 'react-icons/hi';
import { Boxman } from '../../components/boxman/boxman';
import {Image } from 'next/image';



export const Header = ({ color1, color2, color3 }) => {
    const [isClick, setisClick] = useState(false);

    const eruku = () => (

    <HiMenuAlt3 size={32} color='#ffaf00' />

    )
    const [header, setHeader] = useState(eruku)

    const edonckick = () => {
        setisClick(previsClick => !previsClick);
        header === 'X' ? setHeader(eruku) : setHeader('X');

    }

    return (
        <>
            <div className='header'>
                <div className='firstbox'>
                <Image
                            src="/unnamed.png"
                            alt="My Image"
                            width={300}
                            height={200}
    
                        />
                    <p className='headlogo'>
                        eydata
                    </p>
                </div>
                <div className='rectangle'>
                    <Link to="/">
                        <div className="homie" style={{ cursor: 'pointer' }} >
                            <p style={{ color: color1 }} className='layer' >HOME</p>
                        </div>
                    </Link>
                    <Link to="/signup">
                        <div className="homie" style={{ cursor: 'pointer' }} >
                            <p style={{ color: color2 }} className='layer' >HALLS</p>
                        </div>
                    </Link>
                    <Link to="/Project">
                        <div className="homie" style={{ cursor: 'pointer' }} >
                            <p style={{ color: color3 }} className='layer' >DONATE</p>
                        </div>
                    </Link>
                </div>
                {isClick && <Boxman />}
                <div className='secondbox' onClick={edonckick} >
                    {header}
                </div>
            </div>
        </>

    )
}
