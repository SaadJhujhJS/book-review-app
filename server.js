// Entry point: only starts the server.
const app = require("./src/app");
const { PORT } = require("./src/config/config");

app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));
