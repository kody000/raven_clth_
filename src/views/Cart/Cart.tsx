import useStyles from "./Cart.style";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { useSelector } from "react-redux";
import CartItem from "../../components/CartItem/CartItem";
import {
  selectCart,
  selectTotalPriceWithoutDiscount,
  getActiveDiscountPercentage,
  getActiveDiscountValue,
} from "../../features/products/selectors";
import ShipmentSelect from "../../components/ShipmentSelect/ShipmentSelect";
import { shippingOptions } from "../../components/ShipmentSelect/constants";
import { useState } from "react";

const Cart = () => {
  const classes = useStyles();
  const cartItems = useSelector(selectCart);
  const cartPrice = useSelector(selectTotalPriceWithoutDiscount);
  const discountPercentage = useSelector(getActiveDiscountPercentage);
  const discount = useSelector(getActiveDiscountValue);
  const finalPrice = +cartPrice * discount;
  const [shipmentPrice, setShipmentPrice] = useState(0);

  const handleShipmentSelect = (value: number) => {
    setShipmentPrice(value);
  };

  return (
    <>
      <div className="headerSpacer" />
      <div className={classes.sectionContainer}>
        <SectionTitle title={"Your cart"} />
        <div className={classes.generalContainer}>
          <div className={classes.cartContentContainer}>
            {cartItems.length > 0 ? (
              cartItems.map((cartItem) => {
                return <CartItem {...cartItem} />;
              })
            ) : (
              <div className={classes.emptyCartContainer}>Cart is empty</div>
            )}
          </div>
          <div className={classes.recipeContainer}>
            <div className={classes.summaryContainer}>
              <div className={classes.summaryTitle}>Summary</div>
              <div className={classes.summaryContentContainer}>
                <div className={classes.shipmentOptionContainer}>
                  <div className={classes.shipmentHeader}>
                    Choose your shipment option
                  </div>
                  <div>
                    <ShipmentSelect
                      options={shippingOptions}
                      onSelect={handleShipmentSelect}
                    />
                    <div className={classes.divider} />
                  </div>
                  <div className={classes.disclaimerText}>
                    * InPost is avaiable only in Poland
                  </div>
                </div>
                <div>
                  <div className={classes.promoText}>Promo code</div>
                  <input className={classes.promoInput} />
                  <div>
                    <div
                      className={`${classes.priceRow} ${classes.mainPriceRow}`}
                    >
                      <div>Price</div>
                      <div>${cartPrice}</div>
                    </div>
                    {discountPercentage > 0 && (
                      <div
                        className={`${classes.priceRow} ${classes.additionalInfoRow}`}
                      >
                        <div>Discount</div>
                        <div>-{discountPercentage}%</div>
                      </div>
                    )}
                    <div
                      className={`${classes.priceRow} ${classes.additionalInfoRow}`}
                    >
                      <div>Shipment</div>
                      <div>${shipmentPrice}</div>
                    </div>
                    <div className={classes.divider} />
                  </div>
                </div>
              </div>
              <div className={`${classes.priceRow} ${classes.finalPriceRow}`}>
                <div>Final price</div>
                <div className={classes.finalPrice}>${finalPrice}</div>
              </div>
            </div>
            <div className={classes.checkOutButton}>Check out</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
