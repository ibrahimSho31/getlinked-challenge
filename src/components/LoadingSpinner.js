import React from 'react';
import { css } from '@emotion/react';
import { BarLoader } from 'react-spinners';

const loadingSpinnerStyle = css`
  margin-top: 20%;
  
`;

const LoadingSpinner = () => {
  return (
    <div className="loader h-[100vh] flex flex-col items-center justify-center">
      <BarLoader css={loadingSpinnerStyle} color="#D434FE" loading={true} />
    </div>
  );
};

export default LoadingSpinner;
