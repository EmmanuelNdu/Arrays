const cars= [{name:"benz", country:"Germany", color:"Green", price:50000},
             {name:"Land-rover", country:"England", color:"Blue", price:70000},
             {name:"Lexus", country:"Japan", color:"Red", price:30000},
             {name:"Kia", country:"India", color:"Grey", price:10000},
             {name:"Nord", country:"Nigeria", color:"Black", price:50000},
];
const newCar = cars.map(personalcar => ({name:personalcar.name, country:personalcar.country, color:personalcar.color, price:personalcar.price}));
console.log(newCar);