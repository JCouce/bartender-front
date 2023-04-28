import React, { useEffect, useState } from 'react';
import './ProgressBar.css';


interface ProgressBarProps {
  duration: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ duration }) => {
  const [percentage, setPercentage] = useState<number>(0);


  useEffect(() => {
    const interval = setInterval(() => {
      setPercentage((prevPercentage) => {
        if (prevPercentage >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prevPercentage + 1;
      });
    }, duration / 100);

    return () => {
      clearInterval(interval);
    };
  }, [duration]);

  return (
    <div className="progressBar">
      <p className='label'>Tiempo para servir la proxima bebida</p>
      <div
        className="progressBar__fill"
        style={{ width: `${percentage}%`, transitionDuration: `${duration / 100}ms` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
