// // // let person:[string, number] = ['john', 25] // fixed length and fixed types

// // // let date: [number, number, number] = [12, 17, 2001]

// // // function getPerson():[string, number]{
// // //     return['john', 25];
// // // }
// // // let randomPerson = getPerson()
// // // console.log(randomPerson[0])
// // // console.log(randomPerson[1])

// // // let susan: [string, number?] = ['susan']

// // // enum ServerResponseStatus {
// // //     Success = 'Success',
// // //     Error = 'Error'
// // // }

// // // // Object.values(ServerResponseStatus).forEach((value)=>{
// // // //     if(typeof value === 'number'){
// // // //         console.log(value)
// // // //     }
// // // // })

// // // console.log(ServerResponseStatus)

// // // interface ServerResponse{
// // //     result:ServerResponseStatus;
// // //     data: string[]
// // // }

// // // function getServerResponse():ServerResponse{
// // //     return {
// // //         result: ServerResponseStatus.Success,
// // //         data: ['first item', 'second item']
// // //     }
// // // }

// // // const response: ServerResponse = getServerResponse()
// // // console.log(response)

// // // enum UserRole {
// // //     Admin, 
// // //     Manager, 
// // //     Employee
// // // }

// // // type User = {id:number; name:string; role:UserRole; contact:[string, string]}

// // // function createUser(user:User):User{
// // //     return user;
// // // }

// // // const user:User = createUser({
// // //     id: 1, name: 'john doe', role: UserRole.Admin, contact:['john@gmail.com', '123456-789']
// // // })
// // // console.log(user)

// // // let someValue: any = 'this is a string'

// // // let strLength: number = ( someValue as string ).length

// // // type Bird = {
// // //     name: string
// // // }

// // // let birdString = '{"name": "Eagle"}';
// // // let dogString = '{"breed": "Poodle"}';

// // // let birdObject = JSON.parse(birdString)
// // // let dogObject = JSON.parse(dogString)

// // // let bird = birdObject as Bird
// // // let dog = dogObject as Bird

// // enum Status{
// //     Pending = 'pending',
// //     Declined = 'declined',
// // }

// // type User = {
// //     name: string,
// //     status: Status
// // }

// // // save Status.Pending in the DB as a string
// // // retrieve string from the DB

// // const statusValue = 'pending'
// // const user:User = {name: 'john', status:statusValue as Status}

// // let unknownValue: unknown;

// // unknownValue = 'hello world'
// // unknownValue = [1,2,3]
// // unknownValue = 42.33456

// // if(typeof unknownValue === 'number'){
// //     unknownValue.toFixed(2)
// // }

// // try { 

// //     throw new Error('there was an error....')

// // } catch(error){
// //     if(error instanceof Error){
// //         console.log(error.message)
// //     }
// // }

// // let someValue: never // cannot assign any value to type never

// // enum Colour {
// //     Red, 
// //     Blue,
// //     Green,
// // }

// // function getColourName(colour:Colour){
// //     switch(colour) {
// //         case Colour.Red:
// //             return 'Red';
// //         case Colour.Blue:
// //             return 'Blue'
// //         case Colour.Green:
// //             return 'Green'
// //         default:
// //             // at build time
// //             let unexpectedColour: never = colour
// //             // at runtime
// //             throw new Error(`Unexpected colour value: ${colour}`)
// //     }
// // }
// // console.log(getColourName(Colour.Red))
// // console.log(getColourName(Colour.Blue))
// // console.log(getColourName(Colour.Green))

// // let something = 'susan'

// // import newStudent, {sayHello, person, type Student} from './actions'

// // sayHello('Typescript')
// // console.log(person)
// // console.log(newStudent)

// // const anotherStudent:Student = {
// //     name: 'bob', 
// //     age: 30}

// //     console.log(anotherStudent)

// // // import { someValue } from './example.js' // typescript can't import js files

// type ValueType = string | number | boolean;

// let value: ValueType;
// const random = Math.random();
// value = random < 0.33 ? "Hello" : random < 0.66 ? 123.456 : true;

// function checkValue(value:ValueType):void{
//     if(typeof value === 'string'){
//         console.log(value.toLowerCase())
//         return;
//     }
//     else if(typeof value === 'number'){
//         console.log(Math.round(value*100)/100)
//         return;
//     }
//     else {
//         console.log('boolean: '+value)
//         return;

//     }
// }
// checkValue(value)

type Dog = { type: "dog"; name: string; bark: () => void };
type Cat = { type: "cat"; name: string; meow: () => void };
type Animal = Dog | Cat;

//check for a property or a method

// function makeSound(animal:Animal):void{
//     if(animal.type === 'dog'){
//         animal.bark()
//     }
//     else {
//         animal.meow()
//     }
// }

// function makeSound(animal:Animal){
//     if('bark' in animal){
//         animal.bark()
//     }
//     else {
//         animal.meow()
//     }
// }

// function printLength(str:string | null | undefined):void{

//     if(str){
//         console.log(str.length)
//     }
//     else {
//         console.log('no string provided')
//     }
// }

// printLength(null)
// printLength(undefined)
// printLength('')
// printLength('a string')

// type script might complain with try and catch as we might have an error that isn't 
// an instance of the error class.
// try {
//     throw 'some error'
//     // throw new Error('This is an error')//
// } catch(error){
//     if(error instanceof Error){
//         console.log(`Caught an error object: ${error.message}`)
//     }
//     else {
//         console.log('unknown error...')
//     }
// }

// function checkInput(input:Date | string):string{
//     if(input instanceof Date){
//         return input.getFullYear().toString()
//     }
//     return input
// }

// const year = checkInput(new Date());
// const random = checkInput('2020-05-05')

// console.log(year)
// // console.log(random)

// type Student = {
//     name: string;
//     study: () => void;
//   };
  
//   type User = {
//     name: string;
//     login: () => void;
//   };
  
//   type Person = Student | User;
  
//   const randomPerson = (): Person => {
//     return Math.random() > 0.5
//       ? { name: "john", study: () => console.log("Studying") }
//       : { name: "mary", login: () => console.log("Logging in") };
//   };
  
//   const person = randomPerson();

//   function isStudent(person:Person):person is Student{
//         //return 'study' in person
//         return (person as Student).study !== undefined
//   }

//   if(isStudent(person)){
//     person.study()
//   }
//   else {
//     person.login()
// //   }

// type IncrementAction = {
//     type: 'increment',
//     amount: number;
//     timestamp: number;
//     user: string;
//   };
  
//   type DecrementAction = {
//     type: 'decrement',
//     amount: number;
//     timestamp: number;
//     user: string;
//   };
  
//   type Action = IncrementAction | DecrementAction;

// function reducer (state:number, action:Action){
//     switch(action.type){
//         case 'increment':
//             return state + action.amount
//         case 'decrement':
//             return state - action.amount
//         default: 
//         const unexpectedAction: never = action
//             throw new Error(`Unexpected action: ${unexpectedAction}`)
//     }
// }

//   const newState = reducer(15, {
//     user:'John',
//     type: 'decrement',
//     amount: 20,
//     timestamp:123456
//   })

//   console.log(newState)