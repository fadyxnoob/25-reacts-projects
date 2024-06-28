import React from 'react';

const Alert = ({ message, type }) => {
  const baseClasses = 'p-4 mb-4 text-sm rounded-lg fixed top-0 inset-x-0 mx-auto max-w-md';
  const typeClasses = {
    success: 'bg-green-100 text-green-700',
    error: 'bg-red-100 text-red-700',
    warning: 'bg-yellow-100 text-yellow-700',
    info: 'bg-blue-100 text-blue-700',
  };

  return (
    <div className={`${baseClasses} ${typeClasses[type]} mt-5`} role="alert">
      {message}
    </div>
  );
};

export default Alert;
