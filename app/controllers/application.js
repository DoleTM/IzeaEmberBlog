import Controller from '@ember/controller';

export default Controller.extend({
    paginateBy: 9,
    isShowingModal: false,

    actions: {
        toggleModal: function() {
            this.toggleProperty('isShowingModal');
        }
    }
});