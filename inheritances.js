//this class represents all that is common between student and mentor

class Person {

  //moved her because it was identical
  constructor(name, quirkyFact) {
    this.name = name;
    this.quirkyFact = quirkyFact;
  }

  //moved here cuz it was identical
  bio(){
    return `My name ${this.name} and here's my quirky fact: ${this.quirkyFact}`
  }
}

class Student extends Person {
  // stays in Student class since it's specific to students only
  enroll(cohort) {
    this.cohort = cohort;
  }
}

class Mentor extends Person {
  // specific to mentors
  goOnShift() {
    this.onShift = true;
  }

  // specific to mentors
  goOffShift() {
    this.onShift = false;
  }
}

const student1 = new Student('Saad', 'punny')
console.log(student1)
student1.enroll('2020');

const mentor1 = new Mentor('Saad', 'funny');
console.log(mentor1);
