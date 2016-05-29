function GetFoodItems() {
    var dishes = [
        { meat: true, price: '$7', name: 'Basque Chicken' },
        { meat: true, price: '$9', name: 'Chorizo' }
    ];
    return dishes;
}
function LogMostAffordable(dishes) {
    var numberOfDishes = dishes.length;
    var mostAffordable = '';
    for (var _i = 0, dishes_1 = dishes; _i < dishes_1.length; _i++) {
        var currentDish = dishes_1[_i];
        if (numberOfDishes.price) {
            mostAffordable = currentDish.name;
            break;
        }
    }
    console.log("total dishes: " + numberOfDishes);
    console.log("most affordable" + mostAffordable);
}
var allDishes = GetFoodItems();
LogMostAffordable(allDishes);
//# sourceMappingURL=app.js.map