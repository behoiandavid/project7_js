function sumArray(numbers) {
    return numbers.reduce((total, num) => total + num, 0);
};

const exampleArray = [1, 2, 3, 4, 5];
const sum = sumArray(exampleArray);
console.log('Сума елементів масиву:', sum);



function doubleArrayElements(numbers) {
    return numbers.map(num => num * 2);
};


const exampleArrayy = [1, 2, 3, 4, 5];
const doubledArray = doubleArrayElements(exampleArrayy);
console.log('Подвоєні елементи масиву:', doubledArray); // Виведення подвоєних елементів




class SkillsManager {
    constructor() {
        this.skills = [];
    };

    addSkill(skill) {
        if (typeof skill === "string" && skill.length >= 2) {
            this.skills.push(skill);
            return skill;
        } else {
            return null;
        }
    };

    getAllSkills() {
        return this.skills;
    };
};

const skillsManager = new SkillsManager();

console.log(skillsManager.addSkill('JavaScript'));
console.log(skillsManager.addSkill('CSS'));
console.log(skillsManager.getAllSkills());



function DateCalculator(initialDate) {

    let date = new Date(initialDate)
    this.addDays = function (days) {
        date.setDate(date.getDate() + days);
    };

    this.subtractDays = function (days) {
        date.setDate(date.getDate() - days);
    };

    this.getResult = function () {
        return date.toISOString().split("T")[0];
    };
};


const dateCalculator = new DateCalculator('2023-01-01');
dateCalculator.addDays(5);
console.log(dateCalculator.getResult()); // Виводить нову дату після додавання днів

dateCalculator.subtractDays(3);
console.log(dateCalculator.getResult()); // Виводить нову дату після віднімання днів

