export function fetchAllProducts() {
  //TODO: We will not hard-code server URL here
  return new Promise(async (resolve) => {
    const responce = await fetch("http://localhost:8080/products");
    const data = await responce.json();
    resolve({ data });
  });
}

export function fetchProductById(id) {
  //TODO: We will not hard-code server URL here
  return new Promise(async (resolve) => {
    const responce = await fetch("http://localhost:8080/products/" + id);
    const data = await responce.json();
    resolve({ data });
  });
}

export function createProduct(product) {
  //TODO: We will not hard-code server URL here
  return new Promise(async (resolve) => {
    const responce = await fetch("http://localhost:8080/products/", {
      method: "POST",
      body: JSON.stringify(product),
      headers: { "content-type": "application/json" },
    });
    const data = await responce.json();
    resolve({ data });
  });
}

export function updateProduct(update) {
  return new Promise(async (resolve) => {
    const responce = await fetch(
      "http://localhost:8080/products/" + update.id,
      {
        method: "PATCH",
        body: JSON.stringify(update),
        headers: { "content-type": "application/json" },
      }
    );
    const data = await responce.json();
    resolve({ data });
  });
}

export function fetchProductsByFilters(filter, sort, pagination) {
  //filter = {'category':['smartphone','laptop]}
  //sort = {_sort:'price',_order='desc'}
  //pagination = {_page:1,_limit=10}
  //TODO: on server we will support multi values
  //TODO : server will filter deleted products
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

export function fetchCategories() {
  //TODO: We will not hard-code server URL here
  return new Promise(async (resolve) => {
    const responce = await fetch("http://localhost:8080/categories");
    const data = await responce.json();
    resolve({ data });
  });
}

export function fetchBrands() {
  //TODO: We will not hard-code server URL here
  return new Promise(async (resolve) => {
    const responce = await fetch("http://localhost:8080/brands");
    const data = await responce.json();
    resolve({ data });
  });
}
