import SectionTitle from "../../components/SectionTitle/SectionTitle";
import useStyles from "./Profile.style";
import { useSelector } from "react-redux";
import { selectUserOrders } from "../../features/login/selectors";
import OrderHistoryRow from "../../components/OrderHistoryRow/OrderHistoryRow";

const Profile = () => {
  const classes = useStyles();
  const orders = useSelector(selectUserOrders);

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
                  <div className={classes.name}>Konrad Wnuk</div>
                  <div>Grabiszyńska 315/19</div>
                  <div>53-236 Wrocław</div>
                  <div>Lower Silesia</div>
                  <div className={classes.countryRow}>Poland</div>
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
