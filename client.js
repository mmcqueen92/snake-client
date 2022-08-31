const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541,
  });

  // interpret incoming data as text
  conn.on('data', (data) => {
    console.log(data);
  });

  // function to run when client connects to server
  conn.on('connect', () => {
    console.log(`Connected to server`)
    conn.write(`Name: MMM`);
  });
  conn.setEncoding("utf8");

  return conn;
};


module.exports = connect