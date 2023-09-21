import { useSelector } from 'react-redux';
import { convertToIndianFormat } from '../CommonFunctions/helperFunction';
import { priceCalculator } from '../CommonFunctions/PriceCalculator';
import useGeoData from './useGeoData';

const usePriceDifference = () => {
  const currency = useSelector((state) => state.currencyList);
  const [currencyData] = useGeoData()
  const getPrice = (val) => {
    let rate
    if (currencyData?.currency_icon == "₹" && currency.selectedCurrency.data.symbol == "$") {
      rate = 0.012
    }
    else if (currencyData?.currency_icon == "$" && currency.selectedCurrency.data.symbol == "₹") {
      rate = 83
    } else {
      rate = 1
    }
    if (currency) {
      if (currency.selectedCurrency && currency.selectedCurrency.data.rate) return `${currency.selectedCurrency.data.symbol ? currency.selectedCurrency.data.symbol : currencyData?.currency_icon || currencyData?.symbol} ${convertToIndianFormat(priceCalculator(val, currency.selectedCurrency.data.commision, rate))}`;
      else return `${currency.defaultCurrency.data.symbol ? currency.defaultCurrency.data.symbol : currencyData?.currency_icon || currencyData?.symbol} ${convertToIndianFormat(priceCalculator(val, currency.defaultCurrency.data.commision, rate))}`;
    }
    return val;
  }

  const priceDifference = (item) => {
    if (item?.discountPercentage > 0) {
      if (item?.defaultVariation) {
        if (item?.discount_by_percent) {
          return `${getPrice((100 - item.discountPercentage) / 100 * (item.price))}.00`
        } else {
          return `${getPrice(item.price - item.discountPercentage)}.00`
        }
      } else {
        if (item?.discount_by_percent) {
          return `${getPrice((100 - item.discountPercentage) / 100 * (item.price + item.salePrice))}.00`
        } else {
          return `${getPrice((item.price + item.salePrice) - item.discountPercentage)}.00`
        }
      }
    } else {
      if (item?.defaultVariation) {
        return `${getPrice(item.price)}.00`
      } else {
        return `${getPrice(item.price + item.salePrice)}.00`
      }
    }
  };

  const actualPrice = (item) => {
    if (item?.discountPercentage > 0) {
      if (item?.defaultVariation) {
        return `${getPrice((item.price))}.00`
      } else {
        return `${getPrice((item.price + item.salePrice))}.00`
      }
    }
  }

  const discount = (item) => {
    if (item?.discountPercentage > 0) {
      if (item?.discount_by_percent) {
        return `${item.discountPercentage}%`
      } else {
        return `${getPrice(item.discountPercentage)}`
      }
    }
    else {
      return ""
    }
  }

  const shopProductsPriceDiff = (item) => {
    if (item?.discountPercentage && item?.discountPercentage > 0) {
      return `${getPrice(item.salePrice)}.00`
    }
    else {
      return `${getPrice(item.price)}.00`
    }
  }

  const shopProductsActualPrice = (item) => {
    if (item?.discountPercentage && item?.discountPercentage > 0) {
      return item.price ? `${getPrice((item.price))}.00` : 0
    }
  }


  return [priceDifference, actualPrice, discount, getPrice, shopProductsPriceDiff, shopProductsActualPrice];
};

export default usePriceDifference;
