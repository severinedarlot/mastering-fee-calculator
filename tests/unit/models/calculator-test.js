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
	var calculator = calculatorFactory({ddp: false});
  equal(calculator.get('titlesPrice'), 0);
	equal(calculator.get('htPrice'), 0);
	equal(calculator.get('ttcPrice'), 0);
});

test('When nothing but ddp, fee prices are zero too', function () {
  var calculator = calculatorFactory({ddp: true});
  equal(calculator.get('titlesPrice'), 0);
  equal(calculator.get('htPrice'), 0);
  equal(calculator.get('ttcPrice'), 0);
});

test('titlesPrice should return 56 when there is 1 song of first slice', function () {
	var calculator = calculatorFactory({
    firstSliceCount: 1, ddp: false
  });
	equal(calculator.get('titlesPrice'), 56);
});

test('titlesPrice should return 56 * 2 = 112 when there are 2 songs', function () {
  var calculator = calculatorFactory({firstSliceCount: 2, ddp: false});
  equal(calculator.get('titlesPrice'), 112);
});

test('1 EP is 6 songs and cost 312', function () {
  var calculator = calculatorFactory({firstSliceCount: 6, ddp: false});
  equal(calculator.get('titlesPrice'), 312);
});

test('EP price: should return 312/6 * 7 when there are 7 songs', function () {
  var calculator = calculatorFactory({firstSliceCount: 7, ddp: false});
  equal(calculator.get('titlesPrice'), 312/6 * 7);
});

test('EP price: should return 312/6 * 11 when there are 11 songs', function () {
  var calculator = calculatorFactory({firstSliceCount: 11, ddp: false});
  equal(calculator.get('titlesPrice'), 312/6 * 11);
});

test('EP price: should return 312/6 * 12 when there are 12 songs', function () {
  var calculator = calculatorFactory({firstSliceCount: 12, ddp: false});
  equal(calculator.get('titlesPrice'), 312/6 * 12);
});

test('LP price is 13 songs and cost 598', function () {
	var calculator = calculatorFactory({firstSliceCount: 13, ddp: false});
  equal(calculator.get('titlesPrice'), 598);
});

test('LP price: should return 598/13 * 14 when there is 14 songs', function () {
  var calculator = calculatorFactory({firstSliceCount: 14, ddp: false});
  equal(calculator.get('titlesPrice'), 598/13 * 14);
});

test('LP price: should return 598/13 * 20 when there is 20 songs', function(){
  var calculator = calculatorFactory({firstSliceCount: 20, ddp: false});
  equal(calculator.get('titlesPrice'), 598/13 * 20);
});

test('with 1 song between 4 and 8 minutes give 56 + 56/2', function () {
  var calculator = calculatorFactory({secondSliceCount: 1, ddp: false});
  equal(calculator.get('titlesPrice'), 56 + 56/2);
});

test('with 1 song between 8 and 12 minutes give 56 + 56*2/2', function () {
	var calculator = calculatorFactory({thirdSliceCount: 1, ddp: false});
  equal(calculator.get('titlesPrice'), 56 + 56*2/2);
});

test('with 1 song between 12 and 16 minutes give 56 + 56*3/2', function () {
	var calculator = calculatorFactory({fourthSliceCount: 1, ddp: false});
  equal(calculator.get('titlesPrice'), 56 + 56*3/2);
  });

test('with 1 basic song and 1 song between 4 and 8 minutes give 56 * 2 + 56/2', function () {
  var calculator = calculatorFactory({firstSliceCount: 1, secondSliceCount: 1, ddp: false});
  equal(calculator.get('titlesPrice'), 56 * 2 + 56/2);
});

test('with 4 basic songs and 2 songs between 8 and 12 minutes give 6 * 312/6 + 312/6*3/2*2', function () {
	var calculator = calculatorFactory({firstSliceCount: 4, fourthSliceCount: 2, ddp: false});
  equal(calculator.get('titlesPrice'), 6 * 312/6 + 312/6*3/2*2);
});

test('TTC price is HT price with TVA 20%', function () {
	var calculator = calculatorFactory({firstSliceCount: 1, ddp: false});
  equal(calculator.get('htPrice'), 56);
	equal(calculator.get('ttcPrice'), 67.2);
});

test('with stem mastering is 20% of titlesPrices - round up', function () {
  var calculator = calculatorFactory({firstSliceCount: 1, stems: true, ddp: false});
  equal(calculator.get('stemsTotalPrice'), 12);
  equal(calculator.get('htPrice'), 56 + 12);
});

test('with stem mastering with 2 songs is 20% of titlesPrices', function () {
  var calculator = calculatorFactory({firstSliceCount: 2, stems: true, ddp: false});
  equal(calculator.get('stemsTotalPrice'), 23);
  equal(calculator.get('htPrice'), 56*2 + 23);
});

test('with stem mastering with 7 songs', function () {
  var calculator = calculatorFactory({firstSliceCount: 7, stems: true, ddp: false});
  equal(calculator.get('stemsTotalPrice'), 73);
  equal(calculator.get('htPrice'), 312/6*7 + 73);
});

test('with alternative mastering is 10% of titlesPrices', function () {
  var calculator = calculatorFactory({firstSliceCount: 1, alternative: true, ddp: false});
  equal(calculator.get('alternativePrice'), 6);
  equal(calculator.get('htPrice'), 56 + 6);
});

test('with mail shipping', function () {
  var calculator = calculatorFactory({shipping: true, ddp: false});
  equal(calculator.get('shippingPrice'), 10);
  equal(calculator.get('htPrice'), 10);
});

test('DDP is 35 + 5 by title', function () {
  var calculator = calculatorFactory({firstSliceCount: 3, ddp: true});
  equal(calculator.get('ddpPrice'), 35 + 3*5);
  equal(calculator.get('htPrice'), 35 + 3*5 + 56 * 3);
});

test('Online is -15% on all without shipping', function () {
  var calculator = calculatorFactory({firstSliceCount: 1, shipping: true, ddp: true, online: true});
  equal(calculator.get('onlinePrice'), -15);
  equal(calculator.get('htPrice'), 56 + 35 + 5 - 15 + 10);
});

function calculatorFactory(input) {
  var calc;
	Ember.run(function() {
		calc = Calculator.create(input);
	});
	return calc;
}
