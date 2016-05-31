import {Dish, Employee, CustomerLogger, Chef, Waiter} from './interfaces';

class HeadChef implements Chef {
    name: string;
    email: string;
    id: number;
    experience: number;
    specialties: string;

    assistStaff(chefName: string) {
        console.log(this.name + "is assisting " + chefName);
    }
    
}

export { HeadChef };