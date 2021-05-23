import React, { FC, useContext, useState } from "react";
import { Container, SlideOver } from "@base";
import { GlobalContext, GlobalContextData } from "@contexts";
import { Categories, Items, Menus, Allergies } from "@presentational";
import { PageHeader } from "./PageHeader";

interface Props {
  restaurantName: string;
}

const Page: FC<Props> = ({ restaurantName }) => {
  const [isSlideOverOpen, setIsSlideOverOpen] = useState(false);
  const { categoryID, menuID } = useContext(GlobalContext) as GlobalContextData;

  return (
    <>
      <PageHeader
        restaurantName={restaurantName}
        setIsSlideOverOpen={setIsSlideOverOpen}
      />
      <Container>
        <Menus />
      </Container>
      <div style={{ height: "8px" }}></div>
      {menuID && <Categories />}
      {categoryID && <Items />}
      <SlideOver
        setIsSlideOverOpen={setIsSlideOverOpen}
        isSlideOverOpen={isSlideOverOpen}
      >
        <Allergies />
      </SlideOver>
    </>
  );
};

export { Page };
