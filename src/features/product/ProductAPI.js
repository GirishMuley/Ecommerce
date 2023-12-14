export function fetchAllProducts() {
  //TODO: We will not hard-code server URL here
  return new Promise(async (resolve) => {
    const responce = await fetch("http://localhost:8080/products");
    const data = await responce.json();
    resolve({ data });
  });
}

export function fetchProductsByFilters(filter, sort, pagination) {
  //filter = {'category':['smartphone','laptop]}
  //sort = {_sort:'price',_order='desc'}
  //pagination = {_page:1,_limit=10}
  //TODO: on server we will support multi values
  let queryStirng = "";
  for (let key in filter) {
    const categoryValues = filter[key];
    if (categoryValues.length) {
      const lastCategoryValue = categoryValues[categoryValues.length - 1];
      queryStirng += `${key}=${lastCategoryValue}&`;
    }
  }

  for (let key in sort) {
    queryStirng += `${key}=${sort[key]}&`;
  }
  console.log(pagination);
  for (let key in pagination) {
    queryStirng += `${key}=${pagination[key]}&`;
  }
  //TODO: We will not hard-code server URL here
  return new Promise(async (resolve) => {
    const responce = await fetch(
      "http://localhost:8080/products?" + queryStirng
    );
    const data = await responce.json();
    const totalItems = await responce.headers.get("X-Total-Count");
    resolve({ data: { products: data, totalItems: +totalItems } });
  });
}
