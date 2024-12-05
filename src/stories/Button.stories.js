import { fn } from '@storybook/test';
import { Button } from './Button';
import { LuSendHorizonal } from "react-icons/lu";

export default {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: { onClick: fn() },
};

export const RoundedPrimaryButton = {
  args: {
    primary: true,
    label: 'Rounded Border Button',
  },
};

export const SquaredPrimaryButton = {
  args: {
    label: 'Button',
    primary: true,
    noBorderRadius: true,
  },
};

export const SquaredLargeButton = {
  args: {
    size: 'large',
    label: 'Large Button',
    noBorderRadius: true,
  },
};

export const SquaredSmallButton = {
  args: {
    size: 'small',
    label: 'Small Button',
    noBorderRadius: true,
  },
};

export const RoundedLargeButton = {
  args: {
    size: 'large',
    label: 'Large Button',
  },
};

export const RoundedSmallButton = {
  args: {
    size: 'small',
    label: 'Small Button',
  },
};

export const IconLeftButton = {
  args: {
    primary: true,
    label: 'Button',
    icon: <LuSendHorizonal />,
    iconPosition: 'left',
  },
};

export const IconRightButton = {
  args: {
    primary: true,
    label: 'Button',
    icon: <LuSendHorizonal />,
    iconPosition: 'right',
  },
};

RoundedPrimaryButton.parameters = {
  docs: {
    source: {
      code: `import React, { useState } from "react";
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
        'storybook-button--{size}',
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
`
      ,
    },
  },
};
