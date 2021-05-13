import { AfterViewInit, Component, DebugElement, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  title = 'shop';

  @ViewChild('appTitle')
  appTitle: ElementRef<HTMLHeadingElement> | undefined;
  // or
  // appTitle!: ElementRef<HTMLHeadingElement>;


  ngAfterViewInit(): void {
    if (this.appTitle !== undefined) {
      this.appTitle.nativeElement.append('Shop application');
    }
  }
}
