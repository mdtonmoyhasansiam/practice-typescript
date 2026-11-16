// Literal Type

type Status = "active";
let isStatus : Status = "active";
console.log(isStatus);


// Basic Union

type Id = string | number;
let id : Id = 2100
console.log(id);


// Literal Union 

type Salary = "active" | "inActive" | "pending"

let salary : Salary = "pending"

console.log(salary);