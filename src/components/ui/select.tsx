import React, { forwardRef, SelectHTMLAttributes } from "react";
import { Label, SelectGroup, StyledSelect } from "./select.styles";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  variant?: "primary" | "secondary";
  options: { label: string; value: string }[];
}

const Select: React.FC<SelectProps> = forwardRef(
  ({ label, variant, options, ...rest }, ref) => {
    return (
      <SelectGroup>
        {label && <Label>{label}</Label>}
        <StyledSelect
          ref={ref as React.Ref<HTMLSelectElement>}
          $variant={variant}
          {...rest}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </StyledSelect>
      </SelectGroup>
    );
  }
);

export default Select;
