const app = require("./app");
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("APLIKACJA ZOSTALA URUCHOMIONA NA PORCIE 3000");
});
