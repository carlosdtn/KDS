import { ButtonVariant } from "../../utils/types";
import StyledButton from "./button.styles";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: ButtonVariant;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "secondary",
  ...rest
}) => {
  return (
    <StyledButton $variant={variant} {...rest}>
      {children}
    </StyledButton>
  );
};

export default Button;
