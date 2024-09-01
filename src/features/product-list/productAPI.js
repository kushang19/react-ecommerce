// A mock function to mimic making an async request for data
export function fetchAllProducts() {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8080/products");
    const data = await response.json();
    resolve({ data });
  });
}
export function fetchProductsByFilters(filter, sort) {
  // filter = {catageory: ["laptop","home decortaion"]}
  // sort = {_sort:"price", _order:"asc"}

  // TODO: support multiple value on server in filter

  let queryString = "";
  for (let key in filter) {

    const catageoryValue = filter[key];
    
    if (catageoryValue.length) {
      const lastCatageoryValue = catageoryValue[catageoryValue.length - 1];
      queryString += `${key}=${lastCatageoryValue}&`;
    }
  }

  for (let key in sort) {
    queryString += `${key}=${sort[key]}&`;
  }

  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8080/products?" + queryString);
    const data = await response.json();
    resolve({ data });
  });
}
