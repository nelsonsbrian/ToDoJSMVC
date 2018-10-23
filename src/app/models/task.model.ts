export class Task {
  dateMessage: string;
  dueDate: Date;
  createdDate: Date;
  dueMessage: string;
  public done: boolean = false;
  constructor(public description: string, public priority: number, dueDays: number) {

    this.createdDate = new Date();
    this.dueDate = this.addDays(dueDays);
    this.dateMessage = this.createdDate.toLocaleDateString() + ' ' + this.createdDate.toLocaleTimeString();
    this.dueMessage = `due in ${this.daysBetween()} days  `;
    console.log(this);
  }

  addDays(days: number) {
    let result = new Date(this.createdDate);
    result.setDate(result.getDate() + days);
    return result;
  }


  daysBetween(){
    let date1 = this.createdDate;
    let date2 = this.dueDate;
    let timeDiff = Math.abs(date2.getTime() - date1.getTime());
    let diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24)); 
    return diffDays;
  }
}