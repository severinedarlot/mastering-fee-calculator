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

test('titlesPrice should return 63 when there is 1 song of first slice', function () {
	var calculator = calculatorFactory({
    firstSliceCount: 1, ddp: false
  });
	equal(calculator.get('titlesPrice'), 63);
});

test('titlesPrice should return 62 * 2 when there are 2 songs', function () {
  var calculator = calculatorFactory({firstSliceCount: 2, ddp: false});
  equal(calculator.get('titlesPrice'), 62 * 2);
});

test('6 songs and cost 6 * 58', function () {
  var calculator = calculatorFactory({firstSliceCount: 6, ddp: false});
  equal(calculator.get('titlesPrice'), 6 * 58);
});

test('7 songs cost 7 * (63 - 6)', function () {
  var calculator = calculatorFactory({firstSliceCount: 7, ddp: false});
  equal(calculator.get('titlesPrice'), 7 * (63 - 6));
});

test('11 songs cost 11 * (63 - 10)', function () {
  var calculator = calculatorFactory({firstSliceCount: 11, ddp: false});
  equal(calculator.get('titlesPrice'), 11 * (63 - 10));
});

test('12 songs costs 12 * (63 - 11)', function () {
  var calculator = calculatorFactory({firstSliceCount: 12, ddp: false});
  equal(calculator.get('titlesPrice'), 12 * (63 - 11));
});

test('13 songs cost 13 * (63 - 12)', function () {
	var calculator = calculatorFactory({firstSliceCount: 13, ddp: false});
  equal(calculator.get('titlesPrice'), 13 * (63 - 12));
});

test('14 songs cost 14 * (63 - 13)', function () {
  var calculator = calculatorFactory({firstSliceCount: 14, ddp: false});
  equal(calculator.get('titlesPrice'), 14 * (63 - 13));
});

test('20 songs costs 20 * (63 - 19)', function(){
  var calculator = calculatorFactory({firstSliceCount: 20, ddp: false});
  equal(calculator.get('titlesPrice'), 20 * (63 - 19));
});

test('24 songs costs 24 * (63 - 23)', function(){
  var calculator = calculatorFactory({firstSliceCount: 24, ddp: false});
  equal(calculator.get('titlesPrice'), 24 * (63 - 23));
});

test('The price by title should never been less than 40 so 25 songs costs 25 * 40', function(){
  var calculator = calculatorFactory({firstSliceCount: 25, ddp: false});
  equal(calculator.get('titlesPrice'), 25 * 40);
});

test('The price by title should never been less than 40 so 26 songs costs 26 * 40', function(){
  var calculator = calculatorFactory({firstSliceCount: 26, ddp: false});
  equal(calculator.get('titlesPrice'), 26 * 40);
});

test('with 1 song between 4 and 8 minutes give 63 + 63/4', function () {
  var calculator = calculatorFactory({secondSliceCount: 1, ddp: false});
  equal(calculator.get('titlesPrice'), 63 + 63/4);
});

test('with 1 song between 8 and 12 minutes give 63 + 63/2', function () {
	var calculator = calculatorFactory({thirdSliceCount: 1, ddp: false});
  equal(calculator.get('titlesPrice'), 63 + 63/2);
});

test('with 1 song between 12 and 16 minutes give 63 + 63 * 3/4', function () {
	var calculator = calculatorFactory({fourthSliceCount: 1, ddp: false});
  equal(calculator.get('titlesPrice'), 63 + 63 * 3/4);
  });

test('with 1 basic song and 1 song between 4 and 8 minutes give 62 * 2 + 62/4', function () {
  var calculator = calculatorFactory({firstSliceCount: 1, secondSliceCount: 1, ddp: false});
  equal(calculator.get('titlesPrice'), 62 * 2 + 62 / 4);
});

test('with 4 basic songs and 2 songs more than 12 minutes give 58 * 6 + 58 * 3/4 * 2', function () {
	var calculator = calculatorFactory({firstSliceCount: 4, fourthSliceCount: 2, ddp: false});
  equal(calculator.get('titlesPrice'), (58 * 6) + (58 * 3/4 * 2));
});

test('TTC price is HT price with TVA 20%', function () {
	var calculator = calculatorFactory({firstSliceCount: 1, ddp: false});
  equal(calculator.get('htPrice'), 63);
	equal(calculator.get('ttcPrice'), 75.6);
});

test('with stem mastering is 20% of titlesPrices - round up', function () {
  var calculator = calculatorFactory({firstSliceCount: 1, stems: true, ddp: false});
  equal(calculator.get('stemsTotalPrice'), 13);
  equal(calculator.get('htPrice'), 63 + 13);
});

test('with stem mastering with 2 songs is 20% of titlesPrices', function () {
  var calculator = calculatorFactory({firstSliceCount: 2, stems: true, ddp: false});
  equal(calculator.get('stemsTotalPrice'), 25);
  equal(calculator.get('htPrice'), 62*2 + 25);
});

test('with stem mastering with 7 songs', function () {
  var calculator = calculatorFactory({firstSliceCount: 7, stems: true, ddp: false});
  equal(calculator.get('stemsTotalPrice'), 80);
  equal(calculator.get('htPrice'), (63 - 6) * 7 + 80);
});

test('with alternative mastering is 10% of titlesPrices', function () {
  var calculator = calculatorFactory({firstSliceCount: 1, alternative: true, ddp: false});
  equal(calculator.get('alternativePrice'), 7);
  equal(calculator.get('htPrice'), 63 + 7);
});

test('with mail shipping', function () {
  var calculator = calculatorFactory({shipping: true, ddp: false});
  equal(calculator.get('shippingPrice'), 10);
  equal(calculator.get('htPrice'), 10);
});

test('DDP is 35 + 5 by title', function () {
  var calculator = calculatorFactory({firstSliceCount: 3, ddp: true});
  equal(calculator.get('ddpPrice'), 35 + 3*5);
  equal(calculator.get('htPrice'), 35 + 3*5 + 61 * 3);
});

test('Online is -15% on all without shipping', function () {
  var calculator = calculatorFactory({firstSliceCount: 1, shipping: true, ddp: true, online: true});
  equal(calculator.get('onlinePrice'), -16);
  equal(calculator.get('htPrice'), 63 + 35 + 5 - 16 + 10);
});

function calculatorFactory(input) {
  var calc;
	Ember.run(function() {
		calc = Calculator.create(input);
	});
	return calc;
}
