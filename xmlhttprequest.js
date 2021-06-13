const getDataId = document.getElementById("getdata"),
  sendDataId = document.getElementById("senddata");

const httpRequest = (method, url, data = "") => {
  const promise = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.open(method, url);
    xhr.responseType = "json";
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(data);
    xhr.onload = function () {
      if (xhr.status <= 400) {
        resolve(xhr.response);
      } else {
        reject(new Error("Something Wrong on your request"));
      }
    };
    xhr.onerror = function () {
      reject(new Error("There are network Error"));
    };
  });
  return promise;
};

const getData = () => {
  httpRequest("GET", "https://jsonplaceholder.typicode.com/todos/1")
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

const sendData = () => {
  httpRequest(
    "POST",
    "https://jsonplaceholder.typicode.com/posts",
    JSON.stringify({
      title: "foo",
      body: "23232",
      userId: 1,
    })
  ).then((res) => console.log(res));
};

getDataId.addEventListener("click", getData);
sendDataId.addEventListener("click", sendData);
