let tax: number | string = 10 //using the bar lets it take one or the other type
tax = 100
tax = '$10'

let requestStatus: 'pending' | 'success' | 'error' = 'pending'
requestStatus = 'pending' // can only be these things and they are suggested

let notSure: any = 4
notSure = 'maybe a string instead'
notSure = false

const books = ['1984', 'Brave New World', 'Fahrenheit 451']

let foundBook: string | undefined;
for (let book of books){
    if(book === '1984'){
        foundBook = book

        break
    }
}
console.log(foundBook?.length)

let discount: number | string = 20
discount = '20%'

let orderStatus: 'processing' | 'shipped' | 'delivered' = 'processing'
orderStatus = 'shipped'

let prices: number[] = [100, 75, 42] // this array will only have numbers
let fruit: string[] = ['apple', 'orange', 'banana']

// let randomValues: [] = ['hello'] accepts only an empty array

let emptyValues: any[] = ['hello']

let names = ['peter', 'susan', 1]
let array:(string | boolean)[] = ['apple', true]

let temperature: number[] = [45, 30, 20]
let colours: string[] = ['red', 'orange', 'blue']
let mixed: (string | number)[] = ['red', 8, 'twenty']

// setting up an object each parameter's type is stated
let car:{brand:string; year:number} = {brand: 'toyota', year: 2020}

let car1:{brand:string; year:number} = {brand: 'audit', year: 2023}

let book = { title:'book', cost:20 }
let pen = { title:'pen', cost:10 }
let notebook = { title:'notebook' }
// this is going to be an array of objects 
//also ? means optional property if it exists then include
//read only means sth can't be reassigned
let items: { readonly title:string; cost?:number}[] = [book, pen, notebook]

let bike: { brand:string; year: number } = { brand:'Yamaha', year:2010 }
let laptop: { brand:string; year: number } = { brand:'Dell', year:2010 }
let laptop2: { brand:string; year?: number } = { brand:'Dell' }

let product1: {title:string; price: number} = {title: 'shirt', price:20}
let product2: {title:string;} = {title: 'pants'}
let products: {title:string; price?: number}[] = [product1, product2]