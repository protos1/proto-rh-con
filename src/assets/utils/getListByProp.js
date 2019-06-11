const getListByProp = (array, param, propRef) => {
  if (param === "ALL" || !propRef) return array;
  let item = array.filter(item => {
    return item[propRef] == param;
  });
  return item;
};

export default getListByProp;
