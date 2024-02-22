import React, { useState } from 'react'
import InputForm from '../InputForm/InputForm';
import CountdownTimer from '../CountdownTimer/CountdownTimer';

function InputAndCountdown() {

    const [target, setTarget] = useState('');
    const [timer, setTimer] = useState(false);
  return (
    <div>
        { !timer && <InputForm target={target} setTarget={setTarget} setTimer={setTimer}/>}
        { timer && <CountdownTimer target={target} setTarget={setTarget} timer={timer} setTimer={setTimer}/>}
    </div>
  )
}

export default InputAndCountdown;