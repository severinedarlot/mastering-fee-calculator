import Ember from 'ember';
import Calculator from '../../../models/calculator';

test('total count  = firstSliceCount + secondSliceCount + thirdSliceCount + fourthSliceCount', function () {
	var calculator;
	Ember.run(function() {
		calculator = Calculator.create({
		  firstSliceCount: 4,
      secondSliceCount: 2,
      thirdSliceCount: 1,
      fourthSliceCount: 3
	  });
	});
  equal(calculator.get('totalCount'), 10);
});

test('When nothing, fee prices are zero', function () {
	var calculator;
	Ember.run(function() {
		calculator = Calculator.create();
	});
	equal(calculator.get('titlesPrice'), 0);
  equal(calculator.get('htPrice'), 0);
});

test('titlesPrice should return 48 when there is 1 song of first slice', function () {
	var calculator;
	Ember.run(function() {
		calculator = Calculator.create({
		  firstSliceCount: 1
	  });
	});
	equal(calculator.get('titlesPrice'), 48);
});