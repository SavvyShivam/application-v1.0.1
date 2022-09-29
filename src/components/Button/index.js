import React from "react";
import PropTypes from "prop-types";

const shapes = {
  RoundedBorder10: "rounded-radius10",
  icbRoundedBorder10: "rounded-radius10",
};
const variants = {
  GradientDeeppurpleA200PurpleA100: "bg-gradient  text-white_A700",
  icbOutlineBlack90019: "bg-white_A700 shadow-bs",
};
const sizes = {
  sm: "lg:p-[11px] xl:p-[12px] 2xl:p-[14px] p-[15px] 3xl:p-[17px]",
  smIcn: "xl:p-[11px] 2xl:p-[12px] p-[13px] 3xl:p-[14px] lg:p-[9px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${shapes[shape] || ""} ${
        variants[variant] || ""
      } ${sizes[size] || ""} common-button `}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["RoundedBorder10", "icbRoundedBorder10"]),
  variant: PropTypes.oneOf([
    "GradientDeeppurpleA200PurpleA100",
    "icbOutlineBlack90019",
  ]),
  size: PropTypes.oneOf(["sm", "smIcn"]),
};
Button.defaultProps = {
  className: "",
  shape: "icbRoundedBorder10",
  variant: "icbOutlineBlack90019",
  size: "smIcn",
};

export { Button };
