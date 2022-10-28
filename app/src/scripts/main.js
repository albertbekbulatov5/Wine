class Game{
    constructor({name, age}){
        this.name = name;
        this.age = age;
    }
    say(){
        console.log(this.name, this.age);
    }
}
const obj1 = new Game({
    name: 'ivan',
    age: 23
});