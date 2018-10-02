import {Component} from '@angular/core';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dv4';

  constructor(private snackBar: MatSnackBar) {
  }

  ngOnInit() {
    //this checks for ios to show home screen message
    if ((navigator as any).standalone == false) {
      this.snackBar.open('Add this to homescreen', '', {duration: 3000});
    }
//this checks if its android to show screen message
    if ((navigator as any).standalone == undefined) {
      //not an ios device
      if (window.matchMedia('displaymode: browser').matches) {
        window.addEventListener("beforeinstallprompt", event=>{
          event.preventDefault();
          const sb = this.snackBar.open("do you want to install this app","install",{duration:5000});
          sb.onAction().subscribe(() =>{
            (event as any).prompt();
            (event as any).userschoice().then( result=>{
              if (result.outcome === "dismissed"){
                //TODO
              }  else {
                //TODO
              }
            })
          });
          return false
        })
      }
    }
  }
}




