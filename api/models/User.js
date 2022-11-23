
class User {
    constructor( id, name, lastName, age, height, weight, email, instalment ) {
        this.id =id;
        this.name = name;
        this.lastName = lastName;
        this.age = age;
        this.height = height;
        this.weight = weight;
        this.instalment = instalment;
        this.email = email;
        this.dateEnrollment = new Date();
        this.currentDate = new Date();
    }

    //getters
    getId() { return this.id; }

    getName() { return this.name }

    getLastName() { return this.lastName; }

    getAge() { return this.age; }

    getHeight() { return this.height; }

    getWeight() { return this.weight; }

    getInstalment() { return this.instalment; }

    getDateEnrollment() { return this.dateEnrollment; }

    getCurrentDate() { return this.currentDate; }

    getEmail(){return this.email;}

    //setters
    setName(newName) { this.name = newName; }

    setLastName(newLastName) { this.lastName = newLastName; }

    setAge(newAge) { this.age = newAge; }

    setHeight(newHeight) { this.height = newHeight; }

    setWeight(newWeight) { this.weight = newWeight; }

    setInstalment(newInstalment) { this.instalment = newInstalment; }

    getEmail(newEmail){ this.email = newEmail;}

}

module.exports = User;