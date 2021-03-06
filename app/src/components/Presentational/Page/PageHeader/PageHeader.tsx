import React from "react";
import type { FC, SetStateAction } from "react";
import { Header, Title, Button } from "@base";
import { H1, H6 } from "src/styles";
import { routes } from "src/routes";
import { Link } from "react-router-dom";
import * as styles from "./styles";
import { useSignOutMutation } from "../../SignOut/SignOut.mutation";

interface Props {
  setIsSlideOverOpen: (value: SetStateAction<boolean>) => void;
  restaurantName: string;
}

const PageHeader: FC<Props> = ({ setIsSlideOverOpen, restaurantName }) => {
  const [signOut] = useSignOutMutation();

  return (
    <div className={styles.container}>
      <Header>
        <div className={styles.wrapper}>
          <Title className={H6} type="h6">
            Welcome back,
          </Title>
          <Title className={H1} type="h1">
            {restaurantName}
          </Title>
        </div>
        <Button type="button" colour="primary" size="M" onClick={() => setIsSlideOverOpen(true)}>
          allergies
        </Button>
        <Link to={routes.admin}>
          <Button type="button" colour="primary" size="M">
            sign in
          </Button>
        </Link>
        <Button
          onClick={() => signOut({ variables: { input: { user_id: 1 } } })}
          type="button"
          colour="primary"
          size="M"
        >
          sign out
        </Button>
        <Link to={routes.postCategory}>
          <Button type="button" colour="primary" size="M">
            add new category
          </Button>
        </Link>
      </Header>
    </div>
  );
};

export { PageHeader };
