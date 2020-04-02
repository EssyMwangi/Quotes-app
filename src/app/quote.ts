export class Quote {
  showInfo: boolean;
  constructor(
    public id: number,
    public name: string,
    public title: string,
    public quote: string,
    public author: string,
    public upVote: number,
    public dnVote: number,
    public publishedDate: Date
  ) {
    this.showInfo = false;
  }
}
