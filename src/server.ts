// Initition point for the server application

import http from "node:http";
import app from "./app.js"; // ← لاحظ الامتداد .js لأنه ESM
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 3000;
const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});