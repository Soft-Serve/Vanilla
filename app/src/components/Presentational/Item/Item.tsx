import React from "react";
import type { FC } from "react";
import { Card, Button } from "@base";
import { useAllergyContext } from "@contexts";
import { useDietaryQuery, MenuItem } from "@graphql";
import intersection from "src/utility/intersection";
import { Dietaries } from "@presentational";
// import { Dietaries } from "@presentational";
// import { ItemSizes } from "./ItemSizes";

interface Props {
  item: MenuItem;
}

const Item: FC<Props> = ({ item }) => {
  const { data, error, loading } = useDietaryQuery({
    variables: {
      itemID: item.id,
    },
  });
  const { activeAllergies } = useAllergyContext();
  if (loading) return <p>loading</p>;
  if (error) return <p>error</p>;
  if (data?.dietaries && intersection(activeAllergies, data?.dietaries)) {
    return null;
  }

  return (
    <Card key={item.id} withPadding={false}>
      {/* <div className="flex justify-between">
        <ItemSizes itemID={item.id} />
      </div> */}
      <Dietaries itemID={item.id} />
      <li className="flow-root p-4">
        <div className="-m-3 p-3 flex rounded-lg transition ease-in-out duration-150 justify-items-stretch">
          <div className="block flex-shrink-0 mr-2">
            <img
              className="w-32 h-20 object-cover rounded-md"
              src="https://picsum.photos/200"
              alt=""
            />
          </div>
          <div className="min-w-0 flex-1 sm:ml-8">
            <h4 className="text-base font-medium text-gray-900 truncate">{item.name}</h4>
            {item.description && <p className="mt-1 text-sm text-gray-500">{item.description}</p>}
          </div>
        </div>
        <Button>add item</Button>
      </li>
    </Card>
  );
};

export { Item };
