//in publish page input
// eslint-disable-next-line react/prop-types
const Input = ({ type, classNameInput, name, placeholder,changeTextMore,more}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={classNameInput}
      onChange={changeTextMore}
      value={more}
      name={name}
    />
  );
};

export default Input;
