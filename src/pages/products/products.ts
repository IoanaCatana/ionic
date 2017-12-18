import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController} from 'ionic-angular';
import { Item } from '../../models/item';


@IonicPage()
@Component({
  selector: 'page-products',
  templateUrl: 'products.html',
})
export class ProductsPage {

    
     constructor(public navCtrl: NavController, private alertCtrl: AlertController) {
       this.items.push(new Item("Cola",10,"DKK" ));
       this.items.push(new Item("Juice",12,"DKK" ));
       this.items.push(new Item("Water",8,"DKK" ));
       
       this.selectedItem = new Item("",0,"");
    
  
     }
     public selectedItem:Item;
    
     public items:Array<Item> = new Array<Item>();
    
     buyDrink()
     {
         let alert = this.alertCtrl.create({
       title: 'Confirm purchase',
         message: 'Do you want to buy this drink: ' + JSON.stringify(this.selectedItem),
       buttons: [
         {
           text: 'Cancel',
           role: 'cancel',
           handler: () => {
             console.log('Cancel clicked');
           }
         },
         {
           text: 'Buy',
           handler: () => {
             console.log('Buy clicked');
           }
         }
       ]
     });
     alert.present();
     }
   }