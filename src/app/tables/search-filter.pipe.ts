import { Pipe, PipeTransform } from '@angular/core';

import { User } from './../shared/user.model';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  // transform(value: unknown, ...args: unknown[]): unknown {
  //   return null;
  // }
  transform(users: User[], searchValue: string): User[] {
    if (!users || !searchValue) {
      return users;
    }
    return users.filter(user =>
      user.firstname.toLowerCase().includes(searchValue.toLowerCase()) ||
      user.lastname.toLowerCase().includes(searchValue.toLowerCase()) ||
      user.loantype.toLowerCase().includes(searchValue.toLowerCase()) ||
      user.status.toLowerCase().includes(searchValue.toLowerCase())
    );
  }

}
