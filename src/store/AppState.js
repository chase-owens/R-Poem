import { observable } from 'mobx';

export const appState = observable({
  author: '',
  poem: ''
});
