//Es un arreglo de objetos tiene info de menu y sus items
const menuData = [
  {
    title: "Arepas y acompañantes",
    /*image: "img/coleccion-arepas-dibujadas-mano.png",*/
    items: [
      { sabor: "Arepa pequeña", precio: "$ 400 pesos" },
      { sabor: "Arepa sin asar", precio: "$ 1.000 pesos" },
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
    /*image: "img/coleccion-diferentes-elementos-cafe-dibujados-mano.png",*/
    items: [
      { sabor: "Café", precio: "$ 1.000 pesos" },
      { sabor: "Café en leche", precio: "$ 2.000 pesos" },
      { sabor: "Vaso de gaseosa", precio: "$ 1.000 pesos" } 
    ]
  }
];

const createMenuSection = (section) => {
  const sectionElement = document.createElement("section");
  sectionElement.className = 'menu-section';

  const titleElement = document.createElement("h2");
  titleElement.textContent = section.title;
  sectionElement.appendChild(titleElement);
  
  if (section.image) {
    const imageElement = document.createElement('img');
    imageElement.src = section.image;
    imageElement.alt = section.title;
    imageElement.className = "menu-icon";
    sectionElement.appendChild(imageElement);
  }

  const menuListElement = document.createElement("div");
  menuListElement.className = 'menu-list';

  section.items.forEach(item => {
    const itemElement = document.createElement('div');
    itemElement.className = 'menu-item';

    const saborElement = document.createElement('p');
    saborElement.className = 'sabor';
    saborElement.textContent = item.sabor.trim();

    const precioElement = document.createElement('p');
    precioElement.className = 'precio';
    precioElement.textContent = item.precio.trim();

    itemElement.appendChild(saborElement);
    itemElement.appendChild(precioElement);
    menuListElement.appendChild(itemElement);
  });

  sectionElement.appendChild(menuListElement);
  return sectionElement;
};

const renderMenu = () => {
  const menuContainer = document.getElementById("menu-content");
  if (!menuContainer) {
    console.error("Menu container not found");
    return;
  }

  menuData.forEach(section => {
    menuContainer.appendChild(createMenuSection(section));
  });
};

document.addEventListener('DOMContentLoaded', renderMenu);