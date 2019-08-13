import { observable, computed, decorate } from 'mobx';
class PoemStore {
  author = '';
  title = '';
  lines = '';

  getTitle() {
    return this.title;
  }

  getAuthor() {
    return this.author;
  }

  getLines() {
    return this.lines;
  }

  getPoem() {
    return {
      author: this.author,
      title: this.title,
      content: this.lines
    };
  }

  setTitle(title) {
    this.title = title;
  }

  setAuthor(author) {
    this.author = author;
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
  title: observable,
  lines: observable,
  getTitle: computed,
  getAuthor: computed,
  getLines: computed,
  getPoem: computed
});

export const poemStore = new PoemStore();
