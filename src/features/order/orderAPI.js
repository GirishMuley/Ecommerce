export function createOrder(order) {
  return new Promise(async (resolve) => {
    const responce = await fetch("http://localhost:8080/orders", {
      method: "POST",
      body: JSON.stringify(order),
      headers: { "content-type": "application/json" },
    });
    const data = await responce.json();
    //TODO: on server it will only return some info of user (not password)
    resolve({ data });
  });
}

export function updateOrder(order) {
  return new Promise(async (resolve) => {
    const responce = await fetch("http://localhost:8080/orders/" + order.id, {
      method: "PATCH",
      body: JSON.stringify(order),
      headers: { "content-type": "application/json" },
    });
    const data = await responce.json();
    //TODO: on server it will only return some info of user (not password)
    resolve({ data });
  });
}

export function fetchAllOrders(sort, pagination) {
  let queryStirng = "";

  for (let key in sort) {
    queryStirng += `${key}=${sort[key]}&`;
  }

  for (let key in pagination) {
    queryStirng += `${key}=${pagination[key]}&`;
  }
  //TODO: We will not hard-code server URL here
  return new Promise(async (resolve) => {
    const responce = await fetch("http://localhost:8080/orders?" + queryStirng);
    const data = await responce.json();
    const totalOrders = await responce.headers.get("X-Total-Count");
    resolve({ data: { orders: data, totalOrders: +totalOrders } });
  });
}
