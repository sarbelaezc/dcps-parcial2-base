import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  piblishedAt: DS.attr('date'),
  content: DS.attr('string'),
  author: DS.belongsTo('author'),
});
