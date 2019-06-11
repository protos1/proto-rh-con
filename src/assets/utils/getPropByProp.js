const getPropByProp = (array, param, propRef, propGet) => {
  let item = array.filter(item => {
    return item[propRef] == param;
  })[0];
  return item[propGet];
};

export default getPropByProp;
