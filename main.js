// alert("Captive Portal da Padaria")

// const PASSWORD = "pao123"
// let attemps = 0

// while (attemps < 3) {
//     let enterPassword = prompt("Digite a senha: ")
    
//     if (enterPassword === PASSWORD) {
//         alert("Conectado, bom café!")
//         break 
//     } else {
//         alert("Senha incorreta!")
//     }

//     if (attemps === 3) {
//         alert(bloqueado)
//     }
//     attemps++
// }

//retrospectiva
// let anoNovo = 10
// while (anoNovo >= 0) {
//     if (anoNovo === 0) {
//         console.log("Feliz ano novo!", anoNovo)
//         break
// } 
//         anoNovo--
// } 

// cofrinho
// const BICYCLE_PRICE = 300
// let total_Saved = 0
// let weeks = 0

// while (total_Saved < BICYCLE_PRICE) {
//     let deposit = Number(prompt("Quanto Pedro colocou na semana " + (weeks + 1) + "?"))

//     if (isNaN(deposit) || deposit <= 0) {
//         alert("Valor inválido! Só conta dinheiro positivo maior que zero.")
//         continue
//     }

//     total_Saved += deposit
//     weeks++

//     if (total_Saved >= BICYCLE_PRICE) {
//         alert("Pedro conseguiu comprar a bicicleta! Ele economizou R$ " + total_Saved + " em " + weeks + " semanas.")
//         break
//     }

//     let missing = BICYCLE_PRICE - total_Saved
//     alert("Já tem R$ " + total_Saved + " no cofrinho. Ainda faltam R$ " + missing + ".")
// }

// Dona cida
const bow = 34
const maxBow = 50
let attempts = 0
let guess
let cancelled = false

do {
    const answer = prompt("Quantas balas você acha que tem? Digite um número de 1 a " + maxBow + ".")

    if (answer === null) {
        cancelled = true
        break
    }

    guess = Number(answer)

    if (!Number.isInteger(guess) || guess < 1 || guess > maxBow) {
        alert("Digite um número inteiro entre 1 e " + maxBow + ".")
        continue
    }

    attempts++

    if (guess < bow) {
        alert("Tem mais balas do que isso. Tente de novo!")
    } else if (guess > bow) {
        alert("Tem menos balas do que isso. Tente de novo!")
    }
} while (guess !== bow)

if (cancelled) {
    alert("Jogo cancelado.")
} else {
    alert("Acertou! Dona Cida tem " + bow + " balas. Você acertou em " + attempts + " tentativa(s)!")
}