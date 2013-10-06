ACore JS v.1.0.0
========

![New Acore](http://avenidanet.com/acore/tree_acore.jpg)

Microframework Javascript, more vanilla less jquery | 3x speed and 14x small JQuery (Compatible)

##Instalación
Incluir script
```html
	<script src="//apps.avenidanet.com/acore/acore.min.js"></script>
```

##DOM
Obtener elementos del DOM
```js
	$a('#id'); //Equivalent JQuery $('#id')
	
	$a('.class'); //Equivalent JQuery $('.class')
	
	$a('div'); //Equivalent JQuery $('div')
	
	$a('@div #id'); //Equivalent JQuery $('div #id') | Devuelve un elemento
	
	$a('*div #id'); //Equivalent JQuery $('div #id') | Devuelve todos los elementos
```

##Modificadores
Modificadores de elementos
```js
	$a().hide(); //hide element
	$a().show(); //show element
	
	$a().toggle();
	
	$a().html(); //get HTML
	$a().html('contenido'); //set HTML
	
	$a().attr(name,value);	//set attr
	$a().attr(name);	//get attr
	
	$a().css(prop,value);	//set css
	$a().css(prop);		//get css
	
	$a().addClass(class);
	$a().removeClass(class);
	
	$a('input').val() //get val
	$a('input').val(value)	//set val
```

##Funciones
Funciones generales.
```js
	$a.init(function(){}); //Funcion equivalente a $(document).ready();
	$a.send(url,data,callback); //Envio por POST o GET | Parsea JSON si viene como respuesta
```

##Funciones sobre elementos
Funciones sobre los elementos seleccionados.
```js
	$a().on(eventType, callback); //Asignar cualquier evento
	
	$a().hasClass('class'); //True or False
	
	$a().before('content'); //Add element div with content
	$a().after('content'); 
```

##Formularios
Funciones validas para formularios
```js
	$a('form').serialize();
	//apellido=&nombre=&paises=1
	
	$a.serialize({hello:'bye'});
	//hello=bye
	
	//Devuelve si un formulario es valido
	//Se debe agregar required para que sea requerido y email, tel o number para validar a los elementos
	$a('form').valid(); //Elements not valid or true
	
	//Envia los datos asincronicamente | Parsea JSON si viene como respuesta
	$a('form').submitAsync(alert);
```

Disclaimer: Algunas funciones pueden no funcionar en versiones inferiores a IE9.

Este desarrollo esta bajo licencia MIT.

The MIT License (MIT)

Copyright (c) 2006-2013 Brian Salazar [www.avenidanet.com]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

http://mit-license.org