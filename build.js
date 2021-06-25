const { build, cliopts } = require("estrella");
const path = require("path");

build({
  entry: "src/index.js",
  outfile: "public/index.js",
  bundle: true,
  minify: true,
  sourcemap: false,
  define: {
    "process.env.NODE_ENV": cliopts.watch ? "development" : "production",
  }
});

cliopts.watch &&
  require("serve-http").createServer({
    port: 8181,
    pubdir: path.join(__dirname, "public"),
  });
