class Person {
    private _firstName: string = "";

    get firstName() {
        return this._firstName;
    }

    set firstName(firstName: string) {
        this._firstName = firstName.toUpperCase();
    }
}

let person = new Person();
person.firstName = "Aimal Khan";
console.log(person.firstName);
