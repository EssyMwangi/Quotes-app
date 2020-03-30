
export class Quote {
  showDetails: boolean;
  constructor(public id: number,public name: string,public title: string,public quote: string,public author: string){
    this.showDetails=false;
  }
}