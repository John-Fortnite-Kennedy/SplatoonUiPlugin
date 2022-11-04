import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'SplatoonUiPlugin';
  wins = 0
  losses = 0
  lost = false
  message = "BRUH!"
  nums = [1,2,3,4,5]

  @HostListener('window:keyup', ['$event'])
    keyEvent(event: KeyboardEvent) {
      if(event.key=="ArrowRight"){
        this.LossesPlus()
      } else if (event.key=="ArrowDown"){
        this.WinsMinus()
      } else if (event.key=="ArrowLeft"){
        this.LossesMinus()
      } else if (event.key=="ArrowUp"){
        this.WinsPlus()
      }
      else if (event.key=="`"){
        this.Reset()
      }
    }

    WinsPlus(){
      if(this.wins!=5){
        this.wins++
      }
    }

    WinsMinus(){
      if(this.wins!=0){
        this.wins--
      }
    }

    LossesPlus(){
      if(this.losses!=3){
        this.losses++
        // if(this.losses==3){
        //   this.lost=true
        //   setTimeout(() => 
        //     {
        //         this.Reset()
        //     },
        //     3000);
        // } 
      } 
    }

    LossesMinus(){
      if(this.losses!=0){
        this.losses--
      }
    }

    Reset(){
      this.wins=0
      this.losses=0
      this.lost=false
    }
}
