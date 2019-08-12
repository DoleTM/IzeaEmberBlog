import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
    title: DS.attr('string'),
    body: DS.attr('string'),
    user: DS.belongsTo('user')
});
