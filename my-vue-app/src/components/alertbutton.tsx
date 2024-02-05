interface AlertButtonProps {
  text: string;
}

const AlertButton = ({ text }: AlertButtonProps) => {
  const handleClick = () => {
    alert("Button geklickt");
  };

  return <button onClick={handleClick}>{text}</button>;
};

export default AlertButton;
