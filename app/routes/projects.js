import Ember from 'ember';


export default Ember.Route.extend({

  beforeModel: function() {
    this.controllerFor('application').set('title', 'Projects of Awesomeness!');
  },

  model: function(){
    return [
      {project: "gCamp"},
      {name: "Mello"},
      {vico: "Bellic"}
    ];
  }

});
