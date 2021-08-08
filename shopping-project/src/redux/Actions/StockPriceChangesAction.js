import { STOCK_PRICE_CHANGES } from "../Types";

export const stockPriceChangesAction = (arrayOfChanges) => {
  return {
    type: STOCK_PRICE_CHANGES,
    arrayOfChanges,
  };
};
