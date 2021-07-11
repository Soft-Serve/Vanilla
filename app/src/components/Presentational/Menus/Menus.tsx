import React, { useEffect } from "react";
import type { FC } from "react";
import { Tab, Tabs } from "@base";
import { useGlobalContext } from "src/contexts";
import { useMenusQuery } from "@shared";

const Menus: FC = () => {
  const { setMenuID, setActiveMenu, menuID } = useGlobalContext();
  // const [isMenusVisible, setIsMenusVisible] = useState(true);
  const { data, error, loading } = useMenusQuery({
    onCompleted: completedData => {
      if (completedData?.menus[0].id) {
        setMenuID(completedData.menus[0].id);
        setActiveMenu(completedData.menus[0].name);
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
    <Tabs>
      {data?.menus.map((menu, index) => (
        <Tab
          onClick={() => setMenuID(menu.id)}
          numOfTabs={data.menus.length}
          tabIndex={index}
          isActive={menu.id === menuID}
          key={menu.id}
        >
          {menu.name}
        </Tab>
      ))}
    </Tabs>
  );
};

export { Menus };
