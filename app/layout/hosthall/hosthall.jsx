import React, { useState, useEffect } from 'react';
import './media.css';
import './style.css';
import { useLocation } from 'react-router-dom';
import { Header } from '../../components/hallheader/header';
import axios from 'axios';
const Hosthall = () => {
    const [messages, setMessages] = useState([]);
    const location = useLocation();
    const data = location.state;
    const fetchdata = async () => {
        try {
            const formData = new URLSearchParams();
            formData.append('room', data.name);
            const response = await axios.post('http://192.168.1.135:3002/gethall', formData.toString(), {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
            });
            console.log(response.data)
            const freedata = response.data;
            const datar = freedata.reverse()
            setMessages(datar)
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        console.log('Effect called');
        fetchdata();
        window.addEventListener('focus', fetchdata)
        return () => {
            window.removeEventListener('focus', fetchdata)
        }
    }, [])
    const handleRefreshClick = () => {
        fetchdata();
        console.log('refreshed')
    }
    return (
        <>
            <Header name={data.name} closethe={() => handleRefreshClick()} />
            <div className='mainhallcontent'>
                <div className='messageboxing'>
                    {messages.map((item, index) => (
                        <div className='messagesbox'>
                            <p className='questions' key={index}>{item.messages}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
export default Hosthall;
