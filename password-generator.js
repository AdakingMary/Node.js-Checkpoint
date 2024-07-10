import generator from "generate-password";

const password = generator.generate({
  Length: 10,
  numbers: true,
  symbols: true,
});

// 'uEyMTw32v9'
console.log(password);
