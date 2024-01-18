import readline from 'readline-sync'
import { QuickFindUF } from './quickuf'

console.log('hi!')

let N = readline.questionInt()
let uf = new QuickFindUF(N)
let input = readline.question()

while (input !== "") {
    let p = parseInt(input.split(' ')[0])
    let q = parseInt(input.split(' ')[1])

    if (!uf.connected(p, q)) {
        uf.union(p, q)
        console.log(`${p} and ${q} are connected!`)
    }

    console.log(uf.ids)

    input = readline.question()
}