import React from 'react';
import { Button as AntButton } from 'antd';

type ButtonProps = {
  label: string;
};

const Button: React.FC<ButtonProps> = ({ label }) => {
  return <AntButton type="primary">{label}111</AntButton>;
};

export default Button;
