Ext.data.JsonP.Ext_JSON({"parentMixins":[],"singleton":true,"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/JSON.html#Ext-JSON' target='_blank'>JSON.js</a></div></pre><div class='doc-contents'><p><p>Douglas Crockfordのjson.jsに、オブジェクトのprototypeに干渉しないように修正を加えたバージョン http://www.json.org/js.html</p></p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-decode' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.JSON'>Ext.JSON</span><br/><a href='source/JSON.html#Ext-JSON-method-decode' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.JSON-method-decode' class='name expandable'>decode</a>( <span class='pre'>String json, Boolean safe</span> ) : Object</div><div class='description'><div class='short'><p>JSON文字列をオブジェクトに変換（パース）します。</p> ...</div><div class='long'><p><p>JSON文字列をオブジェクトに変換（パース）します。\nJSONが無効な場合で第二引数のsafeオプションが設定されていない場合、SyntaxErrorが発生します。</p></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>json</span> : String<div class='sub-desc'><p><p>JSON文字列</p></p>\n</div></li><li><span class='pre'>safe</span> : Boolean<div class='sub-desc'><p><p>(オプション) JSONが無効な場合にnullを返すか、例外を投げるか。</p></p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p><p>JSON文字列を変換した結果のオブジェクト</p></p>\n</div></li></ul></div></div></div><div id='method-encode' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.JSON'>Ext.JSON</span><br/><a href='source/JSON.html#Ext-JSON-method-encode' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.JSON-method-encode' class='name expandable'>encode</a>( <span class='pre'>Object o</span> ) : String</div><div class='description'><div class='short'><p>オブジェクト、配列、またはその他の値をJSON文字列に変換します。</p> ...</div><div class='long'><p><p>オブジェクト、配列、またはその他の値をJSON文字列に変換します。</p></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>o</span> : Object<div class='sub-desc'><p><p>エンコードされる値</p></p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'><p><p>JSON文字列</p></p>\n</div></li></ul></div></div></div><div id='method-encodeDate' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.JSON'>Ext.JSON</span><br/><a href='source/JSON.html#Ext-JSON-method-encodeDate' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.JSON-method-encodeDate' class='name expandable'>encodeDate</a>( <span class='pre'>Date d</span> ) : String</div><div class='description'><div class='short'><p>日付を変換します。</p> ...</div><div class='long'><p><p>日付を変換します。\nこれはJSON文字列にリテラル表現として挿入される実際の文字列を返します。\n返される値には、ダブルクォーテーション（\"）が両サイドに付加されています。</p>\n\n<p><strong>戻り値のデフォルトフォーマットは \"yyyy-mm-ddThh:mm:ss\" です。</strong></p>\n\n<p>このメソッドをオーバーライドする:</p>\n\n<pre><code>Ext.JSON.encodeDate = function(d) {\n    return Ext.Date.format(d, '\"Y-m-d\"');\n};\n</code></pre></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>d</span> : Date<div class='sub-desc'><p><p>エンコードするDateオブジェクト</p></p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'><p><p>JSON文字列で使用するリテラル文字列。</p></p>\n</div></li></ul></div></div></div></div></div></div></div>","subclasses":[],"requires":[],"mixins":[],"code_type":"assignment","inheritable":false,"meta":{},"files":[{"href":"JSON.html#Ext-JSON","filename":"JSON.js"}],"uses":[],"members":{"cfg":[],"event":[],"method":[{"owner":"Ext.JSON","meta":{},"tagname":"method","name":"decode","id":"method-decode"},{"owner":"Ext.JSON","meta":{},"tagname":"method","name":"encode","id":"method-encode"},{"owner":"Ext.JSON","meta":{},"tagname":"method","name":"encodeDate","id":"method-encodeDate"}],"property":[],"css_var":[],"css_mixin":[]},"html_meta":{},"aliases":{},"superclasses":[],"component":false,"tagname":"class","name":"Ext.JSON","alternateClassNames":[],"inheritdoc":null,"id":"class-Ext.JSON","mixedInto":[],"extends":null});