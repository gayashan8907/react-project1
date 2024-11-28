

export const angularConcepts = [
    { 
      concept: "Modules", 
      description: "Organize the application into logical blocks. Root module (AppModule) bootstraps the app." 
    },
    { 
      concept: "Components", 
      description: "Control a section of the UI. Include HTML template, CSS styles, and TypeScript logic." 
    },
    { 
      concept: "Templates", 
      description: "Define the structure of a component’s view using Angular's template syntax (e.g., {{}} for interpolation, *ngIf, *ngFor)." 
    },
    { 
      concept: "Directives", 
      description: "Add behavior to elements. Structural directives (e.g., *ngIf, *ngFor) modify the DOM structure, and Attribute directives (e.g., ngClass, ngStyle) change element behavior." 
    },
    { 
      concept: "Services", 
      description: "Encapsulate reusable logic (e.g., data fetching) and are injectable using Angular's Dependency Injection (DI)." 
    },
    { 
      concept: "Routing", 
      description: "Manage navigation between views. Configured in a RouterModule and uses <router-outlet> to display components dynamically." 
    },
    { 
      concept: "Forms", 
      description: "Template-driven forms are simpler and use directives like ngModel, while Reactive forms use FormControl and FormGroup for more robustness." 
    },
    { 
      concept: "Pipes", 
      description: "Transform data in templates. Includes built-in pipes (e.g., date, uppercase, currency) and custom pipes created with @Pipe." 
    },
    { 
      concept: "HTTP Client", 
      description: "Fetch or send data to an API using HttpClient, which supports observables for asynchronous operations." 
    },
    { 
      concept: "Lifecycle Hooks", 
      description: "Manage component lifecycle with hooks like ngOnInit, ngOnDestroy, etc." 
    }
  ];

  export const angularExamples = {
    Module:{
      concept: "Module",
      explanation: "A module is a container for different parts of an Angular application, such as components, services, and directives.",
      example: `
        import { NgModule } from '@angular/core';
        import { BrowserModule } from '@angular/platform-browser';
        import { AppComponent } from './app.component';
  
        @NgModule({
          declarations: [AppComponent], // Declare components
          imports: [BrowserModule],     // Import modules
          bootstrap: [AppComponent]     // Main component to bootstrap
        })
        export class AppModule {}
      `
    },
    Component:{
      concept: "Component",
      explanation: "A component controls a part of the UI and consists of a TypeScript class, HTML template, and optional CSS styles.",
      example: `
        import { Component } from '@angular/core';
  
        @Component({
          selector: 'app-root',    // HTML tag for this component
          template: '<h1>Welcome to Angular!</h1>',
          styles: ['h1 { color: blue; }']
        })
        export class AppComponent {
          title = 'Angular App';
        }
      `
    },
    Data:{
      concept: "Data Binding",
      explanation: "Data binding allows synchronization between the component and the DOM.",
      example: `
        import { Component } from '@angular/core';
  
        @Component({
          selector: 'app-data-binding',
          template: '<input [(ngModel)]="name" /> <p>Hello {{ name }}!</p>',
        })
        export class DataBindingComponent {
          name = 'Angular';
        }
      `
    },
    Directive:{
      concept: "Directive",
      explanation: "Directives add behavior to elements. Built-in examples include *ngIf and *ngFor.",
      example: `
        import { Component } from '@angular/core';
  
        @Component({
          selector: 'app-directive-example',
          template: \`
            <p *ngIf="isVisible">This is visible!</p>
            <ul>
              <li *ngFor="let item of items">{{ item }}</li>
            </ul>
          \`
        })
        export class DirectiveExampleComponent {
          isVisible = true;
          items = ['Item 1', 'Item 2', 'Item 3'];
        }
      `
    },
    Service:{
      concept: "Service",
      explanation: "Services provide shared business logic or data to multiple components.",
      example: `
        import { Injectable } from '@angular/core';
  
        @Injectable({
          providedIn: 'root', // Automatically registers in the root injector
        })
        export class DataService {
          getData() {
            return ['Data 1', 'Data 2', 'Data 3'];
          }
        }
  
        // Usage in a component
        import { Component } from '@angular/core';
        import { DataService } from './data.service';
  
        @Component({
          selector: 'app-service-example',
          template: '<p>{{ data }}</p>'
        })
        export class ServiceExampleComponent {
          data: string[];
          constructor(private dataService: DataService) {
            this.data = dataService.getData();
          }
        }
      `
    },
    Routing:{
      concept: "Routing",
      explanation: "Routing allows navigation between different views or components in a single-page application.",
      example: `
        import { NgModule } from '@angular/core';
        import { RouterModule, Routes } from '@angular/router';
        import { HomeComponent } from './home/home.component';
        import { AboutComponent } from './about/about.component';
  
        const routes: Routes = [
          { path: '', component: HomeComponent },
          { path: 'about', component: AboutComponent }
        ];
  
        @NgModule({
          imports: [RouterModule.forRoot(routes)],
          exports: [RouterModule]
        })
        export class AppRoutingModule {}
      `
    },
    Pipes:{
      concept: "Pipes",
      explanation: "Pipes are used to transform data in templates, such as formatting dates or numbers.",
      example: `
        import { Component } from '@angular/core';
  
        @Component({
          selector: 'app-pipe-example',
          template: '<p>{{ today | date }}</p>'
        })
        export class PipeExampleComponent {
          today = new Date();
        }
      `
    },
    Dependency:{
      concept: "Dependency Injection",
      explanation: "Dependency Injection (DI) is a design pattern used to inject dependencies into components or services.",
      example: `
        import { Injectable } from '@angular/core';
  
        @Injectable()
        export class LoggerService {
          log(message: string) {
            console.log(message);
          }
        }
  
        import { Component } from '@angular/core';
        import { LoggerService } from './logger.service';
  
        @Component({
          selector: 'app-di-example',
          template: '<button (click)="logMessage()">Log</button>'
        })
        export class DiExampleComponent {
          constructor(private logger: LoggerService) {}
  
          logMessage() {
            this.logger.log('Hello from DI!');
          }
        }
      `
    }
  };
  

  
  