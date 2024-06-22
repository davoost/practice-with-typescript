// let tax: number | string = 10 //using the bar lets it take one or the other type
// tax = 100
// tax = '$10'

// let requestStatus: 'pending' | 'success' | 'error' = 'pending'
// requestStatus = 'pending' // can only be these things and they are suggested

// let notSure: any = 4
// notSure = 'maybe a string instead'
// notSure = false

// const books = ['1984', 'Brave New World', 'Fahrenheit 451']

// let foundBook: string | undefined;
// for (let book of books){
//     if(book === '1984'){
//         foundBook = book

//         break
//     }
// }
// console.log(foundBook?.length)

// let discount: number | string = 20
// discount = '20%'

// let orderStatus: 'processing' | 'shipped' | 'delivered' = 'processing'
// orderStatus = 'shipped'

// let prices: number[] = [100, 75, 42] // this array will only have numbers
// let fruit: string[] = ['apple', 'orange', 'banana']

// // let randomValues: [] = ['hello'] accepts only an empty array

// let emptyValues: any[] = ['hello']

// let names2 = ['peter', 'susan', 1]
// let array:(string | boolean)[] = ['apple', true]

// let temperature: number[] = [45, 30, 20]
// let colours: string[] = ['red', 'orange', 'blue']
// let mixed: (string | number)[] = ['red', 8, 'twenty']

// // setting up an object each parameter's type is stated
// let car:{brand:string; year:number} = {brand: 'toyota', year: 2020}

// let car1:{brand:string; year:number} = {brand: 'audit', year: 2023}

// let book = { title:'book', cost:20 }
// let pen = { title:'pen', cost:10 }
// let notebook = { title:'notebook' }
// // this is going to be an array of objects 
// //also ? means optional property if it exists then include
// //read only means sth can't be reassigned
// let items: { readonly title:string; cost?:number}[] = [book, pen, notebook]

// let bike: { brand:string; year: number } = { brand:'Yamaha', year:2010 }
// let laptop: { brand:string; year: number } = { brand:'Dell', year:2010 }
// let laptop2: { brand:string; year?: number } = { brand:'Dell' }

// let product1: {title:string; price: number} = {title: 'shirt', price:20}
// let product2: {title:string;} = {title: 'pants'}
// let products: {title:string; price?: number}[] = [product1, product2]


// function sayHi(name:string){
//     console.log(`Hello there ${name.toUpperCase()}`)
// }
// // - any
// // - config
// // - declare type - string

// sayHi('David')
// // sayHi(3) this is an error

// function calculateDiscount(price:number){
//     return price * 0.9
// }
// //type script infers the type of finalPrice
// const finalPrice = calculateDiscount(200)

// let names:string[] = ['John', 'Peter', 'Mark']
// function isNameHere(name:string):boolean{
//     if(names.includes(name)){
//         return true
//     }
//     else {
//         return false
//     }
// }

// const isMark = isNameHere('Harry')
// console.log(isMark)

// function calculatePrice(price:number, discount?:number){
//     return price - (discount || 0) //can setup a default parameter if not defined
// }

// let priceAfterDiscount = calculatePrice(100, 20)

// // can also setup a default value here
// function calculateScore(initialScore: number, penaltyPoints:number = 0):number{
//     return initialScore - penaltyPoints
// }

// let scoreAfterPenalty = calculateScore(100, 20)
// let scoreWithoutPenalty = calculateScore(300)
// //thre dots is treated as an array
// function sum(message: string, ...numbers:number[]): string {
//     const doubled = numbers.map((num) => num * 2);
//     console.log(doubled)

//     let total = numbers.reduce((previous, current) => {
//         return previous + current;
//     }, 0)
//     return `${message} ${total}`
// }

// let firstResult = sum('The total is : ', 1, 2, 3, 4, 5)
// console.log(firstResult)

// function logMessage(message:string):void{
//     console.log(message)
// }

// logMessage('Hello, Typescript')

// function processInput(number: number | string) {
//     let output = typeof number === 'number' ? number*2 : number.toUpperCase()
//     console.log(output)
// }
// processInput('5')

// function createEmployee({ id }:{ id:number }):{
//     id: number;
//     isActive:boolean} 
//     //the type of each element of the object is set
//     {
//     return {id, isActive: id % 2 === 0}
// }

// const first = createEmployee({id:1})
// const second = createEmployee({id:2})
// console.log(first, second)

// //alternative approach

// function createStudent(student:{id:number;name:string}):void{
//     console.log(`Welcome to the course ${student.name.toUpperCase()}`)
// }

// const newStudent = {
//     id: 5,
//     name: 'anna',
//     email: 'anna@hotmail.com'
// }

// createStudent(newStudent)
// // when object properties are passed inline, typescript will complain
// // createStudent({id:1, name:'bob', email:'bobo@gmail.com'})


// function processData(input:string|number, config:{reverse:boolean} = 
//     {reverse:false}):string | number{
//     if(typeof input === 'number'){
//         return input*input
//     }
//     else{
//         return config.reverse ? input.toUpperCase().split('').reverse().join('') : input.toUpperCase()
//     }
// }

// console.log(processData(10));
// console.log(processData('Hello'));
// console.log(processData('Hello', {reverse:true}));

// type User = { id: number; name: string; isActive: boolean }

// const john: User = {
//     id: 1,
//     name: "john",
//     isActive: true,
//   };
//   const susan: User = {
//     id: 1,
//     name: "susan",
//     isActive: false,
//   };
  
//   function createUser(user: User): {
//     id: number;
//     name: string;
//     isActive: boolean;
//   } {
//     console.log(`Hello there ${user.name.toUpperCase()} !!!`);
  
//     return user;
//   }

//   type stringOrNumber = string | number

//   let value: stringOrNumber;
//   value = 'hello'
//   value = 123

//   type Theme = 'light' | 'dark'

//   let theme: Theme;
//   theme = 'dark'
//   theme = 'light'

//   function setTheme(t: Theme){
//     theme = t
//   }

//   setTheme('dark')

//   type Employee = {id:number, name:string, department: string}
//   type Manager = {id:number, name:string, employees: Employee[]}
// type Staff = Employee | Manager

//   function printStaffDetails(staff:Staff):void{
//     if('employees' in staff){
//         console.log(`This person is a manager and has ${staff.employees.length}`)
//     }
//     else {
//         console.log(`This person is an employee in department ${staff.department}`)
//     }
//   }

//   const alice:Employee = {id:1, name: 'alice', department: 'Sales'}
//   const steve:Employee = {id:1, name: 'steve', department: 'HR'}
//   const bob:Manager = {id:1, name: 'bobo', employees: [alice, steve]}
//   printStaffDetails(alice)
//   printStaffDetails(steve)
//   printStaffDetails(bob)

//   type Book = {id:number; name: string; price: number};
//   type DiscountedBook = Book &{ discount: number }

//   const book1:Book = {
//     id:1,
//     name: 'how to cook a dragon',
//     price: 15
//   };
//   const book2:Book = {
//     id:2,
//     name: 'the secret life of unicorns',
//     price: 18
//   }
//   // this below alows you to use properties of other types then add on more more
//   const discountedBook:Book&{discount: number} = {
//     id:3,
//     name: 'Gnomes vs. Goblins: The Ultimate Guide',
//     price: 25,
//     discount: 0.15
//   }
// const propName = 'age'

// // can use computed properties in variable names (like javasript)
// type Animal = {
//     [propName] : number;
// }

//   let tiger = { [propName]:5 } 

//   interface OtherBook {
//     readonly isbn: number;
//     title: string;
//     author: string;
//     genre?: string;
//     // method
//     printAuthor():void;
//     printTitle(message: string): string;
//     printSomething:(someValue:number)=>number;
//   }

//   const deepWork: OtherBook = {
//     isbn: 123,
//     title: 'deep work',
//     author: 'Cal Newport',
//     genre: 'self-help',
//     printAuthor(){
//         console.log(this.author)
//     },
//     printTitle(message){
//         return `${this.title} ${message}`;
//     },
//     // first option (maybe preferable)
//     // printSomething: function(someValue){
//     //     return someValue
//     // }
//     // second option
//     // printSomething: (someValue) => {
//     //     console.log(deepWork.author)
//     //     return someValue;
//     // }
//     // third option
//     printSomething(someValue){
//         console.log(this.title)
//         return someValue
//     }
//     // fourth option
//   }

// //   deepWork.isbn = 'some value'
// deepWork.printAuthor();
// const result = deepWork.printTitle("is an awesome book");
// console.log(result);

// console.log(deepWork.printSomething(34))

// interface Computer {
//     readonly id: number,
//     brand: string,
//     ram: number,
//     storage?: number,
//     // methods
//     upgradeRam(value:number):number
// }

// const myComputer: Computer = {
//     id: 1,
//     brand: 'dell',
//     ram: 10,
//     upgradeRam(value){
//         return this.ram = value
//     }
// }

// console.log(myComputer)
// myComputer.upgradeRam(20)
// myComputer.storage = 100
// console.log(myComputer)

// interface Person {
//     name:string;
//     getDetails(): string
// }

// interface DogOwner {
//     dogName: string;
//     getDogDetails(): string
// }
// // another version of interface allows us to merge interface
// interface Person {
//     age: number;
// }

// const newPerson:Person = {
//     name: 'John', 
//     age: 30,
//     getDetails() {
//         return `Name: ${this.name}, Age: ${this.age}`
//     }
// }

// console.log(newPerson.getDetails())


// // the extends word allows us to use existing type, and add on 
// interface newEmployee extends Person {
//     employeeId: number
// }

// const employee: newEmployee = {
//     name: 'Jane',
//     age: 30,
//     employeeId: 123,
//     getDetails(){
//         return `Name: ${this.name}, Age: ${this.age}, Employee id: ${this.employeeId}`
//     }
// }

// interface Executive extends Person, DogOwner {
//     managePeople(): void
// }

// const executive: Executive = {
//     name: 'Bob',
//     age: 35,
//     dogName: 'rex',
//     //methods
//     getDetails(){
//         return `Name: ${this.name}, Age: ${this.age}`
//     },
//     getDogDetails(){
//         return `Name: ${this.dogName}`
//     },
//     managePeople(){
//         console.log('Managing People...')
//     }
// }
// executive.managePeople()