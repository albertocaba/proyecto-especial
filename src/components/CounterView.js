// src/components/CounterView.js
import React, { useState, useEffect } from 'react';
import '../styles/CounterView.css';

const CounterView = () => {
  const calculateTimeElapsed = () => {
    const startDate = new Date('2024-07-05T23:30:00');
    const now = new Date();
    const diff = now - startDate;
    
    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    return {
      days,
      hours: hours % 24,
      minutes: minutes % 60,
      seconds: seconds % 60
    };
  };

  const [timeElapsed, setTimeElapsed] = useState(calculateTimeElapsed());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeElapsed(calculateTimeElapsed());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="counter-view">
      <h1 className="counter-title">Tiempo Transcurrido</h1>
      <div className="counter">
        <div className="counter-item">
          <span className="counter-number">{timeElapsed.days}</span>
          <span className="counter-label">Días</span>
        </div>
        <div className="counter-item">
          <span className="counter-number">{timeElapsed.hours}</span>
          <span className="counter-label">Horas</span>
        </div>
        <div className="counter-item">
          <span className="counter-number">{timeElapsed.minutes}</span>
          <span className="counter-label">Minutos</span>
        </div>
        <div className="counter-item">
          <span className="counter-number">{timeElapsed.seconds}</span>
          <span className="counter-label">Segundos</span>
        </div>
      </div>
    </div>
  );
};

export default CounterView;
