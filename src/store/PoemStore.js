import { observable } from 'mobx';

class PoemStore {
  @observable poemAuthor = '';
  @observable poemTitle = '';
  @observable poemContent = '';

  getPoemTitle() {
    return this.poemTitle;
  }

  getPoemAuthor() {
    return this.poemAuthor;
  }

  getPoemContent() {
    return this.poemContent;
  }

  getPoem() {
    return {
      author: this.poemAuthor,
      title: this.poemTitle,
      poemContent: this.poemContent
    };
  }

  setPoemTitle(poemTitle) {
    this.poemTitle = poemTitle;
  }

  setPoemAuthor(poemAuthor) {
    this.poemAuthor = poemAuthor;
  }

  setPoemContent() {
    // make API call to poem
  }

  setPoem(poem) {
    // destructure set parameters
  }
}

export const poemStore = new PoemStore();
