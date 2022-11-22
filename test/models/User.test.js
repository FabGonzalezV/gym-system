const User = require('./../../app/models/User.js');

describe("Unit test for User class", ()=>{
    test ('create instance user', ()=>{
        const newUser = new User('name', 'lastName', 0, 0, 0, 0);
        expect(newUser.name).toBe('name');
        expect(newUser.lastName).toBe('lastName');
        expect(newUser.age).toBe(0);
        expect(newUser.height).toBe(0);
        expect(newUser.weight).toBe(0);
        expect(newUser.instalment).toBe(0);
        expect(newUser.dateEnrollment).not.toBeUndefined() ;
        expect(newUser.currentDate).not.toBeUndefined();
    });

    test ('add getters', ()=>{
        const newUser = new User('n', 'lastName', 0, 0, 0, 0);
         expect(newUser.getName()).toBe('n');
        expect(newUser.getLastName()).toBe('lastName');
        expect(newUser.getAge()).toBe(0);
        expect(newUser.getHeight()).toBe(0);
        expect(newUser.getWeight()).toBe(0);
        expect(newUser.getInstalment()).toBe(0);
        expect(newUser.getDateEnrollment).not.toBeUndefined() ;
        expect(newUser.getCurrentDate).not.toBeUndefined();
    });

    test ('add setters', ()=>{
        const newUser = new User('name', 'lastName', 0, 0, 0, 0);
        newUser.setAge(1);
        newUser.setHeight(1);
        newUser.setWeight(1);
        newUser.setInstalment(1);
        newUser.setLastName('newLastName');
        newUser.setName('newName')


        expect(newUser.name).toBe('newName');
        expect(newUser.lastName).toBe('newLastName');
        expect(newUser.age).toBe(1);
        expect(newUser.height).toBe(1);
        expect(newUser.weight).toBe(1);
        expect(newUser.instalment).toBe(1);
        expect(newUser.dateEnrollment).not.toBeUndefined() ;
        expect(newUser.currentDate).not.toBeUndefined();
    });
});