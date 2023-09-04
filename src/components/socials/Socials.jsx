import { FaGithub, FaInstagram, FaLinkedin, FaTelegram } from 'react-icons/fa';
import { BiLogoGmail } from 'react-icons/bi';
import { FaLocationDot } from 'react-icons/fa6';

import './socials.scss';
const Socials = () => {
  return (
    <>
      <a href='https://www.linkedin.com/in/andrii-demchenko-21334125a/'
         target='_blank'
         rel="noreferrer"
         className='socials-item'>
        <FaLinkedin />
      </a>
      <a href='https://t.me/demchik2a'
         target='_blank'
         rel="noreferrer"
         className='socials-item'>
        <FaTelegram />
      </a>
      <a href='https://instagram.com/andrew.demchenk0'
         target='_blank'
         rel="noreferrer"
         className='socials-item'>
        <FaInstagram />
      </a>
      <a href='https://github.com/andrew-demchenk0'
         target='_blank'
         rel="noreferrer"
         className='socials-item'>
        <FaGithub />
      </a>
      <a href='mailto: 2andrew.demchenko@gmail.com'
         target='_blank'
         rel="noreferrer"
         className='socials-item'>
        <BiLogoGmail />
      </a>
      <a href='https://www.google.com/maps/place/%D0%A1%D1%83%D0%BC%D1%8B,+%D0%A1%D1%83%D0%BC%D1%81%D0%BA%D0%B0%D1%8F+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C,+%D0%A3%D0%BA%D1%80%D0%B0%D0%B8%D0%BD%D0%B0,+40000/@50.8919199,34.7283764,11z/data=!3m1!4b1!4m5!3m4!1s0x41290220fc73a461:0xdb74f6366b836c28!8m2!3d50.9077!4d34.7981'
         target='_blank'
         rel="noreferrer"
         className='socials-item'>
        <FaLocationDot />
      </a>
    </>
  );
};

export default Socials;
