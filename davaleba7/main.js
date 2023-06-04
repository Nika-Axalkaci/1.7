// TASK1
function mySetTimeout(delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, delay);
  });
}
// TASK2
function makeToys(time) {
  return new Promise(function exec(resolve, reject) {
    setTimeout(function () {
      if (Math.random() > 0.1) {
        resolve("undefected");
      } else {
        reject("defected");
      }
    }, time);
  });
}

function sellToys(status, time) {
  return new Promise(function exec(resolve, reject) {
    setTimeout(function () {
      if (status === "undefected") {
        if (Math.random() > 0.5) {
          resolve("Toy sold");
        } else {
          reject("Toy did not sell");
        }
      }
    }, time);
  });
}

function deliverToys() {
  return new Promise(function exec(resolve) {
    setTimeout(function () {
      resolve("Toys delivered");
    }, 2000);
  });
}

const timeToMakeToy = 3000;
const timeToSellToy = 1000;
const timeToDeliverToys = 2000;

makeToys(timeToMakeToy)
  .then((status) => {
    console.log(status);
    return sellToys(status, timeToSellToy);
  })
  .then((res) => {
    console.log(res);
    return deliverToys();
  })
  .then((deliveryStatus) => {
    console.log(deliveryStatus);
  })
  .catch((err) => console.log(err));
