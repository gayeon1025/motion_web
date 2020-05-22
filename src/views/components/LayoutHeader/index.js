import React from 'react';
import Navigation from 'views/components/Navigation';

const ContentWrapper = () => {
  return (
    <>
      <Navigation />
      <div className="banner">
        <div className="banner_title">
          <span className="font_bold">Board</span>
          <span className="font_thin">게시판</span>
        </div>
        <svg
          className="clouds"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          width="100%"
          height="100"
          viewBox="0 0 85 100"
          preserveAspectRatio="none"
        >
          <path d="M-5 100 Q 0 20 5 100 ZM0 100 Q 5 0 10 100M5 100 Q 10 30 15 100M10 100 Q 15 10 20 100M15 100 Q 20 30 25 100M20 100 Q 25 -10 30 100M25 100 Q 30 10 35 100M30 100 Q 35 30 40 100M35 100 Q 40 10 45 100M40 100 Q 45 50 50 100M45 100 Q 50 20 55 100M50 100 Q 55 40 60 100M55 100 Q 60 60 65 100M60 100 Q 65 50 70 100M65 100 Q 70 20 75 100M70 100 Q 75 45 80 100M75 100 Q 80 30 85 100M80 100 Q 85 20 90 100M85 100 Q 90 50 95 100M90 100 Q 95 25 100 100M95 100 Q 100 15 105 100 Z"></path>
        </svg>
      </div>
    </>
  );
};

export default ContentWrapper;
