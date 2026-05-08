//console.log(process.argv);

const methodSinFiltro = process.argv[2];
const endpoint = process.argv[3];

console.log(`Method: ${methodSinFiltro}`);
console.log(`Endpoint: ${endpoint}`);

const method = methodSinFiltro.toUpperCase();

const partes = endpoint.split("/");
const resource = partes[1];
const id = partes[2];

switch (method) {
  case "GET":
    console.log("Handling GET request");
    if (endpoint === "products") {
      console.log("Fetching products...");
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
else
      //fetch("https://fakestoreapi.com/products")
      // .then((response) => response.json())
      //.then((data) => console.log(data));
    } else {
      console.log("Unknown endpoint");
    }

    break;

  case "POST":
    console.log("Handling POST request");
    break;

  case "PUT":
    console.log("Handling PUT request");
    break;

  case "DELETE":
    console.log("Handling DELETE request");
    break;

  default:
    console.log("Unknown method");
}
