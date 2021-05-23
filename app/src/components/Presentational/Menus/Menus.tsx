import React, { useEffect } from "react";
import type { FC } from "react";
import { Button } from "@base";
import { useMenusQuery } from "./Menus.query";
import { useGlobalContext } from "src/contexts";

const Menus: FC = () => {
  const { setMenuID } = useGlobalContext();

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
  return (
    <div className={"flex-row flex w-full justify-between"}>
      {data?.menus?.map((menu) => {
        return (
          <Button
            key={menu.id}
            type="button"
            colour="primary"
            onClick={() => setMenuID(menu.id)}
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
