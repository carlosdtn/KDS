import { CardContentContainer } from "./card-content.styles";

interface CardContentProps {
  children: React.ReactNode;
  isCollapse: boolean;
}

const CardContent: React.FC<CardContentProps> = ({ children, isCollapse }) => {
  return (
    <CardContentContainer isCollapsed={isCollapse}>
      {children}
    </CardContentContainer>
  );
};

export default CardContent;
