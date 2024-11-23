
class Father{
    constructor(fname){
        this.fname = fname;
    }
    car(){
        console.log("Riding a Car.");
    }
}


class Child{
    cname = "Raj";
    bio = function (a,b){
        console.log(`My Name is ${this.cname}..${a}${b}`);
    }
    bio = function  (hobbies){
        console.log(`My Name is ${this.cname}.My Hobbies Are ${hobbies}.`);
    }
}



const child1 = new Child();

child1.bio(1,1);

child1.bio("sdfg");



var name = "sdf";
console.log(name);