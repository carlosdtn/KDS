import { IconChefHat, IconFilter, IconTie } from "@tabler/icons-react";
import { useState } from "react";
import Button from "../../ui/button";
import { HeaderContainer, TextButton } from "./header.styles";

const Header = () => {
  const [role, setRole] = useState<string>("cocinero");

  return (
    <HeaderContainer>
      {role === "cocinero" ? (
        <Button onClick={() => setRole("camarero")}>
          <IconTie size={20} color="black" />
          <TextButton>Cambiar a Camarero</TextButton>
        </Button>
      ) : (
        <Button onClick={() => setRole("cocinero")}>
          <IconChefHat size={20} color="black" />
          <TextButton>Cambiar a Cocinero</TextButton>
        </Button>
      )}

      <Button>
        <IconFilter size={20} color="black" />
      </Button>
    </HeaderContainer>
  );
};

export default Header;
