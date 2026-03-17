//idea	Constructor function pridávanie metód

function CreateWizard(firstName, mySpell) {
	this.name 	= firstName
	this.spell	= mySpell
	//note jeden spôsob
	// this.attack = function () {
	// 	return "útok pomocou kúzla " + this.spell
	// }
}

	//note druhý spôsob na prototype
CreateWizard.prototype.attack = function () {
		return "útok pomocou kúzla " + this.spell
	}

// toto je na Object.prototype, preto má wizard prístup
Object.prototype.attack2 = function () {
	return "Útok!!!!"
}

const wizard1 = new CreateWizard("David", "abraka")
console.log(wizard1)
console.log(wizard1.attack())
console.log(wizard1.attack2())

const wizard2 = new CreateWizard("Harry", "imobilus")
console.log(wizard2.attack())
console.log(wizard2.attack2())

const newObject = {}
console.log(newObject.attack2())		// Útok!!!!

const myArray = [1, 2, 3]
console.log(myArray.prototype)		// undefined
console.log(myArray.__proto__)		// existuje

//idea prototype VS __proto__
/**
Prototype 	- konkrétny objekt, ktorý sa robí, keď mám objekt vytvorený pomocou
				Constructor function.

Object.prototype	-	je dostupný všetkým objektom v JS, pretože tie všetky objekty z neho
						nejakým spôsobom dedia alebo majú prístup.

__proto__	- prístup k nejakému reťazeniu, nie je objekt, ktorý dáva nejakú špeciálnu
				funkčnosť. Dovedie to k funkčnosti. Je to práca v pozadí, ktorá kontroluje,
				či nemám v pozadí niečo, čo potrebujem.
*/