import React, { FC, useContext, useState } from "react";
import { Button } from "../Button/Button";
import { Container } from "../Container/Container";
import { useMenus } from "../../graphql/useMenus";
import { Categories } from "../Categories/Categories";
import { PageHeader } from "./PageHeader/PageHeader";
import { Tab } from "../Tab/Tab";
import { Tabs } from "../Tabs/Tabs";
import { SlideOver } from "../SlideOver/SlideOver";
import { useAllergyContext } from "../../contexts/AllergyContext/useAllergyContext";
import { AllergyContext } from "../../contexts/AllergyContext";

interface Props {
  restaurantID: number;
}

const Page: FC<Props> = ({ restaurantID }) => {
  const { menus, error, loading } = useMenus();
  const [activeMenu, setActiveMenu] = useState(menus?.menus[0].id);
  const [isSlideOverOpen, setIsSlideOverOpen] = useState(false);

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
                    onClick={() => setActiveMenu(menu.id)}
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
        <Categories menuID={activeMenu ? activeMenu : 1} />
        <SlideOver
          restaurantID={restaurantID}
          setIsSlideOverOpen={setIsSlideOverOpen}
          isSlideOverOpen={isSlideOverOpen}
        />
      </>
    );
  }
  return <p>{error?.message}</p>;
};

export { Page };
