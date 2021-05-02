import React, { FC, SetStateAction } from "react";
import { Header, Title, Button } from "@base";
import { useRestaurant } from "@graphql";
import { H1, H6 } from "src/styles";
import * as styles from "./styles";

interface Props {
  setIsSlideOverOpen: (value: SetStateAction<boolean>) => void;
}
const PageHeader: FC<Props> = ({ setIsSlideOverOpen }) => {
  const { data } = useRestaurant();

  return (
    <div className={styles.container}>
      <Header>
        <div className={styles.wrapper}>
          <Title className={H6} type="h6">
            Welcome back,
          </Title>
          <Title className={H1} type="h1">
            {data?.restaurant.name}
          </Title>
        </div>
        <Button
          type="button"
          colour="primary"
          size="M"
          onClick={() => setIsSlideOverOpen(true)}
        >
          allergies
        </Button>
      </Header>
    </div>
  );
};

export { PageHeader };
