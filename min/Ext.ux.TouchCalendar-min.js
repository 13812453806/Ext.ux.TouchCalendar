/*
 * Ext.ux.TouchCalendar
 */
Ext.define("Ext.ux.TouchCalendar",{extend:"Ext.carousel.Carousel",xtype:"calendar",config:{viewMode:"month",enableSwipeNavigate:true,enableSimpleEvents:false,enableEventBars:false,viewConfig:{}},defaultViewConfig:{viewMode:"MONTH",weekStart:1,bubbleEvents:["selectionchange"]},indicator:false,initialize:function(){this.viewConfig=Ext.applyIf(this.viewConfig||{},this.defaultViewConfig);this.viewConfig.currentDate=this.viewConfig.currentDate||this.viewConfig.value||new Date();this.setViewMode(this.viewConfig.viewMode.toUpperCase());this.initViews();Ext.apply(this,{cls:"touch-calendar",activeItem:(this.getEnableSwipeNavigate()?1:0),direction:"horizontal"});this.setIndicator(false);this.setActiveItem(1);this.on("selectionchange",this.onSelectionChange);this.on("activeitemchange",this.onActiveItemChange);if(this.getEnableSwipeNavigate()){this.on(this.element,{drag:this.onDrag,dragThreshold:5,dragend:this.onDragEnd,direction:this.direction,scope:this});this.element.addCls(this.baseCls+"-"+this.direction)}},getViewConfig:function(c){var a=[];if(this.getEnableSimpleEvents()){var b=Ext.isObject(this.getEnableSimpleEvents())?this.getEnableSimpleEvents():{};a.push(Ext.create("Ext.ux.TouchCalendarSimpleEvents",b))}else{if(this.getEnableEventBars()){var b=Ext.isObject(this.getEnableEventBars())?this.getEnableEventBars():{};a.push(Ext.create("Ext.ux.TouchCalendarEvents",b))}}Ext.apply(this._viewConfig,{plugins:a,currentDate:c,viewMode:this.getViewMode(),onTableHeaderTap:Ext.bind(this.onTableHeaderTap,this),bubbleEvents:["periodchange","eventtap","selectionchange"]});return this._viewConfig},getViewDate:function(a,b){var d=(this.getViewMode()==="WEEK"?"DAY":this.getViewMode().toUpperCase()),c=(this.getViewMode()==="WEEK"?(8*b):b);return Ext.Date.add(a,Ext.Date[d],c)},initViews:function(){var c=[];var f=Ext.Date.clone(this.viewConfig.currentDate),d=(this.getEnableSwipeNavigate()?-1:0),a=(this.getEnableSwipeNavigate()?1:0),b=[];var e=this.getViewDate(f,-1);c.push(Ext.create("Ext.ux.TouchCalendarView",Ext.applyIf({currentDate:e},this.getViewConfig(e))));c.push(Ext.create("Ext.ux.TouchCalendarView",Ext.ux.TouchCalendarView(this.getViewConfig(f))));e=this.getViewDate(f,1);c.push(Ext.create("Ext.ux.TouchCalendarView",Ext.ux.TouchCalendarView(Ext.applyIf({currentDate:e},this.getViewConfig(e)))));this.setItems(c);this.view=c[(this.getEnableSwipeNavigate()?1:0)]},onTableHeaderTap:function(b,a){a=Ext.fly(a);if(a.hasCls(this.view.getPrevPeriodCls())||a.hasCls(this.view.getNextPeriodCls())){this[(a.hasCls(this.view.getPrevPeriodCls())?"previous":"next")]()}},applyViewMode:function(a){return a.toUpperCase()},updateViewMode:function(a){this.viewConfig=this.viewConfig||{};this.viewConfig.viewMode=a;if(this.view){Ext.each(this.getInnerItems(),function(b,c){b.currentDate=this.getViewDate(Ext.Date.clone(this.view.currentDate),c-1);b.setViewMode(a,true);b.refresh()},this)}},getValue:function(){var a=this.view.getSelected();return(a.length>0)?a:null},setValue:function(a){this.view.setValue(a)},onActiveItemChange:function(a,g,b){if(this.getEnableSwipeNavigate()){var d=this.getItems();var h=d.indexOf(g),e=d.indexOf(b),f=(h>e)?"forward":"backward";this.counter=(this.counter||0)+1;if(f==="forward"){this.remove(d.get(0));var c=new Ext.ux.TouchCalendarView(this.getViewConfig(this.getViewDate(g.currentDate,1)));this.add(c)}else{this.remove(d.get(d.getCount()-1));var c=new Ext.ux.TouchCalendarView(this.getViewConfig(this.getViewDate(g.currentDate,-1)));this.insert(0,c)}this.view=g;var i=this.view.getPeriodMinMaxDate();this.fireEvent("periodchange",this.view,i.min.get("date"),i.max.get("date"),f)}}});Ext.define("Ext.ux.TouchCalendarView",{extend:"Ext.Container",alias:"widget.touchcalendarview",config:{viewMode:"month",weekStart:1,todayCls:"today",selectedItemCls:"selected",unselectableCls:"unselectable",prevMonthCls:"prev-month",nextMonthCls:"next-month",weekendCls:"weekend",prevPeriodCls:"goto-prev",nextPeriodCls:"goto-next",dayTimeSlotSize:30,timeSlotDateTpls:{},hideHalfHourTimeSlotLabels:true,value:null,store:null,baseTpl:['<table class="{[this.me.getViewMode().toLowerCase()]}">',"<thead>","<tr>",'<tpl for="this.getDaysArray(values)">','<th class="{[this.getHeaderClass(xindex)]}">','<tpl if="xindex === 4">','<span>{[Ext.Date.format(this.me.currentDate, "F")]} {[Ext.Date.format(this.me.currentDate, "Y")]}</span>',"</tpl>",'{date:date("D")}',"</th>","</tpl>","</tr>","</thead>","<tbody>",'<tr class="time-block-row">','<tpl for=".">','<td class="time-block {[this.getClasses(values)]}" datetime="{[this.me.getDateAttribute(values.date)]}">',"{date:this.formatDate()}","</td>",'<tpl if="this.isEndOfRow(xindex)">',"</tr>",'<tpl if="!this.isEndOfPeriod(xindex)">',"<tr>","</tpl>","</tpl>","</tpl>","</tr>","</tbody>","</table>"],cls:"touch-calendar-view",itemSelector:"td.time-block"},timeSlotDateTplsDefaults:{day:'<span class="hour">{date:date("g")}</span><span class="am-pm">{date:date("A")}</span>',month:'{date:date("j")}',week:'{date:date("j")}'},commonTemplateFunctions:{getTimeSlotRowCls:function(b){var c=[],a=b.getMinutes()!==0;if(a){c.push("half-hour")}return c.join(" ")},isHalfHour:function(a){return a.getMinutes()!==0},formatDate:function(a){return this.getTimeSlotDateTpl().apply({date:a})},getTimeSlotDateTpl:function(){var a=this.me.getViewMode().toLowerCase();return this.me.getTimeSlotDateTpls()[a]},getClasses:function(a){var b=[];if(a.selected){b.push(this.me.getSelectedItemCls())}if(a.unselectable){b.push(this.me.getUnselectableCls())}if(a.prevMonth){b.push(this.me.getPrevMonthCls())}if(a.nextMonth){b.push(this.me.getNextMonthCls())}if(a.weekend){b.push(this.me.getWeekendCls())}if(a.today){b.push(this.me.getTodayCls())}return b.join(" ")},isEndOfRow:function(a){return(a%7)===0&&(a>0)},isStartOfRow:function(a){return((a-1)%7)===0&&(a-1>=0)},isEndOfPeriod:function(a){return a%this.me.periodRowDayCount===0},getDaysArray:function(a){var c=[],b;for(b=0;b<this.me.periodRowDayCount;b++){c.push(a[b])}return c},getHeaderClass:function(a){return a===1?this.me.getPrevPeriodCls():a===7?this.me.getNextPeriodCls():""}},constructor:function(b){this.initModel();var a=Ext.create("Ext.data.Store",{model:"TouchCalendarViewModel"});this.setStore(a);b.timeSlotDateTpls=b.timeSlotDateTpls||{};Ext.applyIf(b.timeSlotDateTpls,this.timeSlotDateTplsDefaults);Ext.apply(this,b||{});this.callParent(arguments);this.minDate=this.minDate?Ext.Date.clearTime(this.minDate,true):null;this.maxDate=this.maxDate?Ext.Date.clearTime(this.maxDate,true):null;this.refresh()},initialize:function(){this.element.on({tap:this.onTableHeaderTap,scope:this,delegate:"th"});this.element.on({tap:this.onTimeSlotTap,scope:this,delegate:this.getItemSelector()});this.on({painted:this.syncHeight,resize:this.onComponentResize,scope:this});this.callParent()},initModel:function(){if(!Ext.ModelManager.isRegistered("TouchCalendarViewModel")){Ext.define("TouchCalendarViewModel",{extend:"Ext.data.Model",config:{fields:[{name:"date",type:"date"},{name:"today",type:"boolean"},{name:"unselectable",type:"boolean"},{name:"selected",type:"boolean"},{name:"prevMonth",type:"boolean"},{name:"nextMonth",type:"boolean"},{name:"weekend",type:"boolean"},"timeSlots"]}})}},updateViewMode:function(a,c){this.refresh();var b=this.getPeriodMinMaxDate();this.fireEvent("periodchange",this,b.min.get("date"),b.max.get("date"),"none")},applyViewMode:function(b){b=b.toUpperCase();var a=Ext.ux.TouchCalendarView[b.toUpperCase()];this.getStartDate=a.getStartDate;this.getTotalDays=a.getTotalDays;this.dateAttributeFormat=a.dateAttributeFormat;this.getNextIterationDate=a.getNextIterationDate;this.getDeltaDate=a.getDeltaDate;this.periodRowDayCount=a.periodRowDayCount;Ext.apply(this.commonTemplateFunctions,{me:this});this.setTpl(new Ext.XTemplate((a.tpl||this.getBaseTpl()).join(""),this.commonTemplateFunctions));this.setScrollable({direction:b.toUpperCase()==="DAY"?"vertical":false,directionLock:true});return b},collectData:function(a){var b=[];Ext.each(a,function(c,d){b.push(c.data)},this);return b},populateStore:function(){this.currentDate=this.currentDate||this.value||new Date();var d=true,e=this.currentDate,c=this.getStartDate(e),f=this.getTotalDays(e),a;this.getStore().suspendEvents();this.getStore().data.clear();for(var b=0;b<f;b++){c=this.getNextIterationDate(c,(b===0?0:1));d=(this.minDate&&c<this.minDate)||(this.maxDate&&c>this.maxDate);a=Ext.create("TouchCalendarViewModel",{today:this.isSameDay(c,new Date()),unselectable:d,selected:this.isSameDay(c,this.value)&&!d,prevMonth:(c.getMonth()<e.getMonth()),nextMonth:(c.getMonth()>e.getMonth()),weekend:this.isWeekend(c),date:c});this.getStore().add(a)}this.getStore().resumeEvents()},refreshDelta:function(d){var b=this.currentDate||new Date();var a=this.getDeltaDate(b,d);if(this.isOutsideMinMax(a)){return}this.currentDate=a;this.refresh();var c=this.getPeriodMinMaxDate();this.fireEvent("periodchange",this,c.min.get("date"),c.max.get("date"),(d>0?"forward":"back"))},getPeriodMinMaxDate:function(){return{min:this.getStore().data.first(),max:this.getStore().data.last()}},isOutsideMinMax:function(a){var b=false;if(this.getViewMode()==="MONTH"){b=((this.minDate&&Ext.Date.getLastDateOfMonth(a)<this.minDate)||(this.maxDate&&Ext.Date.getFirstDateOfMonth(a)>this.maxDate))}else{b=((this.minDate&&this.getWeekendDate(a)<this.minDate)||(this.maxDate&&this.getStartDate(a)>this.maxDate))}return b},onTableHeaderTap:function(b,a){a=Ext.fly(a);if(a.hasCls(this.getPrevPeriodCls())||a.hasCls(this.getNextPeriodCls())){this.refreshDelta(a.hasCls(this.getPrevPeriodCls())?-1:1)}},onTimeSlotTap:function(d){if(!d.getTarget("."+this.getUnselectableCls())){var c=Ext.fly(d.getTarget());this.selectCell(c);var b=this.getCellDate(c);var a=this.getValue()||this.currentDate;if(b.getTime()!==a.getTime()){this.setValue(b);this.fireEvent("selectionchange",this,b,a)}}},onComponentResize:function(a){this.syncHeight()},refresh:function(){this.populateStore();var a=this.getStore().getRange();this.setData(this.collectData(a));this.syncHeight()},syncHeight:function(){if(this.getViewMode().toUpperCase()!=="DAY"){var a=this.element.select("table",this.element.dom).first();if(a){a.setHeight(this.element.getHeight())}}},selectCell:function(a){var b=this.getSelectedItemCls();var c=this.element.select("."+b,this.element.dom);if(c){c.removeCls(b)}a.addCls(b);a.up("tr").addCls(b)},getDateRecord:function(a){return this.getStore().findBy(function(b){var c=Ext.Date.clearTime(b.get("date"),true).getTime();return c===Ext.Date.clearTime(a,true).getTime()},this)},getDayStartDate:function(a){return a},isSameDay:function(b,a){if(!b||!a){return false}return Ext.Date.clearTime(b,true).getTime()===Ext.Date.clearTime(a,true).getTime()},isWeekend:function(a){return a.getDay()===0||a.getDay()===6},getWeekendDate:function(b){var a=b.getDay()-this.getWeekStart();a=a<0?6:a;return new Date(b.getFullYear(),b.getMonth(),b.getDate()+0+a)},getCellDate:function(b){var a=b.dom.getAttribute("datetime");return this.stringToDate(a)},getDateCell:function(a){return this.element.select('td[datetime="'+this.getDateAttribute(a)+'"]',this.element.dom).first()},getDateAttribute:function(a){return Ext.Date.format(a,this.dateAttributeFormat)},getSelected:function(){var a=this.element.select("td."+this.getSelectedItemCls(),this.element.dom),b=[];a.each(function(c){b.push(this.getCellDate(c))},this);return b},stringToDate:function(a){return Ext.Date.parseDate(a,this.dateAttributeFormat)},applyTimeSlotDateTpls:function(a){Ext.Object.each(a,function(b,c){if(Ext.isString){a[b]=Ext.create("Ext.XTemplate",c)}},this);return a},statics:{MONTH:{dateAttributeFormat:"d-m-Y",getNextIterationDate:function(b,a){return new Date(b.getFullYear(),b.getMonth(),b.getDate()+(a===0?0:1))},getTotalDays:function(a){var b=Ext.Date.getFirstDateOfMonth(a);return this.isWeekend(b)?42:35},getStartDate:function(a){return Ext.bind(Ext.ux.TouchCalendarView.WEEK.getStartDate,this)(new Date(a.getFullYear(),a.getMonth(),1))},getDeltaDate:function(b,d){var c=b.getMonth()+d,a=new Date(b.getFullYear(),c,1);a.setDate(Ext.Date.getDaysInMonth(a)<b.getDate()?Ext.Date.getDaysInMonth(a):b.getDate());return a},periodRowDayCount:7},WEEK:{dateAttributeFormat:"d-m-Y",getNextIterationDate:function(b,a){return new Date(b.getFullYear(),b.getMonth(),b.getDate()+(a===0?0:1))},getTotalDays:function(a){return 7},getStartDate:function(b){var a=b.getDay()-this.getWeekStart();a=a<0?6:a;return new Date(b.getFullYear(),b.getMonth(),b.getDate()-0-a)},getDeltaDate:function(a,b){return new Date(a.getFullYear(),a.getMonth(),a.getDate()+(b*7))},periodRowDayCount:7},DAY:{dateAttributeFormat:"d-m-Y H:i",tpl:['<table class="{[this.me.getViewMode().toLowerCase()]}">',"<thead>","<tr>",'<th class="{[this.me.getPrevPeriodCls()]}" style="display: block;">',"</th>","<th>",'<span>{[Ext.Date.format(values[0].date, "D jS M Y")]}</span>',"</th>",'<th class="{[this.me.getNextPeriodCls()]}" style="display: block;">',"</th>","</tr>","</thead>","<tbody>","<tr>",'<td colspan="3">','<table class="time-slot-table">','<tpl for=".">','<tr class="{[this.getTimeSlotRowCls(values.date)]}">','<td class="label">','<tpl if="!this.me.getHideHalfHourTimeSlotLabels() || !this.isHalfHour(values.date)">',"{date:this.formatDate()}","</tpl>","</td>",'<td class="time-block" colspan="2" datetime="{[this.me.getDateAttribute(values.date)]}">',"</td>","</tr>","</tpl>","</table>","</td>","</tr>","</tbody>","</table>"],getNextIterationDate:function(b,a){var c=b.getTime()+((a===0?0:1)*(this.getDayTimeSlotSize()*60*1000));return new Date(c)},getTotalDays:function(a){return 1440/this.getDayTimeSlotSize()},getStartDate:function(a){return Ext.Date.clearTime(a,true)},getDeltaDate:function(a,b){return new Date(a.getFullYear(),a.getMonth(),a.getDate()+b)},periodRowDayCount:1}}});Ext.define("Ext.ux.TouchCalendarEventsBase",{extend:"Ext.Base",config:{calendar:null,plugin:null,eventsPerTimeSlot:{},eventSortDirection:"DESC"},constructor:function(a){this.initConfig(a);this.callParent(arguments)},generateEventBars:function(){this.eventBarStore=Ext.create("Ext.data.Store",{model:"Ext.ux.CalendarEventBarModel",data:[]});this.setEventsPerTimeSlot({});var d=this.getCalendar().getStore(),b=this.getCalendar().eventStore,a,c=0;d.each(function(f){var e=f.get("date"),g=e.getTime(),h=[];b.sort(this.getPlugin().getStartEventField(),this.getEventSortDirection());b.each(function(j){if(!this.eventFilterFn.call(this,j,j.getId(),g)){return}c=c+1;var l=this.eventBarStore.findBy(function(m,n){return m.get("EventID")===j.internalId},this);if(l>-1){a=this.eventBarStore.getAt(l);while(a.linked().getCount()>0){a=a.linked().getAt(a.linked().getCount()-1)}if(e.getDay()===this.getCalendar().getWeekStart()){h.push(a.get("BarPosition"));var i=Ext.create("Ext.ux.CalendarEventBarModel",{EventID:j.internalId,Date:e,BarLength:1,BarPosition:a.get("BarPosition"),Colour:a.get("Colour"),Record:j});a.linked().add(i)}else{h.push(a.get("BarPosition"));a.set("BarLength",a.get("BarLength")+1)}}else{var k=this.getNextFreePosition(h);h.push(k);a=Ext.create("Ext.ux.CalendarEventBarModel",{EventID:j.internalId,Date:e,BarLength:1,BarPosition:k,Colour:this.getRandomColour(),Record:j});this.eventBarStore.add(a)}},this);if(c>0){this.getEventsPerTimeSlot()[e.getTime()]=c}c=0},this)},eventBarDoesWrap:function(a){var b=Ext.Date.add(a.get("Date"),Ext.Date.DAY,(a.get("BarLength")-1));return Ext.Date.clearTime(b,true).getTime()!==Ext.Date.clearTime(a.get("Record").get(this.getPlugin().getEndEventField()),true).getTime()},eventBarHasWrapped:function(a){return Ext.Date.clearTime(a.get("Date"),true).getTime()!==Ext.Date.clearTime(a.get("Record").get(this.getPlugin().getStartEventField()),true).getTime()},getNextFreePosition:function(a){var b=0;while(a.indexOf(b)>-1){b++}return b},createEventBar:function(c,b){var a=this.eventBarDoesWrap(c),f=this.eventBarHasWrapped(c),d=[this.getPlugin().getEventBarCls(),"e-"+c.get("EventID"),(a?" wrap-end":""),(f?" wrap-start":""),b.get(this.getPlugin().getCssClassField())];var e=Ext.DomHelper.append(this.getPlugin().getEventWrapperEl(),{tag:"div",html:this.getPlugin().getEventBarTpl().apply(b.data),eventID:c.get("EventID"),cls:d.join(" ")},true);return e},getRandomColour:function(){return"#"+(Math.random()*16777215<<0).toString(16)}});Ext.define("Ext.ux.TouchCalendarDayEvents",{extend:"Ext.ux.TouchCalendarEventsBase",config:{eventSortDirection:"ASC"},eventFilterFn:function(b,e,c){var a=this.getRoundedTime(b.get(this.getPlugin().getStartEventField())).getTime(),d=this.getRoundedTime(b.get(this.getPlugin().getEndEventField())).getTime();return(a<=c)&&(d>=c)},renderEventBars:function(k){var f=this,a=k.getCount(),c=0,b;for(;c<a;c++){b=k.getAt(c);var g=b.data.Record,j=this.createEventBar(b,g),e=this.getEventBarWidth(b,50+10),d=this.getVerticalDayPosition(b),h=this.getHorizontalDayPosition(b,e),m=this.getEventBarHeight(b);j.setLeft(h);j.setTop(d-this.getCalendar().element.getY());j.setHeight(m);j.setWidth(e)}},getEventBarWidth:function(b,d){var c=this.getEventsPerTimeSlot()[b.get("Date").getTime()],a=this.getCalendar().element.getWidth();c=c||1;d=d||0;return Math.floor((a-d)/c)},getEventBarHeight:function(a){var b=this.getPlugin().getEventHeight();if(Ext.isNumeric(b)){return b}else{if(b==="duration"){return this.getEventBarHeightDuration(a)}else{return"auto"}}},getEventBarHeightDuration:function(a){var b=a.data.Record.get(this.getPlugin().getStartEventField()),d=a.data.Record.get(this.getPlugin().getEndEventField()),f=this.getRoundedTime(b),c=(d.getTime()-b.getTime())/1000/60,i=this.getCalendar().getDateCell(f),e=i.parent("tr",false),h=0;if(e){var g=i.getHeight(),j=g/30;h=c*j}return h},getVerticalDayPosition:function(a){var c=a.data.Record.get(this.getPlugin().getStartEventField()),i=this.getRoundedTime(c),k=(i.getHours()*2)+(i.getMinutes()===30?1:0),b=(c.getTime()-i.getTime())/1000/60,g=this.getCalendar().element.select("table.time-slot-table td",this.getCalendar().element.dom).first(),e=0;if(g){var d=g.getHeight(),f=g.getY(),j=d/30,h=b*j;e=f+(k*d)+h}return e},getHorizontalDayPosition:function(c,a){var d=c.get("BarPosition"),b=50,e=this.getPlugin().getEventBarSpacing();return b+(d*a)+(d*e)},getRoundedTime:function(a){a=Ext.Date.clone(a);var b=a.getMinutes();a.setMinutes(b-(b%this.getCalendar().getDayTimeSlotSize()));a.setSeconds(0);a.setMilliseconds(0);return a}});Ext.define("Ext.ux.TouchCalendarMonthEvents",{extend:"Ext.ux.TouchCalendarEventsBase",eventFilterFn:function(b,e,c){var a=Ext.Date.clearTime(b.get(this.getPlugin().getStartEventField()),true).getTime(),d=Ext.Date.clearTime(b.get(this.getPlugin().getEndEventField()),true).getTime();return(a<=c)&&(d>=c)},renderEventBars:function(a){var b=this;a.each(function(e){var k=this.getPlugin().getEventRecord(e.get("EventID")),j=this.getCalendar().getDateCell(e.get("Date")),h=this.eventBarDoesWrap(e),u=this.eventBarHasWrapped(e),f=[this.getPlugin().getEventBarCls(),"e-"+e.get("EventID"),(h?" wrap-end":""),(u?" wrap-start":""),k.get(this.getPlugin().getCssClassField())];var m=Ext.DomHelper.append(this.getPlugin().getEventWrapperEl(),{tag:"div",style:{"background-color":k.get(this.getPlugin().colourField)},html:this.getPlugin().getEventBarTpl().apply(k.data),eventID:e.get("EventID"),cls:f.join(" ")},true);if(this.allowEventDragAndDrop){new Ext.util.Draggable(m,{revert:true,onStart:function(A){var w=this,z=w.el.getAttribute("eventID"),x=b.getPlugin().getEventRecord(z),y=b.getEventBarRecord(z);w.el.setWidth(w.el.getWidth()/y.get("BarLength"));w.el.setLeft(A.startX-(w.el.getWidth()/2));b.calendar.element.select("div."+x.internalId,b.calendar.element.dom).each(function(B){if(B.dom!==w.el.dom){B.hide()}},this);Ext.util.Draggable.prototype.onStart.apply(this,arguments);b.calendar.fireEvent("eventdragstart",w,x,A);return true}})}var t=this.getCalendar().element.select("thead",this.getCalendar().element.dom).first().getHeight();var s=this.getCalendar().element.select("tbody",this.getCalendar().element.dom).first().getHeight();var o=this.getCalendar().element.select("tbody tr",this.getCalendar().element.dom).getCount();var d=s/o;var q=this.getCalendar().getStore().findBy(function(w){return w.get("date").getTime()===Ext.Date.clearTime(e.get("Date"),true).getTime()},this);var p=Math.floor(q/7)+1;var r=t+(d*p);var v=e.get("BarPosition"),l=e.get("BarLength"),c=(this.getCalendar().element.getWidth()/7)*j.dom.cellIndex,i=j.getWidth(),n=m.getHeight(),g=this.getPlugin().getEventBarSpacing();m.setLeft(c+(u?0:g));m.setTop(r-n-(v*n+(v*g)+g));m.setWidth((i*l)-(g*(h?(h&&u?0:1):2)));if(e.linked().getCount()>0){this.renderEventBars(e.linked())}},this)}});Ext.define("Ext.ux.TouchCalendarWeekEvents",{extend:"Ext.ux.TouchCalendarMonthEvents"});Ext.define("Ext.ux.TouchCalendarEvents",{extend:"Ext.mixin.Observable",config:{viewModeProcessor:null,eventBarTpl:"{title}",eventBarCls:"event-bar",colourField:"colour",cssClassField:"css",eventHeight:"duration",eventWidth:"auto",startEventField:"start",endEventField:"end",eventWrapperCls:"event-wrapper",eventBarSelectedCls:"event-bar-selected",cellHoverCls:"date-cell-hover",autoUpdateEvent:true,allowEventDragAndDrop:false,eventBarSpacing:1,eventWrapperEl:null},init:function(b){var a=this;this.calendar=b;this.calendar.eventsPlugin=this;this.calendar.refresh=Ext.Function.createSequence(this.calendar.refresh,this.refreshEvents,this);this.calendar.setViewMode=this.createPreSequence(this.calendar.setViewMode,this.onViewModeUpdate,this);this.calendar.onComponentResize=Ext.Function.createSequence(this.calendar.onComponentResize,this.onComponentResize,this);this.onViewModeUpdate(this.calendar.getViewMode())},onComponentResize:function(){var a=this;setTimeout(function(){a.refreshEvents()},200)},createPreSequence:function(b,c,a){if(!c){return b}else{return function(){c.apply(a||this,arguments);var d=b.apply(this,arguments);return d}}},onViewModeUpdate:function(a){this.setViewModeProcessor(Ext.create(this.getViewModeProcessorClass(a),{calendar:this.calendar,plugin:this}))},getViewModeProcessorClass:function(a){var b="";switch(a.toLowerCase()){case"month":b="Ext.ux.TouchCalendarMonthEvents";break;case"week":b="Ext.ux.TouchCalendarWeekEvents";break;case"day":b="Ext.ux.TouchCalendarDayEvents";break}return b},refreshEvents:function(){if(this.calendar.getScrollable()){this.calendar.getScrollable().getScroller().scrollTo(0,0)}this.removeEvents();this.getViewModeProcessor().generateEventBars();this.createEventWrapper();if(this.getAllowEventDragAndDrop()){this.createDroppableRegion()}},createDroppableRegion:function(){var b=this;var a=0},onEventDropDeactivate:function(f,a,d,c){if(a.el.hasCls(this.eventBarCls)){var b=this.getEventRecord(a.el.getAttribute("eventID"));this.calendar.element.select("div."+b.internalId,this.calendar.element.dom).each(function(e){e.show()},this)}},onEventDrop:function(f,a,d,c){var b=false;if(a.el.hasCls(this.eventBarCls)){this.calendar.all.each(function(e){var j=e.getPageBox(true);var k=a.el.getPageBox(true);if(j.partial(k)&&this.calendar.fireEvent("beforeeventdrop",a,f,g,d)){b=true;var g=this.getEventRecord(a.el.getAttribute("eventID")),h=this.calendar.getCellDate(e),i=this.getDaysDifference(g.get(this.getStartEventField()),h);if(this.getAutoUpdateEvent()){g.set(this.getStartEventField(),h);g.set(this.getEndEventField(),g.get(this.getEndEventField()).add(Date.DAY,i))}this.refreshEvents();this.calendar.fireEvent("eventdrop",a,f,g,d);return}},this);this.calendar.all.removeCls(this.getCellHoverCls());if(!b){a.setOffset(a.startOffset,true)}}},onEventDragStart:function(a,f){var d=a.el.getAttribute("eventID"),b=this.getEventRecord(d),c=this.getEventBarRecord(d);a.el.setWidth(a.el.getWidth()/c.get("BarLength"));a.updateBoundary(true);this.calendar.element.select("div."+b.internalId,this.calendar.element.dom).each(function(e){if(e.dom!==a.el.dom){e.hide()}},this);this.calendar.fireEvent("eventdragstart",a,b,f)},createEventWrapper:function(){if(this.calendar.rendered&&!this.getEventWrapperEl()){this.setEventWrapperEl(Ext.DomHelper.append(this.getEventsWrapperContainer(),{tag:"div",cls:this.getEventWrapperCls()},true));this.getEventWrapperEl().on("tap",this.onEventWrapperTap,this,{delegate:"div."+this.getEventBarCls()});if(this.getViewModeProcessor().eventBarStore){this.getViewModeProcessor().renderEventBars(this.getViewModeProcessor().eventBarStore)}}else{this.calendar.on("painted",this.createEventWrapper,this)}},onEventWrapperTap:function(g,f){g.stopPropagation();var d=g.getTarget("div."+this.getEventBarCls());if(d){var c=d.getAttribute("eventID"),b=Ext.fly(d);if(c){var a=this.getEventRecord(c);this.deselectEvents();b.addCls(this.getEventBarSelectedCls());this.calendar.fireEvent("eventtap",a,g)}}},getEventsWrapperContainer:function(){return this.calendar.element.select("thead th",this.calendar.element.dom).first()||this.calendar.element.select("tr td",this.calendar.element.dom).first()},getEventRecord:function(a){var b=this.calendar.eventStore.findBy(function(c){return c.internalId===a},this);return this.calendar.eventStore.getAt(b)},getEventBarRecord:function(a){var b=this.eventBarStore.findBy(function(c){return c.get("EventID")===a},this);return this.eventBarStore.getAt(b)},deselectEvents:function(){this.calendar.element.select("."+this.getEventBarSelectedCls(),this.calendar.element.dom).removeCls(this.getEventBarSelectedCls())},getDaysDifference:function(b,a){b=b.clearTime(true).getTime();a=a.clearTime(true).getTime();return(a-b)/1000/60/60/24},removeEvents:function(){if(this.getEventWrapperEl()){this.getEventWrapperEl().dom.innerHTML="";this.getEventWrapperEl().destroy();this.setEventWrapperEl(null)}if(this.eventBarStore){this.eventBarStore.remove(this.eventBarStore.getRange());this.eventBarStore=null}if(this.droppable){this.droppable=null}},applyEventBarTpl:function(a){if(Ext.isString(a)||Ext.isArray(a)){a=Ext.create("Ext.XTemplate",a)}return a}});Ext.define("Ext.ux.CalendarEventBarModel",{extend:"Ext.data.Model",config:{fields:[{name:"EventID",type:"string"},{name:"Date",type:"date"},{name:"BarLength",type:"int"},{name:"BarPosition",type:"int"},{name:"Colour",type:"string"},"Record"],hasMany:[{model:"Ext.ux.CalendarEventBarModel",name:"linked"}]}});Ext.define("Ext.util.Region.partial",{extend:"Ext.util.Region",partial:function(g){var f=this,e=g.right-g.left,c=g.bottom-g.top,b=f.right-f.left,a=f.bottom-f.top,d=g.top>f.top&&g.top<f.bottom;horizontalValid=g.left>f.left&&g.left<f.right;return horizontalValid&&d}});Ext.define("Ext.ux.TouchCalendarSimpleEvents",{extend:"Ext.mixin.Observable",startEventField:"start",endEventField:"end",multiEventDots:true,wrapperCls:"simple-event-wrapper",eventDotCls:"simple-event",dotWidth:6,eventTpl:['<span class="{wrapperCls}">','<tpl for="events">','<span class="{[parent.eventDotCls]}"></span>',"</tpl>","</span>"].join(""),filterFn:function(c,e,b){if(arguments.length===2){b=e}var a=Ext.Date.clearTime(c.get(this.startEventField),true).getTime(),d=Ext.Date.clearTime(c.get(this.endEventField),true).getTime(),b=Ext.Date.clearTime(b,true).getTime();return(a<=b)&&(d>=b)},init:function(a){this.calendar=a;this.calendar.simpleEventsPlugin=this;this.wrapperCls=this.wrapperCls+(this.multiEventDots?"-multi":"");this.eventDotCls=this.eventDotCls+(this.multiEventDots?"-multi":"");this.calendar.showEvents=this.showEvents;this.calendar.hideEvents=this.hideEvents;this.calendar.removeEvents=this.removeEvents;this.calendar.refresh=Ext.Function.createSequence(this.calendar.refresh,this.refreshEvents,this);this.calendar.syncHeight=Ext.Function.createSequence(this.calendar.syncHeight,this.refreshEvents,this)},refreshEvents:function(){if(!this.disabled&&this.calendar.getViewMode()!=="DAY"){var a=this.calendar.getStore();if(a){this.removeEvents();a.each(function(d){var f=d.get("date");var c=this.calendar.getDateCell(f);var e=this.calendar.eventStore;if(c){e.clearFilter();var b=e[this.multiEventDots?"filterBy":"findBy"](Ext.bind(this.filterFn,this,[f],true));var i=e.getRange().length;if((!this.multiEventDots&&b>-1)||(this.multiEventDots&&i>0)){var h=Math.min((c.getWidth()/this.dotWidth),i);var g=new Ext.XTemplate(this.eventTpl).append(c,{events:(this.multiEventDots?e.getRange().slice(0,h):["event"]),wrapperCls:this.wrapperCls,eventDotCls:this.eventDotCls},true);g.setWidth(Math.min((this.multiEventDots?e.getRange().length:1)*this.dotWidth,c.getWidth()));g.setY((c.getY()+c.getHeight())-(g.getHeight()+(c.getHeight()*0.1)));g.setX((c.getX()+(c.getWidth()/2))-(g.getWidth()/2)+2)}}},this)}}},hideEvents:function(){this.simpleEventsPlugin.disabled=true;this.calendar.element.select("span."+this.wrapperCls,this.calendar.element.dom).hide()},showEvents:function(){this.simpleEventsPlugin.disabled=false;this.calendar.element.select("span."+this.wrapperCls,this.calendar.element.dom).show()},removeEvents:function(){if(this.calendar.element){this.calendar.element.select("span."+this.wrapperCls,this.calendar.element.dom).each(function(a){Ext.destroy(a)})}}});