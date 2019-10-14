let LimitSum = function LimitFinalSum(properties) {
	this.limit = properties.limit;
	this.form = properties.form;
	this.group = properties.group;
	this.field = properties.field;
	this.responseMessage = properties.message + this.limit;
	this.responseContainer = properties.responseContainer;

	if(this.responseContainer){
		this.mainContainer = document.querySelector(this.responseContainer.mainContainer);
		this.messageContainer = this.mainContainer.querySelector(this.responseContainer.messageContainer);
		this.mainContainerCloseBtn = this.responseContainer.closeBtn;
	}
	
	// Initialize fields listeners and response container. 
	this.init = function(){
		if(this.responseContainer){
			this.initResponseContainer(this.mainContainer);
		}

		document.querySelector(this.form).addEventListener ("keyup", this.checkSum);
	}

	// Check sum and handle the result.
	this.checkSum = function(event){
		let currentSum = 0;
		let parent = this.getClosest(event.target, this.group);
		let childs = parent.querySelectorAll(this.field);

		[].forEach.call(childs, function (el) {
			let value = this.parseElementValue(el);
			currentSum += value
		}.bind(this));

		this.handleMaximumLimit(currentSum, event.target);
	}.bind(this);

	// Find closest element of the element by selector. 
	this.getClosest = function (elem, selector) {
		for ( ; elem && elem !== document; elem = elem.parentNode ) {
			if ( elem.matches( selector ) ) return elem;
		}
		return null;
	};

	// Initalize response message container. Find and activate close btn.
	this.initResponseContainer = function(mainContainer){
		mainContainer.addEventListener('click', function(e){
			if(e.target.classList.contains(this.mainContainerCloseBtn)){
				this.hide(this.mainContainer);
			}
		}.bind(this));
	}

	// Parse element values to numbers.
	this.parseElementValue = function(el){
		let num = parseInt(el.value);

		if(isNaN(num)){
			return 0;
		}

		return num;
	}

	// If limit is exceeded show message and cut last input character
	this.handleMaximumLimit = function(currentSum, el){
		if(currentSum > this.limit){
			el.value = el.value.slice(0,-1);	

			this.showMessage();
		}
	}

	// Show custom element if exists, alert otherwise
	this.showMessage = function(){
		if(this.responseContainer){
			this.messageContainer.innerHTML = this.responseMessage;
			this.show(this.mainContainer);
		}else{
			alert(this.responseMessage);
		}
	}

	// Show an element
	this.show = function (elem) {
		elem.style.display = 'block';
	};
	
	// Hide an element
	this.hide = function (elem) {
		elem.style.display = 'none';
	};
  }