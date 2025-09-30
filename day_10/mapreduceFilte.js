// const arr = [1,2,3,4,5];

// // Map
// const mapArr = arr.map((ele)=>ele*4);
// console.log(mapArr);

// // reduce 
// const sum = arr.reduce((acc , ele)=>acc +=ele , 0);
// console.log(sum);

// // filter
// const filterData = arr.filter((ese)=> ele %4 === 0);
// console.log(filterData);

const data = [
  {
    productId: 1,
    productname: "A",
    PRICE: 500,
    manufacturingdate: "23-09-2025",
    color: "red"
  },
  {
    productId: 2,
    productname: "B",
    PRICE: 500,
    manufacturingdate: "24-09-2025",
    color: "MAROON"
  },
  {
    productId: 3,
    productname: "C",
    PRICE: 1000,
    manufacturingdate: "25-09-2025",
    color: "BLACK"
  },
  {
    productId: 4,
    productname: "D",
    PRICE: 800,
    manufacturingdate: "26-09-2025",
    color: "PINK"
  }
];

const mapData = data.map((ese) =>ese.productname);
console.log(mapData);

const cheapProducts = data.filter(product => product.PRICE <= 600);

console.log(cheapProducts);
