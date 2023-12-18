export function addToCart(item) {
  return new Promise(async (resolve) => {
    const responce = await fetch("http://localhost:8080/cart", {
      method: "POST",
      body: JSON.stringify(item),
      headers: { "content-type": "application/json" },
    });
    const data = await responce.json();
    //TODO: on server it will only return some info of user (not password)
    resolve({ data });
  });
}

export function fetchItemsByUserId(userId) {
  //TODO: We will not hard-code server URL here
  return new Promise(async (resolve) => {
    const responce = await fetch("http://localhost:8080/cart?user=" + userId);
    const data = await responce.json();
    resolve({ data });
  });
}

export function updateCart(update) {
  return new Promise(async (resolve) => {
    const responce = await fetch("http://localhost:8080/cart/" + update.id, {
      method: "PATCH",
      body: JSON.stringify(update),
      headers: { "content-type": "application/json" },
    });
    const data = await responce.json();
    //TODO: on server it will only return some info of user (not password)
    resolve({ data });
  });
}

export function deleteItemFromCart(itemId) {
  return new Promise(async (resolve) => {
    const responce = await fetch("http://localhost:8080/cart/" + itemId, {
      method: "DELETE",
      headers: { "content-type": "application/json" },
    });
    const data = await responce.json();
    //TODO: on server it will only return some info of user (not password)
    resolve({ data: { id: itemId } });
  });
}

export function resetCart(userId) {
  //get all items of user's cart - and then delete each
  return new Promise(async (resolve) => {
    const responce = await fetchItemsByUserId(userId);
    const items = responce.data;
    for (let item of items) {
      await deleteItemFromCart(item.id);
    }
    resolve({ status: "success" });
  });
}
