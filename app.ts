function GetFoodItems() {
    let dishes: any[] = [
        { type: Category.Poultry, price: 7, name: 'Basque Chicken' },
        { type: Category.Beef, price: 9, name: 'Chorizo' },
        { type: Category.Seafood, price: 22, name: 'Halibut'}
    ]

    return dishes;
}

function GetFoodDishesByCategory(categoryFilter: Category): Array<string> {

    console.log("getting dishes in the category" + Category[categoryFilter]);
    const allDishes = GetFoodItems();
    const filteredTitles: string[] = [];

    for (let currentDish of allDishes) {
        if (currentDish.type === categoryFilter) {
            filteredTitles.push(currentDish.name);
        }
    }

    return filteredTitles;
}

function LogMostAffordable(dishes):void {
    let numberOfDishes: number = dishes.length;
    let mostAffordable: string = '';

    for (let currentDish of dishes) {
        
        if (currentDish.price <= 7) {
            mostAffordable = currentDish.name;
        }

    }
    console.log("total dishes: " + numberOfDishes);
    console.log("most affordable " + mostAffordable);
}

function LogDishTitles(types: string[]): void {
    for (let type of types) {
        console.log(" here is the type", type);
    }
}

enum Category { Beef, Chicken, Poultry, Seafood, Vegetarian };

// meatDishes
const meatDishes = GetFoodDishesByCategory(Category.Beef);
LogDishTitles(meatDishes);

// const allDishes = GetFoodItems();
// LogMostAffordable(allDishes);