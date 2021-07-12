import React from "react";
import { SoySVG, GlutenSVG, NutSVG, DairySVG, MeatSVG, ShellfishSVG } from "./svgs";

type SVG = React.FunctionComponent<
  React.SVGProps<SVGSVGElement> & {
    title?: string | undefined;
  }
>;

type DietaryMap = {
  [key: string]: SVG;
};

interface Dietary {
  id: number;
  name: string;
  menu_item_id: number;
  dietary_id: number;
  __typename: string;
}

const Components: DietaryMap = {
  Soy: SoySVG,
  Gluten: GlutenSVG,
  Dairy: DairySVG,
  Nut: NutSVG,
  Meat: MeatSVG,
  Shellfish: ShellfishSVG,
};

const SvgComponent = (dietary: Dietary) => {
  const { name, id } = dietary;
  if (typeof Components[name] !== "undefined") {
    return React.createElement(Components[dietary.name], {
      key: id,
    });
  }
  return React.createElement(() => <div>The component {name} has not been created yet.</div>, {
    key: id,
  });
};

export { SvgComponent };
