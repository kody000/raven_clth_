import { useState } from "react";
import useStyles from "./ItemCard.styles";
import { ProductType } from "../../features/products/constants";

interface ItemCardProps {
  name: string;
  type: ProductType;
  color: string;
  price: number;
}

const ItemCard = ({ name, type, color, price }: ItemCardProps) => {
  const classes = useStyles();
  const [isDescriptionVisible, setIsDescriptionVisible] = useState(false);

  return (
    <div
      className={classes.container}
      onMouseEnter={() => setIsDescriptionVisible(true)}
      onMouseLeave={() => setIsDescriptionVisible(false)}
    >
      {isDescriptionVisible && (
        <div className={classes.descriptionContainer}>
          <div className={classes.descriptionText}>
            {name} {type}
          </div>
          <div className={classes.descriptionText}>({color})</div>
          <div className={classes.descriptionPrice}>${price}</div>
        </div>
      )}
    </div>
  );
};

export default ItemCard;
