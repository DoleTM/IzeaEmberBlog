import Route from '@ember/routing/route';
import { inject } from '@ember/service';

export default Route.extend({
    ajax: inject(),
    location: 9,
    model() {
        const posts = this.get('ajax')
            .request('https://jsonplaceholder.typicode.com/posts')
            .then(response => response);
            console.log(posts);
        return posts;
        
    }
});
