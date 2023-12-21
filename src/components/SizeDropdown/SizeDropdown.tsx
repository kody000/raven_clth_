import { ProductSizes } from "../../features/products/constants";
import useStyles from "./SizeDropdown.style";

interface SizeDropdownProps {
  isDropdownOpen: boolean;
  sizes?: {
    s: boolean;
    m: boolean;
    l: boolean;
    xl: boolean;
  };
  onClick: () => void;
  selectedSize: ProductSizes | null;
  onSelect: (value: ProductSizes) => void;
}

const SizeDropdown = ({
  isDropdownOpen,
  sizes,
  onClick,
  selectedSize,
  onSelect,
}: SizeDropdownProps) => {
  const classes = useStyles();

  return (
    <div className={classes.sizeDropdownContainer}>
      <div className={classes.optionsButtonContainer} onClick={onClick}>
        {selectedSize ?? "Size"}
      </div>
      {isDropdownOpen && (
        <div className={classes.sizeDropdown}>
          {Object.entries(sizes ?? {}).map(([size, available]) => {
            if (available) {
              return (
                <div
                  key={size}
                  className={classes.sizeDropdownOptions}
                  onClick={() => onSelect(size as ProductSizes)}
                >
                  {size}
                </div>
              );
            }
            return null;
          })}
        </div>
      )}
    </div>
  );
};

export default SizeDropdown;
