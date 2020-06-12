const fs = require("fs");
const glob = require("glob");
const marked = require("marked");
glob("./src/**/*.md", {}, (err, files) => {
  files.forEach(filename => {
    console.log("read", filename);
    const src = fs.readFileSync(filename, "utf8");
    const html = marked(src);

    fs.writeFileSync(
      filename.replace(/\/src/, "").replace(/\.md$/, ".html"),
      html,
      "utf8"
    );
  });
});
