export const doGetApiCall = async (data: any) => {
    return new Promise(async (resolve, reject) => {
      const reqstValues = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",

        },
      };
      fetch(data.url, reqstValues)
        .then((response) => {
          if (response.status === 401) {
            localStorage.clear();
            return resolve({
              code: "TOKEN_EXPIRED",
              message: "Token Expired",
            });
          } else {
            return response.json();
          }
        })
        .then((data) => {
          console.log(data, "data")
          resolve(data)
        })
        .catch((error) => reject(error));
    });
  };