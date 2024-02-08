class PStack {
  #id;
  constructor() {
    this.#id = 1;
    this._persons = [];
  }

  showId() {
    return this.#id;
  }

}

class PStackImpl extends PStack {
  constructor() {
    super();
  }

  get persons() {
    return this._persons
  }

  set persons(persons) {
    this._persons = persons
  }

  push(p) {
    return this._persons.push(p)
  }

  pop() {
    return this._persons.pop().age
  }
}

let pstack = new PStackImpl();
pstack.persons = [{name: 'Joe', age: 21}, {name: 'Gaby', age: 29}]
pstack.push({name: 'Devin', age: 19});
console.log(pstack.pop());
console.log(pstack.pop());
console.log(pstack.persons);
