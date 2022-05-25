document.addEventListener('DOMContentLoaded', function () { //캘린더
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
        height: 600,
        contentHeight: 600,
        initialView: 'dayGridMonth',
        editable: true,
        selectable: true,
        nowIndicator: true,
        locale: 'ko',
        eventAdd: function (obj) {
            console.log(obj);
        },
        eventChange: function (obj) {
            console.log(obj);
        },
        eventRemove: function (obj) {
            console.log(obj);
        },
        events: 
        [
            {
                title: 'event1',
                start: '2022-05-02'
            },
            {
                title: 'event2',
                start: '2022-05-07',
                end: '2022-05-08'
            },
            {
                title: 'event3',
                start: '2022-05-23'
            }
        ]
    });
    calendar.render();
        
    // const calData = {
    //     calendar,
    //     events: [
    //         {
    //             title: 'event1',
    //             start: '2022-05-02'
    //         },
    //         {
    //             title: 'event2',
    //             start: '2022-05-07',
    //             end: '2022-05-08'
    //         },
    //         {
    //             title: 'event3',
    //             start: '2022-05-23'
    //         }
    //     ]
    // }
 
});

    
