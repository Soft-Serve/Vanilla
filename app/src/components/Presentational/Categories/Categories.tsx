import React, { useEffect } from "react";
import type { FC } from "react";
import { useGlobalContext } from "@contexts";
import { Button, Column, Columns, Grid } from "@base";
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
  if (data?.categories) {
    return (
      <Grid size="XL" mobileColumns={3}>
        <Columns>
          {data?.categories?.map(category => (
            <Column key={category.id}>
              <Button
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
      </Grid>
    );
  }
  return <p>{error?.message}</p>;
};

export { Categories };
