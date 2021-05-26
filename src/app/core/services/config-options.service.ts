import { Injectable } from '@angular/core';
import { Config } from '../models/config';


@Injectable({
  providedIn: 'root'
})
export class ConfigOptionsService {

  private config: Config =  { id: 0, login: '', email: '' };

  setConfig(config: Partial<Config>): void {
    this.config = {...this.config, ...config};
  }

  getConfig(): Config | undefined {
    return this.config;
  }
}
