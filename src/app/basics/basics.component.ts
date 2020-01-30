import { Component, OnInit, Injectable } from '@angular/core';
import { BasicClass } from 'src/app/shared/basic-class';
import { BasicDirective } from 'src/app/shared/basic.directive';
import { BasicInterface } from 'src/app/shared/basic-interface';
import { BasicPipe } from 'src/app/shared/basic-pipe.pipe';
import { BasicService } from 'src/app/shared/basic-service.service';
import { HttpClient } from '@angular/common/http';

//loading json in angular is like pulling teeth. methodology changes in every release...
//it even requires an entire wiki with a table of contents...
// www.angularjswiki.com/angular/how-to-read-local-json-files-in-angular/
import basic from 'src/app/shared/basic.json';

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
  jsonData;

  basicI: BasicInterface = {
    id: 1,
    name: "Super Basic",
    code: "wqe"
  }

  constructor(private http: HttpClient) {
    
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

    console.log(basic.glossary.title);
  }

  returnMybasicClassTextStringFunction() {
    this.returnMybasicClassTextStringFunctionString = this.myBasicClass.myBasicClassFunction();
    console.info(this.basicI);
  }



}
