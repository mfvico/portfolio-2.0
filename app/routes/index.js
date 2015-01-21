import Ember from 'ember';

export default Ember.Route.extend({

  beforeModel: function() {
    this.controllerFor('application').set('title', 'Mello\'s awesome Index');
  }

});
