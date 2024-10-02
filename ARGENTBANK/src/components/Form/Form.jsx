import "./Form.css";
import PropsTypes from "prop-types";

function Form({ children }) {
  return (
    <form className="form">
      {children}
    </form>
  );
}

Form.propTypes = {
  children: PropsTypes.node,
};

export default Form;