import React, { FC, useState } from "react";
import { Container, SlideOver, BoxSection } from "@base";
import { useGlobalContext } from "@contexts";
import { Categories, Items, Menus, Allergies } from "@presentational";
import { PageHeader } from "./PageHeader";

interface Props {
  restaurantName: string;
}

const Page: FC<Props> = ({ restaurantName }) => {
  const [isSlideOverOpen, setIsSlideOverOpen] = useState(false);
  const { categoryID } = useGlobalContext();

  return (
    <>
      <PageHeader restaurantName={restaurantName} setIsSlideOverOpen={setIsSlideOverOpen} />
      <Container>
        <BoxSection>
          <Menus />
        </BoxSection>
        <BoxSection>
          <Categories />
        </BoxSection>
      </Container>
      {categoryID && <Items />}
      <SlideOver setIsSlideOverOpen={setIsSlideOverOpen} isSlideOverOpen={isSlideOverOpen}>
        <Allergies />
      </SlideOver>
    </>
  );
};

export { Page };
