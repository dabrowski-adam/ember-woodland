import Ember from 'ember';

export default Ember.Component.extend({
    percentage: Ember.computed('itemPrice', 'orderPrice', function() {
        return Math.floor(this.get('itemPrice') / this.get('orderPrice') * 100);
    }),
    isImportant: Ember.computed.gte('percentage', 50),
    actions: {
        toggleDetails() {
            this.toggleProperty('showDetails');
        }
    }
});
