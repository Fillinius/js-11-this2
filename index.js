const dog = {
   name: 'Чарли',
   type: 'Собака',
   makeSound() {
      return 'Гав-Гав';
   }
}

const bird = {
   name: 'Петя',
   type: 'Воробей',
   makeSound() {
      return 'Чик-чирик';
   }
}

function makeDomestic(isDomestic) {
   console.log(`name: ${this.name}, type: ${this.type}, ${this.makeSound},isDomestic: ${isDomestic}`)
   console.log(`${this.type} по имени ${this.name} говорит ${this.makeSound()}`)
   this.animal = isDomestic
   // if(isDomestic===false){
   //  return this.isDomestic
   // } не работает проверка дамашнее живитное или нет. Или такую проверку делать не надо?
}

const newMakeDomestic = makeDomestic.bind (dog, true)
newMakeDomestic()

makeDomestic.call(bird, false)
makeDomestic.apply(bird, [false])
console.log(bird)
console.log(dog)
