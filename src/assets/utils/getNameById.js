import getPropByProp from "./getPropByProp";

const getNameById = (array, id) => {
  return getPropByProp(array, id, "Id", "Name");
};

export default getNameById;
