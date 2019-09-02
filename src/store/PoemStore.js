import { observable, action } from 'mobx';
import { getPoem } from '../api/api';

export const poemStore = observable(
  {
    // observable properties:
    author: null,
    poem: null,

    // computed/derived  property
    get poemLines() {
      return this.poem.lines;
    },

    // actions
    async setPoem(title) {
      if (title === null) {
        this.poem = null;
      } else {
        const poem = await getPoem(title);
        console.log('Setting poem', poem[0]);
        this.poem = poem[0];
        this.setAuthor(this.poem.author);
      }
    },

    setAuthor(author) {
      this.author = author;
    }
  },
  { setAuthor: action.bound, setPoem: action.bound }
);
