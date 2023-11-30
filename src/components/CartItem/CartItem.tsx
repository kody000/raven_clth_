import useStyles from "./CartItem.styles";

const CartItem = () => {
  const classes = useStyles();

  return (
    <div className={classes.cartItem}>
      <div className={classes.imageContainer}></div>
      <div className={classes.itemInfo}>
        <div className={classes.itemName}>Pain T-shirt</div>
        <div className={classes.itemVariant}>
          <div>Black</div>
          <div>Small</div>
        </div>
        <div className={classes.itemQuantity}>
          <span>-</span>1<span>+</span>
        </div>
      </div>
      <div className={classes.itemPrice}>$85.99</div>
      <div className={classes.removeButton}>Remove</div>
    </div>
  );
};

export default CartItem;
