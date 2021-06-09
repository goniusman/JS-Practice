///// call back helth

// 1. blocking behaviour with example // sync behaviour
const processOrderBlocking = (customer) => {
  console.log(`processing order for customer 1`);
  var currntTime = new Date().getTime();
  while (currntTime + 3000 >= new Date().getTime());
  console.log(`order processed for customer 1`);
};

// console.log(`take order for customer 1`);
// processOrderBlocking();
// console.log(`completed order for customer 1`);

/// non-blocking behaviour with exmaple // async behaviour
const processOrderNonBlocking = (customer) => {
  console.log(`processing order for customer 1`);
  var currntTime = new Date().getTime();
  // async function
  setTimeout(() => {
    console.log(`non-blocking function`);
  }, 3000);
  console.log(`order processed for customer 1`);
};

// console.log(`take order for customer 1`);
// processOrderNonBlocking();
// console.log(`completed order for customer 1`);

//// async function with example
const takeOrder = (customer, callback) => {
  console.log(`take order for ${customer}`);
  callback(customer);
};

const processOrder = (customer, callback) => {
  console.log(`processing order for ${customer}`);
  setTimeout(() => {
    console.log(`cooking completed for ${customer}`);
    console.log(`order processed for ${customer}`);
    callback(customer);
  }, 3000);
};

const completed = (customer) => {
  console.log(`completed order for ${customer}`);
};

// takeOrder("customer 1", (customer) => {
//   processOrder(customer, (customer) => {
//     completed(customer);
//   });
// });
// console.log(`hello`);
// takeOrder("customer 2", (customer) => {
//   processOrder(customer, (customer) => {
//     completed(customer);
//   });
// });

///// create async function

const hasMeeting = true;
const meeting = new Promise((resolve, reject) => {
  if (!hasMeeting) {
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
///// without try catch block
// async function createasync() {
//   const mettingDetails = await meeting;
//   console.log(mettingDetails);
// }

// for handleing error, we should use try catch blok
async function createasyncs() {
  try {
    const mettingDetails = await meeting;
    console.log(mettingDetails);
  } catch (error) {
    console.log(error);
  }
}

createasyncs();

console.log("at first i will shown before createasync() ");
