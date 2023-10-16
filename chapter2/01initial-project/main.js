import { sayHello } from "./util";

const outputElement = document.getElementById("output");
outputElement.innerText = sayHello("Webpack");

console.log(process.env.NODE_ENV);
