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
  author?: string;

  @ViewChild('appTitle')
  appTitle!: ElementRef<HTMLHeadingElement>;

  constructor(private constService: ConstantsService) {
  }

  ngOnInit(): void {
    this.author = this.constService.getAppAuthor();
  }

  ngAfterViewInit(): void {
    if (this.appTitle !== undefined) {
      this.appTitle.nativeElement.append('Shop application');
    }
  }
}
