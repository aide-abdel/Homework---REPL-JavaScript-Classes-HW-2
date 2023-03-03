class Governor {
  static termLength = 4;
  static residence = "Governor's mansion";
  static currentGovernor = "John Smith";

  static endTerm() {
    console.log(`${this.currentGovernor}'s term has ended.`);
  }

  static vetoBill(bill) {
    console.log(`${this.currentGovernor} has vetoed ${bill}.`);
  }
}

console.log(Governor.termLength);
console.log(Governor.residence);
Governor.endTerm();
Governor.vetoBill("SB 123");

class Person {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }

  introduce() {
    console.log(`Hi, my name is ${this.name} and I'm ${this.age} years old.`);
  }

  eat() {
    console.log(`${this.name} is eating.`);
  }

  sleep() {
    console.log(`${this.name} is sleeping.`);
  }
}

class PostalWorker extends Person {
  deliverMail() {
    console.log(`${this.name} is delivering mail.`);
  }

  sortMail() {
    console.log(`${this.name} is sorting mail.`);
  }
}

class Chef extends Person {
  cook() {
    console.log(`${this.name} is cooking.`);
  }

  washDishes() {
    console.log(`${this.name} is washing dishes.`);
  }
}

const postalWorker1 = new PostalWorker("Alice", 35, "female");
const postalWorker2 = new PostalWorker("Bob", 28, "male");
const chef1 = new Chef("Charlie", 42, "male");
const chef2 = new Chef("Diana", 29, "female");

postalWorker1.introduce();
postalWorker1.deliverMail();
chef1.introduce();
chef1.cook();
postalWorker2.sortMail();
chef2.sleep();
