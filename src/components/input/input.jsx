import PropTypes from "prop-types";

function Input({ className, name, id, type, onChange }) {
  return (
    <div className={className}>
      <label htmlFor={id}>{name}</label>
      <input onChange={onChange} type={type} id={id}></input>
    </div>
  );
}

Input.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func,
};

export default Input;