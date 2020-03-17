import { Component, ViewChildren, ElementRef, QueryList } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ui5-web-components-application';
  @ViewChildren('testDialog') testDialog: QueryList<ElementRef>;

  closeDialog(){
    console.log(this.testDialog.first.nativeElement.close());
  }
  openDialog(){
    console.log(this.testDialog.first.nativeElement.open());
  }
  onclick(){
    console.log('test complete');
  }
}
