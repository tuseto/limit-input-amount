[![npm (scoped)](https://img.shields.io/npm/v/@tuseto/limit-input-amount)](https://www.npmjs.com/package/@tuseto/limit-input-amount)
@tuseto/limit-input-amount

# Limit numeric inputs sum

Limit group of number inputs to maximum sum. Response can be alert or custom html.

## Getting Started

You can limit multiple html inputs to given sum. To do this you need to specify pointer to the form container, group container (because you can have many groups containing many inputs, this way you limit every group on its own) and
input container. Also you can add your html for the response message.

Give examples
```js
let limitSum = new window.limitSum({
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

`npm install @tuseto/limit-input-amount`
