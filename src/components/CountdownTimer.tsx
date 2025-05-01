
import React, { useState, useEffect } from 'react';
import { getTimeRemaining } from '../utils/dateUtils';

interface CountdownTimerProps {
  targetDate: Date;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
  const [timeRemaining, setTimeRemaining] = useState(getTimeRemaining(targetDate));
  const [flash, setFlash] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining(getTimeRemaining(targetDate));
      // Create random flashing effect
      if (Math.random() > 0.7) {
        setFlash(true);
        setTimeout(() => setFlash(false), 200);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const timerSegment = (value: number, label: string) => (
    <div className="flex flex-col items-center px-2 md:px-4">
      <div className={`text-3xl md:text-5xl font-mono ${flash ? 'text-doomsday-red' : 'text-doomsday-light'} font-bold animate-red-pulse`}>
        {String(value).padStart(2, '0')}
      </div>
      <div className="text-xs md:text-sm text-doomsday-light/70 font-mono mt-1">
        {label}
      </div>
    </div>
  );

  return (
    <div className="w-full">
      <div className="flex justify-center items-center space-x-1 md:space-x-2 my-4 px-4 py-6 border-2 border-doomsday-red/30 bg-doomsday-dark/80 rounded-md shadow-lg shadow-doomsday-red/20">
        {timerSegment(timeRemaining.days, "DAYS")}
        <div className="text-2xl md:text-4xl font-bold text-doomsday-red">:</div>
        {timerSegment(timeRemaining.hours, "HOURS")}
        <div className="text-2xl md:text-4xl font-bold text-doomsday-red">:</div>
        {timerSegment(timeRemaining.minutes, "MINS")}
        <div className="text-2xl md:text-4xl font-bold text-doomsday-red">:</div>
        {timerSegment(timeRemaining.seconds, "SECS")}
      </div>
      <p className="text-center text-xs md:text-sm italic text-doomsday-light/70 -mt-2 mb-8">
        Примерное время до появления ИИ, который вас ненавидит
      </p>
    </div>
  );
};

export default CountdownTimer;
