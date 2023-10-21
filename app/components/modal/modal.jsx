import React, { useState } from 'react';
import './media.css';
import './style.css';

const CreateModal = ({ onInput,closethe }) => {
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
                <p className='modaltext'>Enter Preferred Hall Name</p>
                <input type='text' value={createtext} onChange={(text) => setCreateText(text.target.value)} placeholder='Ibadan-Tech-Expo' className='createinput' />
                <p className='modaltext'>Set Entry Passcode</p>
                <input type='number' value={passcode} onChange={(value) => setPasscode(value.target.value)} placeholder='123456' className='passinput' maxLength={6} />

                <button type='submit' onClick={() => submit()} className='createmodbutton' >Create</button>
            </div>
        </>
    )
}

export default CreateModal;