Ext.ux.CalendarSimpleEvents = Ext.extend(Ext.util.Observable, {
	
	/**
	 * Name of the field which contains the Event's date
	 */
	dateField: 'start',
	
	/**
	 * Function used to filter the store for each of the displayed dates
	 * @param {Object} record - current record
	 * @param {Object} id - ID of passed in record
	 * @param {Object} currentDate - date we are currently dealing while looping Calendar's dateCollection property
	 */
	filterFn: function(record, id, currentDate){
		return record.get(this.dateField).clearTime(true).getTime() === currentDate.clearTime(true).getTime();
	},
	
	/**
	 * Template used to create Event markup. Template is merged with the records left
	 * following the filter
	 */
	eventTpl: new Ext.XTemplate(
	'<span class="simple-event-wrapper">',
		'<tpl for=".">',
			'<span class="simple-event"></span>',
		'</tpl>',
	'</span>'),
	
	init: function(calendar){
		
		this.calendar = calendar; // cache the parent calendar
		this.calendar.simpleEventsPlugin = this; // cache the plugin instance on the calendar itself
		
		this.calendar.showEvents = this.showEvents;
		this.calendar.hideEvents = this.hideEvents;
		this.calendar.removeEvents = this.removeEvents;
		
		// listen to the Calendar's 'refresh' event and render events when it fires
		this.calendar.on('refresh', this.renderEvents, this);
	},
	
	/**
	 * Function to execute when the Calendar is refreshed.
	 * It loops through the Calendar's current dateCollection and gets all Events
	 * for the current date and inserts the appropriate markup
	 */
	renderEvents: function(){
		if (!this.disabled) {
			var dc = this.calendar.dateCollection;
			
			if (dc) {
				// loop through Calendar's current dateCollection
				dc.each(function(dateObj){
					var date = dateObj.date;
					
					var cell = this.calendar.getDateCell(date); // get the table cell for the current date
					var store = this.calendar.store;
					
					if (cell) {
						store.clearFilter();
						store.filterBy(Ext.createDelegate(this.filterFn, this, [date], true)); // filter store for current date
						if (store.getRange().length > 0) {
							// append the event markup
							var t = this.eventTpl.append(cell, store.getRange(), true);
						}
					}
				}, this);
			}
		}
	},
	
	/**
	 * Hides all the event markers
	 * This is added to the parent Calendar's class so must be executed via the parent
	 */
	hideEvents: function(){
		this.simpleEventsPlugin.disabled = true;
		
		this.body.select('span.simple-event-wrapper').hide();
	},
	
	/**
	 * Shows all the event markers
	 * This is added to the parent Calendar's class so must be executed via the parent
	 */
	showEvents: function(){
		this.simpleEventsPlugin.disabled = false;
		
		this.body.select('span.simple-event-wrapper').show();
	},
	
	/**
	 * Removes all the event markers and their markup
	 * This is added to the parent Calendar's class so must be executed via the parent
	 */
	removeEvents: function(){
		this.body.select('span.simple-event-wrapper').remove();
	}	
});
