import useStyles from "./ItemQuantityAdjust.styles";

interface ItemQuantityAdjustProps {
  quantity: number;
  onAdd: () => void;
  onSubstract: () => void;
}

const ItemQuantityAdjust = ({
  quantity,
  onAdd,
  onSubstract,
}: ItemQuantityAdjustProps) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <span onClick={onSubstract}>-</span>
      {quantity}
      <span onClick={onAdd}>+</span>
    </div>
  );
};

export default ItemQuantityAdjust;
