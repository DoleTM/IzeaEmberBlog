import Component from '@ember/component';
import RouteMixin from 'ember-cli-pagination/remote/route-mixin';

export default Component.extend(RouteMixin, {
    perPage: 9,

    model: function(params) {
        return this.findPaged('post', params);
    }
});
