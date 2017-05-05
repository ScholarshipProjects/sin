import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
    selector: 'page-settings',
    templateUrl: 'settings.html'
})
export class SettingsPage {
    settings: string = "proxy";
    security: string = "1500";
    timeout: string = "30s";
    status: boolean = true;
    constructor(public navCtrl: NavController) {

    }

}
