import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProductsPage } from '../products/products';
import { HistoryPage } from '../history/history';
import { BalancePage } from '../balance/balance';
import { DepositPage } from '../deposit/deposit';
import { LoginPage } from '../login/login';


@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DashboardPage');
  }

  goToProducts() {
    
        this.navCtrl.push(ProductsPage);
        
      }

  goToHistory() {
    
        this.navCtrl.push(HistoryPage);
        
      }

  goToBalance() {
    
        this.navCtrl.push(BalancePage);
        
      }

  goToDeposit() {
    
        this.navCtrl.push(DepositPage);
        
      }
  
  goToLogout() {
    
        this.navCtrl.push(LoginPage);
        
      }

}
