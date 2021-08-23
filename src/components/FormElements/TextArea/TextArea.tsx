import React from 'react';
import { Input } from 'antd';
import { TextAreaProps } from 'antd/lib/input';

import InputWrapper, { Margin, Info } from '../InputWrapper/InputWrapper';

interface Props extends Omit<TextAreaProps, 'autoSize' | 'allowClear'> {
  label?: string;
  margin?: Margin;
  info?: Info;
}

const TextArea = ({ label, info, margin, ...props }: Props) => {
  return (
    <InputWrapper info={info} label={label} margin={margin}>
      <Input.TextArea
        data-cy={info?.name}
        style={{ resize: 'none' }}
        autoSize={{ minRows: 3, maxRows: Infinity }}
        allowClear
        {...props}
      />
    </InputWrapper>
  );
};

export default TextArea;
