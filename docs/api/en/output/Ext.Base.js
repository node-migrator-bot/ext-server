Ext.data.JsonP.Ext_Base({"parentMixins":[],"singleton":false,"statics":{"cfg":[],"property":[],"method":[{"owner":"Ext.Base","meta":{"static":true},"tagname":"method","name":"addMembers","id":"static-method-addMembers"},{"owner":"Ext.Base","meta":{"static":true},"tagname":"method","name":"addStatics","id":"static-method-addStatics"},{"owner":"Ext.Base","meta":{"private":true,"static":true},"tagname":"method","name":"borrow","id":"static-method-borrow"},{"owner":"Ext.Base","meta":{"static":true},"tagname":"method","name":"create","id":"static-method-create"},{"owner":"Ext.Base","meta":{"static":true},"tagname":"method","name":"createAlias","id":"static-method-createAlias"},{"owner":"Ext.Base","meta":{"static":true},"tagname":"method","name":"getName","id":"static-method-getName"},{"owner":"Ext.Base","meta":{"markdown":true,"deprecated":{"text":"{Ext_Base:method-override:deprecated}"},"static":true},"tagname":"method","name":"override","id":"static-method-override"}],"event":[],"css_var":[],"css_mixin":[]},"html":"<div><pre class=\"hierarchy\"><h4>Subclasses</h4><div class='dependency'><a href='#!/api/Ext.app.Application' rel='Ext.app.Application' class='docClass'>Ext.app.Application</a></div><div class='dependency'><a href='#!/api/Ext.app.Router' rel='Ext.app.Router' class='docClass'>Ext.app.Router</a></div><div class='dependency'><a href='#!/api/Ext.app.action.Action' rel='Ext.app.action.Action' class='docClass'>Ext.app.action.Action</a></div><div class='dependency'><a href='#!/api/Ext.app.config.Config' rel='Ext.app.config.Config' class='docClass'>Ext.app.config.Config</a></div><div class='dependency'><a href='#!/api/Ext.app.controller.Controller' rel='Ext.app.controller.Controller' class='docClass'>Ext.app.controller.Controller</a></div><div class='dependency'><a href='#!/api/Ext.app.module.Module' rel='Ext.app.module.Module' class='docClass'>Ext.app.module.Module</a></div><div class='dependency'><a href='#!/api/Ext.app.view.View' rel='Ext.app.view.View' class='docClass'>Ext.app.view.View</a></div><div class='dependency'><a href='#!/api/Ext.database.Database' rel='Ext.database.Database' class='docClass'>Ext.database.Database</a></div><div class='dependency'><a href='#!/api/Ext.database.Manager' rel='Ext.database.Manager' class='docClass'>Ext.database.Manager</a></div><div class='dependency'><a href='#!/api/Ext.server.Connect' rel='Ext.server.Connect' class='docClass'>Ext.server.Connect</a></div><div class='dependency'><a href='#!/api/Ext.server.Request' rel='Ext.server.Request' class='docClass'>Ext.server.Request</a></div><div class='dependency'><a href='#!/api/Ext.server.Server' rel='Ext.server.Server' class='docClass'>Ext.server.Server</a></div><div class='dependency'><a href='#!/api/Ext.server.UserAgent' rel='Ext.server.UserAgent' class='docClass'>Ext.server.UserAgent</a></div><div class='dependency'><a href='#!/api/Ext.server.WebSocket' rel='Ext.server.WebSocket' class='docClass'>Ext.server.WebSocket</a></div><div class='dependency'><a href='#!/api/Ext.server.controller.Controller' rel='Ext.server.controller.Controller' class='docClass'>Ext.server.controller.Controller</a></div><div class='dependency'><a href='#!/api/Ext.server.middleware.BodyParser' rel='Ext.server.middleware.BodyParser' class='docClass'>Ext.server.middleware.BodyParser</a></div><div class='dependency'><a href='#!/api/Ext.server.middleware.Compress' rel='Ext.server.middleware.Compress' class='docClass'>Ext.server.middleware.Compress</a></div><div class='dependency'><a href='#!/api/Ext.server.middleware.CookieParser' rel='Ext.server.middleware.CookieParser' class='docClass'>Ext.server.middleware.CookieParser</a></div><div class='dependency'><a href='#!/api/Ext.server.middleware.Favicon' rel='Ext.server.middleware.Favicon' class='docClass'>Ext.server.middleware.Favicon</a></div><div class='dependency'><a href='#!/api/Ext.server.middleware.Multipart' rel='Ext.server.middleware.Multipart' class='docClass'>Ext.server.middleware.Multipart</a></div><div class='dependency'><a href='#!/api/Ext.server.middleware.Session' rel='Ext.server.middleware.Session' class='docClass'>Ext.server.middleware.Session</a></div><div class='dependency'><a href='#!/api/Ext.server.middleware.Static' rel='Ext.server.middleware.Static' class='docClass'>Ext.server.middleware.Static</a></div><div class='dependency'><a href='#!/api/Ext.shell.Shell' rel='Ext.shell.Shell' class='docClass'>Ext.shell.Shell</a></div><div class='dependency'><a href='#!/api/Ext.shell.controller.Controller' rel='Ext.shell.controller.Controller' class='docClass'>Ext.shell.controller.Controller</a></div><div class='dependency'><a href='#!/api/Ext.template.Template' rel='Ext.template.Template' class='docClass'>Ext.template.Template</a></div><div class='dependency'><a href='#!/api/Ext.util.Observable' rel='Ext.util.Observable' class='docClass'>Ext.util.Observable</a></div><h4>Files</h4><div class='dependency'><a href='source/Base.html#Ext-Base' target='_blank'>Base.js</a></div></pre><div class='doc-contents'><p><p>The root of all classes created with <a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a></p>\n\n<p>Ext.Base is the building block of all Ext classes. All classes in Ext inherit from Ext.Base.\nAll prototype and static members of this class are inherited by all other classes.</p></p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-self' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Base'>Ext.Base</span><br/><a href='source/Base.html#Ext-Base-property-self' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Base-property-self' class='name not-expandable'>self</a><span> : <a href=\"#!/api/Ext.Class\" rel=\"Ext.Class\" class=\"docClass\">Ext.Class</a></span><strong class='protected signature'>protected</strong></div><div class='description'><div class='short'><p><p>Get the reference to the current class from whi...</p></p>\n</div><div class='long'><p><p>Get the reference to the current class from which this object was instantiated. Unlike\n<a href=\"#!/api/Ext.Base-method-statics\" rel=\"Ext.Base-method-statics\" class=\"docClass\">statics</a>,\n<code>this.self</code> is scope-dependent and it's meant to be used for dynamic inheritance. See\n<a href=\"#!/api/Ext.Base-method-statics\" rel=\"Ext.Base-method-statics\" class=\"docClass\">statics</a>\nfor a detailed comparison</p>\n\n<pre><code>Ext.define('My.Cat', {\n    statics: {\n        speciesName: 'Cat' // My.Cat.speciesName = 'Cat'\n    },\n\n    constructor: function() {\n        alert(this.self.speciesName); // dependent on 'this'\n    },\n\n    clone: function() {\n        return new this.self();\n    }\n});\n\n\nExt.define('My.SnowLeopard', {\n    extend: 'My.Cat',\n    statics: {\n        speciesName: 'Snow Leopard'         // My.SnowLeopard.speciesName = 'Snow Leopard'\n    }\n});\n\nvar cat = new My.Cat();                     // alerts 'Cat'\nvar snowLeopard = new My.SnowLeopard();     // alerts 'Snow Leopard'\n\nvar clone = snowLeopard.clone();\nalert(Ext.getClassName(clone));             // alerts 'My.SnowLeopard'\n</code></pre></p>\n</div></div></div></div></div><div class='members-section'><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div class='definedBy'>Defined By</div><h4 class='members-subtitle'>Instance Methods</h3><div id='method-S-onExtended' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Base'>Ext.Base</span><br/><a href='source/Base.html#Ext-Base-method-S-onExtended' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Base-method-S-onExtended' class='name expandable'>$onExtended</a>( <span class='pre'>Object config</span> )<strong class='private signature'>private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>config</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-addConfig' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Base'>Ext.Base</span><br/><a href='source/Base.html#Ext-Base-method-addConfig' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Base-method-addConfig' class='name expandable'>addConfig</a>( <span class='pre'>Object config</span> )<strong class='private signature'>private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>config</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-addInheritableStatics' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Base'>Ext.Base</span><br/><a href='source/Base.html#Ext-Base-method-addInheritableStatics' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Base-method-addInheritableStatics' class='name expandable'>addInheritableStatics</a>( <span class='pre'>Object members</span> )<strong class='private signature'>private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>members</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-addMember' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Base'>Ext.Base</span><br/><a href='source/Base.html#Ext-Base-method-addMember' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Base-method-addMember' class='name expandable'>addMember</a>( <span class='pre'>Object name, Object member</span> )<strong class='private signature'>private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>member</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-callParent' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Base'>Ext.Base</span><br/><a href='source/Base.html#Ext-Base-method-callParent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Base-method-callParent' class='name expandable'>callParent</a>( <span class='pre'>Array/Arguments args</span> ) : Object<strong class='protected signature'>protected</strong></div><div class='description'><div class='short'><p>Call the \"parent\" method of the current method....</p> ...</div><div class='long'><p><p>Call the \"parent\" method of the current method. That is the method previously\noverridden by derivation or by an override (see\n<a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\" >Ext.define</a>\n).</p>\n\n<pre><code> Ext.define('My.Base', {\n     constructor: function(x) {\n         this.x = x;\n     },\n\n     statics: {\n         method: function(x) {\n             return x;\n         }\n     }\n });\n\n Ext.define('My.Derived', {\n     extend: 'My.Base',\n\n     constructor: function() {\n         this.callParent([21]);\n     }\n });\n\n var obj = new My.Derived();\n\n alert(obj.x);  // alerts 21\n</code></pre>\n\n<p>This can be used with an override as follows:</p>\n\n<pre><code> Ext.define('My.DerivedOverride', {\n     override: 'My.Derived',\n\n     constructor: function(x) {\n         this.callParent([x*2]); // calls original My.Derived constructor\n     }\n });\n\n var obj = new My.Derived();\n\n alert(obj.x);  // now alerts 42\n</code></pre>\n\n<p>This also works with static methods.</p>\n\n<pre><code> Ext.define('My.Derived2', {\n     extend: 'My.Base',\n\n     statics: {\n         method: function(x) {\n             return this.callParent([x*2]); // calls My.Base.method\n         }\n     }\n });\n\n alert(My.Base.method(10);     // alerts 10\n alert(My.Derived2.method(10); // alerts 20\n</code></pre>\n\n<p>Lastly, it also works with overridden static methods.</p>\n\n<pre><code> Ext.define('My.Derived2Override', {\n     override: 'My.Derived2',\n\n     statics: {\n         method: function(x) {\n             return this.callParent([x*2]); // calls My.Derived2.method\n         }\n     }\n });\n\n alert(My.Derived2.method(10); // now alerts 40\n</code></pre></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>args</span> : Array/Arguments<div class='sub-desc'><p><p>The arguments, either an array or the <code>arguments</code> object\nfrom the current method, for example: <code>this.callParent(arguments)</code></p></p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p></p>\n</div></li></ul></div></div></div><div id='method-extend' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Base'>Ext.Base</span><br/><a href='source/Base.html#Ext-Base-method-extend' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Base-method-extend' class='name expandable'>extend</a>( <span class='pre'>Object config</span> )<strong class='private signature'>private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>config</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getConfig' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Base'>Ext.Base</span><br/><a href='source/Base.html#Ext-Base-method-getConfig' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Base-method-getConfig' class='name expandable'>getConfig</a>( <span class='pre'>Object name</span> )<strong class='private signature'>private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getInitialConfig' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Base'>Ext.Base</span><br/><a href='source/Base.html#Ext-Base-method-getInitialConfig' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Base-method-getInitialConfig' class='name expandable'>getInitialConfig</a>( <span class='pre'>Object name</span> )</div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-hasConfig' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Base'>Ext.Base</span><br/><a href='source/Base.html#Ext-Base-method-hasConfig' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Base-method-hasConfig' class='name expandable'>hasConfig</a>( <span class='pre'>Object config</span> )<strong class='private signature'>private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>config</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-implement' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Base'>Ext.Base</span><br/><a href='source/Base.html#Ext-Base-method-implement' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Base-method-implement' class='name expandable'>implement</a>( <span class='pre'></span> )<strong class='private signature'>private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-initConfig' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Base'>Ext.Base</span><br/><a href='source/Base.html#Ext-Base-method-initConfig' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Base-method-initConfig' class='name expandable'>initConfig</a>( <span class='pre'>Object config</span> ) : Object<strong class='protected signature'>protected</strong></div><div class='description'><div class='short'><p>Initialize configuration for this class. a typi...</p> ...</div><div class='long'><p><p>Initialize configuration for this class. a typical example:</p>\n\n<pre><code>Ext.define('My.awesome.Class', {\n    // The default config\n    config: {\n        name: 'Awesome',\n        isAwesome: true\n    },\n\n    constructor: function(config) {\n        this.initConfig(config);\n    }\n});\n\nvar awesome = new My.awesome.Class({\n    name: 'Super Awesome'\n});\n\nalert(awesome.getName()); // 'Super Awesome'\n</code></pre></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>config</span> : Object<div class='sub-desc'><p></p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p><p>mixins The mixin prototypes as key - value pairs</p></p>\n</div></li></ul></div></div></div><div id='method-mixin' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Base'>Ext.Base</span><br/><a href='source/Base.html#Ext-Base-method-mixin' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Base-method-mixin' class='name expandable'>mixin</a>( <span class='pre'>Object name, Object mixinClass</span> )<strong class='private signature'>private</strong></div><div class='description'><div class='short'><p>Used internally by the mixins pre-processor</p> ...</div><div class='long'><p><p>Used internally by the mixins pre-processor</p></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>mixinClass</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-onConfigUpdate' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Base'>Ext.Base</span><br/><a href='source/Base.html#Ext-Base-method-onConfigUpdate' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Base-method-onConfigUpdate' class='name expandable'>onConfigUpdate</a>( <span class='pre'>Object names, Object callback, Object scope</span> )<strong class='private signature'>private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>names</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>callback</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>scope</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-onExtended' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Base'>Ext.Base</span><br/><a href='source/Base.html#Ext-Base-method-onExtended' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Base-method-onExtended' class='name expandable'>onExtended</a>( <span class='pre'>Object config</span> )<strong class='private signature'>private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>config</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setConfig' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Base'>Ext.Base</span><br/><a href='source/Base.html#Ext-Base-method-setConfig' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Base-method-setConfig' class='name expandable'>setConfig</a>( <span class='pre'>Object config, Object applyIfNotSet</span> )<strong class='private signature'>private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>config</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>applyIfNotSet</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-statics' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Base'>Ext.Base</span><br/><a href='source/Base.html#Ext-Base-method-statics' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Base-method-statics' class='name expandable'>statics</a>( <span class='pre'></span> ) : <a href=\"#!/api/Ext.Class\" rel=\"Ext.Class\" class=\"docClass\">Ext.Class</a><strong class='protected signature'>protected</strong></div><div class='description'><div class='short'><p>Get the reference to the class from which this ...</p> ...</div><div class='long'><p><p>Get the reference to the class from which this object was instantiated. Note that unlike\n<a href=\"#!/api/Ext.Base-property-self\" rel=\"Ext.Base-property-self\" class=\"docClass\" >self</a>\n<code>this.statics()</code> is scope-independent and it always returns the class from which it was called, regardless of what\n<code>this</code> points to during run-time</p>\n\n<pre><code>Ext.define('My.Cat', {\n    statics: {\n        totalCreated: 0,\n        speciesName: 'Cat' // My.Cat.speciesName = 'Cat'\n    },\n\n    constructor: function() {\n        var statics = this.statics();\n\n        alert(statics.speciesName);     // always equals to 'Cat' no matter what 'this' refers to\n                                        // equivalent to: My.Cat.speciesName\n\n        alert(this.self.speciesName);   // dependent on 'this'\n\n        statics.totalCreated++;\n    },\n\n    clone: function() {\n        var cloned = new this.self;                      // dependent on 'this'\n\n        cloned.groupName = this.statics().speciesName;   // equivalent to: My.Cat.speciesName\n\n        return cloned;\n}\n});\n\n\nExt.define('My.SnowLeopard', {\n    extend: 'My.Cat',\n\n    statics: {\n        speciesName: 'Snow Leopard'     // My.SnowLeopard.speciesName = 'Snow Leopard'\n    },\n\n    constructor: function() {\n        this.callParent();\n    }\n});\n\nvar cat = new My.Cat();                 // alerts 'Cat', then alerts 'Cat'\n\nvar snowLeopard = new My.SnowLeopard(); // alerts 'Cat', then alerts 'Snow Leopard'\n\nvar clone = snowLeopard.clone();\nalert(Ext.getClassName(clone));         // alerts 'My.SnowLeopard'\nalert(clone.groupName);                 // alerts 'Cat'\n\nalert(My.Cat.totalCreated);             // alerts 3\n</code></pre></p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ext.Class\" rel=\"Ext.Class\" class=\"docClass\">Ext.Class</a></span><div class='sub-desc'><p></p>\n</div></li></ul></div></div></div><div id='method-triggerExtended' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Base'>Ext.Base</span><br/><a href='source/Base.html#Ext-Base-method-triggerExtended' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Base-method-triggerExtended' class='name expandable'>triggerExtended</a>( <span class='pre'>Object config</span> )<strong class='private signature'>private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>config</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div></div><div class='subsection'><div class='definedBy'>Defined By</div><h4 class='members-subtitle'>Static Methods</h3><div id='static-method-addMembers' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Base'>Ext.Base</span><br/><a href='source/Base.html#Ext-Base-static-method-addMembers' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Base-static-method-addMembers' class='name expandable'>addMembers</a>( <span class='pre'>Object members</span> )<strong class='static signature'>static</strong></div><div class='description'><div class='short'><p>Add methods / properties to the prototype of th...</p> ...</div><div class='long'><p><p>Add methods / properties to the prototype of this class.</p>\n\n<pre><code>Ext.define('My.awesome.Cat', {\n    constructor: function() {\n        ...\n    }\n});\n\n My.awesome.Cat.implement({\n     meow: function() {\n        alert('Meowww...');\n     }\n });\n\n var kitty = new My.awesome.Cat;\n kitty.meow();\n</code></pre></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>members</span> : Object<div class='sub-desc'><p></p>\n</div></li></ul></div></div></div><div id='static-method-addStatics' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Base'>Ext.Base</span><br/><a href='source/Base.html#Ext-Base-static-method-addStatics' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Base-static-method-addStatics' class='name expandable'>addStatics</a>( <span class='pre'>Object members</span> ) : <a href=\"#!/api/Ext.Base\" rel=\"Ext.Base\" class=\"docClass\">Ext.Base</a><strong class='static signature'>static</strong></div><div class='description'><div class='short'><p>Add / override static properties of this class.</p> ...</div><div class='long'><p><p>Add / override static properties of this class.</p>\n\n<pre><code>Ext.define('My.cool.Class', {\n    ...\n});\n\nMy.cool.Class.addStatics({\n    someProperty: 'someValue',      // My.cool.Class.someProperty = 'someValue'\n    method1: function() { ... },    // My.cool.Class.method1 = function() { ... };\n    method2: function() { ... }     // My.cool.Class.method2 = function() { ... };\n});\n</code></pre></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>members</span> : Object<div class='sub-desc'><p></p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ext.Base\" rel=\"Ext.Base\" class=\"docClass\">Ext.Base</a></span><div class='sub-desc'><p><p>this</p></p>\n</div></li></ul></div></div></div><div id='static-method-borrow' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Base'>Ext.Base</span><br/><a href='source/Base.html#Ext-Base-static-method-borrow' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Base-static-method-borrow' class='name expandable'>borrow</a>( <span class='pre'><a href=\"#!/api/Ext.Base\" rel=\"Ext.Base\" class=\"docClass\">Ext.Base</a> fromClass, Array/String members</span> ) : <a href=\"#!/api/Ext.Base\" rel=\"Ext.Base\" class=\"docClass\">Ext.Base</a><strong class='private signature'>private</strong><strong class='static signature'>static</strong></div><div class='description'><div class='short'><p>Borrow another class' members to the prototype ...</p> ...</div><div class='long'><p><p>Borrow another class' members to the prototype of this class.</p>\n\n<pre><code>Ext.define('Bank', {\n    money: '$$$',\n    printMoney: function() {\n        alert('$$$$$$$');\n    }\n});\n\nExt.define('Thief', {\n    ...\n});\n\nThief.borrow(Bank, ['money', 'printMoney']);\n\nvar steve = new Thief();\n\nalert(steve.money); // alerts '$$$'\nsteve.printMoney(); // alerts '$$$$$$$'\n</code></pre></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>fromClass</span> : <a href=\"#!/api/Ext.Base\" rel=\"Ext.Base\" class=\"docClass\">Ext.Base</a><div class='sub-desc'><p><p>The class to borrow members from</p></p>\n</div></li><li><span class='pre'>members</span> : Array/String<div class='sub-desc'><p><p>The names of the members to borrow</p></p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ext.Base\" rel=\"Ext.Base\" class=\"docClass\">Ext.Base</a></span><div class='sub-desc'><p><p>this</p></p>\n</div></li></ul></div></div></div><div id='static-method-create' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Base'>Ext.Base</span><br/><a href='source/Base.html#Ext-Base-static-method-create' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Base-static-method-create' class='name expandable'>create</a>( <span class='pre'></span> ) : Object<strong class='static signature'>static</strong></div><div class='description'><div class='short'><p>Create a new instance of this Class.</p> ...</div><div class='long'><p><p>Create a new instance of this Class.</p>\n\n<pre><code>Ext.define('My.cool.Class', {\n    ...\n});\n\nMy.cool.Class.create({\n    someConfig: true\n});\n</code></pre>\n\n<p>All parameters are passed to the constructor of the class.</p></p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p><p>the created instance.</p></p>\n</div></li></ul></div></div></div><div id='static-method-createAlias' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Base'>Ext.Base</span><br/><a href='source/Base.html#Ext-Base-static-method-createAlias' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Base-static-method-createAlias' class='name expandable'>createAlias</a>( <span class='pre'>String/Object alias, String/Object origin</span> )<strong class='static signature'>static</strong></div><div class='description'><div class='short'><p>Create aliases for existing prototype methods. ...</p> ...</div><div class='long'><p><p>Create aliases for existing prototype methods. Example:</p>\n\n<pre><code>Ext.define('My.cool.Class', {\n    method1: function() { ... },\n    method2: function() { ... }\n});\n\nvar test = new My.cool.Class();\n\nMy.cool.Class.createAlias({\n    method3: 'method1',\n    method4: 'method2'\n});\n\ntest.method3(); // test.method1()\n\nMy.cool.Class.createAlias('method5', 'method3');\n\ntest.method5(); // test.method3() -&gt; test.method1()\n</code></pre></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>alias</span> : String/Object<div class='sub-desc'><p><p>The new method name, or an object to set multiple aliases. See\n<a href=\"#!/api/Ext.Function-method-flexSetter\" rel=\"Ext.Function-method-flexSetter\" class=\"docClass\" >flexSetter</a></p></p>\n</div></li><li><span class='pre'>origin</span> : String/Object<div class='sub-desc'><p><p>The original method name</p></p>\n</div></li></ul></div></div></div><div id='static-method-getName' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Base'>Ext.Base</span><br/><a href='source/Base.html#Ext-Base-static-method-getName' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Base-static-method-getName' class='name expandable'>getName</a>( <span class='pre'></span> ) : String<strong class='static signature'>static</strong></div><div class='description'><div class='short'><p>Get the current class' name in string format.</p> ...</div><div class='long'><p><p>Get the current class' name in string format.</p>\n\n<pre><code>Ext.define('My.cool.Class', {\n    constructor: function() {\n        alert(this.self.getName()); // alerts 'My.cool.Class'\n    }\n});\n\nMy.cool.Class.getName(); // 'My.cool.Class'\n</code></pre></p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'><p><p>className</p></p>\n</div></li></ul></div></div></div><div id='static-method-override' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Base'>Ext.Base</span><br/><a href='source/Base.html#Ext-Base-static-method-override' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Base-static-method-override' class='name expandable'>override</a>( <span class='pre'>Object members</span> ) : <a href=\"#!/api/Ext.Base\" rel=\"Ext.Base\" class=\"docClass\">Ext.Base</a><strong class='deprecated signature'>deprecated</strong><strong class='static signature'>static</strong></div><div class='description'><div class='short'><p>Override members of this class. Overridden meth...</p> ...</div><div class='long'><p><p>Override members of this class. Overridden methods can be invoked via\n<a href=\"#!/api/Ext.Base-method-callParent\" rel=\"Ext.Base-method-callParent\" class=\"docClass\" >callParent</a>.</p>\n\n<pre><code>Ext.define('My.Cat', {\n    constructor: function() {\n        alert(\"I'm a cat!\");\n    }\n});\n\nMy.Cat.override({\n    constructor: function() {\n        alert(\"I'm going to be a cat!\");\n\n        this.callParent(arguments);\n\n        alert(\"Meeeeoooowwww\");\n    }\n});\n\nvar kitty = new My.Cat(); // alerts \"I'm going to be a cat!\"\n                          // alerts \"I'm a cat!\"\n                          // alerts \"Meeeeoooowwww\"\n</code></pre>\n\n<p>As of 4.1, direct use of this method is deprecated. Use\n<a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\" >Ext.define</a>\ninstead:</p>\n\n<pre><code>Ext.define('My.CatOverride', {\n    override: 'My.Cat',\n    constructor: function() {\n        alert(\"I'm going to be a cat!\");\n\n        this.callParent(arguments);\n\n        alert(\"Meeeeoooowwww\");\n    }\n});\n</code></pre>\n\n<p>The above accomplishes the same result but can be managed by the\n<a href=\"#!/api/Ext.Loader\" rel=\"Ext.Loader\" class=\"docClass\" >Ext.Loader</a>\nwhich can properly order the override and its target class and the build process\ncan determine whether the override is needed based on the required state of the\ntarget class (My.Cat).</p></p>\n        <div class='signature-box deprecated'>\n        <p>This method has been <strong>deprecated</strong> </p>\n        <p><p>Use\n<a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\" >Ext.define</a>\ninstead</p></p>\n\n        </div>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>members</span> : Object<div class='sub-desc'><p><p>The properties to add to this class. This should be\nspecified as an object literal containing one or more properties.</p></p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ext.Base\" rel=\"Ext.Base\" class=\"docClass\">Ext.Base</a></span><div class='sub-desc'><p><p>this class</p></p>\n</div></li></ul></div></div></div></div></div></div></div>","subclasses":["Ext.app.action.Action","Ext.app.Application","Ext.app.config.Config","Ext.app.controller.Controller","Ext.app.module.Module","Ext.app.Router","Ext.app.view.View","Ext.database.Database","Ext.database.Manager","Ext.server.Connect","Ext.server.controller.Controller","Ext.server.middleware.BodyParser","Ext.server.middleware.Compress","Ext.server.middleware.CookieParser","Ext.server.middleware.Favicon","Ext.server.middleware.Multipart","Ext.server.middleware.Session","Ext.server.middleware.Static","Ext.server.Request","Ext.server.Server","Ext.server.UserAgent","Ext.server.WebSocket","Ext.shell.controller.Controller","Ext.shell.Shell","Ext.template.Template","Ext.util.Observable"],"requires":[],"mixins":[],"code_type":"nop","inheritable":false,"meta":{},"files":[{"href":"Base.html#Ext-Base","filename":"Base.js"}],"uses":[],"members":{"cfg":[],"event":[],"method":[{"owner":"Ext.Base","meta":{"private":true},"tagname":"method","name":"$onExtended","id":"method-S-onExtended"},{"owner":"Ext.Base","meta":{"private":true},"tagname":"method","name":"addConfig","id":"method-addConfig"},{"owner":"Ext.Base","meta":{"private":true},"tagname":"method","name":"addInheritableStatics","id":"method-addInheritableStatics"},{"owner":"Ext.Base","meta":{"private":true},"tagname":"method","name":"addMember","id":"method-addMember"},{"owner":"Ext.Base","meta":{"protected":true},"tagname":"method","name":"callParent","id":"method-callParent"},{"owner":"Ext.Base","meta":{"private":true},"tagname":"method","name":"extend","id":"method-extend"},{"owner":"Ext.Base","meta":{"private":true},"tagname":"method","name":"getConfig","id":"method-getConfig"},{"owner":"Ext.Base","meta":{},"tagname":"method","name":"getInitialConfig","id":"method-getInitialConfig"},{"owner":"Ext.Base","meta":{"private":true},"tagname":"method","name":"hasConfig","id":"method-hasConfig"},{"owner":"Ext.Base","meta":{"private":true},"tagname":"method","name":"implement","id":"method-implement"},{"owner":"Ext.Base","meta":{"protected":true},"tagname":"method","name":"initConfig","id":"method-initConfig"},{"owner":"Ext.Base","meta":{"private":true},"tagname":"method","name":"mixin","id":"method-mixin"},{"owner":"Ext.Base","meta":{"private":true},"tagname":"method","name":"onConfigUpdate","id":"method-onConfigUpdate"},{"owner":"Ext.Base","meta":{"private":true},"tagname":"method","name":"onExtended","id":"method-onExtended"},{"owner":"Ext.Base","meta":{"private":true},"tagname":"method","name":"setConfig","id":"method-setConfig"},{"owner":"Ext.Base","meta":{"protected":true},"tagname":"method","name":"statics","id":"method-statics"},{"owner":"Ext.Base","meta":{"private":true},"tagname":"method","name":"triggerExtended","id":"method-triggerExtended"}],"property":[{"owner":"Ext.Base","meta":{"protected":true},"tagname":"property","name":"self","id":"property-self"}],"css_var":[],"css_mixin":[]},"html_meta":{},"aliases":{},"superclasses":[],"component":false,"tagname":"class","name":"Ext.Base","alternateClassNames":[],"inheritdoc":null,"id":"class-Ext.Base","mixedInto":[],"extends":null});