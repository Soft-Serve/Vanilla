import React, { FC, useContext, useState } from "react";
import { Button, Container, Toggle, SlideOver } from "@base";
import { GlobalContext, GlobalContextData, useAllergyContext } from "@contexts";
import { useMenus } from "@graphql";
import { Categories } from "@presentational";
import { PageHeader } from "./PageHeader";

const Page: FC = () => {
  const { menus, error, loading } = useMenus();
  const [isSlideOverOpen, setIsSlideOverOpen] = useState(false);
  const { dispatch, allergies, isAllergyActive } = useAllergyContext();

  const { activeRestaurantID, activeMenuID, setActiveMenuID } = useContext(
    GlobalContext
  ) as GlobalContextData;

  if (loading) return <p>loading</p>;
  if (menus?.menus) {
    return (
      <>
        <PageHeader setIsSlideOverOpen={setIsSlideOverOpen} />
        <Container>
          <div className={"flex-row flex w-full justify-between"}>
            {menus?.menus.map((menu) => {
              return (
                <Button
                  type="button"
                  colour="primary"
                  onClick={() => setActiveMenuID(menu.id)}
                  size="XXL"
                >
                  {menu.name}
                </Button>
              );
            })}
          </div>
        </Container>
        <div style={{ height: "8px" }}></div>
        {activeMenuID && <Categories />}
        {activeRestaurantID && (
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
        )}
      </>
    );
  }
  return <p>{error?.message}</p>;
};

export { Page };
