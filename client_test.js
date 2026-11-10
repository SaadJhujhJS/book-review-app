// Calls the running server with axios (Promises + async/await).
// Start the server first (npm start), then run: npm run test:client
const axios = require("axios");
const BASE = "http://localhost:5000";

const getAllBooks = async () => (await axios.get(`${BASE}/`)).data;
const getByIsbn = (isbn) => axios.get(`${BASE}/isbn/${isbn}`).then((r) => r.data);
const getByAuthor = async (a) => (await axios.get(`${BASE}/author/${encodeURIComponent(a)}`)).data;
const getByTitle = async (t) => (await axios.get(`${BASE}/title/${encodeURIComponent(t)}`)).data;

(async () => {
  console.log("All books:", Object.keys(await getAllBooks()).length);
  console.log("ISBN 1:", await getByIsbn(1));
  console.log("Author:", await getByAuthor("Chinua Achebe"));
  console.log("Title:", await getByTitle("Things Fall Apart"));
})().catch((e) => console.error("Error:", e.message));
