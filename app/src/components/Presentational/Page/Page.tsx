import React, { FC, useState } from "react";
import { Container, SlideOver, BoxSection } from "@base";
import { Categories, Items, Menus, Allergies } from "@presentational";
import { PageHeader } from "./PageHeader";

interface Props {
  restaurantName: string;
}

const Page: FC<Props> = ({ restaurantName }) => {
  const [isSlideOverOpen, setIsSlideOverOpen] = useState(false);

  return (
    <>
      <PageHeader restaurantName={restaurantName} setIsSlideOverOpen={setIsSlideOverOpen} />
      <Container>
        <Menus />
        <BoxSection>
          <Categories />
        </BoxSection>
        <Items />
      </Container>
      <SlideOver setIsSlideOverOpen={setIsSlideOverOpen} isSlideOverOpen={isSlideOverOpen}>
        <Allergies />
      </SlideOver>
    </>
  );
};

export { Page };
