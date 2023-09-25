import { useState, useEffect, useRef } from 'react';
import './customCursor.scss';

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const [cursorPosition, setCursorPosition] = useState({ left: 0, top: 0 });

  const [hovered] = useState(false);

  const moveCursor = (e) => {
    requestAnimationFrame(() => {
      setCursorPosition({ left: e.clientX, top: e.clientY });
    });
  };

  useEffect(() => {
    cursorRef.current.style.transition = 'transform 0.1s ease-out';
    window.addEventListener('mousemove', moveCursor);

    const elementsToTrack = document.querySelectorAll('.js-cur-link, a');

    elementsToTrack.forEach((element) => {
      element.addEventListener('mouseenter', () => {
        cursorRef.current.classList.add('on-link');
      });

      element.addEventListener('mouseleave', () => {
        cursorRef.current.classList.remove('on-link');
      });
    });

    return () => {
      window.removeEventListener('mousemove', moveCursor);

      elementsToTrack.forEach((element) => {
        element.removeEventListener('mouseenter', () => {
          cursorRef.current.classList.add('on-link');
        });

        element.removeEventListener('mouseleave', () => {
          cursorRef.current.classList.remove('on-link');
        });
      });
    };
  }, []);

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

