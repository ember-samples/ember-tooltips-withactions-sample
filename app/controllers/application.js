import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    click () {
      window.alert('Action handled by the controller');
      return false;
    }
  }
});
