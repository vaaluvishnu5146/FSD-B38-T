// MOVIE TASK
// RATING - PG, PG13, R
class Movies {
  // ACCESS MODIFIES = PUBLIC, PROTECTED, PRIVATE
  constructor(name = "", studio = "", rating = "") {
    this._name = name;
    this._studio = studio;
    this._rating = rating || "PG";
  }

  set name(value = "") {
    this._name = value;
  }

  get name() {
    return this._name;
  }

  set studio(value = "") {
    this._studio = value;
  }

  get studio() {
    return `The studio name is ${this._studio}`;
  }

  set rating(value = "") {
    this._rating = value + 1;
  }

  getFilteredMovies(data = [], rating = "PG") {
    return data.filter((d) => d.rating === rating);
  }
}

const PS = new Movies("PS2", "Lyca", "PG");
// PS.rating = "PG13";
// PS.name = "Ponniyin Selvan 2";
// PS.studio = "Studio x";
// PS.rating = 5;
console.log(PS.studio);
