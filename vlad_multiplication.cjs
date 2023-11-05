'use strict'

function makeVladMulTable(big, shuffle) {
    let s = []
    let total = 0
    let i = 0
    for (let a = 2; a < 10; a++) {
        for (let b = big ? 2 : a; b < 10; b++) {
            s.push(`${b} * ${a} = `)
            total++
        }
    }

    if (shuffle) {
        for (let i = 0; i < s.length; i++) {
            s[i] = `${Math.floor(Math.random() * 1000 + 10000)} ${s[i]}`
        }
        s = s.sort()
        for (let i = 0; i < s.length; i++) {
            s[i] = s[i].slice(6)
        }
    }

    s.push(`Total = ${total}`)

    return s
}

let s = makeVladMulTable(false, true)
console.log(s.join('\n'))

/*
let d = new Date('2023-10-29T06:07:54.377Z')
let d2 = new Date()

d2.setTime(d.getTime() + 10)

console.log(`CODE00000000 ${d2.toISOString()}`)

// console.log(`CODE00000000 Hello temp`);
*/
