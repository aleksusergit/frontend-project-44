import readlineSync from "readline-sync";

export const greeting = (userName) => {
  userName = readlineSync.question("May I have your name? ");
  console.log("Hello, " + userName + "!");
};
