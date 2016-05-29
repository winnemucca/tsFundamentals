function GetFoodItems() {
    var dishes = [
        { type: Category.Poultry, price: 7, name: 'Basque Chicken' },
        { type: Category.Beef, price: 9, name: 'Chorizo' },
        { type: Category.Seafood, price: 22, name: 'Halibut' }
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
// meatDishes
var meatDishes = GetFoodDishesByCategory(Category.Beef);
LogDishTitles(meatDishes);
// const allDishes = GetFoodItems();
// LogMostAffordable(allDishes); 
//# sourceMappingURL=app.js.map