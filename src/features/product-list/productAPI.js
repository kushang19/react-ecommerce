// A mock function to mimic making an async request for data
export function fetchAllProducts() {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8000/products");
    const data = await response.json();
    resolve({ data });
  });
}
export function fetchProductById(id) {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8000/products/" +id);
    const data = await response.json();
    resolve({ data });
  });
}

export function fetchProductsByFilters(filter, sort, pagination) {
  // filter = {catageory: ["laptop","home decortaion"]}
  // sort = {_sort:"price", _order:"asc"}
  // pagination = {_page:1, _limit:10} // this is not working 
  // pagination = {_page:1, _per_page:10} // new update 

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
    const response = await fetch("http://localhost:8000/products?" + queryString);
    const data = await response.json();
    // const totalItems = await response.headers.get('X-Total-Count'); 
    // not working, we have to figure (_page is not working from "json server" end. That's why we are not able to get "X-TOTAL-Count" from headers)
    const totalItems =  data.items;
    console.log("header --> ", totalItems);
    
    resolve({data:{products:data,totalItems:+totalItems}});
  });
};

export function fetchBrand() {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8000/brand");
    const data = await response.json();
    resolve({ data });
  });
}
export function fetchCategory() {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8000/category");
    const data = await response.json();
    resolve({ data });
  });
}
