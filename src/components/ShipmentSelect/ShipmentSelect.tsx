import { useState } from "react";
import { SelectOption } from "./types";
import useStyles from "./ShipmentSelect.style";

interface ShipmentSelectProps {
  options: SelectOption[];
  onSelect: (value: number) => void;
}

const ShipmentSelect = ({ options, onSelect }: ShipmentSelectProps) => {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const classes = useStyles();

  const handleOptionClick = (id: number) => {
    const option = options.find((option) => option.id === id);
    setSelectedOption(id === selectedOption ? null : id);
    if (option) {
      onSelect(option.price);
    }
  };

  return (
    <div className={classes.container}>
      {options.map((option) => (
        <>
          <div className={classes.divider} />
          <div
            key={option.id}
            onClick={() => handleOptionClick(option.id)}
            className={classes.contentContainer}
          >
            <div
              className={`${classes.checkMark} ${
                option.id === selectedOption ? classes.checkMarkActive : ""
              }`}
            />
            <div>{option.label}</div>
            <div className={classes.shipmentPrice}>${option.price}</div>
          </div>
        </>
      ))}
    </div>
  );
};

export default ShipmentSelect;
