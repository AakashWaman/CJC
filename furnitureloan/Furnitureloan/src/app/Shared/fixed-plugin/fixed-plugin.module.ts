import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FixedpluginComponent } from './fixedplugin/fixedplugin.component';



@NgModule({
  declarations: [
    FixedpluginComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    FixedpluginComponent
  ]
})
export class FixedPluginModule { }
