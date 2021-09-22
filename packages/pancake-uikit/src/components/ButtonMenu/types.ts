import { SpaceProps } from "styled-system";
import { BaseButtonProps, Scale, variants } from "../Button/types";

export interface ButtonMenuItemProps extends BaseButtonProps {
  isActive?: boolean;
}

export interface ButtonMenuProps extends SpaceProps {
  variant?:
    | typeof variants.PRIMARY
    | typeof variants.SUBTLE
    | typeof variants.FULL_GRADIENT
    | typeof variants.FULL_GRADIENT_ORANGE_YELLOW;
  activeIndex?: number;
  onItemClick?: (index: number) => void;
  scale?: Scale;
  children: React.ReactElement[];
}
