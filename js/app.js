"use strict";
var enums_1 = require('./enums');
function GetFoodItems() {
    var dishes = [
        { id: 1, type: enums_1.Category.Poultry, price: 7, name: 'Basque Chicken', available: true },
        { id: 2, type: enums_1.Category.Beef, price: 9, name: 'Chorizo', available: true },
        { id: 3, type: enums_1.Category.Seafood, price: 22, name: 'Halibut', available: false },
        { id: 4, type: enums_1.Category.Seafood, price: 20, name: "Cod with Wine Sauce", available: false }
    ];
    return dishes;
}
function GetFoodDishesByCategory(categoryFilter) {
    console.log("getting dishes in the category" + enums_1.Category[categoryFilter]);
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
var meatDishes = GetFoodDishesByCategory(enums_1.Category.Beef);
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
var myFavoriteDish = {
    id: 2,
    type: enums_1.Category.Poultry,
    name: "Basque Chicken",
    available: true,
    price: 10,
    special: function (reason) { return console.log('Served on Mondays ' + reason); }
};
//***** playing around with interfaces ******//
function PrintReview(dish) {
    console.log(dish.name + 'for' + dish.special);
}
PrintReview(myFavoriteDish);
myFavoriteDish.special("excellent choice");
//# sourceMappingURL=app.js.map