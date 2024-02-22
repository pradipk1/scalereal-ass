import React, { useEffect, useRef, useState } from 'react'
import moment from 'moment';
import './CountdownTimer.css';

function CountdownTimer({target, setTarget, timer, setTimer}) {

    const [remainingTime, setRemainingTime] = useState(timeLeft());
    const intervalRef = useRef(null);

    function timeLeft() {
        const curr = moment();
        const targetDateTime = moment(target);
        const duration = moment.duration(targetDateTime.diff(curr));
       
        return {
            days: duration._data.months*30+duration._data.days,
            hours: duration._data.hours.toString(),
            minutes: duration._data.minutes.toString(),
            seconds: duration._data.seconds.toString(),
        }
    }


    const handleStop = () => {
        clearInterval(intervalRef.current);
        setTimer(false);
        setTarget('');
    }

    useEffect(() => {
        if(remainingTime.seconds<=0) {
            clearInterval(intervalRef.current);
        }

        if(timer && remainingTime.seconds>0) {
            intervalRef.current = setInterval(() =>{
                setRemainingTime(timeLeft());
            }, 1000);
        }
        
        return () => {
            clearInterval(intervalRef.current);
        }
        
    }, [remainingTime]);

  return (
    <div className='countdownTimerCont'>
        <div  className='timeContOuter'>
            <div className='timeCont'>
                <div>
                    <span>{remainingTime.days.length>1 ? remainingTime.days.charAt(0) : 0}</span>
                    <span>{remainingTime.days.length>1 ? remainingTime.days.charAt(1) : remainingTime.days}</span>
                </div>
                <p>Days</p>
            </div>

            <div className='timeCont'>
                <div>
                    <span>{remainingTime.hours.length>1 ? remainingTime.hours.charAt(0) : 0}</span>
                    <span>{remainingTime.hours.length>1 ? remainingTime.hours.charAt(1) : remainingTime.hours}</span>
                </div>
                <p>Hours</p>
            </div>

            <div className='timeCont'>
                <div>
                    <span>{remainingTime.minutes.length>1 ? remainingTime.minutes.charAt(0) : 0}</span>
                    <span>{remainingTime.minutes.length>1 ? remainingTime.minutes.charAt(1) : remainingTime.minutes}</span>
                </div>
                <p>Minutes</p>
            </div>

            <div className='timeCont'>
                <div>
                    <span>{remainingTime.seconds.length>1 ? remainingTime.seconds.charAt(0) : 0}</span>
                    <span>{remainingTime.seconds.length>1 ? remainingTime.seconds.charAt(1) : remainingTime.seconds}</span>
                </div>
                <p>Seconds</p>
            </div>
        </div>

        <button onClick={handleStop}>Cancel Countdown</button>
    </div>
  )
}

export default CountdownTimer;