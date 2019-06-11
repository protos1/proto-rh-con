import getPropByProp from "./getPropByProp";

const getPropById = (array, id, prop) => {
  return getPropByProp(array, id, "Id", prop);
};

export default getPropById;
