import React from 'react';
import { Select as AntSelect } from 'antd';
import { SelectProps, SelectValue } from 'antd/lib/select';

import InputWrapper, { Margin, Info } from '../InputWrapper/InputWrapper';

interface Props
  extends Omit<SelectProps<SelectValue>, 'allowClear' | 'showSearch' | 'optionFilterProp' | 'getPopupContainer'> {
  label?: string;
  margin?: Margin;
  info?: Info;
}

const Select = ({ info, label, className, margin, onChange, ...props }: Props) => {
  return (
    <InputWrapper info={info} label={label} className={className} margin={margin}>
      <AntSelect
        {...props}
        allowClear
        showSearch
        // For setting null after clear value
        /* eslint-disable-next-line @typescript-eslint/no-unnecessary-condition */
        onChange={(value, ...args) => onChange && onChange(value ?? null, ...args)}
        optionFilterProp="label"
        // find necessary id inside root, for showing options, cuz probably we can have more then 1 same id
        getPopupContainer={() =>
          info?.name ? (document.querySelector(`div#${info.name}`) as HTMLElement) : document.body
        }
      />
    </InputWrapper>
  );
};

export default Select;
