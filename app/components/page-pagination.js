import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  // Current Page
  page: 1,
  // Number of posts per page
  paginateBy: 12,

  //List of posts on the current page
  paginatedItems: computed('items', 'page', function () {
    var i = (parseInt(this.get('page')) - 1) * parseInt(this.get('paginateBy'));
    var j = i + parseInt(this.get('paginateBy'));
    return this.get('items').slice(i, j);
  }),
  // Total number of pages
  numberOfPages: computed('page', function () {
    var n = this.get('items.length');
    var c = parseInt(this.get('paginateBy'));
    var r = Math.floor(n / c);
    if (n % c > 0) {
      r += 1;
    }
    return r;
  }),
  // Array of numbers represented by the number of pages
  pageNumbers: computed('numberOfPages', function () {
    var n = Array(this.get('numberOfPages'));
    for (var i = 0; i < n.length; i++) {
      n[i] = i + 1;
    }
    return n;
  }),
  // Forward arrow button logic (Unless the user is on the last page)
  showNext: computed('page', function () {
    return (this.get('page') < this.get('numberOfPages'));
  }),
  //Backward arrow logic (Unless the user is on the first page)
  showPrevious: computed('page', function () {
    return (this.get('page') > 1);
  }),

  previousArrow: '<<',
  nextArrow: '>>',


  actions: {
    nextClicked() {
      if (this.get('page') + 1 <= this.get('numberOfPages')) {
        this.set('page', this.get('page') + 1);
      }
    },
    previousClicked() {
      if (this.get('page') > 0) {
        this.set('page', this.get('page') - 1);
      }
    },
    pageClicked(pageNumbers) {
      this.set('page', pageNumbers);
    }
  }
});