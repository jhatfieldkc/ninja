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
    console.log(this.name, this.strength, this.speed, this.health);
  }
  drinkSake() {
    this.health += 10;
  }
}

const bobNinja = new Ninja("Bob", 100, 3, 3);

bobNinja.drinkSake();
bobNinja.showStats();
