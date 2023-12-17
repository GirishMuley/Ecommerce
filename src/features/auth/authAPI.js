export function createUser(userData) {
  return new Promise(async (resolve) => {
    const responce = await fetch("http://localhost:8080/users", {
      method: "POST",
      body: JSON.stringify(userData),
      headers: { "content-type": "application/json" },
    });
    const data = await responce.json();
    //TODO: on server it will only return some info of user (not password)
    resolve({ data });
  });
}

export function checkUser(loginInfo) {
  return new Promise(async (resolve, reject) => {
    const email = loginInfo.email;
    const password = loginInfo.password;
    const responce = await fetch("http://localhost:8080/users?email=" + email);
    const data = await responce.json();
    console.log({ data });
    if (data.length) {
      if (password === data[0].password) {
        resolve({ data: data[0] });
      } else {
        reject({ message: "Wrong credentials" });
      }
    } else {
      reject({ message: "This user does not exist." });
    }
    //TODO: on server it will only return some info of user (not password)
  });
}

export function updateUser(update) {
  return new Promise(async (resolve) => {
    const responce = await fetch("http://localhost:8080/users/" + update.id, {
      method: "PATCH",
      body: JSON.stringify(update),
      headers: { "content-type": "application/json" },
    });
    const data = await responce.json();
    //TODO: on server it will only return some info of user (not password)
    resolve({ data });
  });
}
