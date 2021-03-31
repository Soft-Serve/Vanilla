import React, { FC, useState } from "react";
import { useCategories } from "../../graphql/useCategories";
import { Button } from "../Button/Button";
import { Container } from "../Container/Container";
import { Grid } from "../Grid/Grid";
import { Items } from "../Items/Items";

interface Props {
  menuID: number;
}
const Categories: FC<Props> = ({ menuID }) => {
  const { categories, error, loading } = useCategories(menuID);
  const [activeCategory, setActiveCategory] = useState(
    categories?.categories[0].id
  );

  if (loading) return <p>loading</p>;
  if (categories?.categories) {
    return (
      <Container>
        <Grid size="LG" mobileColumns={3}>
          {categories.categories.map((category) => (
            <Button
              onClick={() => setActiveCategory(category.id)}
              key={category.id}
            >
              {category.name}
            </Button>
          ))}
        </Grid>

        <Items categoryID={activeCategory ? activeCategory : 1} />
      </Container>
    );
  }
  return <p>{error?.message}</p>;
};

export { Categories };
