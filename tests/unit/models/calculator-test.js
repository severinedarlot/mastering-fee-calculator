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

test('1 EP is 6 songs and cost 270', function () {
  var calculator = calculatorFactory({firstSliceCount: 6});
  equal(calculator.get('titlesPrice'), 270);
});

test('EP price: should return 270/6 * 7 = 315 when there is 7 songs', function () {
  var calculator = calculatorFactory({firstSliceCount: 7});
  equal(calculator.get('titlesPrice'), 315);
});

test('EP price: should return 270/6 * 11 = 495 when there is 11 songs', function () {
  var calculator = calculatorFactory({firstSliceCount: 11});
  equal(calculator.get('titlesPrice'), 495);
});

test('EP price: should return 270/6 * 12 = 540 when there is 12 songs', function () {
  var calculator = calculatorFactory({firstSliceCount: 12});
  equal(calculator.get('titlesPrice'), 540);
});

test('LP price is 13 songs and cost 520', function () {
	var calculator = calculatorFactory({firstSliceCount: 13});
  equal(calculator.get('titlesPrice'), 520);
});

test('LP price: should return 520/13 * 14 = 560 when there is 14 songs', function () {
  var calculator = calculatorFactory({firstSliceCount: 14});
  equal(calculator.get('titlesPrice'), 560);
});

test('LP price: should return 520/13 * 20 = 800 when there is 20 songs', function(){
  var calculator = calculatorFactory({firstSliceCount: 20});
  equal(calculator.get('titlesPrice'), 800);
});

function calculatorFactory(input) {
  var calc;
	Ember.run(function() {
		calc = Calculator.create(input);
	});
	return calc;
}
