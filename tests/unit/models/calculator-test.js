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
	equal(calculator.get('ttcPrice'), 0);
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

test('with 1 song between 4 and 8 minutes give 48 + 48/2 = 72', function () {
  var calculator = calculatorFactory({secondSliceCount: 1});
  equal(calculator.get('titlesPrice'), 72);
});

test('with 1 song between 8 and 12 minutes give 48 + 48*2/2 = 96', function () {
	var calculator = calculatorFactory({thirdSliceCount: 1});
  equal(calculator.get('titlesPrice'), 96);
});

test('with 1 song between 12 and 16 minutes give 48 + 48*3/2 = 120', function () {
	var calculator = calculatorFactory({fourthSliceCount: 1});
  equal(calculator.get('titlesPrice'), 120);
  });

test('with 1 basic song and 1 song between 4 and 8 minutes give 48 * 2 + 48/2 = 120', function () {
  var calculator = calculatorFactory({firstSliceCount: 1, secondSliceCount: 1});
  equal(calculator.get('titlesPrice'), 120);
});

test('with 4 basic songs and 2 songs between 8 and 12 minutes give 6 * 270/6 + 270/6*3/2*2 = 405', function () {
	var calculator = calculatorFactory({firstSliceCount: 4, fourthSliceCount: 2});
  equal(calculator.get('titlesPrice'), 405);
});

test('TTC price is HT price with TVA 20%', function () {
	var calculator = calculatorFactory({firstSliceCount: 1});
  equal(calculator.get('htPrice'), 48);
	equal(calculator.get('ttcPrice'), 57.60);
});

test('with stem mastering is 20% of titlesPrices', function () {
  var calculator = calculatorFactory({firstSliceCount: 1, stems: true});
  equal(calculator.get('stemsTotalPrice'), 10);
  equal(calculator.get('htPrice'), 58);
});

test('with stem mastering with 2 songs is 20% of titlesPrices', function () {
  var calculator = calculatorFactory({firstSliceCount: 2, stems: true});
  equal(calculator.get('stemsTotalPrice'), 20);
  equal(calculator.get('htPrice'), 116);
});

test('with stem mastering with 7 songs', function () {
  var calculator = calculatorFactory({firstSliceCount: 7, stems: true});
  equal(calculator.get('stemsTotalPrice'), 63);
  equal(calculator.get('htPrice'), 378);
});

test('with mail shipping', function () {
  var calculator = calculatorFactory({shipping: true});
  equal(calculator.get('shippingPrice'), 10);
  equal(calculator.get('htPrice'), 10);
});

test('DDP is 30 + 4 by title', function () {
  var calculator = calculatorFactory({firstSliceCount: 3, ddp: true});
  equal(calculator.get('ddpPrice'), 30 + 3*4);
  equal(calculator.get('htPrice'), 30 + 3*4 + 48 * 3);
});

function calculatorFactory(input) {
  var calc;
	Ember.run(function() {
		calc = Calculator.create(input);
	});
	return calc;
}
