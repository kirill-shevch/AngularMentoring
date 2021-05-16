import { InjectionToken } from '@angular/core';
import { GeneratorService } from './generator.service';

export const generatedString = new InjectionToken<string>('generatedString');

export function GenerateString(length: number): (generator: GeneratorService) => string {
    return (generator: GeneratorService): string => generator.generate(length);
}
