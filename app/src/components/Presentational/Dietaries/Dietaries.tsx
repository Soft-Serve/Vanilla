import React from "react";
import type { FC } from "react";
import { useDietaryQuery } from "@graphql";

interface Props {
    itemID: number;
}
const Dietaries: FC<Props> = ({ itemID }) => {
    const { data: dietaries } = useDietaryQuery({
        variables: {
            itemID,
        },
    });

    return (
        <ul>
            {dietaries?.dietaries.map((dietary) => (
                <li key={dietary.id}>{dietary.name}</li>
            ))}
        </ul>
    );
};

export { Dietaries };
