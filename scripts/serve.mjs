import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

const root = fileURLToPath(new URL("../", import.meta.url));
const types = { ".html": "text/html", ".js": "text/javascript", ".css": "text/css" };

createServer(async (request, response) => {
  try {
    const pathname = decodeURIComponent(new URL(request.url, "http://localhost").pathname);
    const file = path.resolve(root, `.${pathname === "/" ? "/index.html" : pathname}`);
    const relative = path.relative(root, file);
    if (relative.startsWith("..") || path.isAbsolute(relative) || !types[path.extname(file)]) {
      response.writeHead(404).end("Not found");
      return;
    }
    const data = await readFile(file);
    response.writeHead(200, { "Content-Type": `${types[path.extname(file)]}; charset=utf-8` });
    response.end(data);
  } catch {
    response.writeHead(404).end("Not found");
  }
}).listen(5173, "127.0.0.1", () => console.log("Local: http://127.0.0.1:5173"));
