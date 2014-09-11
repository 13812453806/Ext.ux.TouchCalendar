Ext.data.JsonP.Ext_ux_TouchCalendarDayEvents({"tagname":"class","name":"Ext.ux.TouchCalendarDayEvents","autodetected":{"aliases":true,"alternateClassNames":true,"extends":true,"mixins":true,"requires":true,"uses":true,"members":true,"code_type":true},"files":[{"filename":"Ext.ux.TouchCalendar-min-debug.js","href":"Ext.ux.TouchCalendar-min-debug.html#Ext-ux-TouchCalendarDayEvents"}],"aliases":{},"alternateClassNames":[],"extends":"Ext.ux.TouchCalendarEventsBase","mixins":[],"requires":[],"uses":[],"members":[{"name":"calendar","tagname":"cfg","owner":"Ext.ux.TouchCalendarEventsBase","id":"cfg-calendar","meta":{"private":true}},{"name":"eventSortDirection","tagname":"cfg","owner":"Ext.ux.TouchCalendarDayEvents","id":"cfg-eventSortDirection","meta":{}},{"name":"eventsPerTimeSlot","tagname":"cfg","owner":"Ext.ux.TouchCalendarEventsBase","id":"cfg-eventsPerTimeSlot","meta":{"private":true}},{"name":"plugin","tagname":"cfg","owner":"Ext.ux.TouchCalendarEventsBase","id":"cfg-plugin","meta":{"private":true}},{"name":"eventBarStore","tagname":"property","owner":"Ext.ux.TouchCalendarEventsBase","id":"property-eventBarStore","meta":{"private":true}},{"name":"constructor","tagname":"method","owner":"Ext.ux.TouchCalendarEventsBase","id":"method-constructor","meta":{}},{"name":"createEventBar","tagname":"method","owner":"Ext.ux.TouchCalendarEventsBase","id":"method-createEventBar","meta":{"private":true}},{"name":"eventBarDoesWrap","tagname":"method","owner":"Ext.ux.TouchCalendarEventsBase","id":"method-eventBarDoesWrap","meta":{"private":true}},{"name":"eventBarHasWrapped","tagname":"method","owner":"Ext.ux.TouchCalendarEventsBase","id":"method-eventBarHasWrapped","meta":{"private":true}},{"name":"eventFilterFn","tagname":"method","owner":"Ext.ux.TouchCalendarDayEvents","id":"method-eventFilterFn","meta":{"private":true}},{"name":"generateEventBars","tagname":"method","owner":"Ext.ux.TouchCalendarEventsBase","id":"method-generateEventBars","meta":{"private":true}},{"name":"getCalendar","tagname":"method","owner":"Ext.ux.TouchCalendarEventsBase","id":"method-getCalendar","meta":{}},{"name":"getEventBarHeight","tagname":"method","owner":"Ext.ux.TouchCalendarDayEvents","id":"method-getEventBarHeight","meta":{"private":true}},{"name":"getEventBarHeightDuration","tagname":"method","owner":"Ext.ux.TouchCalendarDayEvents","id":"method-getEventBarHeightDuration","meta":{"private":true}},{"name":"getEventBarWidth","tagname":"method","owner":"Ext.ux.TouchCalendarDayEvents","id":"method-getEventBarWidth","meta":{"private":true}},{"name":"getEventSortDirection","tagname":"method","owner":"Ext.ux.TouchCalendarDayEvents","id":"method-getEventSortDirection","meta":{}},{"name":"getEventsPerTimeSlot","tagname":"method","owner":"Ext.ux.TouchCalendarEventsBase","id":"method-getEventsPerTimeSlot","meta":{"private":true}},{"name":"getHorizontalDayPosition","tagname":"method","owner":"Ext.ux.TouchCalendarDayEvents","id":"method-getHorizontalDayPosition","meta":{"private":true}},{"name":"getNextFreePosition","tagname":"method","owner":"Ext.ux.TouchCalendarEventsBase","id":"method-getNextFreePosition","meta":{"private":true}},{"name":"getPlugin","tagname":"method","owner":"Ext.ux.TouchCalendarEventsBase","id":"method-getPlugin","meta":{}},{"name":"getRandomColour","tagname":"method","owner":"Ext.ux.TouchCalendarEventsBase","id":"method-getRandomColour","meta":{"private":true}},{"name":"getRoundedTime","tagname":"method","owner":"Ext.ux.TouchCalendarDayEvents","id":"method-getRoundedTime","meta":{"private":true}},{"name":"getVerticalDayPosition","tagname":"method","owner":"Ext.ux.TouchCalendarDayEvents","id":"method-getVerticalDayPosition","meta":{"private":true}},{"name":"renderEventBars","tagname":"method","owner":"Ext.ux.TouchCalendarDayEvents","id":"method-renderEventBars","meta":{"private":true}},{"name":"setCalendar","tagname":"method","owner":"Ext.ux.TouchCalendarEventsBase","id":"method-setCalendar","meta":{}},{"name":"setEventSortDirection","tagname":"method","owner":"Ext.ux.TouchCalendarDayEvents","id":"method-setEventSortDirection","meta":{}},{"name":"setEventsPerTimeSlot","tagname":"method","owner":"Ext.ux.TouchCalendarEventsBase","id":"method-setEventsPerTimeSlot","meta":{"private":true}},{"name":"setPlugin","tagname":"method","owner":"Ext.ux.TouchCalendarEventsBase","id":"method-setPlugin","meta":{}}],"code_type":"ext_define","id":"class-Ext.ux.TouchCalendarDayEvents","component":false,"superclasses":["Ext.Base","Ext.ux.TouchCalendarEventsBase"],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Ext.Base<div class='subclass '><a href='#!/api/Ext.ux.TouchCalendarEventsBase' rel='Ext.ux.TouchCalendarEventsBase' class='docClass'>Ext.ux.TouchCalendarEventsBase</a><div class='subclass '><strong>Ext.ux.TouchCalendarDayEvents</strong></div></div></div><h4>Files</h4><div class='dependency'><a href='source/Ext.ux.TouchCalendar-min-debug.html#Ext-ux-TouchCalendarDayEvents' target='_blank'>Ext.ux.TouchCalendar-min-debug.js</a></div></pre><div class='doc-contents'><p><a href=\"#!/api/Ext.ux.TouchCalendarDayEvents\" rel=\"Ext.ux.TouchCalendarDayEvents\" class=\"docClass\">Ext.ux.TouchCalendarDayEvents</a></p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-calendar' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.ux.TouchCalendarEventsBase' rel='Ext.ux.TouchCalendarEventsBase' class='defined-in docClass'>Ext.ux.TouchCalendarEventsBase</a><br/><a href='source/Ext.ux.TouchCalendar-min-debug.html#Ext-ux-TouchCalendarEventsBase-cfg-calendar' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ux.TouchCalendarEventsBase-cfg-calendar' class='name expandable'>calendar</a> : Object<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div><div id='cfg-eventSortDirection' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ux.TouchCalendarDayEvents'>Ext.ux.TouchCalendarDayEvents</span><br/><a href='source/Ext.ux.TouchCalendar-min-debug.html#Ext-ux-TouchCalendarDayEvents-cfg-eventSortDirection' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ux.TouchCalendarDayEvents-cfg-eventSortDirection' class='name expandable'>eventSortDirection</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Sort the generated events early to late so they appear Left to Right, early to late. ...</div><div class='long'><p>Sort the generated events early to late so they appear Left to Right, early to late.</p>\n<p>Defaults to: <code>'ASC'</code></p><p>Overrides: <a href=\"#!/api/Ext.ux.TouchCalendarEventsBase-cfg-eventSortDirection\" rel=\"Ext.ux.TouchCalendarEventsBase-cfg-eventSortDirection\" class=\"docClass\">Ext.ux.TouchCalendarEventsBase.eventSortDirection</a></p></div></div></div><div id='cfg-eventsPerTimeSlot' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.ux.TouchCalendarEventsBase' rel='Ext.ux.TouchCalendarEventsBase' class='defined-in docClass'>Ext.ux.TouchCalendarEventsBase</a><br/><a href='source/Ext.ux.TouchCalendar-min-debug.html#Ext-ux-TouchCalendarEventsBase-cfg-eventsPerTimeSlot' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ux.TouchCalendarEventsBase-cfg-eventsPerTimeSlot' class='name expandable'>eventsPerTimeSlot</a> : Object<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>{Object} eventsPerTimeSlot Tracks the number of events that occur in specified time slots so it can be used to calcul...</div><div class='long'><p>{Object} eventsPerTimeSlot Tracks the number of events that occur in specified time slots so it can be used to calculate widths\nwhen rendering. The counts are only stored if 1 or more events exist. The numeric value of the time slot's date (i.e. date.getTime()) is used\nas the key with the count as the value.</p>\n<p>Defaults to: <code>{}</code></p></div></div></div><div id='cfg-plugin' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.ux.TouchCalendarEventsBase' rel='Ext.ux.TouchCalendarEventsBase' class='defined-in docClass'>Ext.ux.TouchCalendarEventsBase</a><br/><a href='source/Ext.ux.TouchCalendar-min-debug.html#Ext-ux-TouchCalendarEventsBase-cfg-plugin' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ux.TouchCalendarEventsBase-cfg-plugin' class='name expandable'>plugin</a> : Object<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-eventBarStore' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.ux.TouchCalendarEventsBase' rel='Ext.ux.TouchCalendarEventsBase' class='defined-in docClass'>Ext.ux.TouchCalendarEventsBase</a><br/><a href='source/Ext.ux.TouchCalendar-min-debug.html#Ext-ux-TouchCalendarEventsBase-property-eventBarStore' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ux.TouchCalendarEventsBase-property-eventBarStore' class='name expandable'>eventBarStore</a> : Ext.data.Store<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Store to store the Event Bar definitions. ...</div><div class='long'><p>Store to store the Event Bar definitions. It is defined\nwith the <a href=\"#!/api/Ext.ux.CalendarEventBarModel\" rel=\"Ext.ux.CalendarEventBarModel\" class=\"docClass\">Ext.ux.CalendarEventBarModel</a> model.</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.ux.TouchCalendarEventsBase' rel='Ext.ux.TouchCalendarEventsBase' class='defined-in docClass'>Ext.ux.TouchCalendarEventsBase</a><br/><a href='source/Ext.ux.TouchCalendar-min-debug.html#Ext-ux-TouchCalendarEventsBase-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/Ext.ux.TouchCalendarEventsBase-method-constructor' class='name expandable'>Ext.ux.TouchCalendarDayEvents</a>( <span class='pre'>config</span> ) : <a href=\"#!/api/Ext.ux.TouchCalendarEventsBase\" rel=\"Ext.ux.TouchCalendarEventsBase\" class=\"docClass\">Ext.ux.TouchCalendarEventsBase</a><span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>config</span> : Object<div class='sub-desc'></div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ext.ux.TouchCalendarEventsBase\" rel=\"Ext.ux.TouchCalendarEventsBase\" class=\"docClass\">Ext.ux.TouchCalendarEventsBase</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-createEventBar' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.ux.TouchCalendarEventsBase' rel='Ext.ux.TouchCalendarEventsBase' class='defined-in docClass'>Ext.ux.TouchCalendarEventsBase</a><br/><a href='source/Ext.ux.TouchCalendar-min-debug.html#Ext-ux-TouchCalendarEventsBase-method-createEventBar' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ux.TouchCalendarEventsBase-method-createEventBar' class='name expandable'>createEventBar</a>( <span class='pre'>record, eventRecord</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>record</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>eventRecord</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-eventBarDoesWrap' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.ux.TouchCalendarEventsBase' rel='Ext.ux.TouchCalendarEventsBase' class='defined-in docClass'>Ext.ux.TouchCalendarEventsBase</a><br/><a href='source/Ext.ux.TouchCalendar-min-debug.html#Ext-ux-TouchCalendarEventsBase-method-eventBarDoesWrap' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ux.TouchCalendarEventsBase-method-eventBarDoesWrap' class='name expandable'>eventBarDoesWrap</a>( <span class='pre'>r</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Returns true if the specified EventBar record will wrap and so will need square ends\nCompares the calculated date tha...</div><div class='long'><p>Returns true if the specified EventBar record will wrap and so will need square ends\nCompares the calculated date that the bar will end on and the actual end date of the event. If they aren't the same\nthe bar will wrap to the next row</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>r</span> : <a href=\"#!/api/Ext.ux.CalendarEventBarModel\" rel=\"Ext.ux.CalendarEventBarModel\" class=\"docClass\">Ext.ux.CalendarEventBarModel</a><div class='sub-desc'><p>The EventBar model instance to figure out if it wraps to the next row of dates</p>\n</div></li></ul></div></div></div><div id='method-eventBarHasWrapped' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.ux.TouchCalendarEventsBase' rel='Ext.ux.TouchCalendarEventsBase' class='defined-in docClass'>Ext.ux.TouchCalendarEventsBase</a><br/><a href='source/Ext.ux.TouchCalendar-min-debug.html#Ext-ux-TouchCalendarEventsBase-method-eventBarHasWrapped' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ux.TouchCalendarEventsBase-method-eventBarHasWrapped' class='name expandable'>eventBarHasWrapped</a>( <span class='pre'>r</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Returns true if the specified EventBar record has been wrapped from the row before. ...</div><div class='long'><p>Returns true if the specified EventBar record has been wrapped from the row before.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>r</span> : <a href=\"#!/api/Ext.ux.CalendarEventBarModel\" rel=\"Ext.ux.CalendarEventBarModel\" class=\"docClass\">Ext.ux.CalendarEventBarModel</a><div class='sub-desc'><p>The EventBar model instance to figure out if it has wrapped from the previous row of dates</p>\n</div></li></ul></div></div></div><div id='method-eventFilterFn' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ux.TouchCalendarDayEvents'>Ext.ux.TouchCalendarDayEvents</span><br/><a href='source/Ext.ux.TouchCalendar-min-debug.html#Ext-ux-TouchCalendarDayEvents-method-eventFilterFn' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ux.TouchCalendarDayEvents-method-eventFilterFn' class='name expandable'>eventFilterFn</a>( <span class='pre'>record, id, currentDateTime</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>record</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>id</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>currentDateTime</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-generateEventBars' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.ux.TouchCalendarEventsBase' rel='Ext.ux.TouchCalendarEventsBase' class='defined-in docClass'>Ext.ux.TouchCalendarEventsBase</a><br/><a href='source/Ext.ux.TouchCalendar-min-debug.html#Ext-ux-TouchCalendarEventsBase-method-generateEventBars' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ux.TouchCalendarEventsBase-method-generateEventBars' class='name expandable'>generateEventBars</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Processes the Events store and generates the EventBar records needed to create the markup ...</div><div class='long'><p>Processes the Events store and generates the EventBar records needed to create the markup</p>\n</div></div></div><div id='method-getCalendar' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.ux.TouchCalendarEventsBase' rel='Ext.ux.TouchCalendarEventsBase' class='defined-in docClass'>Ext.ux.TouchCalendarEventsBase</a><br/><a href='source/Ext.ux.TouchCalendar-min-debug.html#Ext-ux-TouchCalendarEventsBase-cfg-calendar' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ux.TouchCalendarEventsBase-method-getCalendar' class='name expandable'>getCalendar</a>( <span class='pre'></span> ) : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the value of calendar. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/Ext.ux.TouchCalendarEventsBase-cfg-calendar\" rel=\"Ext.ux.TouchCalendarEventsBase-cfg-calendar\" class=\"docClass\">calendar</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getEventBarHeight' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ux.TouchCalendarDayEvents'>Ext.ux.TouchCalendarDayEvents</span><br/><a href='source/Ext.ux.TouchCalendar-min-debug.html#Ext-ux-TouchCalendarDayEvents-method-getEventBarHeight' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ux.TouchCalendarDayEvents-method-getEventBarHeight' class='name expandable'>getEventBarHeight</a>( <span class='pre'>event</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>event</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-getEventBarHeightDuration' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ux.TouchCalendarDayEvents'>Ext.ux.TouchCalendarDayEvents</span><br/><a href='source/Ext.ux.TouchCalendar-min-debug.html#Ext-ux-TouchCalendarDayEvents-method-getEventBarHeightDuration' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ux.TouchCalendarDayEvents-method-getEventBarHeightDuration' class='name expandable'>getEventBarHeightDuration</a>( <span class='pre'>event</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>event</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-getEventBarWidth' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ux.TouchCalendarDayEvents'>Ext.ux.TouchCalendarDayEvents</span><br/><a href='source/Ext.ux.TouchCalendar-min-debug.html#Ext-ux-TouchCalendarDayEvents-method-getEventBarWidth' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ux.TouchCalendarDayEvents-method-getEventBarWidth' class='name expandable'>getEventBarWidth</a>( <span class='pre'>event, offset</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>event</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>offset</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-getEventSortDirection' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ux.TouchCalendarDayEvents'>Ext.ux.TouchCalendarDayEvents</span><br/><a href='source/Ext.ux.TouchCalendar-min-debug.html#Ext-ux-TouchCalendarDayEvents-cfg-eventSortDirection' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ux.TouchCalendarDayEvents-method-getEventSortDirection' class='name expandable'>getEventSortDirection</a>( <span class='pre'></span> ) : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the value of eventSortDirection. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/Ext.ux.TouchCalendarDayEvents-cfg-eventSortDirection\" rel=\"Ext.ux.TouchCalendarDayEvents-cfg-eventSortDirection\" class=\"docClass\">eventSortDirection</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul><p>Overrides: <a href=\"#!/api/Ext.ux.TouchCalendarEventsBase-method-getEventSortDirection\" rel=\"Ext.ux.TouchCalendarEventsBase-method-getEventSortDirection\" class=\"docClass\">Ext.ux.TouchCalendarEventsBase.getEventSortDirection</a></p></div></div></div><div id='method-getEventsPerTimeSlot' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.ux.TouchCalendarEventsBase' rel='Ext.ux.TouchCalendarEventsBase' class='defined-in docClass'>Ext.ux.TouchCalendarEventsBase</a><br/><a href='source/Ext.ux.TouchCalendar-min-debug.html#Ext-ux-TouchCalendarEventsBase-cfg-eventsPerTimeSlot' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ux.TouchCalendarEventsBase-method-getEventsPerTimeSlot' class='name expandable'>getEventsPerTimeSlot</a>( <span class='pre'></span> ) : Object<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Returns the value of eventsPerTimeSlot. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/Ext.ux.TouchCalendarEventsBase-cfg-eventsPerTimeSlot\" rel=\"Ext.ux.TouchCalendarEventsBase-cfg-eventsPerTimeSlot\" class=\"docClass\">eventsPerTimeSlot</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getHorizontalDayPosition' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ux.TouchCalendarDayEvents'>Ext.ux.TouchCalendarDayEvents</span><br/><a href='source/Ext.ux.TouchCalendar-min-debug.html#Ext-ux-TouchCalendarDayEvents-method-getHorizontalDayPosition' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ux.TouchCalendarDayEvents-method-getHorizontalDayPosition' class='name expandable'>getHorizontalDayPosition</a>( <span class='pre'>event, eventBarWidth</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>event</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>eventBarWidth</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-getNextFreePosition' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.ux.TouchCalendarEventsBase' rel='Ext.ux.TouchCalendarEventsBase' class='defined-in docClass'>Ext.ux.TouchCalendarEventsBase</a><br/><a href='source/Ext.ux.TouchCalendar-min-debug.html#Ext-ux-TouchCalendarEventsBase-method-getNextFreePosition' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ux.TouchCalendarEventsBase-method-getNextFreePosition' class='name expandable'>getNextFreePosition</a>( <span class='pre'>datePositions</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Returns the first index number that isn't in the specified array ...</div><div class='long'><p>Returns the first index number that isn't in the specified array</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>datePositions</span> : Aarray[Numbers]<div class='sub-desc'><p>An array of numbers representing the current date cell's taken positions</p>\n</div></li></ul></div></div></div><div id='method-getPlugin' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.ux.TouchCalendarEventsBase' rel='Ext.ux.TouchCalendarEventsBase' class='defined-in docClass'>Ext.ux.TouchCalendarEventsBase</a><br/><a href='source/Ext.ux.TouchCalendar-min-debug.html#Ext-ux-TouchCalendarEventsBase-cfg-plugin' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ux.TouchCalendarEventsBase-method-getPlugin' class='name expandable'>getPlugin</a>( <span class='pre'></span> ) : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the value of plugin. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/Ext.ux.TouchCalendarEventsBase-cfg-plugin\" rel=\"Ext.ux.TouchCalendarEventsBase-cfg-plugin\" class=\"docClass\">plugin</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getRandomColour' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.ux.TouchCalendarEventsBase' rel='Ext.ux.TouchCalendarEventsBase' class='defined-in docClass'>Ext.ux.TouchCalendarEventsBase</a><br/><a href='source/Ext.ux.TouchCalendar-min-debug.html#Ext-ux-TouchCalendarEventsBase-method-getRandomColour' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ux.TouchCalendarEventsBase-method-getRandomColour' class='name expandable'>getRandomColour</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-getRoundedTime' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ux.TouchCalendarDayEvents'>Ext.ux.TouchCalendarDayEvents</span><br/><a href='source/Ext.ux.TouchCalendar-min-debug.html#Ext-ux-TouchCalendarDayEvents-method-getRoundedTime' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ux.TouchCalendarDayEvents-method-getRoundedTime' class='name expandable'>getRoundedTime</a>( <span class='pre'>date</span> ) : Date<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Returns the specified date rounded to the nearest minute block. ...</div><div class='long'><p>Returns the specified date rounded to the nearest minute block.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>date</span> : Date<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Date</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getVerticalDayPosition' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ux.TouchCalendarDayEvents'>Ext.ux.TouchCalendarDayEvents</span><br/><a href='source/Ext.ux.TouchCalendar-min-debug.html#Ext-ux-TouchCalendarDayEvents-method-getVerticalDayPosition' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ux.TouchCalendarDayEvents-method-getVerticalDayPosition' class='name expandable'>getVerticalDayPosition</a>( <span class='pre'>event</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>event</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-renderEventBars' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ux.TouchCalendarDayEvents'>Ext.ux.TouchCalendarDayEvents</span><br/><a href='source/Ext.ux.TouchCalendar-min-debug.html#Ext-ux-TouchCalendarDayEvents-method-renderEventBars' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ux.TouchCalendarDayEvents-method-renderEventBars' class='name expandable'>renderEventBars</a>( <span class='pre'>store</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>store</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-setCalendar' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.ux.TouchCalendarEventsBase' rel='Ext.ux.TouchCalendarEventsBase' class='defined-in docClass'>Ext.ux.TouchCalendarEventsBase</a><br/><a href='source/Ext.ux.TouchCalendar-min-debug.html#Ext-ux-TouchCalendarEventsBase-cfg-calendar' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ux.TouchCalendarEventsBase-method-setCalendar' class='name expandable'>setCalendar</a>( <span class='pre'>calendar</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Sets the value of calendar. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/Ext.ux.TouchCalendarEventsBase-cfg-calendar\" rel=\"Ext.ux.TouchCalendarEventsBase-cfg-calendar\" class=\"docClass\">calendar</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>calendar</span> : Object<div class='sub-desc'><p>The new value.</p>\n</div></li></ul></div></div></div><div id='method-setEventSortDirection' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ux.TouchCalendarDayEvents'>Ext.ux.TouchCalendarDayEvents</span><br/><a href='source/Ext.ux.TouchCalendar-min-debug.html#Ext-ux-TouchCalendarDayEvents-cfg-eventSortDirection' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ux.TouchCalendarDayEvents-method-setEventSortDirection' class='name expandable'>setEventSortDirection</a>( <span class='pre'>eventSortDirection</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Sets the value of eventSortDirection. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/Ext.ux.TouchCalendarDayEvents-cfg-eventSortDirection\" rel=\"Ext.ux.TouchCalendarDayEvents-cfg-eventSortDirection\" class=\"docClass\">eventSortDirection</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>eventSortDirection</span> : String<div class='sub-desc'><p>The new value.</p>\n</div></li></ul><p>Overrides: <a href=\"#!/api/Ext.ux.TouchCalendarEventsBase-method-setEventSortDirection\" rel=\"Ext.ux.TouchCalendarEventsBase-method-setEventSortDirection\" class=\"docClass\">Ext.ux.TouchCalendarEventsBase.setEventSortDirection</a></p></div></div></div><div id='method-setEventsPerTimeSlot' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.ux.TouchCalendarEventsBase' rel='Ext.ux.TouchCalendarEventsBase' class='defined-in docClass'>Ext.ux.TouchCalendarEventsBase</a><br/><a href='source/Ext.ux.TouchCalendar-min-debug.html#Ext-ux-TouchCalendarEventsBase-cfg-eventsPerTimeSlot' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ux.TouchCalendarEventsBase-method-setEventsPerTimeSlot' class='name expandable'>setEventsPerTimeSlot</a>( <span class='pre'>eventsPerTimeSlot</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Sets the value of eventsPerTimeSlot. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/Ext.ux.TouchCalendarEventsBase-cfg-eventsPerTimeSlot\" rel=\"Ext.ux.TouchCalendarEventsBase-cfg-eventsPerTimeSlot\" class=\"docClass\">eventsPerTimeSlot</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>eventsPerTimeSlot</span> : Object<div class='sub-desc'><p>The new value.</p>\n</div></li></ul></div></div></div><div id='method-setPlugin' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.ux.TouchCalendarEventsBase' rel='Ext.ux.TouchCalendarEventsBase' class='defined-in docClass'>Ext.ux.TouchCalendarEventsBase</a><br/><a href='source/Ext.ux.TouchCalendar-min-debug.html#Ext-ux-TouchCalendarEventsBase-cfg-plugin' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ux.TouchCalendarEventsBase-method-setPlugin' class='name expandable'>setPlugin</a>( <span class='pre'>plugin</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Sets the value of plugin. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/Ext.ux.TouchCalendarEventsBase-cfg-plugin\" rel=\"Ext.ux.TouchCalendarEventsBase-cfg-plugin\" class=\"docClass\">plugin</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>plugin</span> : Object<div class='sub-desc'><p>The new value.</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});