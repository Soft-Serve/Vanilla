import React, { FC } from "react";
import * as styles from "./styles";

interface Props {
  hasPadding?: boolean;
}

const Card: FC<Props> = ({ children, hasPadding }) => {
  return (
    <div className={styles.base}>
      <div className={styles.buildBodyStyles(hasPadding)}>{children}</div>
    </div>
  );
};

Card.defaultProps = {
  hasPadding: true,
};

export { Card };
