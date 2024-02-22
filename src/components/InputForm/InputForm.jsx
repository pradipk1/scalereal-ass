import React from 'react'
import moment from 'moment';
import './InputForm.css';

function InputForm({setTimer, target, setTarget}) {

    // var today = new Date().toISOString().split('T')[0];
    var today = new Date().toISOString().split('T')[0];
    console.log(today);

    const handleChange = (e) => {
        console.log(e.target.value);
        setTarget(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const curr = moment();
        const targetDateTime = moment(target);
        const duration = moment.duration(targetDateTime.diff(curr));
        const months = duration._data.months;
        const seconds = duration._data.seconds;
        const days = duration._data.days;
        const totalDays = months*30+days;
        
        if(!target) {
            alert('Select Date and Time');
        } else if(totalDays>99){
            alert('Countdown should not exceed 99 days. Please select a valid date and time');
        } else if(seconds<0) {
            alert('Please select upcoming date and time not the past one');
        } else {
            setTimer(true);
        }
    }

  return (
    <div className='formInpCont'>
        <form onSubmit={handleSubmit}>
            <h2>Select Date and Time for the countdown timer</h2>
            <div className='inpBtnCont'>
                <input type="datetime-local" onChange={handleChange} value={target} placeholder='Date' min={today}/>
                <button type='submit'>Start Countdown</button>
            </div>
        </form>
    </div>
  )
}

export default InputForm;