class Ninja {
  constructor(name, health, speed, strength) {
    this.name = name;
    this.health = health;
    this.speed = speed;
    this.strength = strength;
  }
  sayName() {
    console.log(this.name);
  }
  showStats() {
    console.log(this.name, this.strength, this.speed, this.health, this.wisdom);
  }
  drinkSake() {
    this.health += 10;
  }
}

class Sensei extends Ninja {
  constructor(name) {
    super(name);
    this.health = 200;
    this.speed = 10;
    this.strength = 10;
    this.wisdom = 10;
  }
  speakWisdom() {
    this.drinkSake();
    console.log("Don't try to iceskate uphill.");
  }
}

const splinter = new Sensei("Master Splinter");

splinter.speakWisdom();
splinter.showStats();
