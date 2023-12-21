import { useState } from "react";
import { useParams } from "react-router-dom";
import useStyles from "./Product.styles";
import { useDispatch, useSelector } from "react-redux";
import { selectProductById } from "../../features/products/selectors";
import SizeDropdown from "../../components/SizeDropdown/SizeDropdown";
import { ProductSizes } from "../../features/products/constants";
import { addToCart } from "../../features/products/productsSlice";
import ItemQuantityAdjust from "../../components/ItemQuantityAdjust/ItemQuantityAdjust";

const Product = () => {
  const classes = useStyles();
  const { productId } = useParams();
  const [productQuantity, setProductQuantity] = useState(1);
  const [productSize, setProductSize] = useState<ProductSizes | null>(null);
  const product = useSelector(selectProductById(productId ?? "1"));
  const [isSizeDropdownOpen, setIsSizeDropdownOpen] = useState(false);
  const dispatch = useDispatch();

  const handleToggleIsSizeDropdownOpen = () => {
    setIsSizeDropdownOpen(!isSizeDropdownOpen);
  };

  const handleAddProduct = () => {
    setProductQuantity((prevState) => prevState + 1);
  };

  const handleSubstractProduct = () => {
    if (productQuantity > 1) {
      setProductQuantity((prevState) => prevState - 1);
    }
  };

  const handleSelectSize = (value: ProductSizes) => {
    setProductSize(value);
  };

  const handleAddToCart = () => {
    if (product && productSize) {
      dispatch(
        addToCart({
          product,
          size: productSize,
          quantity: productQuantity,
        })
      );
    }
  };

  const tableData = [
    ["S", "62 cm", "66 cm", "25 cm"],
    ["M", "64 cm", "69 cm", "27 cm"],
    ["L", "68 cm", "72 cm", "30 cm"],
    ["XL", "72 cm", "76 cm", "33 cm"],
  ];

  return (
    <>
      <div className="headerSpacer" />
      <div className={classes.generalContainer}>
        <div className={classes.leftSideContainer}>
          <div className={classes.productImageContainer}></div>
          <div className={classes.sizeChartContainer}>
            <div className={classes.sizeChartTitle}>Size chart</div>
            <table className={classes.sizeChartTable}>
              <thead>
                <tr className={classes.trStyle}>
                  <th className={classes.thStyle}>Size</th>
                  <th className={classes.thStyle}>Width</th>
                  <th className={classes.thStyle}>Length</th>
                  <th className={classes.thStyle}>Sleeve</th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((row, rowIndex) => (
                  <tr key={rowIndex} className={classes.trStyle}>
                    {row.map((cell, cellIndex) => (
                      <td
                        key={cellIndex}
                        className={
                          cellIndex % 2 === 0
                            ? classes.columnStylesEven
                            : classes.columnStylesOdd
                        }
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className={classes.rightSideContainer}>
          <div className={classes.productNameText}>
            {product?.name} {product?.type}
          </div>
          <div className={classes.productPriceContainer}>
            <div className={classes.productPriceText}>${product?.price}</div>
          </div>
          <div className={classes.optionsContainer}>
            <SizeDropdown
              isDropdownOpen={isSizeDropdownOpen}
              sizes={product?.sizes}
              onClick={handleToggleIsSizeDropdownOpen}
              selectedSize={productSize}
              onSelect={handleSelectSize}
            />
            <ItemQuantityAdjust
              quantity={productQuantity}
              onAdd={handleAddProduct}
              onSubstract={handleSubstractProduct}
            />
          </div>
          <div
            className={`${classes.addToCartButton} ${
              productSize ? "" : classes.addToCartButtonDisabled
            }`}
            onClick={handleAddToCart}
          >
            ADD TO CART
          </div>
          <div className={classes.descriptionContainer}>
            <div className={classes.descriptionTitle}>Description</div>
            <div className={classes.descriptionText}>
              {product?.description}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
