import { AfterViewInit, Component, DebugElement, ElementRef, OnInit, ViewChild } from '@angular/core';
import { constantsService, ConstantsService } from './core/services/constants.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    { provide: ConstantsService, useValue: constantsService }
  ]
})
export class AppComponent implements AfterViewInit, OnInit {

  title = 'shop';
  author?: String;

  @ViewChild('appTitle')
  appTitle!: ElementRef<HTMLHeadingElement>;

  constructor(private constantsService: ConstantsService) {
  }

  ngOnInit(): void {
    this.author = this.constantsService.getAppAuthor();
  }

  ngAfterViewInit(): void {
    if (this.appTitle !== undefined) {
      this.appTitle.nativeElement.append('Shop application');
    }
  }
}
