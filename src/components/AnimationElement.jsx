import React, { Suspense, lazy, useState, useEffect } from 'react';
const Spline = React.lazy(() => import('@splinetool/react-spline'));

function AnimationElement({ animation, fallbackImage, mobileHidden }) {
  const [isAndroidMobile, setIsAndroidMobile] = useState(false);

  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    if (/android/i.test(userAgent)) {
      setIsAndroidMobile(true);
    }
  }, []);

  if (isAndroidMobile) {
    if (mobileHidden){
      return <></>;
    } else {
      return <img src={fallbackImage} alt="Fallback" className="animation" />;
    }
    
  }

  

  return (
    <Suspense fallback={<div>...</div>}>
      <Spline className="animation" scene={animation} />
    </Suspense>
  );
}

export default AnimationElement;
