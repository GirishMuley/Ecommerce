export function fetchAllProducts() {
  //TODO: We will not hard-code server URL here
  return new Promise(async (resolve) => {
    const responce = await fetch("http://localhost:8080/products");
    const data = await responce.json();
    resolve({ data });
  });
}

export function fetchProductsByFilters(filter) {
  //filter = {'category':'smartphone'}
  //TODO: on server we will support multi values
  let queryStirng = "";
  for (let key in filter) {
    queryStirng += `${key}=${filter[key]}&`;
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
