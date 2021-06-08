// // promisess in js
// async function myFunc(a, b) {
//   if (a < 10) return Promise.reject("its error");
//   return Promise.resolve(a + b);
// }

// myFunc(35, 4)
//   .then((data) => {
//     console.log("its data is : " + data);
//   })
//   .catch((err) => console.log("its err is : " + err));

// async function just() {
//   return new Promise(function (resolve, reject) {
//     setTimeout(() => {
//       reject("i am pending");
//     }, 3000);
//   });
// }

// just()
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// just()(async function run() {
//   try {
//     let data = await just();
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// })();

////  with sumit vi example
const hasMeeting = true;

const meeting = new Promise((resolve, reject) => {
  if (hasMeeting) {
    const meeting = {
      name: "osman",
      designation: "Web Developer",
      duration: "1 min",
    };
    resolve(meeting);
  } else {
    reject(new Error("meeting already sheduled"));
  }
});

meeting
  .then((res) => {
    console.log(JSON.stringify(res));
  })
  .catch((err) => {
    console.log(err.message);
  });
