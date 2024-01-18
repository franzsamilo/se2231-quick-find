export class QuickUnionUF {
  ids: number[];

  constructor(N: number) {
    this.ids = [];

    for (let i = 0; i < N; i++) {
      this.ids[i] = i;
    }
  }

  find(i: number) {
    while(i !== this.ids[i]) {
      i = this.ids[i]
    }
    return i
  }

  connected(p: number, q: number): boolean {
    return this.find(p) === this.find(q)
}

  union(p: number, q: number) {
    let i : number = this.find(p)
    let j : number = this.find(q)
    
    this.ids[i] = j
  }
}