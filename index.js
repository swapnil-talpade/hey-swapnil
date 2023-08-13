#!/usr/bin/env node
// Function to log your details in the terminal
function logDetails() {
  const message = "Hey there! I'm Swapnil, currently sde-2 @procedure";
  const githubLink = "https://github.com/swapnil-talpade";
  const twitterLink = "https://twitter.com/TalpadeSwapnil";
  const linkedinLink = "https://www.linkedin.com/in/swapnil-talpade/";
  const wesbiteLink = "https://swapniltalpade.netlify.app/";

  // Create a colorful box using ANSI escape codes
  const colorfulBox = `    \x1b[38;5;51m+----------------------------------------------------------------------+
    |          \x1b[38;5;148m${message}\x1b[38;5;51m          |
    +----------------------------------------------------------------------+
    | \x1b[38;5;148mTwitter:\x1b[0m \x1b[38;5;51m${twitterLink}                          \x1b[38;5;51m|
    | \x1b[38;5;148mGithub:\x1b[0m \x1b[38;5;51m${githubLink}                           \x1b[38;5;51m|
    | \x1b[38;5;148mLinkedIn:\x1b[0m \x1b[38;5;51m${linkedinLink}               \x1b[38;5;51m|
    | \x1b[38;5;148mPortfolio:\x1b[0m  \x1b[38;5;51m${wesbiteLink}                      \x1b[38;5;51m|
    +----------------------------------------------------------------------+\x1b[0m`;

  // Log the colorful box in the terminal
  console.log(colorfulBox);
}
// Call the function to log your details
logDetails();
