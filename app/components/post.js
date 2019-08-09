import Component from '@ember/component';
import { inject } from '@ember/service';

export default Component.extend({
    tagName: "div",
        isShowingModal: false,
        ajax: inject(),

        model() {
            const users = this.get('ajax')
            .request('https://jsonplaceholder.typicode.com/users')
            .then(response => response);
            console.log(users);
            return users;
        },
    actions: {
        toggleModal: function() {
            this.toggleProperty('isShowingModal');
        }
    }
});
