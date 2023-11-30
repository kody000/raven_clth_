import useStyles from "./Cart.style";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { useSelector } from "react-redux";
import CartItem from "../../components/CartItem/CartItem";
import { selectCart } from "../../features/products/selectors";
import { Link } from "react-router-dom";

const Cart = () => {
  const classes = useStyles();
  const cartItems = useSelector(selectCart);

  return (
    <>
      <div className="headerSpacer" />
      <div className={classes.sectionContainer}>
        <SectionTitle title={"Your cart"} />
        <div className={classes.generalContainer}>
          <div className={classes.cartContentContainer}>
            {cartItems.map((cartItem) => {
              console.log(cartItems);
              return <CartItem />;
            })}
          </div>
          <div className={classes.summaryContainer}></div>
        </div>
      </div>
    </>
  );
};

export default Cart;
