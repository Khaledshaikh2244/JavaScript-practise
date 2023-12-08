// //write program if the input stored in array should return as type of input data type
// // like if i/p is string then o/p => string  , same goes with numbers


type User {
    name: string;
    age: number;
}


function getFirstElenent<T>(arr: T[]){
    return arr[0];
}

    let ans1 = getFirstElenent<number>([1, 2, 3]);
    let answer2 = getFirstElenent<string>(["one", "Two"]);
    


