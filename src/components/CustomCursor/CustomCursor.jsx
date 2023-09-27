import { useState, useEffect, useRef } from 'react';
import './customCursor.scss';
import { useMediaQuery } from 'react-responsive';

const CustomCursor = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const cursorRef = useRef(null);
  const [cursorPosition, setCursorPosition] = useState({ left: 0, top: 0 });
  const [hovered, setHovered] = useState(false);

  const moveCursor = (e) => {
    requestAnimationFrame(() => {
      setCursorPosition({ left: e.clientX, top: e.clientY });
    });
  };

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  useEffect(() => {
    cursorRef.current.style.transition = 'transform 0.1s ease-out';
    window.addEventListener('mousemove', moveCursor);

    const elementsToTrack = document.querySelectorAll('.js-cur-link, a');

    elementsToTrack.forEach((element) => {
      element.addEventListener('mouseenter', handleMouseEnter);
      element.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      window.removeEventListener('mousemove', moveCursor);

      elementsToTrack.forEach((element) => {
        element.removeEventListener('mouseenter', handleMouseEnter);
        element.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  useEffect(() => {
    if (isMobile) {
      cursorRef.current.style.display = 'none';
    } else {
      cursorRef.current.style.display = 'block';
    }
  }, [isMobile]);

  return (
    <div
      ref={cursorRef}
      className={`cursor ${hovered ? 'on-link' : ''}`}
      style={{
        left: `${cursorPosition.left}px`,
        top: `${cursorPosition.top}px`,
      }}
    >
      <div className="cursor__inner"></div>
    </div>
  );
};

export default CustomCursor;
