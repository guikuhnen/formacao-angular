import { CanMatchFn } from '@angular/router';

export const canMatchGuard: CanMatchFn = (route, segments) => {
  console.log(route, segments);
  return true;
};
