export class QuickUniionUF {
  id: number[];

  constructor(N: number) {
    this.id = [];

    for (let i = 0; i < N; i++) {
      this.id[i] = i;
    }
  }

  find(i: number) {
    while(i !== this.id[i]) {
      
    }
  }

}