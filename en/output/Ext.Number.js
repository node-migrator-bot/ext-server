Ext.data.JsonP.Ext_Number({"parentMixins":[],"mixins":[],"code_type":"assignment","inheritable":false,"subclasses":[],"uses":[],"meta":{},"aliases":{},"files":[{"href":"Number.html#Ext-Number","filename":"Number.js"}],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/Number.html#Ext-Number' target='_blank'>Number.js</a></div></pre><div class='doc-contents'><p><p>A collection of useful static methods to deal with numbers</p></p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constrain' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Number'>Ext.Number</span><br/><a href='source/Number.html#Ext-Number-method-constrain' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Number-method-constrain' class='name expandable'>constrain</a>( <span class='pre'>Number number, Number min, Number max</span> ) : Number</div><div class='description'><div class='short'><p>Checks whether or not the passed number is with...</p> ...</div><div class='long'><p><p>Checks whether or not the passed number is within a desired range.  If the number is already within the\nrange it is returned, otherwise the min or max value is returned depending on which side of the range is\nexceeded. Note that this method returns the constrained value but does not change the current number.</p></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>number</span> : Number<div class='sub-desc'><p><p>The number to check</p></p>\n</div></li><li><span class='pre'>min</span> : Number<div class='sub-desc'><p><p>The minimum number in the range</p></p>\n</div></li><li><span class='pre'>max</span> : Number<div class='sub-desc'><p><p>The maximum number in the range</p></p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Number</span><div class='sub-desc'><p><p>The constrained value if outside the range, otherwise the current value</p></p>\n</div></li></ul></div></div></div><div id='method-from' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Number'>Ext.Number</span><br/><a href='source/Number.html#Ext-Number-method-from' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Number-method-from' class='name expandable'>from</a>( <span class='pre'>Object value, Number defaultValue</span> ) : Number</div><div class='description'><div class='short'><p>Validate that a value is numeric and convert it...</p> ...</div><div class='long'><p><p>Validate that a value is numeric and convert it to a number if necessary. Returns the specified default value if\nit is not.</p>\n\n<pre><code>Ext.Number.from('1.23', 1); // returns 1.23\nExt.Number.from('abc', 1); // returns 1\n</code></pre></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>value</span> : Object<div class='sub-desc'><p></p>\n</div></li><li><span class='pre'>defaultValue</span> : Number<div class='sub-desc'><p><p>The value to return if the original value is non-numeric</p></p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Number</span><div class='sub-desc'><p><p>value, if numeric, defaultValue otherwise</p></p>\n</div></li></ul></div></div></div><div id='method-snap' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Number'>Ext.Number</span><br/><a href='source/Number.html#Ext-Number-method-snap' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Number-method-snap' class='name expandable'>snap</a>( <span class='pre'>Number value, Number increment, Number minValue, Number maxValue</span> ) : Number</div><div class='description'><div class='short'><p>Snaps the passed number between stopping points...</p> ...</div><div class='long'><p><p>Snaps the passed number between stopping points based upon a passed increment value.</p></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>value</span> : Number<div class='sub-desc'><p><p>The unsnapped value.</p></p>\n</div></li><li><span class='pre'>increment</span> : Number<div class='sub-desc'><p><p>The increment by which the value must move.</p></p>\n</div></li><li><span class='pre'>minValue</span> : Number<div class='sub-desc'><p><p>The minimum value to which the returned value must be constrained. Overrides the increment.</p></p>\n</div></li><li><span class='pre'>maxValue</span> : Number<div class='sub-desc'><p><p>The maximum value to which the returned value must be constrained. Overrides the increment.</p></p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Number</span><div class='sub-desc'><p><p>The value of the nearest snap target.</p></p>\n</div></li></ul></div></div></div><div id='method-toFixed' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Number'>Ext.Number</span><br/><a href='source/Number.html#Ext-Number-method-toFixed' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Number-method-toFixed' class='name expandable'>toFixed</a>( <span class='pre'>Number value, Number precision</span> ) : Number</div><div class='description'><div class='short'><p>Formats a number using fixed-point notation</p> ...</div><div class='long'><p><p>Formats a number using fixed-point notation</p></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>value</span> : Number<div class='sub-desc'><p><p>The number to format</p></p>\n</div></li><li><span class='pre'>precision</span> : Number<div class='sub-desc'><p><p>The number of digits to show after the decimal point</p></p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Number</span><div class='sub-desc'><p></p>\n</div></li></ul></div></div></div></div></div></div></div>","superclasses":[],"tagname":"class","members":{"event":[],"property":[],"css_var":[],"method":[{"owner":"Ext.Number","meta":{},"tagname":"method","name":"constrain","id":"method-constrain"},{"owner":"Ext.Number","meta":{},"tagname":"method","name":"from","id":"method-from"},{"owner":"Ext.Number","meta":{},"tagname":"method","name":"snap","id":"method-snap"},{"owner":"Ext.Number","meta":{},"tagname":"method","name":"toFixed","id":"method-toFixed"}],"css_mixin":[],"cfg":[]},"html_meta":{},"alternateClassNames":[],"inheritdoc":null,"component":false,"name":"Ext.Number","extends":null,"requires":[],"id":"class-Ext.Number","mixedInto":[],"singleton":true,"statics":{"property":[],"event":[],"method":[],"css_var":[],"css_mixin":[],"cfg":[]}});