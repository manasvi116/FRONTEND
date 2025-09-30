const printMessage = (msg) => {
  const div = document.getElementById("output");
  const p = document.createElement("p");
  p.textContent = msg;
  div.appendChild(p);
  console.log(msg); // also log in console
};

const wait = (msg, sec) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      printMessage(msg);
      resolve(); // resolve after showing message
    }, sec);
  });
};

const bookTicket = async () => {
  printMessage("welcome!");
  await wait("login successfully", 3000);
  await wait("seat has been selected successfully", 2000);
  await wait("seat has been confirmed", 4000);
  await wait("payment has been done", 2000);
  await wait("ticket has been issued", 3000);
  printMessage("thank you for visiting the site");
};

// run when page loads
bookTicket();
