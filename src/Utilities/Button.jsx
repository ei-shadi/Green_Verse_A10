import './Button.css'; 

const Button = ({label = "Click Me"}) => {
  return (
    <button className="squeeze-button">
      {label}
    </button>
  );
};

export default Button;
