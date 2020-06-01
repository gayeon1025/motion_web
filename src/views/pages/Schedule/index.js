import React, { useRef, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectors, operations } from 'state/modules/home';
import LayoutHeader from 'views/components/LayoutHeader';
import ScheduleCalendar from 'views/components/Calendar';

const Schedule = ({ schedules, saveSchedule }) => {
  const monthFormat = month => {
    let formattedMonth = month + '';
    formattedMonth =
      formattedMonth.length >= 2
        ? formattedMonth
        : new Array(2 - formattedMonth.length + 1).join('0') + formattedMonth;

    return formattedMonth;
  };

  const [date, setDate] = useState({
    year: new Date().getFullYear(),
    month: monthFormat(new Date().getMonth() + 1)
  });

  useRef();

  const calendarRef = useRef();

  const onMovePrev = () => {
    calendarRef.current.getInstance().prev();
    const currentMonth = Number(date.month);
    setDate({
      year: currentMonth === 1 ? date.year - 1 : date.year,
      month: currentMonth === 1 ? 12 : monthFormat(currentMonth - 1)
    });
  };

  const onMoveNext = () => {
    calendarRef.current.getInstance().next();
    const currentMonth = Number(date.month);
    setDate({
      year: currentMonth === 12 ? date.year + 1 : date.year,
      month: currentMonth === 12 ? '01' : monthFormat(currentMonth + 1)
    });
  };

  const onMoveToday = () => {
    calendarRef.current.getInstance().today();
    setDate({
      year: new Date().getFullYear(),
      month: monthFormat(new Date().getMonth() + 1)
    });
  };

  return (
    <>
      <LayoutHeader />
      <div
        className="calendar wrap_content font_bold"
        style={{ textAlign: 'left' }}
      >
        <div className="content_title">
          <span className="font_bold" style={{ width: '200px' }}>
            일정
          </span>
          <span className="font_thin">
            구체적인 사항은 임원진에게 문의해 주세요 :-)
          </span>
        </div>
        <div className="calendar_navigator">
          <button onClick={() => onMovePrev()}>&lt;</button>
          <button className="move_today" onClick={() => onMoveToday()}>
            Today
          </button>
          <button onClick={() => onMoveNext()}>&gt;</button>
          <span>
            {date.year}.{date.month}
          </span>
        </div>
        <ScheduleCalendar
          schedules={schedules}
          calendarRef={calendarRef}
          onSaveSchedule={saveSchedule}
        />
      </div>
    </>
  );
};

function mapStateToProps(state, props) {
  console.log(props);
  return {
    schedules: selectors.getSchedules(state, props)
  };
}

export default connect(mapStateToProps, dispatch =>
  bindActionCreators(
    {
      saveSchedule: operations.saveSchedule
    },
    dispatch
  )
)(Schedule);
