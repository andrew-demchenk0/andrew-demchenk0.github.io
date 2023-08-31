import './burgerBtn.scss';

const BurgerBtn = ({ isChecked, onClick }) => {
  return (
    <>
      <input className="burger-btn" type="checkbox" id="burger-btn" checked={isChecked} />
      <label className="burger-btn__icon" htmlFor="burger-btn" onClick={onClick}>
        <span></span>
      </label>
    </>
  );
};

export default BurgerBtn;
