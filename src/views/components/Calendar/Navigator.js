import React from 'react';

const CalendarNavigator = () => {
  const today = new Date();

  return (
    <div className="calendar_navigator">
      <button>&lt;</button>
      <button className="move_today">Today</button>
      <button>&gt;</button>
      <span>
        {today.getFullYear()}.{today.getMonth() + 1}
      </span>
    </div>
  );
};

export default CalendarNavigator;
