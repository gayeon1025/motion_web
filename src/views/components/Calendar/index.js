import React from 'react';
import Calendar from '@toast-ui/react-calendar';
import 'tui-calendar/dist/tui-calendar.css';
import 'tui-date-picker/dist/tui-date-picker.css';
import 'tui-time-picker/dist/tui-time-picker.css';

const ScheduleCalendar = ({
  schedules,
  calendarRef,
  onSaveSchedule,
  onChangeSchedule,
  onDeleteSchedule
}) => {
  return (
    <Calendar
      ref={calendarRef}
      onBeforeCreateSchedule={schedule => onSaveSchedule(schedule)}
      onBeforeUpdateSchedule={schedule => onChangeSchedule(schedule)}
      onBeforeDeleteSchedule={schedule => onDeleteSchedule(schedule)}
      height="500px"
      calendars={[
        {
          id: '1',
          name: '학교행사',
          bgColor: '#9e5fff',
          borderColor: '#9e5fff'
        },
        {
          id: '2',
          name: '동아리행사',
          bgColor: '#00a9ff',
          borderColor: '#00a9ff'
        }
      ]}
      month={{
        startDayOfWeek: 0
      }}
      view={'month'}
      timezones={[
        {
          timezoneOffset: 540,
          displayLabel: 'GMT+09:00',
          tooltip: 'Seoul'
        }
      ]}
      schedules={schedules}
      useCreationPopup
      useDetailPopup
    />
  );
};

export default ScheduleCalendar;
