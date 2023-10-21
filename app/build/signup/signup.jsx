import React, { useState } from 'react';
import './media.css';
import './style.css';
import { Header } from '../header/header';
import CreateModal from '../../components/modal/modal';
import JoinModal from '../../components/joinmodal/joinmodal';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-modal';
import axios from 'axios';

const Signup = () => {
    const navigation = useNavigate();
    const [showmodal, setShowmodal] = useState(false);
    const [showCmodal, setShowCmodal] = useState(false);

    const modal = async () => {
        setShowmodal(true)

    }
    const mode = async () => {
        setShowCmodal(true)
    }
    const handleCreateSubmit = async (text, code) => {
        console.log(text, code);
        setShowmodal(true);
        const data = { name: text, passcode: code };
        try {
            const formData = new URLSearchParams();
            formData.append('room', text.trim());
            formData.append('passcode', code.trim());

            const response = await axios.post('http://192.168.1.135:3002/createhall', formData.toString(), {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
            });
            // Assuming the server responds with JSON like { "approved": true }
            if (response.data.status === 'approved') {
                // Handle a successful response here, e.g., redirect or show a success message
                // You might want to replace 'navigation' with the appropriate code for your app.
                navigation('/hosthall', { state: data });
            } else {
                // Handle the case where the response indicates failure
                console.error('Request not approved');
            }
        } catch (error) {
            console.error(error);
            // Handle the error, e.g., show an error message to the user
        }
    };

    const handleJoinSubmit = async (text, code) => {
        console.log(text, code);
        setShowmodal(true);
        const data = { name: text, passcode: code };
        if (code !== undefined) {
            if (code !== null && code !== '') {
                try {
                    const formData = new URLSearchParams();
                    formData.append('room', text.trim());
                    formData.append('passcode', code.trim());

                    const response = await axios.post('http://192.168.1.135:3002/joincreatorhall', formData.toString(), {
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded',
                        },
                    });
                    // Assuming the server responds with JSON like { "approved": true }
                    if (response.data === 'approved') {

                        navigation('/hosthall', { state: data });
                    } else {
                        // Handle the case where the response indicates failure
                        console.error('Request not approved');
                    }
                } catch (error) {
                    console.error(error);
                    // Handle the error, e.g., show an error message to the user
                }
            }
        }
        else {
            try {
                console.log('this is', text);
                const formData = new URLSearchParams();
                formData.append('room', text);

                const response = await axios.post('http://192.168.1.135:3002/joinhall', formData.toString(), {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                    },
                });
                // Assuming the server responds with JSON like { "approved": true }
                if (response.data === 'approved') {
                    navigation('/joinhall', { state: data });
                } else {
                    // Handle the case where the response indicates failure
                    console.error('Request not approved');
                }
            } catch (error) {
                console.error(error);
                // Handle the error, e.g., show an error message to the user
            }
        }

    };
    const modalClose = () => {
        setShowmodal(false)
        setShowCmodal(false)
    }
    return (
        <>
            <Header />
            <div className='hallbox'>
                <div className='inhallbox'>
                    <div className='createhall' onClick={() => modal()} >
                        Create A Hall
                    </div>
                    <div className='joinhall' onClick={() => mode()} >
                        Join Hall
                    </div>
                </div>
                <Modal
                    isOpen={showmodal}
                    onRequestClose={modalClose}
                    className='react-modal'
                >
                    <CreateModal onInput={handleCreateSubmit} closethe={modalClose} />
                </Modal>
                <Modal
                    isOpen={showCmodal}
                    onRequestClose={modalClose}
                    className='react-modal'
                >
                    <JoinModal onInput={handleJoinSubmit} closethe={modalClose} />
                </Modal>
            </div>
        </>
    )
}
export default Signup;