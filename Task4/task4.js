class Flower {
  constructor(type, color, amount, inStore) {
    this.type = type;
    this.color = color;
    this.amount = amount;
    this.inStore = inStore;
  }

  
  methodFirst() {
    
    if (this.inStore == true){
      this.inStore = 'Yes'
    } else {
      this.inStore = 'No'
    }
    console.log(`After created: type: ${this.type}, color: ${this.color}, amount: ${this.amount}, in Store: ${this.inStore}`);
    
  }

  
  methodSecond(newColor, newAmount, newInStore) {
    this.color = newColor;
    this.amount = newAmount;
    this.inStore = newInStore;
    if (this.inStore == true){
      this.inStore = 'Yes'
    } else {
      this.inStore = 'No'
    }

    console.log(`After changed: type: ${this.type}, color: ${this.color}, amount: ${this.amount}, in Store: ${this.inStore}`);
  }
}

let myRose = new Flower ('Rose', 'Red',5, true);
myRose.methodFirst();
myRose.methodSecond('Yellow', 3, false); 
