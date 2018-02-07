import { Injectable } from '@angular/core';

import { CNPeopel  } from './cn';
import { CNPEOPELS  } from './cn.model';

@Injectable()
export class CNPeopelService {
  getHeroes(): CNPeopel[] {
    return CNPEOPELS;
  }
}
