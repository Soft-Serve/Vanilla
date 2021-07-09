import React from "react";
import type { FC, SetStateAction } from "react";
import { Header, Title, Button } from "@base";
import { H1, H6 } from "src/styles";
import { routes } from "src/routes";
import { Link } from "react-router-dom";
import * as styles from "./styles";

interface Props {
    setIsSlideOverOpen: (value: SetStateAction<boolean>) => void;
    restaurantName: string;
}
const PageHeader: FC<Props> = ({ setIsSlideOverOpen, restaurantName }) => {
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
                <Button
                    type="button"
                    colour="primary"
                    size="M"
                    onClick={() => setIsSlideOverOpen(true)}
                >
                    allergies
                </Button>
                <Link to={routes.admin}>
                    <Button type="button" colour="primary" size="M">
                        admin
                    </Button>
                </Link>
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
