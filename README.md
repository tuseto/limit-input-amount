[![npm (scoped)](https://img.shields.io/npm/v/@tuseto/limit-inputs-amount)](https://www.npmjs.com/package/@tuseto/limit-inputs-amount)
@tuseto/limit-numeric-inputs-amount

# Limit numeric inputs sum

Limit group of number inputs to maximum sum. Response can be alert or custom html.

## Getting Started

You can limit multipul html inputs to given number. To do this you need to specify pointer to the form container, group container (because you can have many groups consist many inputs, this way you limit every group on his own),
input container. Also you can add your html for the response message.

Give examples
```
let limitSum = new LimitSum({
	limit: 100, //maximum limit of the sum of input fields (required)
	form: '#email-provider', //the form containing observed fields (works for 1 form per page) (required)
	group: '.sum-limit', //group of inputs that is limit for (multiple groups) (required)
	field: '.percentage-input', //inputs class (multiple fields) (required)
	message: 'Sum of the fields have to be maximum: ', //response message (required)
	responseContainer: { // if null alert will be used
		mainContainer: '#message', //main container selector (works for 1 container per page)
		messageContainer: '.modal-body', //container where the response will be shown (works for 1 message container per page)
		closeBtn: 'close-error-container' //main container close btn selector
	}
});

limitSum.init();
```

### Installing
```
npm install @tuseto/limit-numeric-inputs-amount
```