export class QuickUnionUF {
  ids: number[];

  constructor(N: number) {
    this.ids = [];

    for (let i = 0; i < N; i++) {
      this.ids[i] = i;
    }
  }

  root(i: number) {
    while(i !== this.ids[i]) {
      i = this.ids[i]
    }
    return i
  }

  connected(p: number, q: number): boolean {
    return this.root(p) === this.root(q)
}

  union(p: number, q: number) {
    let i : number = this.root(p)
    let j : number = this.root(q)
    
    this.ids[i] = j
  }
}