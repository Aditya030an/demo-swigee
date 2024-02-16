function filterData(text, state) {
  const data =  state.filter((place) =>
    place.name.toLowerCase().includes(text.toLowerCase())
  );
  return data;
}

export default filterData;
