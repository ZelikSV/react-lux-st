import { Input } from 'antd';
import React from 'react';
import { InputProps } from 'antd/lib/input';

export interface Props extends Omit<InputProps, 'allowClear'> {
  label?: string;
  disabled?: boolean;
  info: any;
}

const TextField = ({ disabled, label, info, ...props }: Props) => {
  return (
    <div>
      <p>{label}</p>
      <Input allowClear {...props} value={info?.value} disabled={disabled} onChange={info?.onChange} />
    </div>
  );
};

export default TextField;
