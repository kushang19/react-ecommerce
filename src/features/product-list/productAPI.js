// A mock function to mimic making an async request for data
export function fetchAllProducts() {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8080/products");
    const data = await response.json();
    resolve({ data });
  });
}

export function fetchProductsByFilters(filter, sort, pagination) {
  // filter = {catageory: ["laptop","home decortaion"]}
  // sort = {_sort:"price", _order:"asc"}
  // pagination = {_page:1, _limit:10}

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

  for (let key in pagination) {
    queryString += `${key}=${pagination[key]}&`;
  }

  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8080/products?" + queryString);
    const data = await response.json();
    // const totalItems = await response.headers.get('X-Total-Count'); // not working we have to figure 
    const totalItems = 100;
    console.log("header --> ", totalItems);
    
    resolve({data:{products:data,totalItems:+totalItems}});
  });
};

export function fetchBrand() {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8080/brand");
    const data = await response.json();
    resolve({ data });
  });
}
export function fetchCategory() {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8080/category");
    const data = await response.json();
    resolve({ data });
  });
}
