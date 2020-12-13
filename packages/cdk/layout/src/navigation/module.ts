import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StringInterpolateModule } from '@vitagroup/common';
import { NavigationEntryDef } from './navigation-entry-def';
import { NavigationEntryLink } from './navigation-entry-link';
import { NavigationEntryOutlet } from './navigation-entry-outlet';

const declarations = [
  NavigationEntryDef,
  NavigationEntryOutlet,
  NavigationEntryLink
];

@NgModule({
  declarations,
  exports: declarations,
  imports: [
    CommonModule,
    StringInterpolateModule,
    RouterModule
  ]
})
export class NavigationModule {
}