import { RandomGenerator } from "../pageObjects/random";

export const clientRequiredFields = {
    surname: RandomGenerator.textAndNumbers(10), 
    surnamNew: RandomGenerator.textAndNumbers(10), 
    name: RandomGenerator.textAndNumbers(6), 
    nameNew: RandomGenerator.textAndNumbers(6), 
    email: RandomGenerator.lowerCaseText(7)+ '_test@gmail.com',
    phone: RandomGenerator.numbers(12),
    dob: '01/01/1981'
}