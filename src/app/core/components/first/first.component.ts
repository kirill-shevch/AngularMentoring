import { Inject } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { GeneratorService } from '../../services/generator.service';
import { generatedString, GenerateString } from '../../services/generator.factory';
import { localStorageRepository, LocalStorageService } from '../../services/local-storage.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
  providers: [
    GeneratorService,
    { provide: generatedString, useFactory: GenerateString(10), deps: [GeneratorService] },
    { provide: LocalStorageService, useValue: localStorageRepository }
  ]
})
export class FirstComponent implements OnInit {
  ids: number[] = [];

  generatedContent?: string;

  constructor(@Inject(generatedString) private genString: string,
    private generatorService: GeneratorService,
    private localStorageService: LocalStorageService) { }

  ngOnInit(): void {
    this.generatedContent = this.genString;
  }

  generateNewID(): void {
    let newId = this.generatorService.getNewId();
    this.ids.push(newId);
    this.localStorageService.removeItem("id");
    this.localStorageService.setItem("id", newId.toString());
    console.log(`Last id in local storage is ${this.localStorageService.getItem("id")}`);
  }
}
