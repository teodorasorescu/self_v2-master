require("@babel/register")({
  presets: ["@babel/preset-env", "@babel/preset-react"],
  extensions: [".js", ".jsx"],
});

const express = require("express");
const React = require("react");
const ReactDOMServer = require("react-dom/server");
const { StaticRouter } = require("react-router-dom/server");
const fs = require("fs");
const path = require("path");
const App = require("./src/App").default;

const app = express();

app.use(express.static("public"));

app.get("*", (req, res) => {
  const context = {};
  const appHTML = ReactDOMServer.renderToString(
    <StaticRouter location={req.url} context={context}>
      <App />
    </StaticRouter>
  );

  const indexFile = path.resolve("./public/index.html");
  fs.readFile(indexFile, "utf8", (err, data) => {
    if (err) {
      console.error("Something went wrong:", err);
      return res.status(500).send("Oops, better luck next time!");
    }

    const metaTags = getMetaTags(req.url);

    return res.send(
      data
        .replace('<div id="root"></div>', `<div id="root">${appHTML}</div>`)
        .replace("<title></title>", `<title>${metaTags.title}</title>`)
        .replace(
          '<meta name="description" content="">',
          `<meta name="description" content="${metaTags.description}">`
        )
    );
  });
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});

function getMetaTags(url) {
  if (url === "/psihologia-culorilor") {
    console.log("Setting meta tags for /psihologia-culorilor");

    return {
      title: "Psihologia Culorilor",
      description: "Hei TEO DESC",
      keywords: "psihologia, culorilor, react, ssr",
    };
  } else {
    console.log("Setting meta tags for Home Page");

    return {
      title: "Home Page",
      description: "Description for Home Page",
      keywords: "home, page, react, ssr",
    };
  }
}
