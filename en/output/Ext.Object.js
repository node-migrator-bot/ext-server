Ext.data.JsonP.Ext_Object({"singleton":true,"statics":{"property":[],"event":[],"method":[],"css_var":[],"css_mixin":[],"cfg":[]},"requires":[],"component":false,"mixins":[],"code_type":"assignment","inheritable":false,"mixedInto":[],"meta":{},"uses":[],"parentMixins":[],"aliases":{},"members":{"event":[],"property":[],"method":[{"owner":"Ext.Object","meta":{},"name":"each","id":"method-each","tagname":"method"},{"owner":"Ext.Object","meta":{},"name":"fromQueryString","id":"method-fromQueryString","tagname":"method"},{"owner":"Ext.Object","meta":{},"name":"getKey","id":"method-getKey","tagname":"method"},{"owner":"Ext.Object","meta":{},"name":"getKeys","id":"method-getKeys","tagname":"method"},{"owner":"Ext.Object","meta":{},"name":"getSize","id":"method-getSize","tagname":"method"},{"owner":"Ext.Object","meta":{},"name":"getValues","id":"method-getValues","tagname":"method"},{"owner":"Ext.Object","meta":{},"name":"merge","id":"method-merge","tagname":"method"},{"owner":"Ext.Object","meta":{},"name":"toQueryObjects","id":"method-toQueryObjects","tagname":"method"},{"owner":"Ext.Object","meta":{},"name":"toQueryString","id":"method-toQueryString","tagname":"method"}],"css_var":[],"css_mixin":[],"cfg":[]},"superclasses":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/Object.html#Ext-Object' target='_blank'>Object.js</a></div></pre><div class='doc-contents'><p>A collection of useful static methods to deal with objects.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-each' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Object'>Ext.Object</span><br/><a href='source/Object.html#Ext-Object-method-each' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Object-method-each' class='name expandable'>each</a>( <span class='pre'>Object object, Function fn, [Object scope]</span> )</div><div class='description'><div class='short'<p>Iterates through an object and invokes the give...</p></div><div class='long'><p>Iterates through an object and invokes the given callback function for each iteration.\nThe iteration can be stopped by returning <code>false</code> in the callback function. For example:</p>\n\n<pre><code>var person = {\n    name: 'Jacky'\n    hairColor: 'black'\n    loves: ['food', 'sleeping', 'wife']\n};\n\nExt.Object.each(person, function(key, value, myself) {\n    console.log(key + \":\" + value);\n\n    if (key === 'hairColor') {\n        return false; // stop the iteration\n    }\n});\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>object</span> : Object<div class='sub-desc'><p>The object to iterate\n</p>\n</div></li><li><span class='pre'>fn</span> : Function<div class='sub-desc'><p>The callback function.\n</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>key</span> : String<div class='sub-desc'><p></p>\n</div></li><li><span class='pre'>value</span> : Object<div class='sub-desc'><p></p>\n</div></li><li><span class='pre'>object</span> : Object<div class='sub-desc'><p>The object itself\n</p>\n</div></li></ul></div></li><li><span class='pre'>scope</span> : Object (optional)<div class='sub-desc'><p>The execution scope (`this`) of the callback function\n</p>\n</div></li></ul></div></div></div><div id='method-fromQueryString' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Object'>Ext.Object</span><br/><a href='source/Object.html#Ext-Object-method-fromQueryString' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Object-method-fromQueryString' class='name expandable'>fromQueryString</a>( <span class='pre'>String queryString, [Boolean recursive]</span> ) : Object</div><div class='description'><div class='short'<p>Converts a query string back into an object.</p></div><div class='long'><p>Converts a query string back into an object.</p>\n\n<p>Non-recursive:</p>\n\n<pre><code>Ext.Object.fromQueryString(foo=1&bar=2); // returns {foo: 1, bar: 2}\nExt.Object.fromQueryString(foo=&bar=2); // returns {foo: null, bar: 2}\nExt.Object.fromQueryString(some%20price=%24300); // returns {'some price': '$300'}\nExt.Object.fromQueryString(colors=red&colors=green&colors=blue); // returns {colors: ['red', 'green', 'blue']}\n</code></pre>\n\n<p>Recursive:</p>\n\n<pre><code>Ext.Object.fromQueryString(\"username=Jacky&dateOfBirth[day]=1&dateOfBirth[month]=2&dateOfBirth[year]=1911&hobbies[0]=coding&hobbies[1]=eating&hobbies[2]=sleeping&hobbies[3][0]=nested&hobbies[3][1]=stuff\", true);\n\n// returns\n{\n    username: 'Jacky',\n    dateOfBirth: {\n        day: '1',\n        month: '2',\n        year: '1911'\n    },\n    hobbies: ['coding', 'eating', 'sleeping', ['nested', 'stuff']]\n}\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>queryString</span> : String<div class='sub-desc'><p>The query string to decode\n</p>\n</div></li><li><span class='pre'>recursive</span> : Boolean (optional)<div class='sub-desc'><p>Whether or not to recursively decode the string. This format is supported by\n<br />\nPHP / Ruby on Rails servers and similar.\n</p>\n<p>Defaults to: <code>false</code></p></div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getKey' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Object'>Ext.Object</span><br/><a href='source/Object.html#Ext-Object-method-getKey' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Object-method-getKey' class='name expandable'>getKey</a>( <span class='pre'>Object object, Object value</span> )</div><div class='description'><div class='short'<p>Returns the first matching key corresponding to...</p></div><div class='long'><p>Returns the first matching key corresponding to the given value.\nIf no matching value is found, null is returned.</p>\n\n<pre><code>var person = {\n    name: 'Jacky',\n    loves: 'food'\n};\n\nalert(Ext.Object.getKey(person, 'food')); // alerts 'loves'\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>object</span> : Object<div class='sub-desc'><p></p>\n</div></li><li><span class='pre'>value</span> : Object<div class='sub-desc'><p>The value to find\n</p>\n</div></li></ul></div></div></div><div id='method-getKeys' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Object'>Ext.Object</span><br/><a href='source/Object.html#Ext-Object-method-getKeys' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Object-method-getKeys' class='name expandable'>getKeys</a>( <span class='pre'>Object object</span> ) : String[]</div><div class='description'><div class='short'<p>Gets all keys of the given object as an array.</p></div><div class='long'><p>Gets all keys of the given object as an array.</p>\n\n<pre><code>var values = Ext.Object.getKeys({\n    name: 'Jacky',\n    loves: 'food'\n}); // ['name', 'loves']\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>object</span> : Object<div class='sub-desc'><p></p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String[]</span><div class='sub-desc'><p>An array of keys from the object</p>\n</div></li></ul></div></div></div><div id='method-getSize' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Object'>Ext.Object</span><br/><a href='source/Object.html#Ext-Object-method-getSize' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Object-method-getSize' class='name expandable'>getSize</a>( <span class='pre'>Object object</span> ) : Number</div><div class='description'><div class='short'<p>Gets the total number of this object's own prop...</p></div><div class='long'><p>Gets the total number of this object's own properties</p>\n\n<pre><code>var size = Ext.Object.getSize({\n    name: 'Jacky',\n    loves: 'food'\n}); // size equals 2\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>object</span> : Object<div class='sub-desc'><p></p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Number</span><div class='sub-desc'><p>size</p>\n</div></li></ul></div></div></div><div id='method-getValues' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Object'>Ext.Object</span><br/><a href='source/Object.html#Ext-Object-method-getValues' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Object-method-getValues' class='name expandable'>getValues</a>( <span class='pre'>Object object</span> ) : Array</div><div class='description'><div class='short'<p>Gets all values of the given object as an array.</p></div><div class='long'><p>Gets all values of the given object as an array.</p>\n\n<pre><code>var values = Ext.Object.getValues({\n    name: 'Jacky',\n    loves: 'food'\n}); // 'Jacky', 'food']\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>object</span> : Object<div class='sub-desc'><p></p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Array</span><div class='sub-desc'><p>An array of values from the object</p>\n</div></li></ul></div></div></div><div id='method-merge' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Object'>Ext.Object</span><br/><a href='source/Object.html#Ext-Object-method-merge' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Object-method-merge' class='name expandable'>merge</a>( <span class='pre'>Object... object</span> ) : Object</div><div class='description'><div class='short'<p>Merges any number of objects recursively withou...</p></div><div class='long'><p>Merges any number of objects recursively without referencing them or their children.</p>\n\n<pre><code>var extjs = {\n    companyName: 'Ext JS',\n    products: ['Ext JS', 'Ext GWT', 'Ext Designer'],\n    isSuperCool: true,\n    office: {\n        size: 2000,\n        location: 'Palo Alto',\n        isFun: true\n    }\n};\n\nvar newStuff = {\n    companyName: 'Sencha Inc.',\n    products: ['Ext JS', 'Ext GWT', 'Ext Designer', 'Sencha Touch', 'Sencha Animator'],\n    office: {\n        size: 40000,\n        location: 'Redwood City'\n    }\n};\n\nvar sencha = Ext.Object.merge(extjs, newStuff);\n\n// extjs and sencha then equals to\n{\n    companyName: 'Sencha Inc.',\n    products: ['Ext JS', 'Ext GWT', 'Ext Designer', 'Sencha Touch', 'Sencha Animator'],\n    isSuperCool: true,\n    office: {\n        size: 30000,\n        location: 'Redwood City',\n        isFun: true\n    }\n}\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>object</span> : Object...<div class='sub-desc'><p>Any number of objects to merge.\n</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>merged The object that is created as a result of merging all the objects passed in.</p>\n</div></li></ul></div></div></div><div id='method-toQueryObjects' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Object'>Ext.Object</span><br/><a href='source/Object.html#Ext-Object-method-toQueryObjects' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Object-method-toQueryObjects' class='name expandable'>toQueryObjects</a>( <span class='pre'>String name, Object/Array value, [Boolean recursive]</span> ) : Array</div><div class='description'><div class='short'<p>Converts a <code>name</code> - <code>value</code> pair to an array of...</p></div><div class='long'><p>Converts a <code>name</code> - <code>value</code> pair to an array of objects with support for nested structures. Useful to construct\nquery strings. For example:</p>\n\n<pre><code>var objects = Ext.Object.toQueryObjects('hobbies', ['reading', 'cooking', 'swimming']);\n\n// objects then equals:\n[\n    { name: 'hobbies', value: 'reading' },\n    { name: 'hobbies', value: 'cooking' },\n    { name: 'hobbies', value: 'swimming' },\n];\n\nvar objects = Ext.Object.toQueryObjects('dateOfBirth', {\n    day: 3,\n    month: 8,\n    year: 1987,\n    extra: {\n        hour: 4\n        minute: 30\n    }\n}, true); // Recursive\n\n// objects then equals:\n[\n    { name: 'dateOfBirth[day]', value: 3 },\n    { name: 'dateOfBirth[month]', value: 8 },\n    { name: 'dateOfBirth[year]', value: 1987 },\n    { name: 'dateOfBirth[extra][hour]', value: 4 },\n    { name: 'dateOfBirth[extra][minute]', value: 30 },\n];\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : String<div class='sub-desc'><p></p>\n</div></li><li><span class='pre'>value</span> : Object/Array<div class='sub-desc'><p></p>\n</div></li><li><span class='pre'>recursive</span> : Boolean (optional)<div class='sub-desc'><p>True to traverse object recursively\n</p>\n<p>Defaults to: <code>false</code></p></div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Array</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-toQueryString' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Object'>Ext.Object</span><br/><a href='source/Object.html#Ext-Object-method-toQueryString' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Object-method-toQueryString' class='name expandable'>toQueryString</a>( <span class='pre'>Object object, [Boolean recursive]</span> ) : String</div><div class='description'><div class='short'<p>Takes an object and converts it to an encoded q...</p></div><div class='long'><p>Takes an object and converts it to an encoded query string.</p>\n\n<p>Non-recursive:</p>\n\n<pre><code>Ext.Object.toQueryString({foo: 1, bar: 2}); // returns \"foo=1&amp;bar=2\"\nExt.Object.toQueryString({foo: null, bar: 2}); // returns \"foo=&amp;bar=2\"\nExt.Object.toQueryString({'some price': '$300'}); // returns \"some%20price=%24300\"\nExt.Object.toQueryString({date: new Date(2011, 0, 1)}); // returns \"date=%222011-01-01T00%3A00%3A00%22\"\nExt.Object.toQueryString({colors: ['red', 'green', 'blue']}); // returns \"colors=red&amp;colors=green&amp;colors=blue\"\n</code></pre>\n\n<p>Recursive:</p>\n\n<pre><code>Ext.Object.toQueryString(\n{\n    username : 'Jacky', dateOfBirth : {\n        day : 1, month : 2, year : 1911\n    },\n    hobbies : ['coding', 'eating', 'sleeping', ['nested', 'stuff']]\n}, true);\n// returns the following string (broken down and url-decoded for ease of reading purpose):\n// username=Jacky\n//    &amp;dateOfBirth[day]=1&amp;dateOfBirth[month]=2&amp;dateOfBirth[year]=1911\n//    &amp;hobbies[0]=coding&amp;hobbies[1]=eating&amp;hobbies[2]=sleeping&amp;hobbies[3][0]=nested&amp;hobbies[3][1]=stuff\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>object</span> : Object<div class='sub-desc'><p>The object to encode\n</p>\n</div></li><li><span class='pre'>recursive</span> : Boolean (optional)<div class='sub-desc'><p>Whether or not to interpret the object in recursive format.\n<br />\n(PHP / Ruby on Rails servers and similar).\n</p>\n<p>Defaults to: <code>false</code></p></div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'><p>queryString</p>\n</div></li></ul></div></div></div></div></div></div></div>","subclasses":[],"name":"Ext.Object","html_meta":{},"tagname":"class","extends":null,"id":"class-Ext.Object","alternateClassNames":[],"inheritdoc":null,"files":[{"href":"Object.html#Ext-Object","filename":"Object.js"}]});