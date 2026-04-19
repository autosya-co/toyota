
const fs = require('fs');
const path = require('path');

// We simulate the client-side parsing of the JSON data and generation of links
const filePath = 'c:/Users/John Paez/Downloads/autosya/toyotausados-astro/src/pages/index.astro';
const content = fs.readFileSync(filePath, 'utf8');

// The JSON data is passed via:
// <script id="firebase-data" type="application/json" set:html={JSON.stringify(firebaseData)}></script>

console.log("Checking index.astro for link generation consistency...");

// Check the template literal in cargarMasVehiculos
const regex = /<a href="\/(\${carro\.ID})\/(\${slugify\(carro\.Title\)})"/g;
const matches = content.match(regex);

if (matches) {
  console.log("Found link templates:", matches);
} else {
  console.log("No link templates found with expected regex.");
}

// Check the slugify function
const slugifyRegex = /const slugify = \(text\) => {([\s\S]*?)};/g;
const slugifyMatch = content.match(slugifyRegex);
if (slugifyMatch) {
  console.log("Slugify function found.");
}
