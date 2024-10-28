import React, { useState } from "react";

const Button = ({ children, classNames, onClick, icon, disabled, loading }) => {
  const [first, setFirst] = useState({ x: -20, y: 20 });
  const [second, setSecond] = useState({ x: 0, y: 0 });
  const animate = (flag) => {
    if (flag) {
      setSecond({ x: 20, y: -20 });
      setFirst({ x: 0, y: 0 });
    } else {
      setFirst({ x: -20, y: 20 });
      setSecond({ x: 0, y: 0 });
    }
  };
  return (
    <button
      disabled={disabled || loading}
      onMouseEnter={() => animate(1)}
      onMouseLeave={() => animate(0)}
      className={classNames + ((disabled || loading) ? " !cursor-default" : " hover:scale-105 transition-transform duration-250")}
      onClick={onClick}
    >
      {icon && !loading && (
        <span className="mr-1 relative h-6 pr-6 overflow-hidden">
          <span style={{ transform: `translate(${first.x}px,${first.y}px)` }} className="transition-all duration-200 first absolute">
            <YellowArrow />
          </span>
          <span style={{ transform: `translate(${second.x}px,${second.y}px)` }} className="transition-all duration-200 second absolute">
            {icon}
          </span>
        </span>
      )}
      {loading ? <Spinner /> : children}
    </button>
  );
};

const Spinner = () => {
  return <>Loading...</>;
};

const YellowArrow = () => {
  return (
    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M17.4806 15.1045C17.3462 14.9701 17.2614 14.7863 17.2614 14.5742L17.2614 6.73942L9.42661 6.73942C9.01649 6.73942 8.67708 6.40001 8.67708 5.98989C8.67708 5.57977 9.01649 5.24035 9.42661 5.24035L18.0109 5.24035C18.421 5.24035 18.7604 5.57977 18.7604 5.98989L18.7604 14.5742C18.7604 14.9843 18.421 15.3237 18.0109 15.3237C17.8058 15.3308 17.6149 15.2388 17.4806 15.1045Z"
        fill="#FFAD51"
      />
      <path
        d="M5.45969 18.5416C5.16977 18.2517 5.16977 17.7709 5.45969 17.481L17.3603 5.58038C17.6502 5.29047 18.131 5.29047 18.421 5.58038C18.7109 5.87029 18.7109 6.35113 18.421 6.64104L6.52035 18.5416C6.23043 18.8316 5.7496 18.8316 5.45969 18.5416Z"
        fill="#FFAD51"
      />
    </svg>
  );
};
export default Button;
