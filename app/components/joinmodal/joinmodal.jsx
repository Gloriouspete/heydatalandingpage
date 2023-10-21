import React, { useState } from 'react';
import './media.css';
import './style.css';

const JoinModal = ({ onInput, closethe }) => {
    const [createtext, setCreateText] = useState('')
    const [passcode, setPasscode] = useState()
    const submit = (e) => {
        onInput(createtext, passcode);
    }
    return (
        <>
            <div className='modalmain'>
                <div className='minmodal'>
                    <p className='kiloder' onClick={closethe}>
                        X
                    </p>
                </div>
                <p className='headlogo'>
                    pine
                </p>
                <p className='modaltext'>Enter Hall Name To Join</p>
                <input type='text' value={createtext} onChange={(text) => setCreateText(text.target.value)} placeholder='Ibadan-Tech-Expo' className='createinput'/>
                <p className='modaltext'>Enter Entry Passcode</p>
                <p className='modaltextj'> ( Ignore if you're not the creator )</p>
                <input type='number' value={passcode} onChange={(value) => setPasscode(value.target.value)} placeholder='123456' className='passinput' maxLength={6} />

                <button type='submit' onClick={() => submit()} className='createmodbutton' >Join</button>
            </div>
        </>
    )
}

export default JoinModal;