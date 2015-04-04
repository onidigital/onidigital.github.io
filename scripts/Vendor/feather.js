function Feather( init ) {

	init = init || {};

	var config = {
		'expressions' : {
			'password' : {
				'expression' : (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/),
				'message' : 'The password must be at least eight digits long, with upper case and lower case, and numbers.'
			},
			'number' : {
				'expression' : (/^[0-9]+$/),
				'message': 'This input will accept only non-decimal numbers.'
			},
			'phone' : {
				'expression' : (/^\+?\d{2}[- ]?\d{3}[- ]?\d{5}$/),
				'message' : 'Please enter a phone number with one of the following formats: 65 12345678, 65 123-45678, +65-12345678.'
			},
			'email' : {
				'expression': (/^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/),
				'message' : 'Please enter a valid e-mail.'
			},
			'url' : {
				'expression': (/^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/),
				'message' : 'Please enter a valid url.'
			}
		},
		'settings': {
			'error-class' : 'feather-error',
			'success' : {}, //calback on success.
			'hide' : 'feather-hide', // hidden class.
			'validation-event' : 'change',
			'tooltip' : true
		}
	};

	//merge the setting object with the config.

	merge_settings( config, init );

	function merge_settings( config, init){

		for( var attr in init.settings ){
			if( init.settings.hasOwnProperty(attr) ){
				config.settings[attr] = init.settings[attr];
			}
		}
		for( var attr in init.expressions ){
			if( init.expressions.hasOwnProperty(attr) ){
				config.expressions[attr] = init.expressions[attr];
			}
		}
	}


	var d = document,
		forms = d.querySelectorAll('form[feather-validate]'),
		feather_forms = [],
		i = 0, l = forms.length;

	for(;i<l;i++){
		feather_forms.push( new feather_form(forms[i], config, init['after-validate'] ) );
	}

	function feather_form( form, config, after_val ){

	var f = form,
		c = config,
		//--------------------------//
		e = c.settings['validation-event'],
		error = c.settings['error-class'],
		hide = c.settings.hide,
		tooltip_enabled = c.settings['tooltip'],
		callback = c.settings.success,
		//--------------------------//
		inputs = f.querySelectorAll('[feather-type]'),
		submit = f.querySelector('[type=submit]'),
		//--------------------------//
		i = 0, l = inputs.length, d = document,
		//--------------------------//
		first_attempt = true;

		if( e !== 'submit' ){
			for(;i<l;i++){
				inputs[i].addEventListener(e,validate);
			}
		}

		if( tooltip_enabled ){			
			for(i=0;i<l;i++){
				doTooltip( inputs[i] );
			}
		}

		submit.addEventListener('click',validateAll);

		if( (after_val) && (first_attempt) ){
			submit.addEventListener('click', change_statements);
		}

		function change_statements(){
			if( first_attempt ){

				var current_event = e;

				merge_settings( c, after_val );
				//--------------------------//
				e = c.settings['validation-event'];
				error = c.settings['error-class'];
				hide = c.settings.hide;
				tooltip = c.settings['tooltip'];
				callback = c.settings.success;
				//--------------------------//
				inputs = f.querySelectorAll('input[feather-type]');
				submit = f.querySelector('input[type=submit]');
				//--------------------------//

				if( current_event !== e ){
					for(i=0;i<l;i++){
						inputs[i].removeEventListener(current_event, validate, false);
						inputs[i].addEventListener(e,validate, false);
					}
				}				

				first_attempt = false;

			}
		}

		function validate( input ){

			if( this !== window ){
				input = this;
			}

			var type = input.getAttribute('feather-type'),
				exp = c.expressions[type].expression,
				message = c.expressions[type].message;

			if( tooltip_enabled ){ 
				var tooltip = input.parentNode.querySelector('[feather-tooltip]'); 
			}

			if( exp.test(input.value) ){
				input.classList.remove(error);

				if( tooltip_enabled ){ 
					tooltip.classList.add(hide);
				}

				return true;
			} else {
				input.classList.add(error);

				if( tooltip_enabled ){ 
					tooltip.classList.remove(hide);
				}

				if( input.hasAttribute('feather-optional') ){
					return true;
				} else {
					return false;
				}
			}

		}

		function validateAll(e){
			e.preventDefault();
			var i = 0, l = inputs.length, results = false, sucess = true;
			
			for(;i<l;i++){
				results = validate( inputs[i] );
				if( !(results) ){
					sucess = false;
				}
			}

			if( sucess ){
				callback();
			}

		}

		function doTooltip( input ){
			var type = input.getAttribute('feather-type'), msj = c.expressions[type].message,
				container = d.createElement('div'),
				tooltip = d.createElement('div'),
				parragraph = d.createElement('p');

			input.parentNode.insertBefore(container,input);
			container.appendChild(input);
			container.appendChild(tooltip);
			container.setAttribute('feather-tooltip-container','');

			tooltip.appendChild(parragraph);

			tooltip.classList.add(hide);
			tooltip.setAttribute('feather-tooltip','');

			parragraph.innerHTML = msj;

		}
	}

}