import React from 'react';

const Alert = () => {
  const handleBackClick = () => {
    window.history.back();
  };

  return (
    <div style={{ backgroundColor: '#8e2ad6', padding: '10px',borderRadius: "20px" }}>
      <p style={{ color: 'white', margin: '0' }}>Image(s) are over 1MB,Please Upload less then 1MB.</p>
      <button onClick={handleBackClick} style={{ backgroundColor: 'white', color: '#8e2ad6', border: 'none', borderRadius: '5px', padding: '5px 10px', marginTop: '10px', cursor: 'pointer' }}>Back</button>
    </div>
  );
};

export default Alert;
