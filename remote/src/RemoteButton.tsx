import React from 'react';

type Props = {
  text?: string;
  onClick?: () => void;
};

const RemoteButton: React.FC<Props> = ({ text = 'Click', onClick }) => {
  return (
    <button
      style={{ padding: '10px 20px', fontSize: '16px' }}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default RemoteButton;

