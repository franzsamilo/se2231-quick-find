import readline from 'readline-sync'
import { QuickFindUF } from './quickuf'
import { QuickUnionUF } from './quickUnion'

let N = readline.questionInt("How many numbers in an array? ")
let uf = new QuickUnionUF(N)
let input = readline.question("connect what numbers? format ex.'6 2' -> ")

while (input !== "") {
    let p = parseInt(input.split(' ')[0])
    let q = parseInt(input.split(' ')[1])

    if (!uf.connected(p, q)) {
        uf.union(p, q)
        console.log(`${p} and ${q} are connected!`)
    }

    console.log(uf.ids)

    input = readline.question("connect what numbers? format ex.'6 2' -> ")
}