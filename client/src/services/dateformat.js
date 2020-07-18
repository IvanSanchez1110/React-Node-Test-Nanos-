/**
 * Format Date
 * @function
 */
export const formatDate = val => {
  var options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(val).toLocaleDateString("en-US", options);
};
