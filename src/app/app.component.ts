import { Component, OnInit } from '@angular/core';
import { Task } from './models/task.model';
// import { DateComponent } from './models/time.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  currentFocus: string = 'Angular Homework';

  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();  
  tasks: Task[] = [
    new Task('track time', 3, 5),
    new Task('Finish weekend Angular homework for Epicodus course', 3, 5),
    new Task('Begin brainstorming possible JavaScript group projects', 2, 7),
    new Task('Add README file to last few Angular repos on GitHub', 4, 14),
    new Task('Coffee break and more talking', 1, 2)
  ];

  selectedTask: null;

  editTask(clickedTask) {
    this.selectedTask = clickedTask;
  }

  finishedEditing() {
    this.selectedTask = null;
  }

  deleteToDo(todoIndex) {
    this.tasks.splice(todoIndex,1);
  }

  addToDo(todo, priority, dueDays) {
    let parsed = parseInt(dueDays);
    let newTask = new Task(todo, priority, parsed);
    this.tasks.unshift(newTask);
  }

  priorityColor(currentTask){
    if (currentTask.priority === 4){
      return "bg-primary";    
    } else if (currentTask.priority === 3){
      return "bg-danger";
    } else if (currentTask.priority === 2) {
      return  "bg-warning";
    } else {
      return "bg-info";
    }
  }
}


