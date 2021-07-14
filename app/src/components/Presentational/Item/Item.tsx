import React, { useState } from "react";
import type { FC } from "react";
import { Card, Button, Modal } from "@base";
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
  const [isOpen, setIsOpen] = useState(false);
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

  // const renderUnit = (unit: string) => {
  //   if (unit === "1") return null;
  //   return unit;
  // };

  const handleClick = () => {
    if (sizes?.itemSizes && sizes.itemSizes.length > 1) {
      setIsOpen(true);
    }
  };

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
              src="https://loremflickr.com/320/240/food"
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
          <Button onClick={handleClick}>{renderButtonText()}</Button>
          <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
            {/* {sizes?.itemSizes.map(size => (
              <div className="flex justify-between m-2 p2 items-center" key={size.id}>
                <span className="text-sm font-extrabold text-red-400 m-2 ">
                  $ {size.price.toFixed(2)}
                </span>
                <Pill>{renderUnit(size.unit)}</Pill>
                <Button>select</Button>
              </div>
            ))} */}

            <span className="relative z-0 inline-flex shadow-sm rounded-md">
              <button
                type="button"
                className="relative inline-flex items-center px-4 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
              >
                Years
              </button>
              <button
                type="button"
                className="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
              >
                Months
              </button>
              <button
                type="button"
                className="-ml-px relative inline-flex items-center px-4 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
              >
                Days
              </button>
            </span>
          </Modal>
        </div>
      </div>
    </Card>
  );
};

export { Item };
