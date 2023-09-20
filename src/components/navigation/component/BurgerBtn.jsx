import PropTypes from 'prop-types';

import './burgerBtn.scss';

const BurgerBtn = ({ isChecked, onClick }) => {
  return (
    <>
      <input className="burger-btn" type="checkbox" id="burger-btn" readOnly checked={isChecked} />
      <label className="burger-btn__icon" htmlFor="burger-btn" onClick={onClick}>
        <span></span>
      </label>
    </>
  );
};

BurgerBtn.propTypes = {
  isChecked: PropTypes.bool,
  onClick: PropTypes.func,
}

export default BurgerBtn;
