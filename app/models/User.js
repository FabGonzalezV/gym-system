
class User {
    constructor(name, lastName, age, height, weight, instalment) {
        this.name = name;
        this.lastName = lastName;
        this.age = age;
        this.height = height;
        this.weight = weight;
        this.instalment = instalment;
    }

    getName() { return this.name }

    getLastName() { return this.lastName; }

    getAge(){return this.age;}

    getHeight(){return this.height;}

    getWeight(){return this.weight;}

    getInstalment (){return this.instalment;}
}