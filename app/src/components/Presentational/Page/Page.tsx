import React, { FC, useContext, useState } from "react";
import { Container, Toggle, SlideOver } from "@base";
import { GlobalContext, GlobalContextData, useAllergyContext } from "@contexts";
import { Categories, Items, Menus } from "@presentational";
import { PageHeader } from "./PageHeader";

interface Props {
  restaurantName: string;
}

const Page: FC<Props> = ({ restaurantName }) => {
  const [isSlideOverOpen, setIsSlideOverOpen] = useState(false);
  const { dispatch, allergies, isAllergyActive } = useAllergyContext();
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
        {allergies?.allergies && (
          <div className="mt-6 relative flex-1 px-4 sm:px-6">
            {allergies?.allergies.map((allergy) => (
              <div key={allergy.id}>
                <Toggle
                  allergy={allergy}
                  isEnabled={isAllergyActive(allergy)}
                  dispatch={dispatch}
                />
                <span>{allergy.name}</span>
              </div>
            ))}
          </div>
        )}
      </SlideOver>
    </>
  );
};

export { Page };
