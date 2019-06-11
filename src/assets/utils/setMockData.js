const setMockData = entityName => {
  this[entityName].Data = [
    ...this[entityName].Data,
    ...this[entityName].MockData
  ];
};

export default setMockData;
