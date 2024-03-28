//typed arrays is called tuples in typescript

//define our tuple:-

let ourtuple:[number ,boolean ,string];

ourtuple=[45,true,"sanidhya varshney"];

console.log(ourtuple);

// how to create a readonly tuple

let createTuple: readonly [number , boolean, string];
createTuple=[67,false,"hello world"];
//Property 'push' does not exist on type 'readonly [number, boolean, string]
//createTuple.push("sanidhya varshney"); throws an error.

//destructuring tuple:-

const graph:[number ,number]=[45,56];
const [x,y]=graph;
console.log(x);
console.log(y);
