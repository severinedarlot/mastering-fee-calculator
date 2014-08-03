import Ember from 'ember';
import Calculator from '../../../models/calculator';


test('Un test', function () {
	var calculator;
	Ember.run(function() {
		calculator = Calculator.create({
		  less4: 4,
      between4and8: 2,
      more8: 1,
	  });
	});
  equal(calculator.get('totalCount'), 7);
});