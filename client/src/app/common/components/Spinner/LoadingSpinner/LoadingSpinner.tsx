import React, { useEffect } from 'react';
import { LoadingSpinnerProps } from './types';
import './styles.scss';

const LoadingSpinner: React.FC<LoadingSpinnerProps> = (props) => {
  useEffect(() => {
    lockWindowScrollBar(props.visible);
    return () => {
      lockWindowScrollBar(false);
    };
  }, [props.visible]);

  const lockWindowScrollBar = (lockup: boolean) => {
    const isLockup = lockup ? 'hidden' : 'auto';
    document.getElementsByTagName('body')[0].style.overflow = isLockup;
  };

  return props.visible ? (
    <div className="loading-spinner">
      <div className="loading-spinner__ring">
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  ) : null;
};

export default LoadingSpinner;
