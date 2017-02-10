import Ember from 'ember';

export default Ember.Controller.extend({
  applicationController: Ember.inject.controller('application'),
  stats: Ember.computed.reads('applicationController.model.stats'),

  roundPercent: Ember.computed('stats', 'model', {
    get() {
      var percent = this.get('model.roundScores') / this.get('stats.roundScores');
      if (!percent) {
        return 0;
      }
      return percent;
    }
  })
});
