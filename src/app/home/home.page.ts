import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';

declare let cordova: any;
@Component({
	selector: 'app-home',
	templateUrl: 'home.page.html',
	styleUrls: ['home.page.scss'],
})
export class HomePage {

	constructor(private platform: Platform) { }

	record() {
		console.log("record");
		if (this.platform.is("android")) {
			cordova.plugins.AliyunSVideoBase.startRecord();
		}
	}

	crop() {
		console.log("crop");
		if (this.platform.is("android")) {
			cordova.plugins.AliyunSVideoBase.startCrop();
		}
	}
}
