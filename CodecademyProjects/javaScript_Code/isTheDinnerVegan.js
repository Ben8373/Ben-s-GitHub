const isTheDinnerVegan = (food) => {
    return food.every((item) => item.source === `plant`);
  };
  
  const food = [
    { name: "hamburger", source: "meat" },
    { name: "cheese", source: "dairy" },
    { name: "ketchup", source: "plant" },
    { name: "bun", source: "plant" },
    { name: "dessert twinkies", source: "unknown" },
  ];
  
  console.log(isTheDinnerVegan(food));
  