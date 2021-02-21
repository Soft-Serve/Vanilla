import gql from "graphql-tag";
import React, { FC, useEffect } from "react";
import { useQuery } from "react-apollo";

export interface Restaurant {
  id: number;
  name: string;
  currency: string;
  primary_colour: string;
  secondary_colour: string;
}

const Query = gql`
  query restaurant {
    restaurant @rest(type: Restaurant, path: "restaurants/1/") {
      id
      name
    }
  }
`;
const Person: FC = () => {
  const { data, loading, error }: any = useQuery(Query);
  useEffect(() => {
    console.log(data);
  }, [data]);

  if (loading) {
    return <h4>Loading...</h4>;
  }
  if (error) {
    return <h4>{error.message}</h4>;
  }
  return <h1>{data.restaurant.name}</h1>;
};

export default Person;
