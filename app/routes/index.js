import Route from '@ember/routing/route';
import { inject } from '@ember/service';

export default Route.extend({
    ajax: inject(),
    model() {
        const post = this.get('ajax')
            .request('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.sort(() => Math.random() - 0.5));
            return post;
    }
});
