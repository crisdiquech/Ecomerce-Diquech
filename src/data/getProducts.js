const products = [
    {
      id: "Rh1",
      name: "REMERA NIÑO",
      description: "Remera de algodón para niños",
      stock: 10,
      category: "remeras",
      image: "./public/img/remera-niño.jpg",
      price: 10000
    },

    {
        id: "Rm1",
        name: "REMERA NIÑA",
        description: "Remera de algodón para niñas",
        stock:10 ,
        category: "remeras",
        image: "./public/img/remera-niña.jpg",
        price: 10000
      },

      {
        id: "Rb1",
        name: "REMERA BEBE",
        description: "Remera de algodón para bebes",
        stock:10 ,
        category: "remeras",
        image: "./public/img/remera-bebe.jpg",
        price: 10000
      },

      {
        id: "Ph1",
        name: "PANTALON NIÑO",
        description: "Pantalon frizado para niño",
        stock: 10,
        category: "Pantalones",
        image: "./public/img/pantalon-niño.jpg",
        price: 15000
      },

      {
        id: "Pm1",
        name: "PANTALON NIÑA",
        description: "Pantalon frizado para niña",
        stock: 10,
        category: "pantalones",
        image: "./public/img/pantalon-niña.jpg",
        price: 15000
      },

      {
        id: "P1b",
        name: "PANTALON BEBE",
        description: "Pantalon de algodon para bebe",
        stock: 10,
        category: "pantalones",
        image: "./public/img/pantalon-bebe.jpg",
        price: 15000
      },

      {
        id: "Bh1",
        name: "BUZO NIÑO",
        description: "Buzo frizado para niño",
        stock: 10,
        category: "buzos",
        image: "./public/img/buzo-niño.jpg",
        price: 20000
      },

      {
        id: "Bm1",
        name: "BUZO NIÑA",
        description: "Buzo frizado para niña",
        stock: 10,
        category: "buzos",
        image: "./public/img/buzo-niña.jpg",
        price: 20000
      },

      {
        id: "Bb1",
        name: "BUZO BEBE",
        description: "Buzo de algodon para bebe",
        stock: 10,
        category: "buzos",
        image: "./public/img/buzo-bebe.jpg",
        price: 20000
      },

      {
        id: "Zh1",
        name: "ZAPATILLA NIÑO",
        description: "Zapatilla deportiva para niño",
        stock: 10,
        category: "zapatillas",
        image: "./public/img/zapatilla-niño.jpg",
        price: 50000
      },

      {
        id: "Zm1",
        name: "ZAPATILLA NIÑA",
        description: "Zapatilla deportiva para niña",
        stock: 10,
        category: "zapatillas",
        image: "./public/img/zapatilla-niña.jpg",
        price: 50000
      },

      {
        id: "Zb1",
        name: "ZAPATILLA BEBE",
        description: "Zapatilla deportiva para bebe",
        stock: 10,
        category: "zapatillas",
        image: "./public/img/zapatilla-bebe.jpg",
        price: 50000
    }



 
  ]
  const getProducts = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(products);
    }, 3000);
  });
  
  export default getProducts