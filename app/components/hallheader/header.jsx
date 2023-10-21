import React, { useState } from 'react';
import './media.css';
import './style.css';

export const Header = ({ name,closethe }) => {
    return (
        <>
            <div className='hallhead'>
                <div className='inhallhead'>
                    <div className='firstheadbox'>
                        <p className='headnames'>
                            {name.toUpperCase()}
                        </p>
                    </div>
                    <div className='secondheadbox'>
                        <button className='headbutton' type='submit' onClick={closethe}>
                            Refresh
                        </button>
                    </div>
                </div>
            </div>

        </>
    )
}