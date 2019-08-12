import Component from '@ember/component';
import { inject } from '@ember/service';

export default Component.extend({
    tagName: "div",
    isShowingModal: false,
    ajax: inject(),

    actions: {
        toggleModal: function () {
            this.toggleProperty('isShowingModal');
        }
    },
    didReceiveAttrs() {
        this.get('ajax')
            .request('https://jsonplaceholder.typicode.com/users')
            .then(response =>
                this.set('user', response.find(user => this.post.userId === user.id))
            );
        this.get('ajax')
        .request('https://jsonplaceholder.typicode.com/comments')
        .then(response =>
            this.set('comment', response.find(comment => this.post.id === comment.postId))
            );
    }
});
