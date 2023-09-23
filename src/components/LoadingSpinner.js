import React from 'react';
import { css } from '@emotion/react';
import { BarLoader } from 'react-spinners';
import { useState, useEffect } from "react";
import { Man, Globe, Woman, thinkBig, people, Purp2, Sitting } from './assets';
const loadingSpinnerStyle = css`
  margin-top: 20%;
  
`;



const LoadingSpinner = () => {
  const [imageLoaded, setImageLoaded] = useState(false);


useEffect(() => {
  const image = new Image();
  image.src = Man;

  image.onload = () => {
    // Set the state to indicate that the image has loaded
    setImageLoaded(true);
  };

  // Clean up the event listener when the component unmounts
  return () => {
    image.onload = null;
  };
}, []);


useEffect(() => {
  const image = new Image();
  image.src = Globe;

  image.onload = () => {
    // Set the state to indicate that the image has loaded
    setImageLoaded(true);
  };

  // Clean up the event listener when the component unmounts
  return () => {
    image.onload = null;
  };
}, []);


useEffect(() => {
  const image = new Image();
  image.src = Woman;

  image.onload = () => {
    // Set the state to indicate that the image has loaded
    setImageLoaded(true);
  };

  // Clean up the event listener when the component unmounts
  return () => {
    image.onload = null;
  };
}, []);


useEffect(() => {
  const image = new Image();
  image.src = people;

  image.onload = () => {
    // Set the state to indicate that the image has loaded
    setImageLoaded(true);
  };

  // Clean up the event listener when the component unmounts
  return () => {
    image.onload = null;
  };
}, []);


useEffect(() => {
  const image = new Image();
  image.src = thinkBig;

  image.onload = () => {
    // Set the state to indicate that the image has loaded
    setImageLoaded(true);
  };

  // Clean up the event listener when the component unmounts
  return () => {
    image.onload = null;
  };
}, []);


useEffect(() => {
  const image = new Image();
  image.src = Purp2;

  image.onload = () => {
    // Set the state to indicate that the image has loaded
    setImageLoaded(true);
  };

  // Clean up the event listener when the component unmounts
  return () => {
    image.onload = null;
  };
}, []);

useEffect(() => {
  const image = new Image();
  image.src = Sitting;

  image.onload = () => {
    // Set the state to indicate that the image has loaded
    setImageLoaded(true);
  };

  // Clean up the event listener when the component unmounts
  return () => {
    image.onload = null;
  };
}, []);

  return (
    <div className="loader h-[100vh] flex flex-col items-center justify-center">
      <BarLoader css={loadingSpinnerStyle} color="#D434FE" loading={true} />
    </div>
  );
};

export default LoadingSpinner;
