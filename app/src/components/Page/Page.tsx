import React, { FC, useContext, useState } from "react";
import { Button } from "../Button/Button";
import { Container } from "../Container/Container";
import { useMenus } from "../../graphql/useMenus";
import { Categories } from "../Categories/Categories";
import { PageHeader } from "./PageHeader/PageHeader";
import { Tab } from "../Tab/Tab";
import { Tabs } from "../Tabs/Tabs";
import { SlideOver } from "../SlideOver/SlideOver";
import { GlobalContext, GlobalContextData } from "../../contexts/GlobalContext";

const Page: FC = () => {
  const { menus, error, loading } = useMenus();
  const [isSlideOverOpen, setIsSlideOverOpen] = useState(false);
  const { activeRestaurantID, activeMenuID, setActiveMenuID } = useContext(
    GlobalContext
  ) as GlobalContextData;

  if (loading) return <p>loading</p>;
  if (menus?.menus) {
    return (
      <>
        <PageHeader setIsSlideOverOpen={setIsSlideOverOpen} />
        <Container>
          <Tabs numberOfTabs={menus?.menus.length ? menus.menus.length : 3}>
            {menus?.menus.map((menu) => {
              return (
                <Tab key={menu.id}>
                  <Button
                    onClick={() => setActiveMenuID(menu.id)}
                    colour="NAKED"
                    size="XXL"
                  >
                    {menu.name}
                  </Button>
                </Tab>
              );
            })}
          </Tabs>
        </Container>
        <div style={{ height: "8px" }}></div>
        {activeMenuID && <Categories />}
        {activeRestaurantID && (
          <SlideOver
            restaurantID={activeRestaurantID}
            setIsSlideOverOpen={setIsSlideOverOpen}
            isSlideOverOpen={isSlideOverOpen}
          />
        )}
      </>
    );
  }
  return <p>{error?.message}</p>;
};

export { Page };
