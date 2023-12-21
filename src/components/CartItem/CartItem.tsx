import useStyles from "./CartItem.styles";
import { getSizeName } from "../../utils/utils";
import ItemQuantityAdjust from "../ItemQuantityAdjust/ItemQuantityAdjust";
import {
  decreaseCartItemQuantity,
  increaseCartItemQuantity,
  removeItemFromCart,
} from "../../features/products/productsSlice";
import { useDispatch } from "react-redux";

interface CartItemProps {
  id: number;
  color: string;
  name: string;
  type: string;
  price: number;
  quantity: number;
  size: string;
}

const CartItem = ({
  id,
  color,
  name,
  type,
  price,
  quantity,
  size,
}: CartItemProps) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleIncreaseQuantity = (id: number) => {
    dispatch(increaseCartItemQuantity(id));
  };

  const handleDecreaseQuantity = (id: number) => {
    dispatch(decreaseCartItemQuantity(id));
  };

  const handleRemoveItem = (id: number) => {
    dispatch(removeItemFromCart(id));
  };

  return (
    <div className={classes.cartItem}>
      <div className={classes.imageContainer}></div>
      <div className={classes.itemInfo}>
        <div className={classes.itemName}>
          {name} {type}
        </div>
        <div className={classes.itemVariant}>
          <div>{color}</div>
          <div>{getSizeName(size)}</div>
        </div>
        <ItemQuantityAdjust
          quantity={quantity}
          onAdd={() => handleIncreaseQuantity(id)}
          onSubstract={() => handleDecreaseQuantity(id)}
        />
      </div>
      <div className={classes.itemPrice}>${price}</div>
      <div
        className={classes.removeButton}
        onClick={() => handleRemoveItem(id)}
      >
        Remove
      </div>
    </div>
  );
};

export default CartItem;
