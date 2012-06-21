Ext.data.JsonP.Ext_String({"parentMixins":[],"mixins":[],"code_type":"assignment","inheritable":false,"subclasses":[],"uses":[],"meta":{},"aliases":{},"files":[{"href":"String.html#Ext-String","filename":"String.js"}],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/String.html#Ext-String' target='_blank'>String.js</a></div></pre><div class='doc-contents'><p><p>文字列を扱うのに便利な、静的メソッドのコレクション。</p></p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-escapeRe' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.String'>Ext.String</span><br/><a href='source/String.html#Ext-String-property-escapeRe' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.String-property-escapeRe' class='name expandable'>escapeRe</a><span> : RegExp</span><strong class='private signature'>private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>デフォルトは: <code>/('|\\\\)/g</code></p></div></div></div><div id='property-escapeRegexRe' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.String'>Ext.String</span><br/><a href='source/String.html#Ext-String-property-escapeRegexRe' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.String-property-escapeRegexRe' class='name expandable'>escapeRegexRe</a><span> : RegExp</span><strong class='private signature'>private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>デフォルトは: <code>/([-.*+?^${}()|[\\]\\/\\\\])/g</code></p></div></div></div><div id='property-formatRe' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.String'>Ext.String</span><br/><a href='source/String.html#Ext-String-property-formatRe' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.String-property-formatRe' class='name expandable'>formatRe</a><span> : RegExp</span><strong class='private signature'>private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>デフォルトは: <code>/\\{(\\d+)\\}/g</code></p></div></div></div><div id='property-trimRegex' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.String'>Ext.String</span><br/><a href='source/String.html#Ext-String-property-trimRegex' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.String-property-trimRegex' class='name expandable'>trimRegex</a><span> : RegExp</span><strong class='private signature'>private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>デフォルトは: <code>/^[\\x09\\x0a\\x0b\\x0c\\x0d\\x20\\xa0\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u2028\\u2029\\u202f\\u205f\\u3000]+|[\\x09\\x0a\\x0b\\x0c\\x0d\\x20\\xa0\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u2028\\u2029\\u202f\\u205f\\u3000]+$/g</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-capitalize' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.String'>Ext.String</span><br/><a href='source/String.html#Ext-String-method-capitalize' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.String-method-capitalize' class='name expandable'>capitalize</a>( <span class='pre'>String string</span> ) : String</div><div class='description'><div class='short'><p>渡された文字列を大文字にして返します。</p> ...</div><div class='long'><p><p>渡された文字列を大文字にして返します。</p></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>string</span> : String<div class='sub-desc'><p></p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'><p></p>\n</div></li></ul></div></div></div><div id='method-ellipsis' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.String'>Ext.String</span><br/><a href='source/String.html#Ext-String-method-ellipsis' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.String-method-ellipsis' class='name expandable'>ellipsis</a>( <span class='pre'>String value, Number length, Boolean word</span> ) : String</div><div class='description'><div class='short'><p>渡された文字列が指定された文字数より長い場合、指定した文字数を超えた分の文字列をトランケートし...</p> ...</div><div class='long'><p><p>渡された文字列が指定された文字数より長い場合、指定した文字数を超えた分の文字列をトランケートし、省略記号（...）を付加して返します。</p></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>value</span> : String<div class='sub-desc'><p><p>トランケートされる文字列</p></p>\n</div></li><li><span class='pre'>length</span> : Number<div class='sub-desc'><p><p>トランケートしない文字数。これを超えた分の文字列はトランケートされます。</p></p>\n</div></li><li><span class='pre'>word</span> : Boolean<div class='sub-desc'><p><p>True to try to find a common word break</p></p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'><p><p>変換された文字</p></p>\n</div></li></ul></div></div></div><div id='method-escape' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.String'>Ext.String</span><br/><a href='source/String.html#Ext-String-method-escape' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.String-method-escape' class='name expandable'>escape</a>( <span class='pre'>String string</span> ) : String</div><div class='description'><div class='short'><p>渡された文字列内の'と\\をエスケープします。</p> ...</div><div class='long'><p><p>渡された文字列内の'と\\をエスケープします。</p></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>string</span> : String<div class='sub-desc'><p><p>エスケープされる文字列</p></p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'><p><p>エスケープされた文字列</p></p>\n</div></li></ul></div></div></div><div id='method-escapeRegex' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.String'>Ext.String</span><br/><a href='source/String.html#Ext-String-method-escapeRegex' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.String-method-escapeRegex' class='name expandable'>escapeRegex</a>( <span class='pre'>String string</span> ) : String</div><div class='description'><div class='short'><p>正規表現を使用して、文字列をエスケープします。</p> ...</div><div class='long'><p><p>正規表現を使用して、文字列をエスケープします。</p></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>string</span> : String<div class='sub-desc'><p></p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'><p></p>\n</div></li></ul></div></div></div><div id='method-format' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.String'>Ext.String</span><br/><a href='source/String.html#Ext-String-method-format' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.String-method-format' class='name expandable'>format</a>( <span class='pre'>String string, String value1, String value2</span> ) : String</div><div class='description'><div class='short'><p>トークン化された文字列を定義し、トークンと置換する任意の引数を渡して文字列を生成します。</p> ...</div><div class='long'><p><p>トークン化された文字列を定義し、トークンと置換する任意の引数を渡して文字列を生成します。\nトークンは一意である必要があり、{0}, {1}, のように増加させる必要があります。 使用例:</p>\n\n<pre><code>var cls = 'my-class', text = 'Some text';\nvar s = Ext.String.format('&lt;div class=\"{0}\">{1}&lt;/div>', cls, text);\n// 変数sに含まれる文字列: '&lt;div class=\"my-class\">Some text&lt;/div>'\n</code></pre></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>string</span> : String<div class='sub-desc'><p><p>置換トークンを設置した文字列</p></p>\n</div></li><li><span class='pre'>value1</span> : String<div class='sub-desc'><p><p>トークン{0}と置換する文字列</p></p>\n</div></li><li><span class='pre'>value2</span> : String<div class='sub-desc'><p><p>トークン{1}と置換する文字列。設置したトークンの数だけ引数を設定します。</p></p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'><p><p>設定したトークンが置換された文字列</p></p>\n</div></li></ul></div></div></div><div id='method-htmlDecode' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.String'>Ext.String</span><br/><a href='source/String.html#Ext-String-method-htmlDecode' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.String-method-htmlDecode' class='name expandable'>htmlDecode</a>( <span class='pre'>String value</span> ) : String</div><div class='description'><div class='short'><p>HTMLエンティティ (&amp;, &lt;, &gt;, &amp;quot) を適切な文字 (&amp;...</p> ...</div><div class='long'><p><p>HTMLエンティティ (&amp;, &lt;, &gt;, &amp;quot) を適切な文字 (&amp;, &lt;, >, ') に変換します。</p></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>value</span> : String<div class='sub-desc'><p><p>変換される文字列</p></p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'><p><p>変換された文字</p></p>\n</div></li></ul></div></div></div><div id='method-htmlEncode' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.String'>Ext.String</span><br/><a href='source/String.html#Ext-String-method-htmlEncode' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.String-method-htmlEncode' class='name expandable'>htmlEncode</a>( <span class='pre'>String value</span> ) : String</div><div class='description'><div class='short'><p>変換可能な特定の文字 (&amp;, &lt;, >, ') をHTMLエンティティ (&amp;, &amp;lt...</p> ...</div><div class='long'><p><p>変換可能な特定の文字 (&amp;, &lt;, >, ') をHTMLエンティティ (&amp;, &lt;, &gt;, &amp;quot) に変換します。</p></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>value</span> : String<div class='sub-desc'><p><p>変換される文字列</p></p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'><p><p>変換された文字</p></p>\n</div></li></ul></div></div></div><div id='method-leftPad' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.String'>Ext.String</span><br/><a href='source/String.html#Ext-String-method-leftPad' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.String-method-leftPad' class='name expandable'>leftPad</a>( <span class='pre'>String string, Number size, String character</span> ) : String</div><div class='description'><div class='short'><p>文字列の左側を、指定した文字で指定した長さ分埋めます。 この機能は、数値文字列や日付文字列の正...</p> ...</div><div class='long'><p><p>文字列の左側を、指定した文字で指定した長さ分埋めます。 この機能は、数値文字列や日付文字列の正規化に役立ちます。 使用例:</p>\n\n<pre><code>var s = Ext.String.leftPad('123', 5, '0');\n// 変数sに含まれる文字列: '00123'\n</code></pre></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>string</span> : String<div class='sub-desc'><p><p>元の文字列</p></p>\n</div></li><li><span class='pre'>size</span> : Number<div class='sub-desc'><p><p>合計の文字列長</p></p>\n</div></li><li><span class='pre'>character</span> : String<div class='sub-desc'><p><p>(オプション) 埋める際に使用する文字（デフォルトは半角スペース）</p></p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'><p><p>指定文字で埋められた文字列</p></p>\n</div></li></ul></div></div></div><div id='method-replace' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.String'>Ext.String</span><br/><a href='source/String.html#Ext-String-method-replace' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.String-method-replace' class='name expandable'>replace</a>( <span class='pre'>String v, String findme, String repl</span> ) : String</div><div class='description'><div class='short'><p>指定された文字列を置換します。</p> ...</div><div class='long'><p><p>指定された文字列を置換します。</p></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>v</span> : String<div class='sub-desc'><p></p>\n</div></li><li><span class='pre'>findme</span> : String<div class='sub-desc'><p></p>\n</div></li><li><span class='pre'>repl</span> : String<div class='sub-desc'><p></p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'><p><p>置換された文字列。</p></p>\n</div></li></ul></div></div></div><div id='method-toggle' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.String'>Ext.String</span><br/><a href='source/String.html#Ext-String-method-toggle' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.String-method-toggle' class='name expandable'>toggle</a>( <span class='pre'>String string, String value, String other</span> ) : String</div><div class='description'><div class='short'><p>2つの文字列を交互に切り替えることができるユーティリティ関数です。</p> ...</div><div class='long'><p><p>2つの文字列を交互に切り替えることができるユーティリティ関数です。\n渡された値と比較する値を比較し、これが同じ場合はその他で指定した値を返します。\n異なる場合、渡された値を返します。\nこのメソッドで渡された値と異なる値を返された場合、元の文字列に変更はありません。</p>\n\n<pre><code>// ソートの方向\nsort = Ext.String.toggle(sort, 'ASC', 'DESC');\n\n// このメソッドの代わり:\nsort = (sort == 'ASC' ? 'DESC' : 'ASC');\n</code></pre></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>string</span> : String<div class='sub-desc'><p><p>現在の文字列</p></p>\n</div></li><li><span class='pre'>value</span> : String<div class='sub-desc'><p><p>現在の文字列と比較する値</p></p>\n</div></li><li><span class='pre'>other</span> : String<div class='sub-desc'><p><p>文字列が比較文字列と同じだった場合に返す値</p></p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'><p><p>新しい値</p></p>\n</div></li></ul></div></div></div><div id='method-trim' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.String'>Ext.String</span><br/><a href='source/String.html#Ext-String-method-trim' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.String-method-trim' class='name expandable'>trim</a>( <span class='pre'>String string</span> ) : String</div><div class='description'><div class='short'><p>文字列内のスペースはそのまま残し、文字列の両サイドのホワイトスペースを除去します。 例:</p> ...</div><div class='long'><p><p>文字列内のスペースはそのまま残し、文字列の両サイドのホワイトスペースを除去します。 例:</p>\n\n<pre><code>var s = '  foo bar  ';\nalert('-' + s + '-');                   // alertで \"-  foo bar  -\" が表示されます\nalert('-' + Ext.String.trim(s) + '-');  // alertで \"-foo bar-\" が表示されます\n</code></pre></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>string</span> : String<div class='sub-desc'><p><p>空白を除去される文字列</p></p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'><p><p>空白が除去された文字列</p></p>\n</div></li></ul></div></div></div><div id='method-urlAppend' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.String'>Ext.String</span><br/><a href='source/String.html#Ext-String-method-urlAppend' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.String-method-urlAppend' class='name expandable'>urlAppend</a>( <span class='pre'>String url, String string</span> ) : String</div><div class='description'><div class='short'><p>クエリストリングを文字列に追加します。 追加する際、内部で疑問符（?）を付けるか、アンパサンド...</p> ...</div><div class='long'><p><p>クエリストリングを文字列に追加します。 追加する際、内部で疑問符（?）を付けるか、アンパサンド（&amp;）を付けるかを判定しています。</p></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>url</span> : String<div class='sub-desc'><p><p>クエリストリングが追加されるURL。</p></p>\n</div></li><li><span class='pre'>string</span> : String<div class='sub-desc'><p><p>URLに追加する内容。</p></p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'><p><p>(文字列) クエリストリングが追加されたURL</p></p>\n</div></li></ul></div></div></div></div></div></div></div>","superclasses":[],"tagname":"class","members":{"event":[],"property":[{"owner":"Ext.String","meta":{"private":true},"tagname":"property","name":"escapeRe","id":"property-escapeRe"},{"owner":"Ext.String","meta":{"private":true},"tagname":"property","name":"escapeRegexRe","id":"property-escapeRegexRe"},{"owner":"Ext.String","meta":{"private":true},"tagname":"property","name":"formatRe","id":"property-formatRe"},{"owner":"Ext.String","meta":{"private":true},"tagname":"property","name":"trimRegex","id":"property-trimRegex"}],"css_var":[],"method":[{"owner":"Ext.String","meta":{},"tagname":"method","name":"capitalize","id":"method-capitalize"},{"owner":"Ext.String","meta":{},"tagname":"method","name":"ellipsis","id":"method-ellipsis"},{"owner":"Ext.String","meta":{},"tagname":"method","name":"escape","id":"method-escape"},{"owner":"Ext.String","meta":{},"tagname":"method","name":"escapeRegex","id":"method-escapeRegex"},{"owner":"Ext.String","meta":{},"tagname":"method","name":"format","id":"method-format"},{"owner":"Ext.String","meta":{},"tagname":"method","name":"htmlDecode","id":"method-htmlDecode"},{"owner":"Ext.String","meta":{},"tagname":"method","name":"htmlEncode","id":"method-htmlEncode"},{"owner":"Ext.String","meta":{},"tagname":"method","name":"leftPad","id":"method-leftPad"},{"owner":"Ext.String","meta":{},"tagname":"method","name":"replace","id":"method-replace"},{"owner":"Ext.String","meta":{},"tagname":"method","name":"toggle","id":"method-toggle"},{"owner":"Ext.String","meta":{},"tagname":"method","name":"trim","id":"method-trim"},{"owner":"Ext.String","meta":{},"tagname":"method","name":"urlAppend","id":"method-urlAppend"}],"css_mixin":[],"cfg":[]},"html_meta":{},"alternateClassNames":[],"inheritdoc":null,"component":false,"name":"Ext.String","extends":null,"requires":[],"id":"class-Ext.String","mixedInto":[],"singleton":true,"statics":{"property":[],"event":[],"method":[],"css_var":[],"css_mixin":[],"cfg":[]}});