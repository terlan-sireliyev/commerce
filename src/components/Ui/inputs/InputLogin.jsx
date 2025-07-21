
const InputLogin = ({
  // eslint-disable-next-line react/prop-types
  classNameInput,
  // eslint-disable-next-line react/prop-types
  classNameLabel,
  // eslint-disable-next-line react/prop-types
  type = "text",
  // eslint-disable-next-line react/prop-types
  htmlFor,
  // eslint-disable-next-line react/prop-types
  labelText,
  // eslint-disable-next-line react/prop-types
  placeholder,
  // eslint-disable-next-line react/prop-types
  onChange,
  // eslint-disable-next-line react/prop-types
  value,
  // eslint-disable-next-line react/prop-types
  name,
}) => {
  return (
    <>
      {" "}
      {labelText && (
        <label className={classNameLabel} htmlFor={htmlFor}>
          {labelText}
        </label>
      )}
      <input
        type={type}
        className={classNameInput}
        placeholder={placeholder}
        id={htmlFor}
        value={value}
        name={name}
        onChange={onChange}
      />
    </>
  );
};

export default InputLogin;
