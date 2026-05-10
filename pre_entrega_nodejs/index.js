//console.log(process.argv);

//const methodSinFiltro = process.argv[2];
//const endpoint = process.argv[3];

const [,, methodUnChecked, endpointUnchecked,...args] = process.argv;

console.log(`Method: ${methodUnChecked}`);
console.log(`Endpoint: ${endpointUnchecked}`);

let [title, price, category] = args;

console.log(args);

const product = {
  title, // Equivale a title: title
  price: Number(price), // IMPORTANTE: convertir a número ya que process.argv siempre trae strings [3, 4]
  category
};



let method = methodUnChecked.toUpperCase();
let endpoint = endpointUnchecked.toLowerCase();

console.log(`Method (normalized): ${method}`);
console.log(`Endpoint (normalized): ${endpoint}`);


let id;
let resource;
if (endpoint.startsWith("products/")) {

const parts = endpoint.split("/");
resource = parts[0];
id = parts[1];


console.log(`Resource: ${resource}`);
console.log(`ID: ${id}`);





}


switch (method) {
  case "GET":
    console.log("Handling GET request");
    if (endpoint === "products") {
      console.log("Fetching all products...");
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }
else if (id != undefined && id != '' )  {
  console.log(`Fetching product with ID: ${id}...`);
    try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error(`Error fetching product with ID ${id}:`, error);
      }
}   
     else {
      console.log("Unknown endpoint");
    }

    break;

  case "POST":
    console.log("Handling POST request");
    try {
        const response = await fetch("https://fakestoreapi.com/products", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(product),
        });
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error("Error creating product:", error);
      } 


    break;

  case "PUT":
    console.log("Handling PUT request");
    if (id != undefined && id != '') {
      console.log(`Updating product with ID: ${id}...`);
    try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(product),
        });
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error(`Error updating product with ID ${id}:`, error);
      }
    }
    break;

  case "DELETE":
    console.log("Handling DELETE request");
    if (id != undefined && id != '') {
      console.log(`Deleting product with ID: ${id}...`);
    try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`, {
          method: "DELETE",
        });
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error(`Error deleting product with ID ${id}:`, error);
      }
    }





    break;

  default:
    console.log("Unknown method");
}
