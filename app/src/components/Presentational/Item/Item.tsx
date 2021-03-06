import React from "react";
import type { FC } from "react";
import { Card, Button } from "@base";
import { useAllergyContext } from "@contexts";
import { useDietaryQuery, MenuItem } from "@graphql";
import intersection from "src/utility/intersection";
import { Dietaries } from "@presentational";
import { useItemSizeQuery } from "@shared";
import { ItemSizes } from "./ItemSizes";

interface Props {
  item: MenuItem;
}

const Item: FC<Props> = ({ item }) => {
  const { data, error, loading } = useDietaryQuery({
    variables: {
      itemID: item.id,
    },
  });

  const {
    data: sizes,
    loading: isSizesLoading,
    error: isSizesError,
  } = useItemSizeQuery({
    variables: {
      itemID: item.id,
    },
  });
  const { activeAllergies } = useAllergyContext();

  const renderButtonText = () => {
    if (sizes?.itemSizes.length === 1) return "Add Item";
    return "Explore Sizes";
  };

  if (data?.dietaries && intersection(activeAllergies, data?.dietaries)) {
    return null;
  }

  if (loading || isSizesLoading) return <p>loading</p>;
  if (error || isSizesError) return <p>error</p>;

  return (
    <Card key={item.id} withPadding={false}>
      <Dietaries itemID={item.id} />
      <div className="flow-root px-2 py-4">
        <div className="-m-3 p-3 flex rounded-lg transition ease-in-out duration-150 justify-items-stretch">
          <div className="block flex-shrink-0 mr-2">
            <img
              className="w-32 h-20 object-cover rounded-md"
              src="https://picsum.photos/200"
              alt=""
            />
          </div>
          <div className="min-w-0 flex-1 sm:ml-8">
            <div className="flex justify-between">
              <h4 className="text-base font-medium text-gray-900">{item.name}</h4>
            </div>

            {item.description && <p className="mt-1 text-sm text-gray-500">{item.description}</p>}
          </div>
        </div>
        <div className="flex justify-between w-full mt-2 items-center">
          <ItemSizes itemID={item.id} />
          <Button>{renderButtonText()}</Button>
        </div>
      </div>
    </Card>
  );
};

export { Item };
