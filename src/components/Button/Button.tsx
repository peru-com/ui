import React from 'react';
import PropTypes from 'prop-types';
import {
  ButtonStyled, 
  Loading,
  IconWrapper
} from './styled';

interface Props {
  width?: number;
  fullWidth?: boolean;
  isLoading?: boolean;
  isDisabled?: boolean;
  isOutlined?: boolean;
  size?: string;
  variant?: string;
  onClick?: Function;
  icon?: React.ReactNode;
  iconPos?: string;
  children?: any;
}

export const Button: React.FC<Props> = ({
  width,
  fullWidth,
  isLoading,
  isDisabled,
  isOutlined,
  size,
  variant,
  onClick,
  icon,
  iconPos,
  children
}) => {

  if(isLoading) {
    return(
      <ButtonStyled
        width={width}
        fullWidth={fullWidth}
        isLoading={isLoading}
        isOutlined={isOutlined}
        size={size}
        variant={variant}
      >
        <Loading variant={variant} />
      </ButtonStyled>
    );
  }

  return(
    <ButtonStyled
      width={width}
      fullWidth={fullWidth}
      size={size}
      variant={variant}
      isDisabled={isDisabled}
      isOutlined={isOutlined}
      onClick={onClick}
      iconPos={iconPos}
    >
      {children}
      {icon && icon}
    </ButtonStyled>
  );
};

Button.propTypes = {
  width: PropTypes.number,
  fullWidth: PropTypes.bool,
  isLoading: PropTypes.bool,
  isDisabled: PropTypes.bool,
  isOutlined: PropTypes.bool,
  size: PropTypes.oneOf([
    'small',
    'normal',
    'medium',
    'large'
  ]),
  variant: PropTypes.oneOf([
    'default',
    'primary',
    'secondary',
    'info',
    'success',
    'danger',
    'warning'
  ]),
  onClick: PropTypes.func,
  icon: PropTypes.node,
  iconPos: PropTypes.string,
  children: PropTypes.any
};

Button.defaultProps = {
  size: 'normal',
  variant: 'default'
};

Button.displayName = 'Button';