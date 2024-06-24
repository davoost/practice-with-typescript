// // // // let array1: string[] = ['Apple', 'Banana', 'Mango'];
// // // // let array2: number[] = [1, 2, 3];
// // // // let array3: boolean[] = [true, false, true];

// // // let array1: Array<string> = ['apple', 'banana', 'mango']

// // // function createString(arg: string):string {
// // //     return arg
// // // }

// // // function createNumber(arg: number):number {
// // //     return arg
// // // }
// // // // the below function can take any type and return the same type - a generic type
// // // function genericFunction<T>(arg:T):T{
// // //     return arg
// // // }

// // // const someStringValue = genericFunction<string>('hello world')
// // // const someNumberValue = genericFunction<number>(2)

// // // interface GenericInterface<T>{
// // //     value:T;
// // //     getValue: () => T
// // // }

// // // const genericString: GenericInterface<string> = {
// // //     value: 'Hello World',
// // //     getValue(){
// // //         return this.value
// // //     }
// // // }
 
// // // // type script is not happy with below, as async returns a promise not a string
// // // async function someFunc(): Promise<string> {
// // //     return 'hello world';
// // // }

// // // const result = someFunc()

// // function generateStringArray(length:number, value:string):string[]{
// //     let result:string[] = []
// //     result = Array(length).fill(value) 
// //     return result;
// // }
// // console.log(generateStringArray(6, 'hello'))

// // function createArray<T>(length:number, value: T):Array<T>{
// //     let result:T[] = []
// //     result = Array(length).fill(value) 
// //     return result;
// // }

// // console.log(createArray<string>(3, 'hello'))
// // console.log(createArray<number>(4, 100))

// // // read a function of any type and return that specific type

// // function pair<T, U>(param1:T, param2:U):[T,U]{
// //     return [param1, param2]
// // }

// // let result = pair<number, string>(123, 'hello')
// // let result2 = pair<string, number>('hello', 123)
// // let result3 = pair(123, 'Hello')

// // //use state hook is actually a generic

// // // can also set up constraints and limit the types taken

// // function processValue<T extends string | number>(value:T):T{
// //     console.log(value)
// //     return value;
// // }

// // processValue('Hello')
// // processValue(5)



// type Car = {
//     brand: string;
//     model: string;
//   };
  
//   const car: Car = {
//     brand: "ford",
//     model: "mustang",
//   };
  
//   type Product = {
//     name: string;
//     price: number;
//   };
  
//   const product: Product = {
//     name: "shoes",
//     price: 1.99,
//   };
  
//   type Student = {
//     name: string;
//     age: number;
//   };
  
//   const student: Student = {
//     name: "peter",
//     age: 20,
//   };


//   function printName<T extends Student>(input:T):void{
//     console.log(input.name)
//   }
// // even though product has the name property 
// // typescript still complains as we have extended the type
// // // only to Students
//   printName(student)
// //   printName(product)


// // I can use the below way of extending (with an object) to accept things only
// // with a name that is a string
// function printName2<T extends { name: string }>(input:T):void{
//     console.log(input.name)
//   }

// printName2(student)
// printName2(product)

// interface StoreData<T = any>{
//     data: T[];
// }

// const storeNumbers:StoreData<number> = {
//     data: [1, 2, 3, 4]
// };

// const randomStuff:StoreData = {
//     data: ['random', 1]
// }

/// FETCH DATA ///

// import { z } from 'zod'

// const url = "https://www.course-api.com/react-tours-project";

// const tourSchema = z.object({
//   id:z.string(),
//   name:z.string(),
//   info:z.string(),
//   image:z.string(),
//   price:z.string(),
  
// })

// type Tour = z.infer<typeof tourSchema>

// async function fetchData(url: string): Promise<Tour[]> {
//   try {
//     const response = await fetch(url);

//     // Check if the request was successful.
//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }

//     const rawData:Tour[] = await response.json();

//     const result = tourSchema.array().safeParse(rawData)
//     console.log(result)
//     if (!result.success){
//       throw new Error(`Invalid data: ${result.error}`)
//     }
//     return result.data;
//   } catch (error) {
//     const errMsg =
//       error instanceof Error ? error.message : "there was an error...";
//     console.error(errMsg);
//     // throw error;
//     return [];
//   }
// }

// const tours = await fetchData(url);
// tours.map((tour) => {
//   console.log(tour.name);
// });
