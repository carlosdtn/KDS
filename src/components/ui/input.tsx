import React, { InputHTMLAttributes, forwardRef } from "react";

import { InputGroup, Label, StyledInput } from "./input.styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  variant?: "primary" | "secondary";
}

const Input: React.FC<InputProps> = forwardRef(
  ({ label, variant, ...rest }, ref) => {
    return (
      <InputGroup>
        {label && <Label>{label}</Label>}
        <StyledInput
          ref={ref as React.RefObject<HTMLInputElement>}
          $variant={variant}
          {...rest}
        />
      </InputGroup>
    );
  }
);

export default Input;
