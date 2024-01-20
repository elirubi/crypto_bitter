import { useState, useEffect } from 'react';

export default function Countdown(){

    const [countdown, setCountdown] = useState(20);

    useEffect(() => {
        const timer = setTimeout(() => {
          if (countdown > 0) {
            setCountdown(countdown - 1);
          } else {
            window.location.reload(); // Riaggiorna la pagina quando il conto alla rovescia raggiunge zero
          }
        }, 1000);
    
        return () => clearTimeout(timer);
      }, [countdown]);

      const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
      };

    return(

        <p className='text-xs font-semibold text-tertiary/50 text-center mt-4'>Sending new code in: <span className='font-bold text-tertiary'>{formatTime(countdown)}</span></p>
    )
}