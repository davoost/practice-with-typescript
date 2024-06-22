

// function getEmployee(): Person | DogOwner | Manager{
//     const randomNumber = Math.random()
//     if(randomNumber < 0.33){
//         return {
//             name: 'John'
//         }
//     } else if (randomNumber > 0.33 && randomNumber < 0.66){
//         return {
//             name: 'Sarah', dogName: 'Rex'
//         }
//     } else {
//         return {
//             name: 'Bob',
//             managePeople(){
//                 console.log('Managing People.....')
//             },
//             delegateTasks(){
//                 console.log('Delegating task.....')
//             }
//         }
//     }
// }

// interface Person {
//     name: string
// }

// interface DogOwner extends Person {
//     dogName: string
// }

// interface Manager extends Person {
//     //methods
//     managePeople():void
//     delegateTasks():void
// }

// const employee: Person | DogOwner | Manager = getEmployee()
// console.log(employee)

// function isManager(obj: Person | DogOwner | Manager):obj is Manager{
//     return 'managePeople' in obj
// }

// console.log(isManager(employee))

// // this doesn't work because don't know yet if employee manager, so can use 'is' as above
// // if(isManager(employee)){
// //     employee.delegateTasks()
// // }
// if(isManager(employee)){
//     employee.delegateTasks()
// }

// // interfaces can be merged using declerative merging. Type aliases can't be merged this way

// // Interfaces can be implemented by classes. type aliases cannot

// // type aliases can use computed properties. interfaces cannot