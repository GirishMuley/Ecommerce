export function fetchAllProducts() {
  //TODO: We will not hard-code server URL here
  return new Promise(async (resolve) => {
    const responce = await fetch("http://localhost:8080/products");
    const data = await responce.json();
    resolve({ data });
  });
}

export function fetchProductsByFilters(filter, sort) {
  //filter = {'category':['smartphone','laptop]}
  //sort = {_sort:'price',_order='desc'}
  //TODO: on server we will support multi values
  let queryStirng = "";
  for (let key in filter) {
    const categoryValues = filter[key];
    if (categoryValues.length) {
      const lastCategoryValue = categoryValues[categoryValues.length - 1];
      queryStirng += `${key}=${filter[key]}&`;
    }
  }

  for (let key in sort) {
    queryStirng += `${key}=${sort[key]}&`;
  }
  //TODO: We will not hard-code server URL here
  return new Promise(async (resolve) => {
    const responce = await fetch(
      "http://localhost:8080/products?" + queryStirng
    );
    const data = await responce.json();
    resolve({ data });
  });
}
