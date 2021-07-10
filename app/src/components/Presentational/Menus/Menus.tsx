import React, { useEffect, useState } from "react";
import type { FC } from "react";
import { Grid, RadioTile } from "@base";
import { useGlobalContext } from "src/contexts";
import { RadioGroup } from "@headlessui/react";
import { useMenusQuery } from "@shared";

const Menus: FC = () => {
  const { setMenuID, menuID } = useGlobalContext();
  const [isMenusVisible, setIsMenusVisible] = useState(true);
  const { data, error, loading } = useMenusQuery({
    onCompleted: completedData => {
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
  return (
    <Grid size="XXL">
      <RadioTile
        isChecked={isMenusVisible}
        value={isMenusVisible}
        onChange={() => setIsMenusVisible(prevValue => !prevValue)}
      >
        <RadioGroup.Label as="p" className="font-medium text-sm text-center text-red-400">
          {isMenusVisible ? "Hide Menu's" : "Show Menu's"}
        </RadioGroup.Label>
      </RadioTile>
      {isMenusVisible &&
        data?.menus?.map(menu => {
          return (
            <RadioTile
              isChecked={menu.id === menuID}
              value={menu.id}
              key={menu.id}
              onChange={() => {
                setMenuID(menu.id);
                setIsMenusVisible(false);
              }}
            >
              <RadioGroup.Label as="p" className="font-medium text-sm text-center text-gray-600">
                {menu.name}
              </RadioGroup.Label>
            </RadioTile>
          );
        })}
    </Grid>
  );
};

export { Menus };
