import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  selectedItem: any;

  //items: Array<{title: string, note: string, icon: string}>;
  items: Array<any>;
  servers: Array<string>;
  status: Array<string>;
  errors: Array<string>;
  notificationStatus: Array<string>;
  icons: Array<string>;
  images: Array<string>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');
    this.servers = ['NS3211', 'BS1123', 'RS22NJ', 'QQRSB1', 'NEX391'];
    this.status = ['Critical', 'Warning', 'Info', 'Down'];
    this.errors = [
      'CPU Usage 90%, fatal process amount',
      'MySQL too many connecitions 93121 overload',
      'Root certificate generation failed',
      'SSH Monitoring and DNS Zone timeout',
      'No monitoring data recieved',
      'Too many inbound connections',
      'Unauthorized login attempts',
      'No response from Alpine server',
      'Undentified is not a function',
      'All of the servers are down'
    ];
    this.images = [
      '/assets/icon/critical.png',
      '/assets/icon/down.png',
      '/assets/icon/info.png',
      '/assets/icon/warning.png'
    ];
    this.items = [];
    for (let i = 0; i < 10; i++) {
      this.items.push({
        img: this.images[Math.floor(Math.random() * (0 - 4)) + 4],
        status: this.errors[i],
        date: 'April 1, 2017',
        isOpen: 'Open',
        when: Date.now() + (i*700000),
        server: this.servers[i]

      });
    }
  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(ListPage, {
      item: item
    });
  }
}
