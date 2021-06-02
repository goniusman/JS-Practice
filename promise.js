// promisess in js
async function myFunc(a, b) {
  if (a < 10) return Promise.reject("its error");
  return Promise.resolve(a + b);
}

myFunc(35, 4)
  .then((data) => {
    console.log("its data is : " + data);
  })
  .catch((err) => console.log("its err is : " + err));

async function just() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      reject("i am pending");
    }, 3000);
  });
}

just()
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

just()(async function run() {
  try {
    let data = await just();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
})();
