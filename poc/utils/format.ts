import Decimal from "decimal.js";

/**
 * @dev Formats a bigint value by dividing it by 10^decimals and converting to a string.
 *      Useful for displaying human-readable token amounts.
 *
 * @param {bigint} value - The bigint value to format.
 * @param {number} [decimals=9] - The number of decimal places (default: 9 for TON).
 *
 * @returns {string} The formatted value as a string.
 */
export const formatUnits = (value: bigint, decimals: number = 9) => {
  return new Decimal(value.toString()).div(10 ** decimals).toString();
};
