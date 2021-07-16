import { Injectable } from '@angular/core';
import { NavigationExtras } from '@angular/router';

@Injectable()
export class RouterStub {
    navigate(commands: any[], extras?: NavigationExtras): any { }
    navigateByUrl(url: string): string { return url; }
}
