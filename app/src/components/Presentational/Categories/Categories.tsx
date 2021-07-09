import React, { useEffect } from "react";
import type { FC } from "react";
import { useGlobalContext } from "@contexts";
import { Button, Container, Grid } from "@base";
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
      <Container>
        <Grid size="LG" mobileColumns={3}>
          {data?.categories?.map(category => (
            <Button
              type="button"
              colour="naked"
              size="M"
              onClick={() => setCategoryID(category.id)}
              key={category.id}
            >
              {category.name}
            </Button>
          ))}
        </Grid>
      </Container>
    );
  }
  return <p>{error?.message}</p>;
};

export { Categories };
