/*
 * Ext.ux.TouchCalendarEvents
 */
Ext.define("Ext.ux.TouchCalendar",{extend:"Ext.carousel.Carousel",xtype:"calendar",enableSwipeNavigate:true,enableSimpleEvents:false,enableEventBars:false,viewConfig:{},defaultViewConfig:{viewMode:"MONTH",weekStart:1,bubbleEvents:["selectionchange"]},indicator:false,initialize:function(){this.viewConfig=Ext.applyIf(this.viewConfig||{},this.defaultViewConfig);this.viewConfig.currentDate=this.viewConfig.currentDate||this.viewConfig.value||new Date();this.viewMode=this.viewConfig.viewMode.toUpperCase();this.initViews();Ext.apply(this,{cls:"touch-calendar",activeItem:(this.enableSwipeNavigate?1:0),direction:"horizontal"});this.setIndicator(false);this.setActiveItem(1);this.on("selectionchange",this.onSelectionChange);this.on("activeitemchange",this.onActiveItemChange);if(this.enableSwipeNavigate){this.on(this.element,{drag:this.onDrag,dragThreshold:5,dragend:this.onDragEnd,direction:this.direction,scope:this});this.element.addCls(this.baseCls+"-"+this.direction)}},getViewConfig:function(b){var a=[];if(this.enableSimpleEvents){a.push(new Ext.ux.TouchCalendarSimpleEvents())}else{if(this.enableEventBars){a.push(new Ext.ux.TouchCalendarEvents())}}Ext.apply(this.viewConfig,{plugins:a,currentDate:b,onTableHeaderTap:Ext.bind(this.onTableHeaderTap,this)});return this.viewConfig},getViewDate:function(a,b){var d=(this.viewMode==="WEEK"?"DAY":this.viewMode.toUpperCase()),c=(this.viewMode==="WEEK"?(8*b):b);return Ext.Date.add(a,Ext.Date[d],c)},initViews:function(){var c=[];var f=Ext.Date.clone(this.viewConfig.currentDate),d=(this.enableSwipeNavigate?-1:0),a=(this.enableSwipeNavigate?1:0),b=[];var e=this.getViewDate(f,-1);c.push(new Ext.ux.TouchCalendarView(Ext.applyIf({currentDate:e},this.getViewConfig(e))));c.push(new Ext.ux.TouchCalendarView(this.getViewConfig(f)));e=this.getViewDate(f,1);c.push(new Ext.ux.TouchCalendarView(Ext.applyIf({currentDate:e},this.getViewConfig(e))));this.setItems(c);this.view=c[(this.enableSwipeNavigate?1:0)]},onTableHeaderTap:function(b,a){a=Ext.fly(a);if(a.hasCls(this.view.getPrevPeriodCls())||a.hasCls(this.view.getNextPeriodCls())){this[(a.hasCls(this.view.getPrevPeriodCls())?"previous":"next")]()}},setMode:function(a){this.viewMode=a.toUpperCase();this.viewConfig.viewMode=this.viewMode;this.getItems().each(function(b,c){b.currentDate=this.getViewDate(Ext.Date.clone(this.view.currentDate),c-1);b.setViewMode(a,true);b.refresh()},this)},getValue:function(){var a=this.view.getSelectionModel().selected;return(a.getCount()>0)?a.first().get("date"):null},setValue:function(a){this.view.setValue(a)},onActiveItemChange:function(b,a,f){if(this.enableSwipeNavigate){var c=this.getItems();var e=c.indexOf(a),h=c.indexOf(f),g=(e>h)?"forward":"backward";this.counter=(this.counter||0)+1;if(g==="forward"){this.remove(c.get(0));var d=new Ext.ux.TouchCalendarView(this.getViewConfig(this.getViewDate(a.currentDate,1)));this.add(d)}else{this.remove(c.get(c.getCount()-1));var d=new Ext.ux.TouchCalendarView(this.getViewConfig(this.getViewDate(a.currentDate,-1)));this.insert(0,d)}this.view=a}}});Ext.define("Ext.ux.TouchCalendarEventsBase",{extend:"Ext.Base",config:{calendar:null,plugin:null,eventsPerTimeSlot:{},eventSortDirection:"DESC"},constructor:function(a){this.initConfig(a);this.callParent(arguments)},generateEventBars:function(){this.eventBarStore=Ext.create("Ext.data.Store",{model:"Ext.ux.CalendarEventBarModel",data:[]});this.setEventsPerTimeSlot({});var d=this.getCalendar().getStore(),b=this.getCalendar().eventStore,a,c=0;d.each(function(f){var e=f.get("date"),g=e.getTime(),h=[];b.filterBy(Ext.bind(this.eventFilterFn,this,[g],true),this);b.sort(this.getPlugin().getStartEventField(),this.getEventSortDirection());b.each(function(j){c=c+1;var l=this.eventBarStore.findBy(function(m,n){return m.get("EventID")===j.internalId},this);if(l>-1){a=this.eventBarStore.getAt(l);while(a.linked().getCount()>0){a=a.linked().getAt(a.linked().getCount()-1)}if(e.getDay()===this.getCalendar().getWeekStart()){h.push(a.get("BarPosition"));var i=Ext.create("Ext.ux.CalendarEventBarModel",{EventID:j.internalId,Date:e,BarLength:1,BarPosition:a.get("BarPosition"),Colour:a.get("Colour"),Record:j});a.linked().add(i)}else{h.push(a.get("BarPosition"));a.set("BarLength",a.get("BarLength")+1)}}else{var k=this.getNextFreePosition(h);h.push(k);a=Ext.create("Ext.ux.CalendarEventBarModel",{EventID:j.internalId,Date:e,BarLength:1,BarPosition:k,Colour:this.getRandomColour(),Record:j});this.eventBarStore.add(a)}},this);b.clearFilter();if(c>0){this.getEventsPerTimeSlot()[e.getTime()]=c}c=0},this)},eventBarDoesWrap:function(a){var b=Ext.Date.add(a.get("Date"),Ext.Date.DAY,(a.get("BarLength")-1));return Ext.Date.clearTime(b,true).getTime()!==Ext.Date.clearTime(a.get("Record").get(this.getPlugin().getEndEventField()),true).getTime()},eventBarHasWrapped:function(a){return Ext.Date.clearTime(a.get("Date"),true).getTime()!==Ext.Date.clearTime(a.get("Record").get(this.getPlugin().getStartEventField()),true).getTime()},getNextFreePosition:function(a){var b=0;while(a.indexOf(b)>-1){b++}return b},createEventBar:function(c,b){var a=this.eventBarDoesWrap(c),f=this.eventBarHasWrapped(c),d=[this.getPlugin().getEventBarCls(),"e-"+c.get("EventID"),(a?" wrap-end":""),(f?" wrap-start":"")];var e=Ext.DomHelper.append(this.getPlugin().getEventWrapperEl(),{tag:"div",html:this.getPlugin().getEventBarTpl().apply(b.data),eventID:c.get("EventID"),cls:d.join(" ")},true);return e},getRandomColour:function(){return"#"+(Math.random()*16777215<<0).toString(16)}});Ext.define("Ext.ux.TouchCalendarDayEvents",{extend:"Ext.ux.TouchCalendarEventsBase",config:{eventSortDirection:"ASC"},eventFilterFn:function(b,c){var a=this.getRoundedTime(b.get(this.getPlugin().getStartEventField())).getTime(),d=this.getRoundedTime(b.get(this.getPlugin().getEndEventField())).getTime();return(a<=c)&&(d>=c)},renderEventBars:function(k){var f=this,a=k.getCount(),c=0,b;for(;c<a;c++){b=k.getAt(c);var g=b.data.Record,j=this.createEventBar(b,g),e=this.getEventBarWidth(b,50+10),d=this.getVerticalDayPosition(b),h=this.getHorizontalDayPosition(b,e),m=this.getEventBarHeight(b);j.setLeft(h);j.setTop(d-this.getCalendar().element.getY());j.setHeight(m);j.setWidth(e);j.addCls(g.get(this.getPlugin().getCssClassField()))}},getEventBarWidth:function(b,d){var c=this.getEventsPerTimeSlot()[b.get("Date").getTime()],a=this.getCalendar().element.getWidth();c=c||1;d=d||0;return Math.floor((a-d)/c)},getEventBarHeight:function(a){var b=this.getPlugin().getEventHeight();if(Ext.isNumeric(b)){return b}else{if(b==="duration"){return this.getEventBarHeightDuration(a)}else{return"auto"}}},getEventBarHeightDuration:function(a){var b=a.data.Record.get(this.getPlugin().getStartEventField()),d=a.data.Record.get(this.getPlugin().getEndEventField()),f=this.getRoundedTime(b),c=(d.getTime()-b.getTime())/1000/60,i=this.getCalendar().getDateCell(f),e=i.parent("tr",false),h=0;if(e){var g=i.getHeight(),j=g/30;h=c*j}return h},getVerticalDayPosition:function(a){var c=a.data.Record.get(this.getPlugin().getStartEventField()),i=this.getRoundedTime(c),k=(i.getHours()*2)+(i.getMinutes()===30?1:0),b=(c.getTime()-i.getTime())/1000/60,g=this.getCalendar().element.select("table.time-slot-table td").first(),e=0;if(g){var d=g.getHeight(),f=g.getY(),j=d/30,h=b*j;e=f+(k*d)+h}return e},getHorizontalDayPosition:function(c,a){var d=c.get("BarPosition"),b=50,e=this.getPlugin().getEventBarSpacing();return b+(d*a)+(d*e)},getRoundedTime:function(a){a=Ext.Date.clone(a);var b=a.getMinutes();a.setMinutes(b-(b%this.getCalendar().getDayTimeSlotSize()));a.setSeconds(0);a.setMilliseconds(0);return a}});Ext.define("Ext.ux.TouchCalendarMonthEvents",{extend:"Ext.ux.TouchCalendarEventsBase",eventFilterFn:function(b,c){var a=Ext.Date.clearTime(b.get(this.getPlugin().getStartEventField()),true).getTime(),d=Ext.Date.clearTime(b.get(this.getPlugin().getEndEventField()),true).getTime();return(a<=c)&&(d>=c)},weekFilterFn:function(a,b){return this.monthFilterFn.call(this,a,b)},renderEventBars:function(a){var b=this;a.each(function(e){var j=this.getPlugin().getEventRecord(e.get("EventID")),h=this.getCalendar().getDateCell(e.get("Date")),g=this.eventBarDoesWrap(e),t=this.eventBarHasWrapped(e);var l=Ext.DomHelper.append(this.getPlugin().getEventWrapperEl(),{tag:"div",style:{"background-color":j.get(this.getPlugin().colourField)},html:this.getPlugin().getEventBarTpl().apply(j.data),eventID:e.get("EventID"),cls:this.getPlugin().getEventBarCls()+" "+e.get("EventID")+(g?" wrap-end":"")+(t?" wrap-start":"")},true);if(this.allowEventDragAndDrop){new Ext.util.Draggable(l,{revert:true,onStart:function(z){var v=this,y=v.el.getAttribute("eventID"),w=b.getPlugin().getEventRecord(y),x=b.getEventBarRecord(y);v.el.setWidth(v.el.getWidth()/x.get("BarLength"));v.el.setLeft(z.startX-(v.el.getWidth()/2));b.calendar.element.select("div."+w.internalId).each(function(A){if(A.dom!==v.el.dom){A.hide()}},this);Ext.util.Draggable.prototype.onStart.apply(this,arguments);b.calendar.fireEvent("eventdragstart",v,w,z);return true}})}var s=this.getCalendar().element.select("thead").first().getHeight();var r=this.getCalendar().element.select("tbody").first().getHeight();var n=this.getCalendar().element.select("tbody tr").getCount();var d=r/n;var p=this.getCalendar().getStore().findBy(function(v){return v.get("date").getTime()===Ext.Date.clearTime(e.get("Date"),true).getTime()},this);var o=Math.floor(p/7)+1;var q=s+(d*o);var u=e.get("BarPosition"),k=e.get("BarLength"),c=(this.getCalendar().element.getWidth()/7)*h.dom.cellIndex,i=h.getWidth(),m=l.getHeight(),f=this.getPlugin().getEventBarSpacing();l.setLeft(c+(t?0:f));l.setTop(q-m-(u*m+(u*f)+f));l.setWidth((i*k)-(f*(g?(g&&t?0:1):2)));if(e.linked().getCount()>0){this.renderEventBars(e.linked())}},this)}});Ext.define("Ext.ux.TouchCalendarWeekEvents",{extend:"Ext.ux.TouchCalendarMonthEvents"});Ext.define("Ext.ux.TouchCalendarEvents",{extend:"Ext.mixin.Observable",config:{viewModeProcessor:null,eventBarTpl:"{title}",eventBarCls:"event-bar",colourField:"colour",cssClassField:"css",eventHeight:"duration",eventWidth:"auto",startEventField:"start",endEventField:"end",eventWrapperCls:"event-wrapper",eventBarSelectedCls:"event-bar-selected",cellHoverCls:"date-cell-hover",autoUpdateEvent:true,allowEventDragAndDrop:false,eventBarSpacing:1,eventWrapperEl:null},init:function(b){var a=this;this.calendar=b;this.calendar.eventsPlugin=this;this.calendar.refresh=Ext.Function.createSequence(this.calendar.refresh,this.refreshEvents,this);this.calendar.setViewMode=this.createPreSequence(this.calendar.setViewMode,this.onViewModeUpdate,this);this.calendar.on("resize",this.refreshEvents,this);this.setViewModeProcessor(Ext.create("Ext.ux.TouchCalendarDayEvents",{calendar:this.calendar,plugin:this}))},createPreSequence:function(b,c,a){if(!c){return b}else{return function(){c.apply(a||this,arguments);var d=b.apply(this,arguments);return d}}},onViewModeUpdate:function(a){this.setViewModeProcessor(Ext.create(this.getViewModeProcessorClass(a),{calendar:this.calendar,plugin:this}))},getViewModeProcessorClass:function(a){var b="";switch(a.toLowerCase()){case"month":b="Ext.ux.TouchCalendarMonthEvents";break;case"week":b="Ext.ux.TouchCalendarWeekEvents";break;case"day":b="Ext.ux.TouchCalendarDayEvents";break}return b},refreshEvents:function(){this.removeEvents();this.getViewModeProcessor().generateEventBars();this.createEventWrapper();if(this.getAllowEventDragAndDrop()){this.createDroppableRegion()}},createDroppableRegion:function(){var b=this;var a=0},onEventDropDeactivate:function(f,a,d,c){if(a.el.hasCls(this.eventBarCls)){var b=this.getEventRecord(a.el.getAttribute("eventID"));this.calendar.element.select("div."+b.internalId).each(function(e){e.show()},this)}},onEventDrop:function(f,a,d,c){var b=false;if(a.el.hasCls(this.eventBarCls)){this.calendar.all.each(function(e){var j=e.getPageBox(true);var k=a.el.getPageBox(true);if(j.partial(k)&&this.calendar.fireEvent("beforeeventdrop",a,f,g,d)){b=true;var g=this.getEventRecord(a.el.getAttribute("eventID")),h=this.calendar.getCellDate(e),i=this.getDaysDifference(g.get(this.getStartEventField()),h);if(this.getAutoUpdateEvent()){g.set(this.getStartEventField(),h);g.set(this.getEndEventField(),g.get(this.getEndEventField()).add(Date.DAY,i))}this.refreshEvents();this.calendar.fireEvent("eventdrop",a,f,g,d);return}},this);this.calendar.all.removeCls(this.getCellHoverCls());if(!b){a.setOffset(a.startOffset,true)}}},onEventDragStart:function(a,f){var d=a.el.getAttribute("eventID"),b=this.getEventRecord(d),c=this.getEventBarRecord(d);a.el.setWidth(a.el.getWidth()/c.get("BarLength"));a.updateBoundary(true);this.calendar.element.select("div."+b.internalId).each(function(e){if(e.dom!==a.el.dom){e.hide()}},this);this.calendar.fireEvent("eventdragstart",a,b,f)},createEventWrapper:function(){if(this.calendar.rendered&&!this.getEventWrapperEl()){this.setEventWrapperEl(Ext.DomHelper.append(this.getEventsWrapperContainer(),{tag:"div",cls:this.getEventWrapperCls()},true));this.getEventWrapperEl().on("tap",this.onEventWrapperTap,this,{delegate:"div."+this.getEventBarCls()});this.getViewModeProcessor().renderEventBars(this.getViewModeProcessor().eventBarStore)}else{this.calendar.on("painted",this.createEventWrapper,this)}},onEventWrapperTap:function(g,f){g.stopPropagation();var d=g.getTarget("div."+this.getEventBarCls());if(d){var c=d.getAttribute("eventID"),b=Ext.fly(d);if(c){var a=this.getEventRecord(c);this.deselectEvents();b.addCls(this.getEventBarSelectedCls());this.calendar.fireEvent("eventtap",a,g)}}},getEventsWrapperContainer:function(){return this.calendar.element.select("thead th").first()||this.calendar.element.select("tr td").first()},getEventRecord:function(a){var b=this.calendar.eventStore.findBy(function(c){return c.internalId===a},this);return this.calendar.eventStore.getAt(b)},getEventBarRecord:function(a){var b=this.eventBarStore.findBy(function(c){return c.get("EventID")===a},this);return this.eventBarStore.getAt(b)},deselectEvents:function(){this.calendar.element.select("."+this.getEventBarSelectedCls()).removeCls(this.getEventBarSelectedCls())},getDaysDifference:function(b,a){b=b.clearTime(true).getTime();a=a.clearTime(true).getTime();return(a-b)/1000/60/60/24},removeEvents:function(){if(this.getEventWrapperEl()){this.getEventWrapperEl().dom.innerHTML="";this.getEventWrapperEl().destroy();this.setEventWrapperEl(null)}if(this.eventBarStore){this.eventBarStore.remove(this.eventBarStore.getRange());this.eventBarStore=null}if(this.droppable){this.droppable=null}},applyEventBarTpl:function(a){if(Ext.isString(a)||Ext.isArray(a)){a=Ext.create("Ext.XTemplate",a)}return a}});Ext.define("Ext.ux.CalendarEventBarModel",{extend:"Ext.data.Model",config:{fields:[{name:"EventID",type:"string"},{name:"Date",type:"date"},{name:"BarLength",type:"int"},{name:"BarPosition",type:"int"},{name:"Colour",type:"string"},"Record"],hasMany:[{model:"Ext.ux.CalendarEventBarModel",name:"linked"}]}});Ext.define("Ext.util.Region.partial",{extend:"Ext.util.Region",partial:function(g){var f=this,e=g.right-g.left,c=g.bottom-g.top,b=f.right-f.left,a=f.bottom-f.top,d=g.top>f.top&&g.top<f.bottom;horizontalValid=g.left>f.left&&g.left<f.right;return horizontalValid&&d}});