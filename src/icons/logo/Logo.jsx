import React from 'react';
import { NavLink } from 'react-router-dom';

import './logo.scss';

const Logo = ({color}) => {
  return (
    <NavLink to="/" className="logo" >
      <svg fill="none" height="100%" width='100%' viewBox="0 0 310 276" xmlns="http://www.w3.org/2000/svg"><g fill={color}><path d="m.666656 138v138h154.666344 154.667v-138-138.00001439h-154.667-154.666344zm115.200344-105.0667c.4 2.1334 1.333 7.8667 2.133 13.0667.8 5.0667 4.8 29.4667 8.8 54 4 24.533 8.4 51.867 9.867 60.667 9.733 60.666 13.466 83.066 14 85.733l.8 3.067-17.734-.4-17.733-.4-1.467-9.334c-.8-5.2-2.266-14.533-3.2-21.066l-1.6-11.6h-19.1997c-18.8 0-19.2 0-19.7333 2.933-.9333 4.133-3.2 19.067-4.1333 26.4-.4 3.333-1.0667 7.6-1.4667 9.6l-.8 3.733h-15.8667c-18.2666 0-17.0666 1.467-14-15.466 1.0667-5.867 3.4667-20.4 5.4667-32.534 1.8667-12.133 6.4-40 10-62 8.4-50.7997 15.6-95.4663 16.6667-103.733l.9333-6.2667h23.7333 23.7337zm127.733.1334c15.2 6.1333 25.333 20.4 27.733 39.4666 1.6 12.5334 1.6 121.3337 0 133.8667-2.4 18.8-11.733 32.533-26.4 39.333-5.866 2.8-8.666 2.934-41.866 3.334l-35.734.4v-110.134-110.133l34.4.4c32.134.4 34.8.6667 41.867 3.4667z"/><path d="m89.6 74c-.5333 2.1333-2.4 14.8-4.2667 28-1.7333 13.2-4.6666 35.067-6.5333 48.667s-3.4667 24.8-3.4667 24.933c0 .267 6.9334.4 15.3334.4h15.3333l-.8-3.733c-.4-2-3.867-25.867-7.7333-52.934-4.8-33.333-7.3334-47.9997-7.8667-45.333z"/><path d="m202 139.333v78h12.4c13.6 0 16.8-1.2 20.267-8 1.733-3.333 2-14 2-70.266 0-63.3337-.134-66.5337-2.534-70.267-4-6.1333-7.6-7.3333-20.4-7.4667h-11.733z"/></g></svg>
    </NavLink>
  );
};

export default Logo;
