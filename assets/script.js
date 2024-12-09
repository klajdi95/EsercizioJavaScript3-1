//Creazione della classe User con i suoi attributi; Attraverso un costruttore, che accetta quattro parametri:
class User {
    constructor(firstName, lastName, age, location) {//...?=>('per invocare un metodo "func" di un oggetto "obj", si uttilizzerà "obj.func()"" this si riferisce a obj???')
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.location = location

    }//una volta definita il costruttore della classe User procediamo con il metodo

    compareAge(anotherUser) {
        if (this.age < anotherUser.age) {
            return `${anotherUser.firstName} 'è piu vecchio di ' ${this.firstName}`
        }
        else if (this.age > anotherUser.age){
            return `${anotherUser.firstName} 'è piu giovane di' ${this.firstName}`
        }
    }



}

x = new User ('Pietro', 'Rossi', 18, 'Milano')
y = new User('Marco', 'Bianchi', 25, 'Ferrara')
console.log(x.compareAge(y))
console.log(y.compareAge(x))

//////////////////////////////////////////////////////////////////////////////////////////////////


let petName= document.getElementById('petName')
let ownerName=document.getElementById('OwnerName')
let species=document.getElementById('species')
let breed=document.getElementById('breed')




let addButton = getElementById('add')
let petList = getElementById('petList')
let pets=[]

class Pet{
    constructor(PetName, ownerName, species, breed){
        this.petName = petName
        this.ownerName = ownerName
        this.species = species
        this.breed = breed

    }
    
    checkSameOwner(anotherPet){
        if(this.ownerName === anotherPet.ownerName){
            return true

        }else{
            return false
        }
   
    }
}



const renderList = function(){
    petList.innerHTML=''
    pets.forEach((pet) =>{
        const newLi = document.createElement('li')
        newLi.innerText= 'Nome: ' + pet.petName + 'proprietario' + pet.ownerName
        petList.appenChild(newLi)
    })

}


addButton.onclick = function(){
    let newPet = new Pet(
        petName.value,
        ownerName.value,
        species.value,
        breed.value
    )
    pets.push(newPet)
    renderList()
    petName.value=''
    ownerName.value = ''
    species.value= ''
    breed.value=''


}