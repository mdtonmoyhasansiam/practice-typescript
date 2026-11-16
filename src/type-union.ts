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


// Object Union 

type Admin = {id: number, status : "active", Panel: "admin", overall : string }
type Member = {id: number, status : "pending", Panel : "member", overall : string}

type User = Admin | Member

let user : User = {id: 10, status : "pending", Panel : "member", overall: "Yes"}

console.log(user);