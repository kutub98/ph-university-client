import React from 'react';

type ContainerProps = {
  children: React.ReactNode;
  style?: React.CSSProperties;
};
const Container = ({ children, style }: ContainerProps) => {
  return (
    <div
      style={{ width: '100%', maxWidth: '1320px', margin: '0 auto', ...style }}
    >
      {children}
    </div>
  );
};

export default Container;
