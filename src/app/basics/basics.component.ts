import { Component, OnInit, Injectable } from '@angular/core';
import { BasicClass } from 'src/app/shared/basic-class';
import { BasicDirectiveDirective } from 'src/app/shared/basic-directive.directive';
import { BasicInterface } from 'src/app/shared/basic-interface';
import { BasicPipe } from 'src/app/shared/basic-pipe.pipe';
import { BasicService } from 'src/app/shared/basic-service.service';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styleUrls: ['./basics.component.css']
})
@Injectable({
  providedIn: 'root'
})
export class BasicsComponent implements OnInit {

  public myBasicClass: BasicClass = new BasicClass;

  public demoString: string = "Demo";

  users: BasicService = new BasicService;

  returnMybasicClassTextString: string;

  returnMybasicClassTextStringFunctionString: string;


  basicI: BasicInterface = {
    id: 1,
    name: "Super Basic",
    code: "wqe"
  }

  constructor() {
    
  }

  ngOnInit() {
    //Web Worker Example. Check console for message
    if (typeof Worker !== 'undefined') {
      // Create a new
      const worker = new Worker('src/app/shared/basic-web-worker.worker', { type: 'module' });
      worker.onmessage = ({ data }) => {
        console.log(`page got message: ${data}`);
      };
      worker.postMessage('hello');
    } else {
      // Web Workers are not supported in this environment.
      // You should add a fallback so that your program still executes correctly.
    }
  }

  returnMybasicClassTextStringFunction() {
    this.returnMybasicClassTextStringFunctionString = this.myBasicClass.myBasicClassFunction();
    console.info(this.basicI);
  }



}
