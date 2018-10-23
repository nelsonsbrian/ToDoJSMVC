export class DateComponent {
    message: string;
    createdDate: Date;
    constructor() {
      this.createdDate = new Date();
      this.message = this.createdDate.toLocaleDateString() + ' ' + this.createdDate.toLocaleTimeString();
    }
}