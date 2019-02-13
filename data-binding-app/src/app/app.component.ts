import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',

})
export class AppComponent {
  title = 'data-binding-app';

  counter:number = 0;
  onButtonPress()
  {    
    console.log("Button Pressed");
    this.counter++;
  }

  starHidden:boolean =false;

  onShow()
  {
    console.log("Star DB Clicked");

    if(this.starHidden == false)
    {
      this.starHidden = true;
    }

    else
    {
      this.starHidden = false;
    }
  }
    
  
}
