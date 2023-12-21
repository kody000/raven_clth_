import SectionTitle from "../../components/SectionTitle/SectionTitle";
import useStyles from "./Profile.style";
import { useSelector } from "react-redux";
import { selectUserOrders } from "../../features/login/selectors";
import OrderHistoryRow from "../../components/OrderHistoryRow/OrderHistoryRow";
import { selectLoggedInUser } from "../../features/login/selectors";

const Profile = () => {
  const classes = useStyles();
  const orders = useSelector(selectUserOrders);
  const loggedInUser = useSelector(selectLoggedInUser);

  return (
    <>
      <div className="headerSpacer" />
      <div className={classes.sectionContainer}>
        <SectionTitle title={"My Account"} />
        <div className={classes.generalContainer}>
          <div className={classes.ordersContainer}>
            <div className={classes.orderHeaderContainer}>
              <div className={classes.orderHeader}>Order</div>
            </div>
            <div className={classes.orderHeaderContainer}>
              <div className={classes.orderHeader}>Date</div>
            </div>
            <div className={classes.orderHeaderContainer}>
              <div className={classes.orderHeader}>Status</div>
            </div>
            <div className={classes.orderHeaderContainer}>
              <div className={classes.orderHeader}>Total</div>
            </div>
            {orders.map((order, index) => {
              return <OrderHistoryRow key={index} {...order} />;
            })}
          </div>
          <div>
            <div className={classes.addressContainer}>
              <div className={classes.addressDetailsTitle}>Details</div>
              <div className={classes.addressContent}>
                <div className={classes.address}>
                  <div className={classes.name}>
                    {loggedInUser?.firstName} {loggedInUser?.lastName}
                  </div>
                  <div>{loggedInUser?.addresses[0].street}</div>
                  <div>
                    {loggedInUser?.addresses[0].zipCode}{" "}
                    {loggedInUser?.addresses[0].city}
                  </div>
                  <div>{loggedInUser?.addresses[0].state}</div>
                  <div className={classes.countryRow}>
                    {loggedInUser?.addresses[0].country}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
