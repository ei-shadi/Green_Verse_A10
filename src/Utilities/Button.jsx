import './Button.css'; 

const Button = ({label = "Click Me", onClick}) => {

  return (
    <button className="squeeze-button" onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
