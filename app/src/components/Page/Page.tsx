import React, { FC, useState } from "react";
import { Restaurant } from "../../graphql/queries/useRestaurant";
import { useCategories } from "../../graphql/useCategories";
import { Button } from "../Button/Button";
import { Grid } from "../Grid/Grid";
import { Container } from "../Container/Container";
import useItems from "../../graphql/useItems/useItems";
import { Items } from "../Items/Items";
interface Props {
  data: Restaurant;
}

const Page: FC<Props> = ({ data }) => {
  const { categories, error, loading } = useCategories(data.id);
  const [activeCategory, setActiveCategory] = useState(
    categories ? categories.categories[0].id : 1
  );

  if (loading) return <p>loading</p>;
  if (categories?.categories) {
    return (
      <Container>
        <Grid>
          {categories.categories.map((category) => (
            <Button
              onClick={() => setActiveCategory(category.id)}
              key={category.id}
            >
              {category.name}
            </Button>
          ))}
        </Grid>
        <Items itemID={activeCategory} />
      </Container>
    );
  }
  return <p>{error?.message}</p>;
};

export { Page };
