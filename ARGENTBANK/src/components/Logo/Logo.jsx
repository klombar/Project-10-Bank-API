import PropTypes from 'prop-types';
import './Logo.css';

function Logo({ logo }) {
  return (
    <div className="Header-logo">
      <img src={logo} alt="Argent Bank Logo" />
    </div>
  );
}

export default Logo;

Logo.propTypes = {
   logo: PropTypes.string.isRequired,
 };