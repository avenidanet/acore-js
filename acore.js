/**
* ACore JS v.1.0.0
*
* Microframework Javascript, more vanilla less jquery
* 3x speed & 14x small JQuery (Compatible)
* Size: 6kb acore.min.js
*
* @author Brian Salazar [Avenidanet]
* @link http://www.avenidanet.com
* 
* @copyright Brian Salazar 2006-2013
* @license http://mit-license.org
* 
* Code based on:
* https://github.com/james2doyle
*/
//ACore Javascript
window.$a = function(sel){
	if(typeof sel === 'string'){
		var result;
		var option = {  '#':'getElementById', 
						'.':'getElementsByClassName',
						'@':'querySelector',
						'*':'querySelectorAll'}[sel[0]];
		if(option){
			result = (document[option](sel.slice(1)));
		}else{
			result = (document.getElementsByTagName(sel));
		}
		return ((result.length < 2) ? result[0]: result);
	}else{
		return sel;
	}
};
/*******************/	
//Method $a().each(function(el){});
window.NodeList.prototype.each = Array.prototype.forEach;
//Method $a().html('div');
window.Element.prototype.html = function(content){
	if(content){
		this.innerHTML = content;		
	}else{
		return this.innerHTML;
	}
	return this;
}
window.NodeList.prototype.html = function(content){
	if(content){
	  	this.each(function(el) {
	    	el.html(content);
	  	});
	}else{
		return this[0].html();
	}	
	return this;
}
//Method $a().toggle();
window.Element.prototype.toggle = function(){
	if(this.style['display'] === 'block'){
		this.style['display'] = 'none';
	}else{
		this.style['display'] = 'block';
	}
	return this;
}
window.NodeList.prototype.toggle = function(){
  	this.each(function(el) {
    	el.toggle();
  	});
  	return this;	
}
//Method $a().append('div'); $a().before('div');
window.Element.prototype.after = function(content){
	this.innerHTML += content;
	return this;
}
window.NodeList.prototype.after = function(content){
  	this.each(function(el) {
    	el.append(content);
  	});
  	return this;	
}
window.Element.prototype.before = function(content){
	e = document.createElement('div');
	e.innerHTML = content;
	this.insertBefore(e, this.firstChild);
	return this;
}
window.NodeList.prototype.before = function(content){
  	this.each(function(el) {
    	el.before(content);
  	});
  	return this;	
}
//Method $a().hide(); $a().show();
window.Element.prototype.hide = function(){
  	this.style.display = 'none';
  	return this;
}
window.NodeList.prototype.hide = function(){
  	this.each(function(el) {
    	el.hide();
  	});
  	return this;
}
window.Element.prototype.show = function(){
  	this.style.display = 'block';
  	return this;
}
window.NodeList.prototype.show = function(){
  	this.each(function(el) {
    	el.show();
  	});
  	return this;
}
// Method $a().attr(name,value);
window.Element.prototype.attr = function(name, value) {
	if(value) {
		this.setAttribute(name, value);
	    return this;
	} else {
	    return this.getAttribute(name);
	}
};
window.NodeList.prototype.attr = function(name, value) {
	if(value) {
		this.each(function(el) {
			el.setAttribute(name, value);
		});	
	} else {
		return this[0].getAttribute(name);
    }
	return this;
};
// Method $a().css(prop,value);
window.Element.prototype.css = function(prop, value) {
	if (value) {
    	this.style[prop] = value;
    	return this;
  	} else {
    	return this.style[prop];
	}
};
window.NodeList.prototype.css = function(prop, value) {
	if(value){
		this.each(function(el) {
			el.css(prop, value);
		});	
	}else{
		return this[0].css(prop);
	}
  	return this;
};
// Method $a().on(eventType, callback);
window.Element.prototype.on = function(eventType, callback) {
  	eventType = eventType.split(' ');
  	for (var i = 0; i < eventType.length; i++) {
    	this.addEventListener(eventType[i], callback);
  	}
  	return this;
};
window.NodeList.prototype.on = function(eventType, callback){
  	this.each(function(el){
    	el.on(eventType, callback);
  	});
  	return this;
};
// Method $a().addClass(class);
window.Element.prototype.addClass = function(name) {
  	this.classList.add(name);
  	return this;
};
window.NodeList.prototype.addClass = function(name){
  	this.each(function(el) {
    	el.classList.add(name);
  	});
  	return this;
};
//Method $a().removeClass(class);
window.Element.prototype.removeClass = function(name) {
  	this.classList.remove(name);
  	return this;
};
window.NodeList.prototype.removeClass = function(name){
  	this.each(function(el) {
    	el.classList.remove(name);
  	});
  	return this;
};
//Method $a().hasClass('');
window.Element.prototype.hasClass = function(name) {
	  return this.classList.contains(name);
};
window.NodeList.prototype.hasClass = function(name) {
	  return this[0].hasClass(name);
};
//Method $a('form').serialize(); 
window.Element.prototype.serialize = function(){
	var q = this.formElements();
	return q[0].join("&");
}
window.NodeList.prototype.serialize = function () {
	return this[0].serialize();
}
//Method $a.serialize({hello:'bye'});
$a.serialize = function(object){
	var k = [];
	for(var key in object) {
		   k.push(key + "=" + encodeURIComponent(object[key]));
	}
	return k.join("&");
}
// Method $a('form').valid();
window.Element.prototype.valid = function(){
	var q = this.formElements();
	if(q[1].length > 0){
		return q[1];
	}
	return true;
}
window.NodeList.prototype.valid = function() {
	return this[0].valid();
}
// Method $a('input').val()
window.Element.prototype.val = function(value) {
	if (value) {
    	this.value = value;
    	return this;
  	} else {
    	return this.value;
	}
};
window.NodeList.prototype.val = function(value) {
  	if(value){
  		this.each(function(el) {
    		el.val(value);
  		});
  	}else{
  	  	return this[0].val();
  	}
  	return this;
};
//Method private
window.Element.prototype.formElements = function (){
	var form = this;
	if (!form || form.nodeName !== "FORM") {
		return;
	}
	var i, j, e = [], q = [];
	for (i = form.elements.length - 1; i >= 0; i = i - 1) {
		if (form.elements[i].name === "") {
			continue;
		}
		//Valid
		if(form.elements[i].required){
			if(form.elements[i].value === ''){
				form.elements[i].focus();
				e.push(form.elements[i].name);
			}
		}
		switch (form.elements[i].nodeName) {
		case 'INPUT':
			switch (form.elements[i].type) {
			case 'email':
				var re = /\S+@\S+\.\S+/;
				if(!re.test(form.elements[i].value)){
					form.elements[i].focus();
					e.push(form.elements[i].name);
				}
				q.push(form.elements[i].name + "=" + encodeURIComponent(form.elements[i].value));
				break;
			case 'tel':	
			case 'number':
				var numb = parseInt(form.elements[i].value);
				if( typeof numb !== 'number' | isNaN(numb)){
					form.elements[i].focus();
					e.push(form.elements[i].name);
				}
				q.push(form.elements[i].name + "=" + encodeURIComponent(form.elements[i].value));
				break;
			case 'text':
			case 'hidden':
			case 'password':
			case 'button':
			case 'reset':
			case 'submit':
				q.push(form.elements[i].name + "=" + encodeURIComponent(form.elements[i].value));
				break;
			case 'checkbox':
			case 'radio':
				if (form.elements[i].checked) {
					q.push(form.elements[i].name + "=" + encodeURIComponent(form.elements[i].value));
				}						
				break;
			case 'file':
				break;
			}
			break;			 
		case 'TEXTAREA':
			q.push(form.elements[i].name + "=" + encodeURIComponent(form.elements[i].value));
			break;
		case 'SELECT':
			switch (form.elements[i].type) {
			case 'select-one':
				q.push(form.elements[i].name + "=" + encodeURIComponent(form.elements[i].value));
				break;
			case 'select-multiple':
				for (j = form.elements[i].options.length - 1; j >= 0; j = j - 1) {
					if (form.elements[i].options[j].selected) {
						q.push(form.elements[i].name + "=" + encodeURIComponent(form.elements[i].options[j].value));
					}
				}
				break;
			}
			break;
		case 'BUTTON':
			switch (form.elements[i].type) {
			case 'reset':
			case 'submit':
			case 'button':
				q.push(form.elements[i].name + "=" + encodeURIComponent(form.elements[i].value));
				break;
			}
			break;
		}
	}
	return [q,e];
}
//Method $a('form').submitAsync(alert);
window.Element.prototype.submitAsync = function (callback) {
	$a.send(this.getAttribute('action'),this.serialize(),callback);
	return this;
}
window.NodeList.prototype.submitAsync = function(ftnCall) {
	this.each(function(el) {
		el.submitAsync(ftnCall);
	});
  	return this;
};
/*******************/
//Method $a.init(function(){});
$a.init = function(ftnInit){
	document.addEventListener('DOMContentLoaded',ftnInit);
	return document;
}
//Method $a.send(url,callback,data);
$a.send = function(url,data,callback){
	var httpRequest = new XMLHttpRequest()
	if(callback){
		httpRequest.addEventListener("load", function(){
			if(httpRequest.response[0]==='{'){
				callback(JSON.parse(httpRequest.response));
			}else{
				callback(httpRequest.response);
			}
		}, false);
	}
	if(data){
		httpRequest.open("POST",url,true);
		httpRequest.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		if(typeof data === 'object'){
			data = $a.serialize(data)
		}
		httpRequest.send(data);
	}else{
		httpRequest.open('GET', url,true);
		httpRequest.send();
	}
	return httpRequest;
}