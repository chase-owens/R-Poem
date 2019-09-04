import { observable, action } from 'mobx';

export const authState = observable(
  {
    //observable property
    isLoggedIn: false,

    //actions
    authorize() {
      this.isLoggedIn = true;
    },
    unauthorize() {
      this.isLoggedIn = false;
    }
  },
  { authorize: action.bound, unauthorize: action.bound }
);
