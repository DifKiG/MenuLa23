//Es un arreglo de objetos tiene info de menu y sus items
const menuData = [
  {
    title: "De Lunes a viernes, Domingos y festivos",

    image: "img/arepa_icono.png",
    items: [
      { sabor: "Arepa sin asar", precio: "$ 1.000 pesos" },
      { sabor: "Arepa pequeña", precio: "$ 400 pesos" },
      { sabor: "Arepa solas", precio: "$1.500 pesos" },
      { sabor: "Arepa con Queso Lonchis", precio: "$3.500 pesos" },
      { sabor: "Arepa con Queso Cuajada", precio: "$3.500 pesos" },
      { sabor: "Arepa con jamón y queso", precio: "$4.000 pesos" },
      { sabor: "Arepa con chorizo", precio: "$6.000 pesos" },
      { sabor: "Chorizo solo", precio: "$5.000 pesos" },
      { sabor: "Arepa con huevos revueltos", precio: "$3.500 pesos" },
      { sabor: "Arepa con pericos", precio: "$4.500 pesos" },
      { sabor: "Arepa con chorizo", precio: "$6.000 pesos" },
      { sabor: "Arepa con carne hamburguesa", precio: "$5.500 pesos" },
      { sabor: "Arepa con pollo desmechado", precio: "$8.000 pesos" },
      { sabor: "Arepa con carne desmechada", precio: "$8.000 pesos" },
      { sabor: "Arepa mixta pollo y carne", precio: "$9.000 pesos" },
      { sabor: "Arepa con todo", precio: "$12.000 pesos" }
    ]
  },
  {
    title: "Bebidas",
    image: "img/arepa_icono.png",
    items: [
      { sabor: "Cafe", precio: "$ 1.000 pesos" },
      { sabor: "Cafe en leche", precio: "$ 2.000 pesos" },
      { sabor: "Vaso de gaseosa", precio: "$ 1.000 pesos" } 
    ]
  }
];

//Obtiene el contenedor del menu El DOM
const menuContainer = document.getElementById("menu-content");
menuData.forEach(section =>{
    const sectionElement = document.createElement("section");

    const titleElement = document.createElement("h2");
    titleElement.textContent = section.title;
    sectionElement.appendChild(titleElement);

    

    section.items.forEach(item => {
        const articleElement =document.createElement('article');
        articleElement.className = 'item';

        const saborElement =document.createElement('p');
        saborElement.className = 'sabor';
        saborElement.textContent = item.sabor;
        articleElement.appendChild(saborElement);

        const precioElement = document.createElement('p');
        precioElement.className = 'precio';
        precioElement.textContent = item.precio;
        articleElement.appendChild(precioElement);

        sectionElement.appendChild(articleElement);
    });
    menuContainer.appendChild(sectionElement);
});