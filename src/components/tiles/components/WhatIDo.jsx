import { MdWeb } from 'react-icons/md';
import { HiDevicePhoneMobile } from 'react-icons/hi2';
import { PiGearBold } from 'react-icons/pi';
import PropTypes from 'prop-types';

const WhatIDo = props => {
  const { className } = props
  return (
    <div className={className}>
      <p className='tile__title'>What can i do</p>
      <div className='tile__wrp'>
        <div className="tile__wrp-item">
          <MdWeb/>
          <p className='tile__subtitle'>Web</p>
        </div>
        <div className="tile__wrp-item">
          <HiDevicePhoneMobile/>
          <p className='tile__subtitle'>Simple mobile apps</p>
        </div>
        <div className="tile__wrp-item">
          <PiGearBold/>
          <p className='tile__subtitle'>Website support</p>
        </div>
      </div>
    </div>
  );
};

WhatIDo.propTypes = {
  className: PropTypes.string.isRequired,
}

export default WhatIDo;
