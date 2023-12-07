import { CardFooterContainer } from "./card-footer.styles";

interface CardFooterProps {
  children: React.ReactNode;
}

const CardFooter: React.FC<CardFooterProps> = ({ children }) => {
  return <CardFooterContainer>{children}</CardFooterContainer>;
};

export default CardFooter;
