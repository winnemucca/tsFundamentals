function GetFoodItems() {
    var dishes = [
        { id: 1, type: Category.Poultry, price: 7, name: 'Basque Chicken', available: true },
        { id: 2, type: Category.Beef, price: 9, name: 'Chorizo', available: true },
        { id: 3, type: Category.Seafood, price: 22, name: 'Halibut', available: false },
        { id: 4, type: Category.Seafood, price: 20, name: "Cod with Wine Sauce", available: false }
    ];
    return dishes;
}
function GetFoodDishesByCategory(categoryFilter) {
    console.log("getting dishes in the category" + Category[categoryFilter]);
    var allDishes = GetFoodItems();
    var filteredTitles = [];
    for (var _i = 0, allDishes_1 = allDishes; _i < allDishes_1.length; _i++) {
        var currentDish = allDishes_1[_i];
        if (currentDish.type === categoryFilter) {
            filteredTitles.push(currentDish.name);
        }
    }
    return filteredTitles;
}
// adding a default.   Allows call without paramters;
function LogMostAffordable(dishes) {
    var numberOfDishes = dishes.length;
    var mostAffordable = '';
    for (var _i = 0, dishes_1 = dishes; _i < dishes_1.length; _i++) {
        var currentDish = dishes_1[_i];
        if (currentDish.price <= 7) {
            mostAffordable = currentDish.name;
        }
    }
    console.log("total dishes: " + numberOfDishes);
    console.log("most affordable " + mostAffordable);
}
function LogDishTitles(types) {
    for (var _i = 0, types_1 = types; _i < types_1.length; _i++) {
        var type = types_1[_i];
        console.log(" here is the type", type);
    }
}
var Category;
(function (Category) {
    Category[Category["Beef"] = 0] = "Beef";
    Category[Category["Chicken"] = 1] = "Chicken";
    Category[Category["Poultry"] = 2] = "Poultry";
    Category[Category["Seafood"] = 3] = "Seafood";
    Category[Category["Vegetarian"] = 4] = "Vegetarian";
})(Category || (Category = {}));
;
function GetDishesById(id) {
    var allDishes = GetFoodItems();
    return allDishes.filter(function (dish) { return dish.id === id; })[0];
}
function CreateCustomerID(name, id) {
    return name + id;
}
function CreateCustomer(name, age, city) {
    console.log('creating customer ' + name);
    if (age) {
        console.log('age: ' + age);
    }
    if (city) {
        console.log('City' + city);
    }
}
CreateCustomer("Michelle", 6);
// meatDishes
var meatDishes = GetFoodDishesByCategory(Category.Beef);
LogDishTitles(meatDishes);
function PurchasedFoodItems(customer) {
    var dishIDs = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        dishIDs[_i - 1] = arguments[_i];
    }
    console.log("purchasing meals for customer: " + customer);
    var mealsPurchased = [];
    for (var _a = 0, dishIDs_1 = dishIDs; _a < dishIDs_1.length; _a++) {
        var id = dishIDs_1[_a];
        var dish = GetDishesById(id);
        if (dish.available) {
            mealsPurchased.push(dish.name);
        }
    }
    return mealsPurchased;
}
// ************//
var myDishes = PurchasedFoodItems('Thor', 1, 2, 3);
myDishes.forEach(function (title) { return console.log(title); });
//**************//
// const allDishes = GetFoodItems();
// LogMostAffordable(allDishes);
// *********************
// const seafoodDishes = GetFoodDishesByCategory(Category.Seafood);
// seafoodDishes.forEach((val, idx, arr)=> console.log(++idx + ' - ' + val));
// let myID: string = CreateCustomerID("Daniel", 15);
// console.log(myID);
// let x: number;
// x = 5;
// let IdGenerator: (chars: string, nums: number) => string;
// IdGenerator = CreateCustomerID; 
//# sourceMappingURL=app.js.map