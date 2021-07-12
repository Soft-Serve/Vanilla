import React, { useEffect } from "react";
import type { FC } from "react";
import { useGlobalContext } from "@contexts";
import { Column, Columns, Button } from "@base";
import { useCategoriesQuery } from "./Categories.query";

const Categories: FC = () => {
  const { menuID, setCategoryID } = useGlobalContext();

  const { data, error, loading } = useCategoriesQuery({
    variables: {
      menuID,
    },
    onCompleted: completedData => {
      if (completedData?.categories[0].id) {
        setCategoryID(completedData?.categories[0].id);
      }
    },
  });

  useEffect(() => {
    if (data?.categories[0].id) {
      setCategoryID(data?.categories[0].id);
    }
  }, [data, setCategoryID, menuID]);

  if (loading) return <p>loading</p>;
  if (data?.categories && data?.categories.length > 1) {
    return (
      <Columns>
        {data?.categories?.map(category => (
          <Column key={category.id}>
            <Button
              key={category.id}
              type="button"
              colour="primary"
              size="M"
              onClick={() => setCategoryID(category.id)}
            >
              {category.name}
            </Button>
          </Column>
        ))}
      </Columns>
    );
  }
  return <p>{error?.message}</p>;
};

export { Categories };
