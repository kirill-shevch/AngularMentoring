import { Inject } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { GeneratorService } from '../../services/generator.service';
import { generatedString, GeneratorFactory } from '../../services/generatorFactory';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
  providers: [
    GeneratorService,
    { provide: generatedString, useFactory: GeneratorFactory(10), deps: [GeneratorService] }
  ]
})
export class FirstComponent implements OnInit {

  generatedContent?: string;
  constructor(@Inject(generatedString) private generatedString: string) { }

  ngOnInit() {
    this.generatedContent = this.generatedString;
  }
}
