  const bookTicket = () => {
      printMessage("welcome!");
      setTimeout(() => {
        printMessage("login successfully");
        setTimeout(() => {
          printMessage("seat has been selected successfully");
          setTimeout(() => {
            printMessage("your seat has been confirmed!");
            setTimeout(() => {
              printMessage("payment has been done");
              setTimeout(() => {
                printMessage("ticket has been issued");
                printMessage("thank you for visiting the site");
              }, 3000);
            }, 4000);
          }, 3000);
        }, 2000);
      }, 3000);
    }; 