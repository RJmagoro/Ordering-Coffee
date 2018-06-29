import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  

  name="";
  summary :number;
  quantity="";
  
  whippcream: boolean;
  chocolate: boolean;
  price = 25;
  increment =0;
  checked = false;
  
  value1: string ;
  value2: string;
  message;
  
  total = 0;
  
 

  constructor(public navCtrl: NavController) {
    this.summary = 0;

      }
      // topping(){
        

      //     this.name;
      //     if(this.checked=true){
      //      this.value1="+Whipped Cream";
      //     }
      //     if(this.checked=true){
      //      this.value2="+Chocolate";
      //     }
      //     this.increment;
      //     this.total = this.price * this.increment;
      //     this.message;
         
         
      // }
      Order(){
       if(this.chocolate == true){
         this.value1= "chocolate";
         console.log(this.chocolate);
       }
        // this.value1= "+Whipped Cream";
        if(this.whippcream == true){
        this.value2= "whippcream";
        console.log(this.whippcream);
      }
        this.total = this.price * this.increment;
        
        this.summary = 1;
        


        // this.name;
        // if(this.checked=true){
        //  this.value1="+Whipped Cream";
        // }
        // if(this.checked=true){
        //  this.value2="+Chocolate";
        // }
        // this.increment;
        // this.total = this.price * this.increment;
        // this.message;
       
       }
      Reset(){
 
        this.increment = 0;
        this.value1=" ";
        this.value2="";
       
        this.name=" ";
        this.total =0;
        this.quantity;
              
        this.price = 0;
        
        }
        
      
      
        clickadd(){
 
          if(this.increment >= 0){
            this.increment+=1;
          }
    
    }
    clicksub(){

      if(this.increment >= 1){
        this.increment -=1;
      }
    
    }

    
    }


