let menu = {
    _courses: {
        appetizers: [],
        mains: [],
        desserts: [],
    },
    generateRandomMeal() {
        let appetizer = this.getRandomDishFromCourse('appetizers');
        let main = this.getRandomDishFromCourse('mains');
        let dessert = this.getRandomDishFromCourse('desserts');
        return `Your meal is ${appetizer.name}, ${main.name}, ${dessert.name}. The total price is ${appetizer.price + main.price + dessert.price}.`;
    },
    getRandomDishFromCourse(courseName) {
        const dishes = this._courses[courseName];
        const randIndex = Math.floor(Math.random() * dishes.length);
        return dishes[randIndex];
    },
    addDishToCourse(courseName, dishName, dishPrice) {
        let dish = {
            name: dishName,
            price: dishPrice,
        }
        this._courses[courseName].push(dish);
    },
    get courses() {
        return {
            appetizers: this._courses.appetizers,
            mains: this._courses.mains,
            desserts: this._courses.desserts,
        };
    },
    get appetizers() {
        return this._courses.appetizers;
    },
    set appetizers(appetizerIn) {
        this._courses.appetizers = appetizerIn;
    },
    get appetizers() {
        return this._courses.mains;
    },
    set appetizers(mainsIn) {
        this._courses.mains = mainsIn;
    },
    get appetizers() {
        return this._courses.desserts;
    },
    set appetizers(dessertsIn) {
        this._courses.desserts = dessertsIn;
    },
};

menu.addDishToCourse('appetizers', 'Salad #1', 4);
menu.addDishToCourse('appetizers', 'Salad #2', 5);
menu.addDishToCourse('appetizers', 'Salad #3', 6);

menu.addDishToCourse('mains', 'Meat #1', 4);
menu.addDishToCourse('mains', 'Meat #2', 5);
menu.addDishToCourse('mains', 'Meat #3', 6);

menu.addDishToCourse('desserts', 'Bublik #1', 4);
menu.addDishToCourse('desserts', 'Bublik #2', 5);
menu.addDishToCourse('desserts', 'Bublik #3', 6);


let meal = menu.generateRandomMeal();
console.log(meal);