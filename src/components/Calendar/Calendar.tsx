import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./Calendar.css";

// 백엔드 API 응답 타입 (GET /api/v1/mypage/calendar)
type CalendarColor =
  | "RED" | "ORANGE" | "YELLOW" | "GREEN" | "BLUE"
  | "NAVY" | "PURPLE" | "WHITE" | "BLACK";

interface CalendarRecord {
  readingId: number;
  date: string; // YYYY-MM-DD (한국 시간 기준)
  color: CalendarColor;
}

interface CalendarResponse {
  year: number;
  month: number;
  records: CalendarRecord[];
}

// Mock 데이터 -> 백엔드 연결 이후 교체 예정
const mockCalendarData: CalendarResponse = {
  year: 2026,
  month: 11,
  records: [
    { readingId: 1, date: "2026-11-03", color: "BLUE" },
    { readingId: 6, date: "2026-11-17", color: "PURPLE" },
    { readingId: 10, date: "2026-11-25", color: "RED" },
  ],
};

// 날짜를 YYYY-MM-DD 형식으로 변환
const formatDate = (date: Date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
};

interface MyCalendarProps {
  // 날짜 선택 시 부모(Mypage)에서 옆 팝업을 띄우기 위한 콜백
  onSelectRecord?: (readingId: number) => void;
}

function MyCalendar({ onSelectRecord }: MyCalendarProps) {
  const [activeDate, setActiveDate] = useState(() => {
    const now = new Date();
    return new Date(now.getFullYear(), now.getMonth(), 1);
  });

  // 날짜별 기록 조회
  const getRecord = (date: Date) =>
    mockCalendarData.records.find((record) => record.date === formatDate(date));

  // 월 이동
  const changeMonth = (amount: number) => {
    setActiveDate(
      new Date(activeDate.getFullYear(), activeDate.getMonth() + amount, 1)
    );
  };

  return (
    <div className="calendar-container">
      <div className="calendar-header">
        <button type="button" aria-label="이전 달" onClick={() => changeMonth(-1)}>
          <svg width="28" height="44" viewBox="0 0 28 44" fill="none">
            <path
              d="M23.7454 40.5L3.50008 22L23.7454 3.5"
              strokeWidth="7"
              strokeLinecap="round"
              strokeLinejoin="round"
              stroke="currentColor"/>
          </svg>
        </button>
        <h2>
          {activeDate.toLocaleDateString("en-US", {
            month: "short",
            year: "numeric",
          })}
        </h2>
        <button type="button" aria-label="다음 달" onClick={() => changeMonth(1)}>
          <svg width="28" height="44" viewBox="0 0 28 44" fill="none">
            <path
              d="M3.5 3.5L23.7453 22L3.5 40.5"
              strokeWidth="7"
              strokeLinecap="round"
              strokeLinejoin="round"
              stroke="currentColor"/>
          </svg>
        </button>
      </div>

      <Calendar
        activeStartDate={activeDate}
        view="month"
        calendarType="iso8601"
        locale="en-US"
        showNavigation={false}
        showNeighboringMonth={false}
        tileClassName={({ date, view }) => {
          if (view !== "month") return null;

          const record = getRecord(date);

          return record ? `color-${record.color}` : null;
        }}
        onClickDay={(date) => {
          const record = getRecord(date);

          if (record) {
            onSelectRecord?.(record.readingId);
          }
        }}
      />
    </div>
  );
}

export default MyCalendar;