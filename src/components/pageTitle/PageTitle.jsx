import PropTypes from 'prop-types';

import './pageTitle.scss';
const PageTitle = props => {
  const { text, className } = props
  return (
    <h1 className={className}>{text}</h1>
  );
};

PageTitle.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

export default PageTitle;
