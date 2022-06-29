let cars=[{car_Name:"I20",brand:"hyndai",price:400000,color:"green"}, 
{car_Name:"baleno" ,brand:"suziki",price:450000,color:"yellow" }, 
{car_Name:"ecosport",brand:"ford",price:10000,color:"indigo"}, 
{car_Name:"nano" ,brand:"tata",price:40000,color:"black" },
{car_Name:"x7" ,brand:"bmw",price:160000,color:"white" }, 
{car_Name:"b1" ,brand:"hero",price:800000,color:"dark blue" }, 
{car_Name:"b3" ,brand:"hyndai",price:1200000,color:"grey" }, 
{car_Name:"normal" ,brand:"samsung",price:1400000,color:"red" }, 
{car_Name:"I20" ,brand:"skhy",price:4000000,color:"blue" },
]
let result=cars.map((car)=>{
    return car.price>10000 ||car.color==="green"
})
console.log(cars)
console.log(result)
