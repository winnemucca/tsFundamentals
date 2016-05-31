import { HeadChef } from './Classes';
import { Category} from './enums';
import { Dish, CustomerLogger,Employee, Chef, Waiter } from './interfaces';
import { Schedule} from './enums2';


function GetFoodItems() {
    let dishes = [
        { id: 1, type: Category.Poultry, price: 7, name: 'Basque Chicken', available: true },
        { id: 2, type: Category.Beef, price: 9, name: 'Chorizo', available: true  },
        { id: 3, type: Category.Seafood, price: 22, name: 'Halibut', available: false },
        { id: 4, type: Category.Seafood, price: 20, name: "Cod with Wine Sauce", available: false}
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
// adding a default.   Allows call without paramters;
function LogMostAffordable(dishes ):void {
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


function  GetDishesById(id :number):Dish {
    const allDishes = GetFoodItems();
    return allDishes.filter(dish => dish.id === id)[0];
}

function CreateCustomerID(name: string, id: number): string {
    return name + id;
}

function CreateCustomer(name: string, age?: number, city?: string): void {
    console.log('creating customer ' + name);

    if (age) {
        console.log('age: ' + age);
    }
    if (city) {
        console.log('City' + city);
    }
}
CreateCustomer("Michelle",6);
// meatDishes
const meatDishes = GetFoodDishesByCategory(Category.Beef);
LogDishTitles(meatDishes);

function PurchasedFoodItems(customer, ...dishIDs) :any{
    console.log("purchasing meals for customer: " + customer);

    let mealsPurchased: string[] = [];

    for (let id of dishIDs) {
        let dish:any = GetDishesById(id);
        if (dish.available) {
            mealsPurchased.push(dish.name);
        }
    }

    return mealsPurchased;
}

// ************//

let myDishes: any[] = PurchasedFoodItems('Thor',1,2,3);
myDishes.forEach(title => console.log(title));

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

let myFavoriteDish: Dish = {
    id: 2,
    type: Category.Poultry,
    name: "Basque Chicken",
    available: true,
    price: 10,
    special: (reason: string) => console.log('Served on Mondays ' + reason)

};

//***** playing around with interfaces ******//

function PrintReview(dish: Dish): void{
    console.log(dish.name + 'for' + dish.special )
}

PrintReview(myFavoriteDish);
myFavoriteDish.special("excellent choice");