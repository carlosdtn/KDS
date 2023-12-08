import { IconPlus } from "@tabler/icons-react";
import { setFilter } from "../../../redux/features/filter-slice";
import { toggleOptions } from "../../../redux/features/options-slice";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { Filter, OrderStatus } from "../../../utils/types";
import Button from "../../ui/button";
import {
  CircleColored,
  FilterTitle,
  GroupedContent,
  GroupedTabs,
  HeaderContainer,
} from "./header.styles";

const Header = () => {
  const dispatch = useAppDispatch();
  const option = useAppSelector((state) => state.options.isOpen);

  return (
    <HeaderContainer>
      <GroupedTabs>
        <Button
          variant="header"
          onClick={() => dispatch(toggleOptions({ isOpen: !option }))}
        >
          <IconPlus size={20} color="black" />
          <span>Agregar orden</span>
        </Button>
      </GroupedTabs>
      <GroupedTabs>
        <FilterTitle>Filtrar</FilterTitle>
        <Button
          variant="header"
          onClick={() => dispatch(setFilter(Filter.ALL))}
        >
          <span>TODO</span>
        </Button>
        <Button
          variant="header"
          onClick={() => dispatch(setFilter(Filter.PENDING))}
        >
          <GroupedContent>
            <CircleColored $status={OrderStatus.PENDING} />
            <span>PENDIENTE</span>
          </GroupedContent>
        </Button>
        <Button
          variant="header"
          onClick={() => dispatch(setFilter(Filter.IN_PROCESS))}
        >
          <GroupedContent>
            <CircleColored $status={OrderStatus.IN_PROCESS} />
            <span>EN PROCESO</span>
          </GroupedContent>
        </Button>
        <Button
          variant="header"
          onClick={() => dispatch(setFilter(Filter.COMPLETED))}
        >
          <GroupedContent>
            <CircleColored $status={OrderStatus.COMPLETED} />
            <span>COMPLETADO</span>
          </GroupedContent>
        </Button>
      </GroupedTabs>
    </HeaderContainer>
  );
};

export default Header;
