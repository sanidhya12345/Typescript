//declare and object in typescript

const obj:{type:string,model:string,year:number}={
    type:'car',
    model:'ferrari',
    year:2023
}
console.log(obj);

//type inference

const car={
    type:'ferrari'
}
//car.type=34;//throws an error;
car.type="honda city";
console.log(car);

const carv: { type: string, mileage?: number } = { // Error: Property 'mileage' is missing in type '{ type: string; }' but required in type '{ type: string; mileage: number; }'.
    type: "Toyota",
  };
  carv.mileage = 2000;

console.log(carv);