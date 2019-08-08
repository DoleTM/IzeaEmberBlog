import Component from '@ember/component';

export default Component.extend({
    tagName: "div",
    isShowingModal: false,

    actions: {
        toggleModal: function() {
            this.toggleProperty('isShowingModal');
        }
    }
});
