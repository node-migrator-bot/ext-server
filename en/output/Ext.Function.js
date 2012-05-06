Ext.data.JsonP.Ext_Function({"parentMixins":[],"singleton":true,"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/Function.html#Ext-Function' target='_blank'>Function.js</a></div></pre><div class='doc-contents'><p><p>関数のコールバックを扱うのに便利な、静的メソッドのコレクション。</p></p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-alias' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Function'>Ext.Function</span><br/><a href='source/Function.html#Ext-Function-method-alias' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Function-method-alias' class='name expandable'>alias</a>( <span class='pre'>Object/Function object, String methodName</span> ) : Function</div><div class='description'><div class='short'><p>渡されたobjectのmethodNameに、提供されているメソッドのエイリアスを作成します。</p> ...</div><div class='long'><p><p>渡されたobjectのmethodNameに、提供されているメソッドのエイリアスを作成します。\n実行時のスコープは、渡されたobjectになることに注意してください。</p></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>object</span> : Object/Function<div class='sub-desc'><p></p>\n</div></li><li><span class='pre'>methodName</span> : String<div class='sub-desc'><p></p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Function</span><div class='sub-desc'><p><p>エイリアス関数</p></p>\n</div></li></ul></div></div></div><div id='method-bind' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Function'>Ext.Function</span><br/><a href='source/Function.html#Ext-Function-method-bind' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Function-method-bind' class='name expandable'>bind</a>( <span class='pre'>Function fn, Object scope, Array args, Boolean/Number appendArgs</span> ) : Function</div><div class='description'><div class='short'><p>提供されている関数（fn）から新しい関数を作成します。</p> ...</div><div class='long'><p><p>提供されている関数（fn）から新しい関数を作成します。\n関数実行時のスコープ（this）を変更することが可能です。\nまた、呼び出し時の引数をオーバーライドすることが可能です（デフォルトは、元の関数の引数）。</p>\n\n<p><a href=\"#!/api/Ext-method-bind\" rel=\"Ext-method-bind\" class=\"docClass\">Ext.bind</a>\nは\n<a href=\"#!/api/Ext.Function-method-bind\" rel=\"Ext.Function-method-bind\" class=\"docClass\">\nのエイリアスです。</p></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>fn</span> : Function<div class='sub-desc'><p><p>デリゲートされる関数。</p></p>\n</div></li><li><span class='pre'>scope</span> : Object<div class='sub-desc'><p><p>(オプション) 関数実行時のスコープ（this参照）。\n<strong>省略された場合、デフォルトはブラウザのwindowオブジェクトになります。</strong></p></p>\n</div></li><li><span class='pre'>args</span> : Array<div class='sub-desc'><p><p>(オプション) オーバーライドする引数。（デフォルトは元の引数をそのまま渡します）</p></p>\n</div></li><li><span class='pre'>appendArgs</span> : Boolean/Number<div class='sub-desc'><p><p>(オプション) trueを設定した場合、オーバーライドする代わりに元の引数にargsで指定した値を追加します。\n数値を指定した場合、指定した位置へargsで指定した値を挿入します。</p></p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Function</span><div class='sub-desc'><p><p>新しい関数</p></p>\n</div></li></ul></div></div></div><div id='method-clone' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Function'>Ext.Function</span><br/><a href='source/Function.html#Ext-Function-method-clone' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Function-method-clone' class='name expandable'>clone</a>( <span class='pre'>Function method</span> ) : Function</div><div class='description'><div class='short'><p>Create a \"clone\" of the provided method. The re...</p> ...</div><div class='long'><p><p>Create a \"clone\" of the provided method. The returned method will call the given\nmethod passing along all arguments and the \"this\" pointer and return its result.</p></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>method</span> : Function<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Function</span><div class='sub-desc'><p>cloneFn</p>\n</div></li></ul></div></div></div><div id='method-createBuffered' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Function'>Ext.Function</span><br/><a href='source/Function.html#Ext-Function-method-createBuffered' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Function-method-createBuffered' class='name expandable'>createBuffered</a>( <span class='pre'>Function fn, Number buffer, Object scope, Array args</span> ) : Function</div><div class='description'><div class='short'><p>デリゲート関数を作成します。必要に応じて実行時のスコープを変更したり、渡された関数の実行をミリ...</p> ...</div><div class='long'><p><p>デリゲート関数を作成します。必要に応じて実行時のスコープを変更したり、渡された関数の実行をミリ秒単位で遅らせて実行したりすることが可能です。\n実行を遅らせている間に関数が再度呼び出された場合、遅らされていた関数の実行はキャンセルされ、呼び出された関数のタイムアウト期間が開始されます。</p></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>fn</span> : Function<div class='sub-desc'><p><p>タイマーによって呼び出される関数。</p></p>\n</div></li><li><span class='pre'>buffer</span> : Number<div class='sub-desc'><p><p>関数を呼び出す際に遅らせるミリ秒。</p></p>\n</div></li><li><span class='pre'>scope</span> : Object<div class='sub-desc'><p><p>(オプション) 渡された関数呼び出し時のスコープ （this）。\n指定しない場合、デフォルトは呼び出し元の関数のスコープとなります。</p></p>\n</div></li><li><span class='pre'>args</span> : Array<div class='sub-desc'><p><p>(オプション) 呼び出し時の引数をオーバーライドします。 デフォルトは呼び出し元に渡される引数です。</p></p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Function</span><div class='sub-desc'><p><p>渡された関数を指定時間後に呼び出す関数。</p></p>\n</div></li></ul></div></div></div><div id='method-createDelayed' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Function'>Ext.Function</span><br/><a href='source/Function.html#Ext-Function-method-createDelayed' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Function-method-createDelayed' class='name expandable'>createDelayed</a>( <span class='pre'>Function fn, Number delay, Object scope, Array args, Boolean/Number appendArgs</span> ) : Function</div><div class='description'><div class='short'><p>呼び出されたときに指定時間後に実行するコールバック関数を作成します。</p> ...</div><div class='long'><p><p>呼び出されたときに指定時間後に実行するコールバック関数を作成します。</p></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>fn</span> : Function<div class='sub-desc'><p><p>返される関数を呼び出すと、ここで指定した関数が指定時間遅れて実行されます。 必要に応じて、引数リストを追加・置換してください。</p></p>\n</div></li><li><span class='pre'>delay</span> : Number<div class='sub-desc'><p><p>呼び出される毎に関数実行を遅らせるミリ秒。</p></p>\n</div></li><li><span class='pre'>scope</span> : Object<div class='sub-desc'><p><p>(オプション) 関数実行時のスコープ（this）。</p></p>\n</div></li><li><span class='pre'>args</span> : Array<div class='sub-desc'><p><p>(オプション) 呼び出し時にオーバーライドする引数。（デフォルトは呼び出し元に渡される引数）</p></p>\n</div></li><li><span class='pre'>appendArgs</span> : Boolean/Number<div class='sub-desc'><p><p>(オプション) trueを設定した場合、オーバーライドする代わりに元の引数にargsで指定した値を追加します。 数値を指定した場合、指定した位置へargsで指定した値を挿入します。</p></p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Function</span><div class='sub-desc'><p><p>この関数が呼び出されると、渡された関数を指定時間後に実行します。</p></p>\n</div></li></ul></div></div></div><div id='method-createInterceptor' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Function'>Ext.Function</span><br/><a href='source/Function.html#Ext-Function-method-createInterceptor' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Function-method-createInterceptor' class='name expandable'>createInterceptor</a>( <span class='pre'>Function origFn, Function newFn, Object scope, Object returnValue</span> ) : Function</div><div class='description'><div class='short'><p>インターセプター関数を作成します。 第一引数で渡された関数が実行される前に、第二引数で渡された...</p> ...</div><div class='long'><p><p>インターセプター関数を作成します。 第一引数で渡された関数が実行される前に、第二引数で渡された関数が実行されます。 この関数がfalseを返した場合、第一引数で渡された関数は呼び出されません。 このような場合、作成された関数はnull、もしくはreturnValueで設定した値を返します。 そうでない場合は第一引数の関数の実行結果が返されます。 使用例:</p>\n\n<pre><code>var sayHi = function (name){\n    alert('Hi, ' + name);\n}\nsayHi('Fred');\n// alerts \"Hi, Fred\"\n// create a new function that validates input without\n// directly modifying the original function:\nvar sayHiToFriend = Ext.Function.createInterceptor(sayHi, function (name){\n    return name == 'Brian';\n});\nsayHiToFriend('Fred');\n// no alert\nsayHiToFriend('Brian');\n// alerts \"Hi, Brian\"\n</code></pre></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>origFn</span> : Function<div class='sub-desc'><p><p>元の関数。</p></p>\n</div></li><li><span class='pre'>newFn</span> : Function<div class='sub-desc'><p><p>元の関数が実行される前に実行される関数（判定などの関数で、戻り値が真偽型）</p></p>\n</div></li><li><span class='pre'>scope</span> : Object<div class='sub-desc'><p><p>(オプション) 関数実行時のスコープ（this）。\n<strong>省略された場合、デフォルトは元の関数、またはブラウザのwindowオブジェクトになります。</strong></p></p>\n</div></li><li><span class='pre'>returnValue</span> : Object<div class='sub-desc'><p><p>(オプション) 第二引数で渡した関数がfalseを返した場合に、この関数が返す値（デフォルトはnullです）。</p></p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Function</span><div class='sub-desc'><p><p>新しい関数</p></p>\n</div></li></ul></div></div></div><div id='method-createSequence' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Function'>Ext.Function</span><br/><a href='source/Function.html#Ext-Function-method-createSequence' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Function-method-createSequence' class='name expandable'>createSequence</a>( <span class='pre'>Function origFn, Function newFn, Object scope</span> ) : Function</div><div class='description'><div class='short'><p>第一引数で渡された関数を呼び出した後に、第二引数で渡された関数を呼び出すシーケンスを作成します。</p> ...</div><div class='long'><p><p>第一引数で渡された関数を呼び出した後に、第二引数で渡された関数を呼び出すシーケンスを作成します。\n結果は第一引数の関数の結果を返します。\n第二引数の関数への引数は、第一引数の関数に渡された引数を使用します。</p>\n\n<pre><code>var sayHi = function(name){\n    alert('Hi, ' + name);\n}\n\nsayHi('Fred'); // alerts \"Hi, Fred\"\n\nvar sayGoodbye = Ext.Function.createSequence(sayHi, function(name){\n    alert('Bye, ' + name);\n});\n\nsayGoodbye('Fred'); // both alerts show\n</code></pre></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>origFn</span> : Function<div class='sub-desc'><p><p>元の関数。</p></p>\n</div></li><li><span class='pre'>newFn</span> : Function<div class='sub-desc'><p><p>元の関数の後に呼び出される関数。</p></p>\n</div></li><li><span class='pre'>scope</span> : Object<div class='sub-desc'><p><p>(オプション) 関数実行時のスコープ（this）。\n省略された場合、デフォルトは元の関数、またはブラウザのwindowオブジェクトになります。</p></p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Function</span><div class='sub-desc'><p><p>新しい関数</p></p>\n</div></li></ul></div></div></div><div id='method-createThrottled' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Function'>Ext.Function</span><br/><a href='source/Function.html#Ext-Function-method-createThrottled' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Function-method-createThrottled' class='name expandable'>createThrottled</a>( <span class='pre'>Function fn, Number interval, Object scope</span> ) : Function</div><div class='description'><div class='short'><p>前回の実行から指定時間後に再度実行する関数を作成します。 指定時間内にコールされた関数は実行さ...</p> ...</div><div class='long'><p><p>前回の実行から指定時間後に再度実行する関数を作成します。 指定時間内にコールされた関数は実行されず、最後にコールされた関数のみが指定時間後に実行されます。</p>\n\n<p>これはマウスのmoveイベントをハンドリングするような、繰り返し呼び出されることが想定される処理に対して役立ちます。</p></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>fn</span> : Function<div class='sub-desc'><p><p>一定の時間間隔で実行される関数。</p></p>\n</div></li><li><span class='pre'>interval</span> : Number<div class='sub-desc'><p><p>渡された関数が実行されるミリ秒間隔の時間。</p></p>\n</div></li><li><span class='pre'>scope</span> : Object<div class='sub-desc'><p><p>(オプション) 渡された関数実行時のスコープ（this）。 指定しない場合、デフォルトは呼び出し元の関数のスコープとなります。</p></p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Function</span><div class='sub-desc'><p><p>指定時間後に繰り返し呼び出される関数。</p></p>\n</div></li></ul></div></div></div><div id='method-defer' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Function'>Ext.Function</span><br/><a href='source/Function.html#Ext-Function-method-defer' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Function-method-defer' class='name expandable'>defer</a>( <span class='pre'>Function fn, Number millis, Object scope, Array args, Boolean/Number appendArgs</span> ) : Number</div><div class='description'><div class='short'><p>指定したミリ秒後に、渡された関数を設定されたスコープで呼び出します。 使用例:</p> ...</div><div class='long'><p><p>指定したミリ秒後に、渡された関数を設定されたスコープで呼び出します。 使用例:</p>\n\n<pre><code>var sayHi = function(name){\n    alert('Hi, ' + name);\n}\n\n// すぐに実行:\nsayHi('Fred');\n\n// 2秒後に実行:\nExt.Function.defer(sayHi, 2000, this, ['Fred']);\n\n// この構文は、匿名関数を遅らせて\n// 実行する場合に便利です:\nExt.Function.defer(function(){\n    alert('Anonymous');\n}, 100);\n</code></pre>\n\n<p><a href=\"#/api/Ext-method-defer\" rel=\"Ext-method-defer\" class=\"docClass\" >Ext.defer</a> は <a href=\"#/api/Ext.Function-method-defer\" rel=\"Ext.Function-method-defer\" class=\"docClass\" >Ext.Function.defer</a>のエイリアスです。</p></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>fn</span> : Function<div class='sub-desc'><p><p>遅らせて実行する関数。</p></p>\n</div></li><li><span class='pre'>millis</span> : Number<div class='sub-desc'><p><p>setTimeout使用時に設定するミリ秒 <br />\n<br />\n（0を指定した場合、即時実行されます）</p></p>\n</div></li><li><span class='pre'>scope</span> : Object<div class='sub-desc'><p><p>(オプション) 関数実行時のスコープ（this）。\n<br />\n<strong>省略された場合、デフォルトはブラウザのwindowオブジェクトになります。</strong></p></p>\n</div></li><li><span class='pre'>args</span> : Array<div class='sub-desc'><p><p>(オプション) 呼び出し時にオーバーライドする引数。\n（デフォルトは呼び出し元に渡される引数）</p></p>\n</div></li><li><span class='pre'>appendArgs</span> : Boolean/Number<div class='sub-desc'><p><p>(オプション) trueを設定した場合、オーバーライドする代わりに元の引数にargsで指定した値を追加します。\n数値を指定した場合、指定した位置へargsで指定した値を挿入します。</p></p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Number</span><div class='sub-desc'><p><p>clearTimeoutで使用可能なタイムアウトID</p></p>\n</div></li></ul></div></div></div><div id='method-flexSetter' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Function'>Ext.Function</span><br/><a href='source/Function.html#Ext-Function-method-flexSetter' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Function-method-flexSetter' class='name expandable'>flexSetter</a>( <span class='pre'>Function setter</span> ) : Function</div><div class='description'><div class='short'><p>フレームワーク全体で非常に一般的に使用されているメソッドです。</p> ...</div><div class='long'><p><p>フレームワーク全体で非常に一般的に使用されているメソッドです。\nメソッドのラッパーとして使用されます。\nラップされた関数は、以下のような「柔軟な」値の設定が可能です。</p>\n\n<ul>\n<li>name と value の２つの引数を設定します</li>\n<li>一つのオブジェクトに、name - value のペアを複数設定します</li>\n</ul>\n\n<p>For example:</p>\n\n<pre><code>var setValue = Ext.Function.flexSetter(function(name, value) {\n    this[name] = value;\n});\n\n// 次に、\n// name - value の１つのペアを指定\nsetValue('name1', 'value1');\n\n// name - value のペアを複数指定\nsetValue({\n    name1: 'value1',\n    name2: 'value2',\n    name3: 'value3'\n});\n</code></pre></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>setter</span> : Function<div class='sub-desc'><p></p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Function</span><div class='sub-desc'><p><p>flexSetter</p></p>\n</div></li></ul></div></div></div><div id='method-interceptAfter' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Function'>Ext.Function</span><br/><a href='source/Function.html#Ext-Function-method-interceptAfter' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Function-method-interceptAfter' class='name expandable'>interceptAfter</a>( <span class='pre'>Object object, String methodName, Function fn, [Object scope]</span> ) : Function</div><div class='description'><div class='short'><p>Adds behavior to an existing method that is exe...</p> ...</div><div class='long'><p><p>Adds behavior to an existing method that is executed after the\noriginal behavior of the function.  For example:</p>\n\n<pre><code>var soup = {\n    contents: [],\n    add: function(ingredient) {\n        this.contents.push(ingredient);\n    }\n};\nExt.Function.interceptAfter(soup, \"add\", function(ingredient){\n    // Always add a bit of extra salt\n    this.contents.push(\"salt\");\n});\nsoup.add(\"water\");\nsoup.add(\"onions\");\nsoup.contents; // will contain: water, salt, onions, salt\n</code></pre></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>object</span> : Object<div class='sub-desc'><p><p>The target object</p></p>\n</div></li><li><span class='pre'>methodName</span> : String<div class='sub-desc'><p><p>Name of the method to override</p></p>\n</div></li><li><span class='pre'>fn</span> : Function<div class='sub-desc'><p><p>Function with the new behavior.  It will\nbe called with the same arguments as the original method.  The\nreturn value of this function will be the return value of the\nnew method.</p></p>\n</div></li><li><span class='pre'>scope</span> : Object (optional)<div class='sub-desc'><p><p>The scope to execute the interceptor function. Defaults to the object.</p></p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Function</span><div class='sub-desc'><p><p>The new function just created.</p></p>\n</div></li></ul></div></div></div><div id='method-interceptBefore' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Function'>Ext.Function</span><br/><a href='source/Function.html#Ext-Function-method-interceptBefore' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Function-method-interceptBefore' class='name expandable'>interceptBefore</a>( <span class='pre'>Object object, String methodName, Function fn, [Object scope]</span> ) : Function</div><div class='description'><div class='short'><p>Adds behavior to an existing method that is exe...</p> ...</div><div class='long'><p><p>Adds behavior to an existing method that is executed before the\noriginal behavior of the function.  For example:</p>\n\n<pre><code>var soup = {\n    contents: [],\n    add: function(ingredient) {\n        this.contents.push(ingredient);\n    }\n};\nExt.Function.interceptBefore(soup, \"add\", function(ingredient){\n    if (!this.contents.length &amp;&amp; ingredient !== \"water\") {\n        // Always add water to start with\n        this.contents.push(\"water\");\n    }\n});\nsoup.add(\"onions\");\nsoup.add(\"salt\");\nsoup.contents; // will contain: water, onions, salt\n</code></pre></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>object</span> : Object<div class='sub-desc'><p><p>The target object</p></p>\n</div></li><li><span class='pre'>methodName</span> : String<div class='sub-desc'><p><p>Name of the method to override</p></p>\n</div></li><li><span class='pre'>fn</span> : Function<div class='sub-desc'><p><p>Function with the new behavior.  It will\nbe called with the same arguments as the original method.  The\nreturn value of this function will be the return value of the\nnew method.</p></p>\n</div></li><li><span class='pre'>scope</span> : Object (optional)<div class='sub-desc'><p><p>The scope to execute the interceptor function. Defaults to the object.</p></p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Function</span><div class='sub-desc'><p><p>The new function just created.</p></p>\n</div></li></ul></div></div></div><div id='method-pass' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Function'>Ext.Function</span><br/><a href='source/Function.html#Ext-Function-method-pass' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Function-method-pass' class='name expandable'>pass</a>( <span class='pre'>Function fn, Array args, Object scope</span> ) : Function</div><div class='description'><div class='short'><p>渡された関数を、あらかじめ指定された引数で実行する関数を作成します。</p> ...</div><div class='long'><p><p>渡された関数を、あらかじめ指定された引数で実行する関数を作成します。\nこの関数に引数を指定して呼び出した場合、その引数はあらかじめ設定された引数の後に追加されます。\nコールバック関数を作成したいときに役立ちます。</p>\n\n<p>使用例:</p>\n\n<pre><code>var originalFunction = function(){\n    alert(Ext.Array.from(arguments).join(' '));\n};\n\nvar callback = Ext.Function.pass(originalFunction, ['Hello', 'World']);\n\ncallback(); // alertで 'Hello World' と表示されます\ncallback('by Me'); // alertで 'Hello World by Me' と表示されます。\n</code></pre>\n\n<p><a href=\"#!/api/Ext-method-pass\" rel=\"Ext-method-pass\" class=\"docClass\">Ext.pass</a>\nは\n<a href=\"#!/api/Ext.Function-method-pass\" rel=\"Ext.Function-method-pass\" class=\"docClass\">Ext.Function.pass</a>\nのエイリアスです。</p></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>fn</span> : Function<div class='sub-desc'><p><p>元の関数。</p></p>\n</div></li><li><span class='pre'>args</span> : Array<div class='sub-desc'><p><p>コールバック関数へ渡される引数</p></p>\n</div></li><li><span class='pre'>scope</span> : Object<div class='sub-desc'><p><p>(オプション) 関数実行時のスコープ（this）。</p></p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Function</span><div class='sub-desc'><p><p>新しいコールバック関数</p></p>\n</div></li></ul></div></div></div></div></div></div></div>","subclasses":[],"requires":[],"mixins":[],"code_type":"assignment","inheritable":false,"meta":{},"files":[{"href":"Function.html#Ext-Function","filename":"Function.js"}],"uses":[],"members":{"cfg":[],"event":[],"method":[{"owner":"Ext.Function","meta":{},"tagname":"method","name":"alias","id":"method-alias"},{"owner":"Ext.Function","meta":{},"tagname":"method","name":"bind","id":"method-bind"},{"owner":"Ext.Function","meta":{},"tagname":"method","name":"clone","id":"method-clone"},{"owner":"Ext.Function","meta":{},"tagname":"method","name":"createBuffered","id":"method-createBuffered"},{"owner":"Ext.Function","meta":{},"tagname":"method","name":"createDelayed","id":"method-createDelayed"},{"owner":"Ext.Function","meta":{},"tagname":"method","name":"createInterceptor","id":"method-createInterceptor"},{"owner":"Ext.Function","meta":{},"tagname":"method","name":"createSequence","id":"method-createSequence"},{"owner":"Ext.Function","meta":{},"tagname":"method","name":"createThrottled","id":"method-createThrottled"},{"owner":"Ext.Function","meta":{},"tagname":"method","name":"defer","id":"method-defer"},{"owner":"Ext.Function","meta":{},"tagname":"method","name":"flexSetter","id":"method-flexSetter"},{"owner":"Ext.Function","meta":{},"tagname":"method","name":"interceptAfter","id":"method-interceptAfter"},{"owner":"Ext.Function","meta":{},"tagname":"method","name":"interceptBefore","id":"method-interceptBefore"},{"owner":"Ext.Function","meta":{},"tagname":"method","name":"pass","id":"method-pass"}],"property":[],"css_var":[],"css_mixin":[]},"html_meta":{},"aliases":{},"superclasses":[],"component":false,"tagname":"class","name":"Ext.Function","alternateClassNames":[],"inheritdoc":null,"id":"class-Ext.Function","mixedInto":[],"extends":null});