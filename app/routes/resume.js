import Ember from 'ember';

export default Ember.Route.extend({

  model: function(){
    return [
      {foo: "Resume"},
      {name: "Mello"},
      {vico: "Bellic"}
    ];
  },
  beforeModel: function() {
    this.controllerFor('application').set('title', 'MY RESUME!');
  }

});
