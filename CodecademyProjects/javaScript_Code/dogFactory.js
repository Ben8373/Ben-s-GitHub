const dogFactory = (name, breed, weight) => {
    return {
      _name: name,
      get name() {
        return this._name;
      },
      set name(name) {
        return this._name;
      },
      _breed: breed,
      get breed() {
        return this._breed;
      },
      set breed(breed) {
        return this._breed;
      },
      _weight: weight,
      get weight() {
        return this._weight;
      },
      set weight(weight) {
        return this._weight;
      },
    };
  };
  
  exampleDog = dogFactory("Sam");
  console.log(exampleDog.name);
  