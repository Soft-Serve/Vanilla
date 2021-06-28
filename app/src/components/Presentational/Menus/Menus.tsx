import React, { useEffect, useState } from "react";
import type { FC } from "react";
import { RoundButton, Grid, RadioTile } from "@base";
import { useGlobalContext } from "src/contexts";
import { RadioGroup } from "@headlessui/react";
import { SlideTransition } from "@transitions";
import { useMenusQuery } from "./Menus.query";

const Menus: FC = () => {
  const { setMenuID, menuID } = useGlobalContext();
  const [isMenusVisible, setIsMenusVisible] = useState(true);
  const { data, error, loading } = useMenusQuery({
    onCompleted: (completedData) => {
      if (completedData?.menus[0].id) {
        setMenuID(completedData.menus[0].id);
      }
    },
  });

  useEffect(() => {
    if (data?.menus[0].id) {
      setMenuID(data?.menus[0].id);
    }
  }, [data, setMenuID]);

  if (error) return <p>error</p>;
  if (loading) return <p>loading...</p>;

  const renderMenus = () => {
    return !isMenusVisible ? null : (
      <Grid size="XL">
        {data?.menus?.map((menu) => {
          return (
            <RadioTile
              isChecked={menu.id === menuID}
              value={menu.id}
              key={menu.id}
              onChange={() => setMenuID(menu.id)}
            >
              <div className="flex items-center">
                <div className="text-sm text-center">
                  <RadioGroup.Label
                    as="p"
                    className="font-medium text-pink-500"
                  >
                    {menu.name}
                  </RadioGroup.Label>
                </div>
              </div>
            </RadioTile>
          );
        })}
      </Grid>
    );
  };
  return (
    <div>
      {renderMenus()}
      <div className="text-center mt-2">
        <RoundButton
          size="XL"
          onClick={() => setIsMenusVisible((prevValue) => !prevValue)}
        >
          {isMenusVisible ? "Hide Menus" : "Show Menus"}
        </RoundButton>
      </div>
    </div>
  );
};

export { Menus };
