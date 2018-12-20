import {Component, AfterContentInit, OnInit, OnDestroy, Input, Output, EventEmitter} from '@angular/core';

// global variables for imported js libraries
declare var Ext:any;
declare var Sch:any;

@Component({
    selector: 'scheduler',
    template: '<div id="schedulerPanel"></div>',
})

export class SchedulerComponent implements AfterContentInit, OnInit, OnDestroy {
              
    panel:any;

    constructor() { } 

    ngOnInit(){

    }
    
    
    ngOnDestroy(){

        
    }
    

    
    ngAfterContentInit() {

        Ext.define('Sch.panel.SchedulerGridExample', {
            extend : 'Sch.panel.SchedulerGrid',
            xtype  : 'eventtemplatesscheduler',
        
            requires : [
                'Sch.data.AssignmentStore',
            ],
        
            lockedGridConfig : {
                width : 120
            },
        
            // Setup your static columns
            columns : [
                {header : 'Staff', sortable : true, minWidth : 120, dataIndex : 'Name', flex : 1},
            ],
        
            title              : 'Event Templates',
            rowHeight          : 65,
            border             : false,
            bodyBorder         : false,
            startDate          : new Date(2018, 5, 1),
            endDate            : new Date(2018, 8, 1),
            viewPreset         : 'dayAndWeek',
            eventResizeHandles : 'none',
            enableDragCreation : false,
            renderTo:           "schedulerPanel",
            height: 600,

            // Store holding all the resources
            resourceStore : {
                type       : 'resourcestore',
                model      : 'Sch.model.Resource',
                autoLoad    : true,
                autoDestroy : true,
                proxy       : {
                    type : 'ajax',
                    url  : '../../assets/data/resources.json'
                }
            },
        
            // Store holding all the events
            eventStore : {
                type        : 'eventstore',
                model       : 'Sch.model.Event',
                autoLoad    : true,
                autoDestroy : true,
                proxy       : {
                    type : 'ajax',
                    url  : '../../assets/data/events.json'
                }
            },

            assignmentStore : {
                type        : 'assignmentstore',
                model       : 'Sch.model.Assignment',
                autoLoad    : true,
                autoDestroy : true,
                proxy       : {
                    type : 'ajax',
                    url  : '../../assets/data/assignments.json'
                }
            },

    
        
        });

        this.panel = Ext.create('Sch.panel.SchedulerGridExample');

    }
    
  
}
