export function fetchLoggedInUserOrders(userId) {
  return new Promise(async (resolve) => {
    const responce = await fetch(
      "http://localhost:8080/orders/?user.id=" + userId
    );
    const data = await responce.json();
    resolve({ data });
  });
}
