import { createReadStream } from "node:fs";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { createServer } from "node:http";
import path from "node:path";
import { fileURLToPath } from "node:url";
import puppeteer from "puppeteer";

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const buildDir = path.join(projectRoot, "build");
const shellHtml = await readFile(path.join(buildDir, "index.html"), "utf8");
const routes = ["/", "/pricing/", "/faq/", "/book-now/", "/contact/"];

const mimeTypes = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".ico": "image/x-icon",
  ".jpeg": "image/jpeg",
  ".jpg": "image/jpeg",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".webp": "image/webp",
  ".xml": "application/xml; charset=utf-8",
};

const server = createServer((request, response) => {
  const pathname = decodeURIComponent(new URL(request.url, "http://localhost").pathname);
  const extension = path.extname(pathname);

  if (!extension) {
    response.writeHead(200, { "Content-Type": mimeTypes[".html"] });
    response.end(shellHtml);
    return;
  }

  const filePath = path.resolve(buildDir, `.${pathname}`);
  if (!filePath.startsWith(`${buildDir}${path.sep}`)) {
    response.writeHead(403).end();
    return;
  }

  const stream = createReadStream(filePath);
  stream.on("open", () => {
    response.writeHead(200, {
      "Content-Type": mimeTypes[extension.toLowerCase()] || "application/octet-stream",
    });
    stream.pipe(response);
  });
  stream.on("error", () => response.writeHead(404).end());
});

await new Promise((resolve, reject) => {
  server.once("error", reject);
  server.listen(0, "127.0.0.1", resolve);
});

const { port } = server.address();
const origin = `http://127.0.0.1:${port}`;
let browser;

try {
  browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  const snapshots = new Map();

  for (const route of routes) {
    const page = await browser.newPage();
    await page.setRequestInterception(true);
    page.on("request", (request) => {
      const requestUrl = new URL(request.url());
      if (requestUrl.origin === origin) request.continue();
      else request.abort();
    });

    await page.goto(`${origin}${route}`, {
      waitUntil: "networkidle0",
      timeout: 60_000,
    });
    await page.waitForSelector("#root > *", { timeout: 15_000 });
    snapshots.set(route, await page.content());
    await page.close();
  }

  for (const [route, html] of snapshots) {
    const destination =
      route === "/"
        ? path.join(buildDir, "index.html")
        : path.join(buildDir, route.slice(1), "index.html");
    await mkdir(path.dirname(destination), { recursive: true });
    await writeFile(destination, html);
    console.log(`Prerendered ${route}`);
  }
} finally {
  if (browser) await browser.close();
  await new Promise((resolve) => server.close(resolve));
}
