import PropTypes from 'prop-types';

import './pageTitle.scss';
const PageTitle = props => {
  const { text } = props
  return (
    <h1 className="h1">{text}</h1>
  );
};

PageTitle.propTypes = {
  text: PropTypes.string.isRequired,
};

export default PageTitle;
