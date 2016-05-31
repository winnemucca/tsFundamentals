import {Category} from './enums';
import {Schedule} from './enums2';

interface Dish {
    id: number;
    name: string;
    available: boolean;
    type: Category;
    price: number;
    special?: (reason: string) => void;
    reviews?: CustomerLogger;
}


interface CustomerLogger {
    (reason: string): void;
}

interface Employee {
    name: string;
    email: string;
    id: number;
}

interface Chef extends Employee {
    specialties: string;
    experience: number;
}

interface Waiter extends Employee {
    shiftPreference: Schedule;
}

export {Dish, CustomerLogger, Employee, Chef, Waiter};


