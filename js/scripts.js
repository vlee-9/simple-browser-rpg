let playerHp = document.getElementById("hp")
let playerHpCap = document.getElementById("hp-cap")
let playerMp = document.getElementById("mp")
let playerMpCap = document.getElementById("mp-cap")
let playerDrink = document.getElementById("drink-num")

let enemyInfo = document.getElementById("enemy-info")
let enemyHp = document.getElementById("enemy-hp")
let enemyName = document.getElementById("enemy-name")
let enemyImage = document.getElementById("enemy-image")

let attackBtn = document.getElementById("attack-btn")
let defendBtn = document.getElementById("defend-btn")
let magicBtn = document.getElementById("magic-btn")
let drinkBtn = document.getElementById("drink-btn")

let nextBtn = document.getElementById("next-btn")
let startBtn = document.getElementById("start-btn")
let breakBtn = document.getElementById("break-btn")
let resetBtn = document.getElementById("reset-btn")

let diaBox = document.getElementById("dia-box")
let levelDia = document.getElementById("lvl-dia")

let enemyBox = document.getElementById("enemy-box")
let textBox = document.getElementById("text-box")
let statboxPlayer = document.getElementById("statbox-player")
let buttonsAll = document.getElementById("button-el")

let startScreen = document.getElementById("start-screen")



//player and enemies

let player = {
    hP: 100,
    mP: 50,
    Lvl: 1,
    attack: 15,
    counter: 15,
    magic: 15,
    drink: 1,
}

let playerLevelCap = {
    hP: 100,
    mP: 50,
    attack: 15,
    exp: 0,
}

let enemyAct = ""

let enemy = {}

let foundEnemy = ""

let monsters = []

let monsterIdCheck = []

// PLAYER / ENEMY Change functions

function expUp() {
    playerLevelCap.exp += enemy.exp
    if (playerLevelCap.exp >= 10) {
        player.Lvl++
        player.attack += 5
        player.magic += 5
        player.counter += 5
        playerLevelCap.hP += 50
        playerLevelCap.mP += 20
        playerLevelCap.exp = 0

        player.hP = playerLevelCap.hP
        player.mP = playerLevelCap.mP
        playerHp.textContent = player.hP
        playerMp.textContent = player.mP
        playerHpCap.textContent = playerLevelCap.hP
        playerMpCap.textContent = playerLevelCap.mP
        levelDia.style.display = ""

        monsterIdCheck = []
        console.log("check 6")

    }
    else { }
}


function monsterReset() {

    if (player.Lvl === 1) {
        monsters = [
            {
                name: "Wolf",
                image: "img/wolf.gif",
                hP: 45,
                mP: 50,
                Lvl: 1,
                attack: 15,
                actions: ["attack", "attack", "attack", "defend"],
                dia: "The creature stares with bloodthirst...",
                exp: 2,
            },
            {
                name: "Slime",
                image: "img/slime.gif",
                hP: 25,
                mP: 50,
                Lvl: 1,
                attack: 10,
                actions: ["attack", "defend", "defend"],
                dia: "'cooo'...'cooo'... *squish*",
                exp: 2,
            },
            {
                name: "Worm",
                image: "img/worm.gif",
                hP: 40,
                mP: 50,
                Lvl: 1,
                attack: 7,
                actions: ["attack", "attack", "defend"],
                dia: "*gross slithering intensifies*",
                exp: 2,
            },

        ]
    }
    else if (player.Lvl === 2) {
        monsters = [
            {
                name: "Skeleton",
                image: "img/Skeleton.gif",
                hP: 50,
                mP: 50,
                Lvl: 2,
                attack: 25,
                actions: ["attack", "attack", "attack", "defend"],
                dia: "Bones clatter together unaturally...",
                exp: 3,
            },
            {
                name: "Fairy",
                image: "img/fairy.gif",
                hP: 30,
                mP: 50,
                Lvl: 2,
                attack: 7,
                actions: ["attack", "defend", "defend", "defend"],
                dia: "The creature is on guard...",
                exp: 2,
            },
            {
                name: "Mad-Man",
                image: "img/madman.gif",
                hP: 50,
                mP: 50,
                Lvl: 2,
                attack: 40,
                actions: ["attack"],
                dia: "AAARGH...ack*..AAAAH!!..*growl*",
                exp: 3,
            },
            {
                name: "Vissage",
                image: "img/vissage.gif",
                hP: 70,
                mP: 50,
                Lvl: 2,
                attack: 15,
                magic: 15,
                actions: ["magic", "defend", "defend"],
                dia: "'You dont have to do this'...'please'.",
                exp: 3,
            }
        ]

    }
    else if (player.Lvl === 3) {
        monsters = [
            {
                name: "Evil Eye",
                image: "img/evilEye.gif",
                hP: 80,
                mP: 50,
                Lvl: 3,
                attack: 15,
                magic: 20,
                actions: ["magic", "defend"],
                dia: "It looks really dry...",
                exp: 3,
            },
            {
                name: "Vissage",
                image: "img/vissage.gif",
                hP: 70,
                mP: 50,
                Lvl: 2,
                attack: 15,
                magic: 15,
                actions: ["magic", "defend", "defend"],
                dia: "'You dont have to do this'...'please'.",
                exp: 3,
            },
        ]
    }
}

// CHANCE functions

function lootChance() {
    let loot = Math.floor(Math.random() * 3)

    if (loot === 0) {
        diaBox.textContent = "The enemy was felled! You looted 1 Drink!"
        player.drink++
        playerDrink.textContent = player.drink
    }
    else { playerDrink.textContent = player.drink }
}


function getRandomMonster() {
    let x = ""
    foundEnemy = monsterIdCheck.find(el => el === enemy.name)
    console.log(enemy.name)

    if (monsterIdCheck.length >= 1 && foundEnemy === enemy.name) {
        if (monsters.length === monsterIdCheck.length) {
            monsterIdCheck = [enemy.name]
            console.log(monsterIdCheck + " mIdC cleared")

            for (foundEnemy = foundEnemy; foundEnemy === enemy.name;) {
                x = Math.floor(Math.random() * monsters.length)
                enemy = monsters[x]
                foundEnemy = monsterIdCheck.find(el => el === enemy.name)
                console.log("enemy was switched")
            }

            monsterIdCheck.pop()
            monsterIdCheck.push(enemy.name)
            console.log(" Id Check was popped, enemy was pushed after switch")
        }
        else {
            for (foundEnemy = foundEnemy; foundEnemy === enemy.name;) {
                x = Math.floor(Math.random() * monsters.length)
                enemy = monsters[x]
                foundEnemy = monsterIdCheck.find(el => el === enemy.name)
                console.log("enemy was switched")
            }
            monsterIdCheck.push(enemy.name)
            console.log("enemy was pushed after switch")
        }
    }
    else {
        x = Math.floor(Math.random() * monsters.length)
        enemy = monsters[x]
        foundEnemy = monsterIdCheck.find(el => el === enemy.name)
        monsterIdCheck.push(enemy.name)
        console.log("enemy was pushed")
    }
    console.log("end gRM()")
    console.log(monsterIdCheck)


}


function getEnemeyAction() {
    num = Math.floor(Math.random() * enemy.actions.length)
    enemyAct = enemy.actions[num]

}

function getEnemeyDia() {
    let x = enemy.dia[enemy.dia.length]
    if (enemy.dia.length === 1) {
        x--
    }
    diaBox.textContent = x
    enemy.dia.pop()
}

// ACTION Functions

function mpUp() {
    if (player.mP < playerLevelCap.mP) {
        player.mP += 5
        if (player.mP > playerLevelCap.mP) {
            player.mP = playerLevelCap.mP
        }
    }
    else { }
}


function attack() {
    mpUp()
    getEnemeyAction()
    if (enemyAct === "attack") {
        enemy.hP -= player.attack
        player.hP -= enemy.attack
        diaPhaseA()
    }

    else if (enemyAct === "defend") {
        player.hP -= 5
        diaPhaseA()
    }

    else if (enemyAct === "magic") {
        enemy.hP -= player.attack
        player.hP -= Math.floor(enemy.magic / 2)
        diaPhaseA()
    }

}

function defend() {
    if (player.mP < 10) {
        diaBox.textContent = "You dont have enough MP to Defend!"
    }
    else {
        player.mP -= 10
        getEnemeyAction()
        if (enemyAct === "attack") {
            enemy.hP -= player.counter
            diaPhaseD()
        }

        else if (enemyAct === "defend") {
            diaPhaseD()
        }

        else if (enemyAct === "magic") {
            player.hP -= enemy.magic
            diaPhaseD()
        }
    }


}

function magic() {
    if (player.mP < player.magic) {
        diaBox.textContent = "You dont have enough MP for Magic!"
    }
    else {
        player.mP -= player.magic
        getEnemeyAction()
        if (enemyAct === "attack") {
            player.hP -= enemy.attack
            enemy.hP -= Math.floor(player.magic / 2)
            diaPhaseM()
        }

        else if (enemyAct === "defend") {
            enemy.hP -= player.magic + Math.floor(player.magic / 3)
            diaPhaseM()
        }
        else if (enemyAct === "magic") {
            player.hP -= enemy.magic
            enemy.hP -= player.magic
            diaPhaseM()
        }
    }

}

function drink() {
    player.hP += 40
    player.drink--
    diaBox.textContent = "You drank a potion and healed some HP!"
    drinkBtn.style.display = "none"
    playerDrink.textContent = player.drink
    playerHp.textContent = player.hP
    if (player.hP > playerLevelCap.hP) {
        player.hP = playerLevelCap.hP
        playerHp.textContent = player.hP
    }

}

// GAME PHASE functions

function newRound() {
    attackBtn.style.display = ""
    defendBtn.style.display = ""
    magicBtn.style.display = ""
    enemyInfo.style.display = ""
    statboxPlayer.style.display = ""

    drinkBtn.style.display = "none"
    breakBtn.style.display = "none"
    nextBtn.style.display = "none"
    startBtn.style.display = "none"
    levelDia.style.display = "none"

    monsterReset()
    getRandomMonster()


    enemyName.textContent = enemy.name
    enemyHp.textContent = enemy.hP
    enemyImage.src = enemy.image
    enemyImage.style.display = ""
    playerHp.textContent = player.hP
    playerHpCap.textContent = playerLevelCap.hP
    playerMp.textContent = player.mP
    playerMpCap.textContent = playerLevelCap.mP
    playerDrink.textContent = player.drink
    diaBox.textContent = "A " + enemy.name + " approaches..."
}

function renderGame() {
    attackBtn.style.display = ""
    defendBtn.style.display = ""
    magicBtn.style.display = ""

    nextBtn.style.display = "none"
    diaBox.textContent = enemy.dia
}

function breakPhase() {
    playerDrink.textContent = player.drink

    diaBox.textContent = "Its quiet now, but not for long..."
    enemyName.textContent = ""
    enemyHp.textContent = ""
    enemyInfo.style.display = "none"
    if (player.drink > 0) {
        drinkBtn.style.display = ""
    }
    else { }
    levelDia.style.display = "none"
    breakBtn.style.display = "none"
    startBtn.style.display = ""
    monsterReset()
}

function diaPhaseA() {
    enemyHp.textContent = enemy.hP
    playerHp.textContent = player.hP
    playerMp.textContent = player.mP

    attackBtn.style.display = "none"
    defendBtn.style.display = "none"
    magicBtn.style.display = "none"

    if (enemy.hP <= 0) {
        player.hP += enemy.attack
        enemy.hP = 0
        playerHp.textContent = player.hP
        enemyHp.textContent = enemy.hP
        diaBox.textContent = "The enemy was felled!"

        breakBtn.style.display = ""
        enemyImage.style.display = "none"
        lootChance()
        expUp()

    }

    else {
        if (player.hP > 0) {
            if (enemyAct === "attack") {
                diaBox.textContent = "The enemy attacked, dealing " + enemy.attack + " damage!" + " You delt " + player.attack + " damage!"
            }

            else if (enemyAct === "defend") {
                diaBox.textContent = "You attacked...but the enemy defended! You took 5 damage.."
            }
            else if (enemyAct === "magic") {
                diaBox.textContent = "The emey used Magic, but you attacked! You dealt " + player.attack + " damage and took " + Math.floor(enemy.magic / 2) + " damage!"
            }
            nextBtn.style.display = ""
        }
        else {
            player.hP = 0
            playerHp.textContent = player.hP
            resetBtn.style.display = ""
            if (enemyAct === "attack") {
                diaBox.textContent = "The enemy attacked, dealing " + enemy.attack + " damage!" + " Your health reached 0. GAME OVER."
            }

            else if (enemyAct === "defend") {
                diaBox.textContent = "You attacked...but the enemy defended! You took 5 damage.. You have no more HP. GAME OVER."
            }
            else if (enemyAct === "magic") {
                diaBox.textContent = "The enemy used Magic, you took " + Math.floor(enemy.magic / 2) + " damage!Your health is 0. GAME OVER."
            }
        }
    }


}

function diaPhaseD() {
    enemyHp.textContent = enemy.hP
    playerHp.textContent = player.hP
    playerMp.textContent = player.mP

    attackBtn.style.display = "none"
    defendBtn.style.display = "none"
    magicBtn.style.display = "none"

    if (enemy.hP <= 0) {
        enemy.hP = 0
        enemyHp.textContent = enemy.hP
        diaBox.textContent = "The enemy was felled!"
        breakBtn.style.display = ""
        enemyImage.style.display = "none"
        lootChance()
        expUp()
    }

    else {
        if (player.hP > 0) {
            if (enemyAct === "attack") {
                diaBox.textContent = `The enemy Attacked, but you Defended, dealing ${player.counter} counter damage!`
            }
            else if (enemyAct === "defend") {
                diaBox.textContent = "You both defended! But nothing happened..."
            }
            else if (enemyAct === "magic") {
                diaBox.textContent = "You defended...but the enemy used Magic, dealing " + enemy.magic + " damage!"
            }
            nextBtn.style.display = ""
        }
        else {
            player.hP = 0
            playerHp.textContent = player.hP
            resetBtn.style.display = ""
            diaBox.textContent = "You defended...but the enemy used Magic, dealing " + enemy.magic + " damage! Your health is 0. GAME OVER."
        }

    }

}

function diaPhaseM() {
    enemyHp.textContent = enemy.hP
    playerHp.textContent = player.hP
    playerMp.textContent = player.mP

    attackBtn.style.display = "none"
    defendBtn.style.display = "none"
    magicBtn.style.display = "none"

    if (enemy.hP <= 0) {
        if (enemyAct === "attack") {
            player.hP += enemy.attack
        }
        else if (enemyAct === "magic") {
            player.hP += enemy.magic
        }
        enemy.hP = 0
        playerHp.textContent = player.hP
        enemyHp.textContent = enemy.hP
        diaBox.textContent = "The enemy was felled!"
        breakBtn.style.display = ""
        enemyImage.style.display = "none"
        lootChance()
        expUp()

    }

    else {
        if (player.hP > 0) {
            if (enemyAct === "attack") {
                diaBox.textContent = "The enemy attacked, interupting your spell! You took " + enemy.attack + " damage and dealt " + Math.floor(player.magic / 2) + " damage!"
            }

            else if (enemyAct === "defend") {
                let x = player.magic + Math.floor(player.magic / 3)
                diaBox.textContent = "The enemy defended but you used Magic, dealing " + x + " damage!"
            }

            else if (enemyAct === "magic") {
                diaBox.textContent = "You both cast a spell! " + " You took " + enemy.magic + " damage and dealt " + player.magic + " damage!"
            }
            nextBtn.style.display = ""
        }
        else {
            player.hP = 0
            playerHp.textContent = player.hP
            resetBtn.style.display = ""
            if (enemyAct === "attack") {
                diaBox.textContent = "The enemy attacked, interupting your spell! You took " + enemy.attack + " damage! Your health is 0. GAME OVER."
            }

            else if (enemyAct === "magic") {
                diaBox.textContent = "You both cast a spell! " + " You took " + enemy.magic + " damage! Your health is 0. GAME OVER."
            }
        }

    }


}

function resetGame() {
    enemyInfo.style.display = "none"
    levelDia.style.display = "none"
    resetBtn.style.display = "none"

    player = {
        hP: 100,
        mP: 50,
        Lvl: 1,
        attack: 15,
        counter: 15,
        magic: 15,
        drink: 1,
    }
    playerLevelCap = {
        hP: 100,
        mP: 50,
        attack: 15,
        exp: 0,
    }
    monsterIdCheck = []

    startGame()
    startBtn.style.display = ""
    enemyImage.style.display = "none"
    enemyName.textContent = ''
    playerHp.textContent = player.hP
    playerMp.textContent = player.mP
}

function startGame() {
    statboxPlayer.style.display = ""
    buttonsAll.style.display = ""
    textBox.style.display = ""
    startScreen.style.display = "none"
    diaBox.textContent = "There are monsters about, are you ready?"
    playerHp.textContent = player.hP
    playerMp.textContent = player.mP
    playerDrink.textContent = player.drink
    playerDrink.textContent = player.drink
    playerHpCap.textContent = playerLevelCap.hP
    playerMpCap.textContent = playerLevelCap.mP
}



buttonsAll.style.display = "none"
textBox.style.display = "none"
statboxPlayer.style.display = "none"

nextBtn.style.display = "none"
resetBtn.style.display = "none"
breakBtn.style.display = "none"
attackBtn.style.display = "none"
defendBtn.style.display = "none"
magicBtn.style.display = "none"
drinkBtn.style.display = "none"

levelDia.style.display = "none"
enemyInfo.style.display = "none"


//todo - add start game screen and a game over screen when player.hP = 0

//todo - add tutorial on start game screen.

//optional todo - let player decide witch battle stat to lvl up.