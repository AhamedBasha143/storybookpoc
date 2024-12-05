import React, { useState } from "react";
import "./button.css";
import PropTypes from "prop-types";
export const Button = ({
  primary,
  backgroundColor,
  size,
  label,
  noBorderRadius,
  icon,
  iconPosition,
  ...props
}) => {
  const [isClicked, setIsClicked] = useState(false);
  const mode = primary
    ? "storybook-button--primary"
    : "storybook-button--secondary";
  const borderRadiusClass = noBorderRadius
    ? "storybook-button--no-border-radius"
    : "storybook-button--border-radius";

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <button
      type="button"
      className={[
        "storybook-button",
        `storybook-button--${size}`,
        mode,
        borderRadiusClass,
      ].join(" ")}
      style={backgroundColor && { backgroundColor }}
      onClick={(e) => {
        handleClick();
        if (props.onClick) props.onClick(e);
      }}
      {...props}
    >
      {icon && iconPosition === "left" && (
        <span className="storybook-button__icon_right">{icon}</span>
      )}
      {label}
      {icon && iconPosition === "right" && (
        <span className="storybook-button__icon_left">{icon}</span>
      )}
    </button>
  );
};

Button.propTypes = {
  primary: PropTypes.bool,
  backgroundColor: PropTypes.string,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  noBorderRadius: PropTypes.bool,
  icon: PropTypes.node,
  iconPosition: PropTypes.oneOf(["left", "right"]),
};

Button.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: "medium",
  onClick: undefined,
  noBorderRadius: false,
  icon: null,
  iconPosition: "left",
};
