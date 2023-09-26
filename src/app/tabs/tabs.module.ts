import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs-routing.module';

import { TabsPage } from './tabs.page';

import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './tabs.page.html',
})
export class HomePageComponent {}

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule
  ],
  declarations: [
    TabsPage,
    HomePageComponent
  ]
})

export class TabsPageModule {}
