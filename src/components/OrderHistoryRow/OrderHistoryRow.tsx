import useStyles from "./OrderHistoryRow.style";

interface OrderHistoryRowProps {
  id: number;
  date: string;
  status: string;
  total: number;
}

const OrderHistoryRow = ({ id, date, status, total }: OrderHistoryRowProps) => {
  const classes = useStyles();

  return (
    <>
      <div className={`${classes.orderBody} ${classes.orderIdBody}`}>{id}</div>
      <div className={classes.orderBody}>{date}</div>
      <div className={classes.orderBody}>{status}</div>
      <div className={classes.orderBody}>${total}</div>
    </>
  );
};

export default OrderHistoryRow;
