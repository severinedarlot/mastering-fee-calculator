import Ember from 'ember';
import Calculator from '../../../models/calculator';


test('total count  = firstSliceCount + secondSliceCount + thirdSliceCount + fourthSliceCount', function () {
	var calculator = calculatorFactory({
	  firstSliceCount: 4,
    secondSliceCount: 2,
    thirdSliceCount: 1,
    fourthSliceCount: 3
	});
  equal(calculator.get('totalCount'), 10);
});

test('When nothing, fee prices are zero', function () {
	var calculator = calculatorFactory({});
  equal(calculator.get('titlesPrice'), 0);
	equal(calculator.get('htPrice'), 0);
});

test('titlesPrice should return 48 when there is 1 song of first slice', function () {
	var calculator = calculatorFactory({
    firstSliceCount: 1
  });
	equal(calculator.get('titlesPrice'), 48);
});

test('titlesPrice should return 48 * 2 = 96 when there is 2 songs', function () {
  var calculator = calculatorFactory({firstSliceCount: 2});
  equal(calculator.get('titlesPrice'), 96);
});

function calculatorFactory(input) {
  var calc;
	Ember.run(function() {
		calc = Calculator.create(input);
	});
	return calc;
}
