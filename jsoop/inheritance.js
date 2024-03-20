class Animal {
    // constructor: color, energy
    constructor(color = 'gray', energy = 100){
        this.color = color;
        this.energy = energy;
    }
    // isActive()
        // if energy > 0, energy -=20, console log energy
        // else if energy <= 0, sleep()
    isActive()
    {
        if (this.energy > 0)
        {
            this.energy -= 20
            console.log('Energy is decreasing, currently at:', this.energy)
        } else if (this.energy == 0) {
            sleep()
        } 
    }
    // sleep()
        // energy += 20
        // console.log energy
    sleep(){
        this.energy += 20
        console.log('Energy is decreasing, currently at:', this.energy)
    }
}
class Cat extends Animal {
    // constructor: sound, canJumpHigh, canClimbTrees, color, energy
    constructor(sound = 'Miaou', canJumpHigh = true, canClimbTrees = true, color, energy){
        super(color, energy);
        this.sound = sound;
        this.canClimTrees = canClimbTrees;
        this.canJumpHigh = canJumpHigh;
    }
    // makeSound()
    makeSound(){
        console.log('cat sound', this.sound)
    }
}
class Bird extends Animal {
    // constructor: sound, canFly, color, energy
    // makeSound()
    constructor(sound = 'piou', canFly = true, color, energy){
        super(color, energy);
        this.sound = sound;
        this.canFly = canFly;
    }
    // makeSound()
    makeSound(){
        console.log('cat sound', this.sound)
    }

}
class HouseCat extends Cat {
    // constructor: houseCatSound, sound, canJumpHigh, canClimbTrees, color, energy
    // makeSound(option)
        // if (option)
            // super.makeSound()
        // console.log(houseCatSound)
        constructor(houseCatSound = 'minw!!', sound, canClimTrees, color, energy){
            super(color, energy, canClimTrees, sound);
            this.houseCatSound = houseCatSound;
        }
        // makeSound()
        makeSound(option){
            
            console.log('cat sound', this.houseCatSound)
        }
    
}
class Tiger extends Cat {
    // constructor: tigerSound, sound, canJumpHigh, canClimbTrees, color, energy
    // makeSound(option)
        // if (option)
            // super.makeSound()
        // console.log(tigerSound)
}
class Parrot extends Bird {
    // constructor: canTalk, sound, canJumpHigh, canClimbTrees, color, energy
    // makeSound(option)
        // if (option)
            // super.makeSound()
        // if (canTalk)
            // console.log("talking!")
}