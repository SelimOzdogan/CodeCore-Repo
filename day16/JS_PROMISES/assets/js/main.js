// JS: Promises
/*
What is a callback?
What is a Promise?
And finally Async/Await syntax

Asynchronous (Async) is when something is going on but, you don't want to wait
until that process is done and to continiue your program but instead, you want to continue while that processs
is happenning in the background so it's happening asynchronously. Rather than synchronous programming
where something happens and you wait until it's completely finished then you will move to the next.

Asynchronous programming is very relevant to JavaScript because, since javascript is the 
only language that works in browsers, we often make requests to servers elsewhere and it 
can take a couple of seconds to get your data back for instance and you might not want your program
to stall and wait until that request comes back, you wanna keep going and keep doing something. So this 
is where callbacks come in and callbacks were used for a long time until JavaScript ES6 (ES 2015)
was released where promises were introduced to the language. 

And Promises give us a more clear and elegant way to handle asynchronous data. And then in ES7 (Async/Await)
was introduced which you are still dealing with promises but, in a different way, more elegant and simpler way 
and it looks more like synchronous programming or flat rather than using callback chains or .then() again and again

*/

const employees = [
    { id: 1, name: "John", title: "Engineer" },
    { id: 2, name: "Max", title: "Manager" },
    { id: 3, name: "Suha", title: "Teacher" }
  ];
  
  const getEmployees = () => {
    setTimeout(() => {
      employees.forEach(employee => console.log(employee));
    }, 1000);
  };
  
  // Callbacks
  const addEmployeeWithCb = (employee, callback) => {
    setTimeout(() => {
      employees.push(employee);
      callback();
    }, 2000);
  };
  
  // addEmployeeWithCb(
  //   { id: 4, name: "Hindreen", title: "Programmer" },
  //   getEmployees
  // );
  
  // Promises
  const addEmployeeWithPromise = employee => {
    // Promise takes in a callback and it takes in two parameters (resolve, and rejcet)
    // So when you resolve promise sucessfully, you call resolve and when something
    // goes wrong, you call reject
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        employees.push(employee);
        // Normally when you deal with data from backend you might encounter errors
        // in that case, we will have an error back from backend but here, we just
        // set the error to false or true to check what's happening in both promise phases (resolve, and reject)
  
        const error = false;
        if (!error) {
          resolve();
        } else {
          reject("Error: here you are sending your error message");
        }
      }, 2000);
    });
  };
  
  // Above we are creating a promise ourselves but, we mostly gonna deal
  // with promises rather than creating them but, we should know how to create them
  
  // Let's deal with the above promise to add an employee to the list of employees
  // addEmployeeWithPromise({ id: 4, name: "Hindreen", title: "Programmer" })
  //   .then(getEmployees)
  //   .catch(err => console.error(err));
  
  // Async / Await
  // We use async/await just to handle promises not create them
  
  // const addEmployeeWithAsyncAwait = async () => {
  //   await addEmployeeWithPromise({
  //     id: 4,
  //     name: "Hindreen",
  //     title: "Programmer"
  //   });
  //   getEmployees();
  // };
  
  async function addEmployeeWithAsyncAwait() {
    await addEmployeeWithPromise({
      id: 4,
      name: "Hindreen",
      title: "Programmer"
    });
    getEmployees();
  }
  
  addEmployeeWithAsyncAwait();
  
  // To create a promise objects, use the promise constructor
  // It takes one argument that is a callback named "resolver"
  
  // 👇 the resolver
  new Promise(() => {});
  
  new Promise((resolve, reject) => {
    resolve("My Promise");
  });
  
  // The resolver callback is passed two arguments:
  // - The first is a function named "resolve"
  // when called, it transitions the promise from the
  // "pending" state to the "resolved" stated. It takes
  // a single argument which becomes the promise's value
  
  // new Promise((resolve, reject) => {
  //   reject(new Error("My Error Message"));
  // });
  
  // The resolver callback is passed two arguments:
  // - The second is a function named "reject".
  // When called, it transitions the promise from the
  // "pending" state to the "rejected" state. It takes
  // a single argument which becomes the promise's value
  
  new Promise((resolve, reject) => {
    // The first of "resolve" or "reject" to be called
    // is the only one that matters. All further calls to these
    // functions will be ignored by the promises.
    resolve("My first value");
    resolve("My second value");
    reject("NOOOOOOO!");
  });
  
  // Demo: Flipping Coins
  const flipCoin = () => {
    return new Promise((resolve, reject) => {
      // When returning a Promise, write your asynchronous
      // code inside the promise's resolver callback
      const coinFace = ["Heads", "Tails"][Math.floor(Math.random() * 2)];
      resolve(coinFace);
    });
  };
  
  // Demo: throwCoin
  const throwCoin = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const coinFace = ["Heads", "Tails"][Math.floor(Math.random() * 2)];
        resolve(coinFace);
      }, 1000 + Math.floor(Math.random() * 3000));
  
      // if the above setTimeout takes more than 3 seconds, the below setTimeout which
      // is 3 seconds will reject the promise with the message the coin was thrown too high
      // setTimeout(() => {
      //   reject(new Error("The coin was thrown too high"));
      // }, 3000);
    });
  };
  
  // Demo: throwDie
  const throwDie = number => {
    return new Promise((res, rej) => {
      const delay = [3, 4, 5][Math.floor(Math.random() * 3)] * 1000;
      const randomNumber = Math.floor(Math.random() * number);
      setTimeout(() => {
        res(randomNumber);
      }, delay);
    });
  };
  
  throwDie(19).then(result => console.log(result));
  
  // Reading of a Promise
  
  // Promise objects have a .then method. Call it with a callback.
  // This callback will be passed as its only argument which is the value of
  // promise when it's resolved
  
  function chainingThenDemo() {
    let coinFaces = [];
  
    //   Horrible code!
    // Order in which faces are added to array is unpredictable
    //   throwCoin().then(promiseValue => {
    //     coinFaces.push(promiseValue);
    //   });
  
    //   throwCoin().then(promiseValue => {
    //     coinFaces.push(promiseValue);
    //   });
  
    //   throwCoin().then(promiseValue => {
    //     coinFaces.push(promiseValue);
    //     console.log(coinFaces);
    //   });
  
    // We can make that all promise execute in order
    // by nesting them inside the then-callback of
    // the previous promise
    // STILL BAD!
    //   throwCoin().then(promiseValue => {
    //     coinFaces.push(promiseValue);
  
    //     throwCoin().then(promiseValue => {
    //       coinFaces.push(promiseValue);
  
    //       throwCoin().then(promiseValue => {
    //         coinFaces.push(promiseValue);
    //         console.log(coinFaces);
    //       });
    //     });
    //   });
  
    // - .then always returns a promise. It will never return teh
    // promise value
    // - the only way to access a promise value is by using .then
    // - you can call .then on a promise multiple times to get its promise
    // value as many times as you want
  
    // (e.g. throwCoin().then(promiseValue => console.log(promiseValue)))
    // -if it returns a promise, .then returns that promise
    // -if it returns a non-promise, .then returns that value inside a promise
    //  (e.g. new Promise((resolve, reject) => resolve("Non-Promise")))
  
    throwCoin()
      .then(promiseValue => {
        coinFaces.push(promiseValue);
  
        return throwCoin();
        // If a then-callback returns a Promise,
        // the following then-callback will be
        // executed once the returned Promise is resolved
      })
      .then(promiseValue => {
        coinFaces.push(promiseValue);
  
        return throwCoin();
      })
      .then(promiseValue => {
        coinFaces.push(promiseValue);
        console.log(coinFaces);
      });
  }
  
  // Sometimes when working with asynchronous code, we would
  // prefer that it runs in parallel vs running sequentially
  
  // There's utility function for promises called
  // 'Promise.all'
  
  // Promise.all(<array-of-promises>)
  // Takes an array of promises and resolves all of them
  // in parallel. It returns a promise that contains all
  // of the resolved values in order in an array
  
  const parallelDemo = () => {
    console.time("Parallel Demo");
    return Promise.all([
      throwCoin(),
      throwCoin(),
      throwCoin(),
      throwCoin(),
      throwCoin()
    ]).then(promiseValues => {
      console.log(promiseValues);
      console.timeEnd("Parallel Demo");
    });
  };
  
  const sequentialDemo = async () => {
    console.time("Sequential Demo");
    const faces = [
      await throwCoin(),
      await throwCoin(),
      await throwCoin(),
      await throwCoin(),
      await throwCoin()
    ];
    console.timeEnd("Sequential Demo");
  
    return faces;
  };
  
  // Demo: create a delay function
  const delay = (ms, val) => {
    console.log("Delay starts");
    return new Promise((res, rej) => {
      setTimeout(() => {
        console.log("Delay completes");
        res(val);
      }, ms);
    });
  };
  
  // Nesting .then()
  delay(1000).then(() => {
    throwCoin().then(value => {
      console.log(value);
    });
  });
  
  // Unwrapping .then()
  delay(1000)
    .then(() => {
      return throwCoin();
    })
    .then(value => {
      console.log(value);
    });
  
  // Race
  Promise.race([
    delay(2000, "blue"),
    delay(4000, "grey"),
    delay(5000, "Black")
  ]).then(val => console.log(val));
  