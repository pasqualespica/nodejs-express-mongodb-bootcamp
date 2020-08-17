module.exports =  (temp, prodcut) => {
  let output = temp.replace(/{%PRODUCTNAME%}/g, prodcut.productName);
  output = output.replace(/{%IMAGE%}/g, prodcut.image);
  output = output.replace(/{%PRICE%}/g, prodcut.price);
  output = output.replace(/{%FROM%}/g, prodcut.from);
  output = output.replace(/{%NUTRIENTS%}/g, prodcut.nutrients);
  output = output.replace(/{%QUANTITY%}/g, prodcut.quantity);
  output = output.replace(/{%ID%}/g, prodcut.id);
  output = output.replace(/{%DESCRIPTION%}/g, prodcut.description);

  if (!prodcut.organic)
    output = output.replace(/{%NOT_ORGANIC%}/g, "not-organic");

  return output;
};