Ext.data.JsonP.Ext_ux_CalendarEventBarModel({"tagname":"class","name":"Ext.ux.CalendarEventBarModel","autodetected":{"aliases":true,"alternateClassNames":true,"extends":true,"mixins":true,"requires":true,"uses":true,"members":true,"code_type":true},"files":[{"filename":"Ext.ux.TouchCalendar-min-debug.js","href":"Ext.ux.TouchCalendar-min-debug.html#Ext-ux-CalendarEventBarModel"}],"private":true,"aliases":{},"alternateClassNames":[],"extends":"Ext.data.Model","mixins":[],"requires":[],"uses":[],"members":[{"name":"fields","tagname":"cfg","owner":"Ext.ux.CalendarEventBarModel","id":"cfg-fields","meta":{"private":true}},{"name":"hasMany","tagname":"cfg","owner":"Ext.ux.CalendarEventBarModel","id":"cfg-hasMany","meta":{"private":true}},{"name":"","tagname":"property","owner":"Ext.ux.CalendarEventBarModel","id":"property-","meta":{}},{"name":"getFields","tagname":"method","owner":"Ext.ux.CalendarEventBarModel","id":"method-getFields","meta":{}},{"name":"getHasMany","tagname":"method","owner":"Ext.ux.CalendarEventBarModel","id":"method-getHasMany","meta":{}},{"name":"partial","tagname":"method","owner":"Ext.ux.CalendarEventBarModel","id":"method-partial","meta":{}},{"name":"setFields","tagname":"method","owner":"Ext.ux.CalendarEventBarModel","id":"method-setFields","meta":{}},{"name":"setHasMany","tagname":"method","owner":"Ext.ux.CalendarEventBarModel","id":"method-setHasMany","meta":{}}],"code_type":"ext_define","id":"class-Ext.ux.CalendarEventBarModel","component":false,"superclasses":["Ext.data.Model"],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Ext.data.Model<div class='subclass '><strong>Ext.ux.CalendarEventBarModel</strong></div></div><h4>Files</h4><div class='dependency'><a href='source/Ext.ux.TouchCalendar-min-debug.html#Ext-ux-CalendarEventBarModel' target='_blank'>Ext.ux.TouchCalendar-min-debug.js</a></div></pre><div class='doc-contents'><div class='rounded-box private-box'><p><strong>NOTE:</strong> This is a private utility class for internal use by the framework. Don't rely on its existence.</p></div><p>Ext.data.Model to store information about the EventBars to be generated from the\nbound data store</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-fields' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ux.CalendarEventBarModel'>Ext.ux.CalendarEventBarModel</span><br/><a href='source/Ext.ux.TouchCalendar-min-debug.html#Ext-ux-CalendarEventBarModel-cfg-fields' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ux.CalendarEventBarModel-cfg-fields' class='name expandable'>fields</a> : Array<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>[{name: 'EventID', type: 'string'}, {name: 'Date', type: 'date'}, {name: 'BarLength', type: 'int'}, {name: 'BarPosition', type: 'int'}, {name: 'Colour', type: 'string'}, 'Record']</code></p></div></div></div><div id='cfg-hasMany' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ux.CalendarEventBarModel'>Ext.ux.CalendarEventBarModel</span><br/><a href='source/Ext.ux.TouchCalendar-min-debug.html#Ext-ux-CalendarEventBarModel-cfg-hasMany' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ux.CalendarEventBarModel-cfg-hasMany' class='name expandable'>hasMany</a> : Array<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>[{model: 'Ext.ux.CalendarEventBarModel', name: 'linked'}]</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ux.CalendarEventBarModel'>Ext.ux.CalendarEventBarModel</span><br/><a href='source/Ext.ux.TouchCalendar-min-debug.html#Ext-ux-CalendarEventBarModel-property-' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ux.CalendarEventBarModel-property-' class='name expandable'></a> : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>@copyright     (c) 2012, by SwarmOnline.com\n@date          29th May 2012\n@version       0.1\n@documentation\n@website  ...</div><div class='long'><p>@copyright     (c) 2012, by SwarmOnline.com\n@date          29th May 2012\n@version       0.1\n@documentation\n@website        http://www.swarmonline.com</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-getFields' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ux.CalendarEventBarModel'>Ext.ux.CalendarEventBarModel</span><br/><a href='source/Ext.ux.TouchCalendar-min-debug.html#Ext-ux-CalendarEventBarModel-cfg-fields' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ux.CalendarEventBarModel-method-getFields' class='name expandable'>getFields</a>( <span class='pre'></span> ) : Array<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the value of fields. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/Ext.ux.CalendarEventBarModel-cfg-fields\" rel=\"Ext.ux.CalendarEventBarModel-cfg-fields\" class=\"docClass\">fields</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Array</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getHasMany' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ux.CalendarEventBarModel'>Ext.ux.CalendarEventBarModel</span><br/><a href='source/Ext.ux.TouchCalendar-min-debug.html#Ext-ux-CalendarEventBarModel-cfg-hasMany' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ux.CalendarEventBarModel-method-getHasMany' class='name expandable'>getHasMany</a>( <span class='pre'></span> ) : Array<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the value of hasMany. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/Ext.ux.CalendarEventBarModel-cfg-hasMany\" rel=\"Ext.ux.CalendarEventBarModel-cfg-hasMany\" class=\"docClass\">hasMany</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Array</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-partial' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ux.CalendarEventBarModel'>Ext.ux.CalendarEventBarModel</span><br/><a href='source/Ext.ux.TouchCalendar-min-debug.html#Ext-ux-CalendarEventBarModel-method-partial' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ux.CalendarEventBarModel-method-partial' class='name expandable'>partial</a>( <span class='pre'>region</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Figures out if the Event Bar passed in is within the boundaries of the current Date Cell (this) ...</div><div class='long'><p>Figures out if the Event Bar passed in is within the boundaries of the current Date Cell (this)</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>region</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setFields' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ux.CalendarEventBarModel'>Ext.ux.CalendarEventBarModel</span><br/><a href='source/Ext.ux.TouchCalendar-min-debug.html#Ext-ux-CalendarEventBarModel-cfg-fields' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ux.CalendarEventBarModel-method-setFields' class='name expandable'>setFields</a>( <span class='pre'>fields</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Sets the value of fields. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/Ext.ux.CalendarEventBarModel-cfg-fields\" rel=\"Ext.ux.CalendarEventBarModel-cfg-fields\" class=\"docClass\">fields</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>fields</span> : Array<div class='sub-desc'><p>The new value.</p>\n</div></li></ul></div></div></div><div id='method-setHasMany' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ux.CalendarEventBarModel'>Ext.ux.CalendarEventBarModel</span><br/><a href='source/Ext.ux.TouchCalendar-min-debug.html#Ext-ux-CalendarEventBarModel-cfg-hasMany' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ux.CalendarEventBarModel-method-setHasMany' class='name expandable'>setHasMany</a>( <span class='pre'>hasMany</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Sets the value of hasMany. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/Ext.ux.CalendarEventBarModel-cfg-hasMany\" rel=\"Ext.ux.CalendarEventBarModel-cfg-hasMany\" class=\"docClass\">hasMany</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>hasMany</span> : Array<div class='sub-desc'><p>The new value.</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{"private":true}});