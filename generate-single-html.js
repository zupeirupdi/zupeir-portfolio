import fs from 'fs';
import path from 'path';

const distDir = '/home/zupeir/zupeir-portfolio/dist';
const assetsDir = path.join(distDir, 'assets');

const files = fs.readdirSync(assetsDir);
const jsFile = files.find(f => f.endsWith('.js'));
if (!jsFile) {
  console.error("No JS file found in dist/assets");
  process.exit(1);
}

const jsContent = fs.readFileSync(path.join(assetsDir, jsFile), 'utf-8');

const singleHtml = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🕷️</text></svg>" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Zupeir Updi | Portfolio</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module">
${jsContent}
    </script>
  </body>
</html>`;

fs.writeFileSync('/home/zupeir/zupeir-portfolio/portfolio-single.html', singleHtml);
fs.writeFileSync('/home/zupeir/zupeir-portfolio/dist/portfolio-single.html', singleHtml);
console.log("Successfully generated standalone portfolio-single.html!");
