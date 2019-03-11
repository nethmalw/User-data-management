import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { NotesComponent } from './notes/notes.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { Routes,RouterModule } from "@angular/router";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { SkillsComponent } from './skills/skills.component';
import { SkillsFeedbackComponent } from './skills-feedback/skills-feedback.component';
import {NgMultiSelectDropDownModule} from 'ng-multiselect-dropdown';

const appRoutes : Routes = [
	{
		path:'notes',
		component:NotesComponent
	},
	{
		path:'feedback',
		component:FeedbackComponent
	},
	{
		path:'',
		component:NotesComponent,
		pathMatch:'full'
	},
	{
		path:'skills',
		component:SkillsComponent,
		pathMatch:'full'
	},
	{
		path:'**',
		component:NotFoundComponent
	}
];

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FeedbackComponent,
    NotesComponent,
    NotFoundComponent,
    SkillsComponent,
    SkillsFeedbackComponent
  ],
  imports: [
    BrowserModule,
		FormsModule,
		HttpClientModule,
		NgMultiSelectDropDownModule.forRoot(),
    RouterModule.forRoot(appRoutes,{enableTracing:true})
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
