import { Injectable } from '@angular/core';
import { Config } from '../models/config';


@Injectable({
  providedIn: 'root'
})
export class ConfigOptionsService {

  private config: Config;

  constructor() {
    this.config = { id: 0, login: "", email: "" };
  }

  setConfig(config: Partial<Config>): void {
    if (config.id) {
      this.config.id = config.id;
    }
    if (config.email) {
      this.config.email = config.email;
    }
    if (config.login) {
      this.config.login = config.login;
    }
  }

  getConfig(): Config | undefined {
    return this.config;
  }
}
