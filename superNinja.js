class Ninja {
  constructor(name, health = 100, speed = 3, strength = 3) {
    this.name = name;
    this.health = health;
    this.speed = speed;
    this.strength = strength;
  }
  sayName() {
    console.log(this.name);
  }
  showStats() {
    console.log(this.name, this.strength, this.speed, this.health);
  }
  drinkSake() {
    this.health += 10;
  }
}

class Sensei extends Ninja {
  constructor(name, wisdom = 10) {
    super(name, 200, 10, 10);
    this.wisdom = wisdom;
  }
  showStats() {
    console.log(this.name, this.strength, this.speed, this.health, this.wisdom);
  }

  speakWisdom() {
    this.drinkSake();
    console.log("Don't try to iceskate uphill.");
  }
}

const Bob = new Ninja("Bob", 100, 3, 3);
const Splinter = new Sensei("Master Splinter");

Bob.showStats();
Splinter.showStats();

Splinter.speakWisdom();
Splinter.showStats();
