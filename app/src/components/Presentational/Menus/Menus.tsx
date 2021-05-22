import React, { useContext, useEffect } from "react";
import type { FC } from "react";
import { Button } from "@base";
import { useMenusQuery } from "./Menus.query";
import { GlobalContext, GlobalContextData } from "src/contexts";

const Menus: FC = () => {
  const { setActiveMenuID } = useContext(GlobalContext) as GlobalContextData;

  const { data, error, loading } = useMenusQuery({
    onCompleted: (completedData) => {
      if (completedData?.menus[0].id) {
        setActiveMenuID(completedData?.menus[0].id);
      }
    },
  });

  useEffect(() => {
    if (data?.menus[0].id) return setActiveMenuID(data?.menus[0].id);
  }, [data, setActiveMenuID]);

  if (error) return <p>error</p>;
  if (loading) return <p>loading...</p>;
  return (
    <div className={"flex-row flex w-full justify-between"}>
      {data?.menus?.map((menu) => {
        return (
          <Button
            key={menu.id}
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
  );
};

export { Menus };
