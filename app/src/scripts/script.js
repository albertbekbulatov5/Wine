class Human{
    constructor({name, age}){
        this.name = name;
        this.age = age;
    }
    say(){
        console.log(this.name, this.age);
    }
}
const obj = new Human({
    name: 'ivan',
    age: 23
});