import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskFormComponent } from './components/task-form/task-form.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CurrencyFormatPipe } from './pipes/currency-format.pipe';
import { TaskDetailsComponent } from './components/task-details/task-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TaskTableComponent } from './components/task-table/task-table.component';
import { ExemploPaiComponent } from './components/exemplo-pai/exemplo-pai.component';
import { ExemploFilhoComponent } from './components/exemplo-filho/exemplo-filho.component';
import { BgRedDirective } from './directives/bg-red.directive';
import { DateWarningDirective } from './directives/date-warning.directive';
import { TaskFilterComponent } from './components/task-filter/task-filter.component';
import { TaskFormReactiveComponent } from './components/task-form-reactive/task-form-reactive.component';
import { DateMaskDirective } from './directives/date-mask.directive';

@NgModule({
  declarations: [
    AppComponent,
    TaskFormComponent,
    TaskListComponent,
    CurrencyFormatPipe,
    TaskDetailsComponent,
    TaskTableComponent,
    ExemploPaiComponent,
    ExemploFilhoComponent,
    BgRedDirective,
    DateWarningDirective,
    TaskFilterComponent,
    TaskFormReactiveComponent,
    DateMaskDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
