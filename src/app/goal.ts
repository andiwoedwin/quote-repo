export class Goal {
    // id: number;
    // name: string;
    // description: string;

    // Display output binding
    public showDescription: boolean;
    constructor(public id: number,public name: string,public description: string, public author: string, public submittedby: string, public completeDate: Date){
    this.showDescription=false;
  }

}
