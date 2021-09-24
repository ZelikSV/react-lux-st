import React from 'react';
import styled from 'styled-components';

import { theme } from 'theme';

type AnyObject = { [key: string]: any };

const Container = styled.div<{ error?: boolean; margin?: Margin; theme: AnyObject }>`
  position: relative;
  margin: ${(props) => (props.margin === 'none' ? 0 : '8px 0 16px')};

  & .ant-input-affix-wrapper,
  .ant-picker {
    border-color: ${(props) => (props.error ? `${theme.color.error}` : `${theme.color.border}`)};
  }

  .ant-input {
    border-color: ${(props) => (props.error ? `${theme.color.error}` : `${theme.color.border}`)};
  }

  & .ant-input-affix-wrapper-focused,
  .ant-picker-focused {
    box-shadow: ${(props) => (props.error ? '0 0 0 2px rgba(255, 77, 79, 0.2)' : '0 0 0 2px rgba(46, 164, 79, 0.2)')};
  }

  &&& .ant-select {
    .ant-select-selector {
      border-color: ${(props) => (props.error ? `${theme.color.error}` : `${theme.color.border}`)};
    }
  }

  &&& .ant-select-focused {
    .ant-select-selector {
      box-shadow: ${(props) => (props.error ? '0 0 0 2px rgba(255, 77, 79, 0.2)' : '0 0 0 2px rgba(46, 164, 79, 0.2)')};
    }
  }

  .ant-upload.ant-upload-drag {
    border-color: ${(props) => (props.error ? `${theme.color.error}` : `${theme.color.border}`)};

    :hover {
      border-color: ${(props) => (props.error ? `${theme.color.error}` : `${theme.color.border}`)};
    }
  }
`;

const StyledLabel = styled.span`
  margin-left: 12px;
`;

const StyledError = styled.span`
  color: ${theme.color.error};
  position: absolute;
  bottom: -18px;
  left: 12px;
`;

export type Margin = 'none' | 'normal';
export interface Info {
  name: string;
  errors: AnyObject;
}
interface Props {
  label?: string;
  children: React.ReactNode;
  className?: string;
  margin?: Margin;
  info?: Info;
}

const InputWrapper = ({ children, label, className, margin = 'normal', info }: Props) => {
  return (
    <Container id={info?.name} error={info?.errors[info.name]} className={className} margin={margin}>
      {label && <StyledLabel>{label}</StyledLabel>}

      {children}

      {info?.errors[info.name] && (
        <StyledError className="errorFormItem_message">
          {(info.errors[info.name] as { message: string }).message}
        </StyledError>
      )}
    </Container>
  );
};

export default InputWrapper;
