import { observable, computed, decorate } from 'mobx';
class PoemStore {
  author = '';
  poem = { author: '', title: '', lines: '' };
  poems = [];

  getTitle() {
    return this.poem.title;
  }

  getAuthor() {
    return this.author;
  }

  getLines() {
    return this.poem.lines;
  }

  getPoem() {
    return this.poem;
  }

  getPoems() {
    return this.poems;
  }

  setTitle(title) {
    this.poem.title = title;

    // Set author and poem with API call
  }

  setAuthor(author) {
    this.author = author;

    // Set poems with API call
  }

  setLines() {
    // make API call to poem
  }

  setPoem(poem) {
    // destructure set parameters
  }
}

decorate(PoemStore, {
  author: observable,
  poem: observable,
  poems: observable,
  getTitle: computed,
  getAuthor: computed,
  getLines: computed,
  getPoem: computed,
  getPoems: computed
});

export const poemStore = new PoemStore();
