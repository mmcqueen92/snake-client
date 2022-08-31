// function to run when input from keyboard is given
const handleUserInput = function(key)  {
  if (key === '\u0003') {
    console.log(`Peace`)
    process.exit();
  }
}


// setup interface to handle user input from stdin
const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  //
  stdin.on("data", handleUserInput);
  return stdin;
};

module.exports = {
  setupInput,
}