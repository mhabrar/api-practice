const normal = {
    firstName: 'Leonel',
    lastName: 'Messi',
    salary:40000,
    getFullName:function(){
        console.log(this.firstName, this.lastName);
    },
    chargeBat:function(amount,tax,tips){
        this.salary = this.salary - amount;
        return this.salary;

    }
}
//console.log(normal.firstName);
// normal.chargeBat(5000);
// console.log(normal.salary);
 
//another method from another Object call system
const heroPerson = {
    firstName:'alu',
    lastName:'bocta',
    salary:30000,

 }
// const badPerson = {
//     firstName:'alu',
//     lastName:'bocta',
//     salary:30000,
// }

// const heroChargebill = normal.chargeBat.bind(heroPerson);
// heroChargebill(5000);
// console.log(heroPerson.salary);

normal.chargeBat.call(heroPerson,200,50,30); //paramiter use coma.
console.log(heroPerson.salary);

normal.chargeBat.apply(heroPerson,[200,100,100]); //paramiter use arry.
console.log(heroPerson.salary);