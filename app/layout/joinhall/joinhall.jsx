import React, { useState, useEffect } from 'react';
import './media.css';
import './style.css';
import { useLocation } from 'react-router-dom';
import { Header } from '../../components/hallheader/header';
import axios from 'axios';
const Joinhall = () => {
    const [text, setText] = useState('');
    const [room, setRoom] = useState('');
    const [item,setItem] = useState('');
    const [sender,setSender] = useState('Send')
    const location = useLocation();
    const data = location.state;


    useEffect(() => {
        const fetchdata = () => {
            setRoom(data.name)
        }
        window.addEventListener('focus', fetchdata)
        return () => {
            window.removeEventListener('focus', fetchdata)
        }
    }, [])

    const send = async () => {
        setSender('...')
        try {
            console.log('this is', text);
            const formData = new URLSearchParams();
            formData.append('room', data.name);
            formData.append('text', text);

            const response = await axios.post('http://192.168.1.135:3002/sendhall', formData.toString(), {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
            });
            if (response.data.status === 'approved') {
                console.log('Added and sent');
                setItem(text)
                setSender('Send')
            } else {
                console.error('Request not approved');
            }
        } catch (error) {
            console.error(error);
        }
        finally{
            setText('')
        }
    }

    return (
        <>
          <Header name={data.name} />
          <div className='mainhallcontent'>
            <div className='messageboxing'>
              {item !== '' && (
                <div className='messagesbox'>
                  <p className='questions'>{item}</p>
                </div>
              )}
            </div>
          </div>
          <div className='bottombox'>
            <input className='bottominput' type='text' value={text} onChange={(e) => setText(e.target.value)} />
            <div className='inbottom' onClick={() => send()} >
              {sender}
            </div>
          </div>
        </>
      );      
}
export default Joinhall;
