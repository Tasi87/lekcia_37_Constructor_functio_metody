//idea	Constructor function
// funkcia, ktorá vracia inštanciu objektu

function CreateWizard(firstName, mySpell) {
	this.name 	= firstName
	this.spell	= mySpell

	//! return vracia iba neprimitívne dátové typy: object a array
	//! tvoriť bez "return"
}

const wizard1 = new CreateWizard("David", "abraka")
console.log(wizard1)
// console.log(wizard1.name)
// console.log(wizard1.spell)

/**
//note Znaky Constructor function:
	- názov funkcie začína veľkým písmenom
	- používa kľúčove slovo //! "this"
	- používa //! "new" 

//note Keď sa použije slovo "new":
	- vytvorí sa prázdny object
	- priradí "this" novo vytvorenému object
	- vráti object
*/