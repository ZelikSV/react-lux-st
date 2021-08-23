import { Input } from 'antd';
import React from 'react';
import { InputProps } from 'antd/lib/input';

import InputWrapper, { Margin, Info } from '../InputWrapper/InputWrapper';

export interface Props extends Omit<InputProps, 'allowClear'> {
  label?: string;
  margin?: Margin;
  info?: Info;
}

const TextField = ({ info, label, className, margin, ...props }: Props) => {
  return (
    <InputWrapper info={info} label={label} className={className} margin={margin}>
      <Input allowClear {...props} />
    </InputWrapper>
  );
};

export default TextField;
