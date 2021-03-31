import React, { FC } from "react";
import useRestaurant from "../../../graphql/queries/useRestaurant";
import { Header } from "../../Header/Header";
import { Title } from "../../Title/Title";
import { HEADING_TYPE } from "../../../styles/constants/typography";

const PageHeader: FC = () => {
  const { data } = useRestaurant();
  const titleWrapper = `mt-4 text-center sm:mt-0 sm:pt-1 sm:text-left flex flex-col`;

  return (
    <div className="bg-white overflow-hidden shadow mb-2">
      <Header>
        <div className={titleWrapper}>
          <Title className={HEADING_TYPE.H6} type="h6">
            Welcome back,
          </Title>
          <Title className={HEADING_TYPE.H1} type="h1">
            {data?.restaurant.name}
          </Title>
        </div>
      </Header>
    </div>
  );
};

export { PageHeader };
