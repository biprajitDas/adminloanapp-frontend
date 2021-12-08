import { Pipe, PipeTransform } from '@angular/core';

import{ User } from './../shared/user.model';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  // transform(value: unknown, ...args: unknown[]): unknown {
  //   return null;
  // }
  transform(users:User[],searchValue:string): User[] {
    if(!users || !searchValue){
      return users;
    }
    return users.filter(user=>
      user[0].firstname.toLowerCase().includes(searchValue.toLowerCase()) ||
      user[0].lastname.toLowerCase().includes(searchValue.toLowerCase()) ||
      user[0].loantype.toLowerCase().includes(searchValue.toLowerCase()) ||
      user[0].status.toLowerCase().includes(searchValue.toLowerCase())
      );
  }

}
