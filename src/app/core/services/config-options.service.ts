import { Injectable } from '@angular/core';
import { Config } from '../models/config';


@Injectable({
  providedIn: 'root'
})
export class ConfigOptionsService {

  private config: Config | undefined;

  setConfig(config: Config): void {
    this.config = config;
  }

  getConfig(): Config | undefined {
    return this.config;
  }
}
