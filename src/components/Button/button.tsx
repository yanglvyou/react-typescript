/* eslint-disable @typescript-eslint/no-unused-expressions */
import React, { ButtonHTMLAttributes, AnchorHTMLAttributes,FC } from "react";
import classNames from "classnames";

export type ButtonSize = "lg" | "sm";
export type ButtonType = "primary" | "default" | "danger" | "link";

interface BaseButtonProps {
  className?: string;
  /**Button设置是否禁用 */
  disabled?: boolean;
   /**Button设置大小 */
  size?: ButtonSize;
   /**Button设置类型 */
  btnType?: ButtonType;
  children: React.ReactNode;
  href?: string;
}

type NativeButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLElement>;
type AnchorButtonProps = BaseButtonProps & AnchorHTMLAttributes<HTMLElement>;

export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>;

/**
 * 这是我的第一个组件Button
 * ## Button Header
 * ~~~js
 * import {Button} from 'uniqueship'
 * ~~~
 */

export const Button: FC<ButtonProps> = (props) => {
  const {
    disabled,
    size,
    btnType,
    children,
    href,
    className,
    ...restProps
  } = props;

  // btn,btn-lg

  const classes = classNames("btn", className, {
    [`btn-${btnType}`]: btnType,
    [`btn-${size}`]: size,
    disabled: btnType === 'link' && disabled,
  });

  if (btnType === 'link' && href) {
    return (
      <a href={href} className={classes} {...restProps}>
        {children}
      </a>
    );
  } else {
    return (
      <button className={classes} disabled={disabled} {...restProps}>
        {children}
      </button>
    );
  }
};

Button.defaultProps = {
  disabled: false,
  btnType: 'default',
};

export default Button;
