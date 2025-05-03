const restaurants = [
    // Turkish Food
    {
      id: 1,
      name: "Kebapçı Halil",
      category: "Turkish",
      image: "kebapci-halil.jpg",
      menu: [
        { id: 101, name: "Adana Kebap", price: 85, image: "adana-kebap.jpg" },
        { id: 102, name: "Lahmacun", price: 35, image: "lahmacun.jpg" },
      ],
    },
    {
      id: 2,
      name: "Osmanlı Mutfağı",
      category: "Turkish",
      image: "osmanli-mutfagi.jpg",
      menu: [
        { id: 103, name: "İmam Bayıldı", price: 45, image: "imam-bayildi.jpg" },
        { id: 104, name: "Baklava", price: 30, image: "baklava.jpg" },
      ],
    },
  
    //  Burger
    {
      id: 3,
      name: "Burger Mania",
      category: "Burger",
      image: "burger-mania.jpg",
      menu: [
        { id: 201, name: "Double Cheeseburger", price: 95, image: "double-cheeseburger.jpg" },
        { id: 202, name: "Fries", price: 25, image: "fries.jpg" },
      ],
    },
    {
      id: 4,
      name: "Grill House",
      category: "Burger",
      image: "grill-house.jpg",
      menu: [
        { id: 203, name: "Chicken Burger", price: 80, image: "chicken-burger.jpg" },
        { id: 204, name: "Cola", price: 12, image: "cola.jpg" },
      ],
    },
  
    // Pizza
    {
      id: 5,
      name: "Pizza Roma",
      category: "Pizza",
      image: "pizza-roma.jpg",
      menu: [
        { id: 301, name: "Margherita", price: 75, image: "margherita.jpg" },
        { id: 302, name: "Garlic Bread", price: 25, image: "garlic-bread.jpg" },
      ],
    },
    {
      id: 6,
      name: "Mozzarella's",
      category: "Pizza",
      image: "mozarellas.jpg",
      menu: [
        { id: 303, name: "Truffle Pizza", price: 105, image: "truffle-pizza.jpg" },
        { id: 304, name: "Tiramisu", price: 30, image: "tiramisu.jpg" },
      ],
    },
  ];
  
  export default restaurants;
  