export function createUser(userData) {
  return new Promise(async (resolve) => {
    const responce = await fetch("http://localhost:8080/auth/signup", {
      method: "POST",
      body: JSON.stringify(userData),
      headers: { "content-type": "application/json" },
    });
    const data = await responce.json();

    resolve({ data });
  });
}

export function checkUser(loginInfo) {
  return new Promise(async (resolve, reject) => {
    try {
      const responce = await fetch("http://localhost:8080/auth/login", {
        method: "POST",
        body: JSON.stringify(loginInfo),
        headers: { "content-type": "application/json" },
      });
      if (responce.ok) {
        const data = await responce.json();
        resolve({ data });
      } else {
        const error = await responce.text();
        reject(error);
      }
    } catch (error) {
      reject(error);
    }
  });
}

export function loginUser(loginInfo) {
  return new Promise(async (resolve, reject) => {
    try {
      const responce = await fetch("http://localhost:8080/auth/login", {
        method: "POST",
        body: JSON.stringify(loginInfo),
        headers: { "content-type": "application/json" },
      });
      if (responce.ok) {
        const data = await responce.json();
        resolve({ data });
      } else {
        const error = await responce.text();
        reject(error);
      }
    } catch (error) {
      reject(error);
    }
  });
}

export function checkAuth() {
  return new Promise(async (resolve, reject) => {
    try {
      const responce = await fetch("http://localhost:8080/auth/check");
      if (responce.ok) {
        const data = await responce.json();
        resolve({ data });
      } else {
        const error = await responce.text();
        reject(error);
      }
    } catch (error) {
      reject(error);
    }
  });
}

// export function updateUser(update) {
//   return new Promise(async (resolve) => {
//     const responce = await fetch("http://localhost:8080/users/" + update.id, {
//       method: "PATCH",
//       body: JSON.stringify(update),
//       headers: { "content-type": "application/json" },
//     });
//     const data = await responce.json();
//     //TODO: on server it will only return some info of user (not password)
//     resolve({ data });
//   });
// }

export function signOut(userId) {
  return new Promise(async (resolve, reject) => {
    try {
      const responce = await fetch("http://localhost:8080/auth/logout");
      if (responce.ok) {
        resolve({ data: "success" });
      } else {
        const error = await responce.text();
        reject(error);
      }
    } catch (error) {
      reject(error);
    }
  });
}

export function resetPasswordRequest(email) {
  return new Promise(async (resolve, reject) => {
    try {
      const responce = await fetch(
        "http://localhost:8080/auth/reset-password-request",
        {
          method: "POST",
          body: JSON.stringify({ email }),
          headers: { "content-type": "application/json" },
        }
      );
      if (responce.ok) {
        const data = await responce.json();
        resolve({ data });
      } else {
        const error = await responce.text();
        reject(error);
      }
    } catch (error) {
      reject(error);
    }
  });
}

export function resetPassword(data) {
  return new Promise(async (resolve, reject) => {
    try {
      const responce = await fetch(
        "http://localhost:8080/auth/reset-password",
        {
          method: "POST",
          body: JSON.stringify(data),
          headers: { "content-type": "application/json" },
        }
      );
      if (responce.ok) {
        const data = await responce.json();
        resolve({ data });
      } else {
        const error = await responce.text();
        reject(error);
      }
    } catch (error) {
      reject(error);
    }
  });
}
