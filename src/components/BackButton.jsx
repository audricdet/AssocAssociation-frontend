import React from 'react';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

function BackButton() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <button onClick={handleGoBack}>
    <AiOutlineArrowLeft/>
    </button>
  );
}

export default BackButton;