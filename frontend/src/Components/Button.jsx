import React from 'react';
import { useNavigate } from 'react-router-dom';

const Button = () => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate('/mood'); 
  };

  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: 'cyan',
        color: 'black',
        border: 'none',
        padding: '10px 20px',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '16px',
      }}
    >
      Generate a Hobby
    </button>
  );
};

export default Button;
