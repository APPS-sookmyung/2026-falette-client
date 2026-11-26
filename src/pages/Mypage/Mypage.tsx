
import { useState } from "react";

import "./Mypage.css";
import GlassBackground from "../../components/GlassBackground/GlassBackground";
import MyCalendar from "../../components/Calendar/Calendar";

function Mypage() {
  const [selectedReadingId, setSelectedReadingId] = useState<number | null>(null);

  return (
    <div className="mypage">
      <GlassBackground>
        <div className={`mypage-content ${selectedReadingId !== null ? "has-selection" : ""}`}>
          {selectedReadingId !== null && (
            <aside className="record-detail">
              <GlassBackground className="record-detail-panel">
                <button
                  className="record-detail-close"
                  type="button"
                  onClick={() => setSelectedReadingId(null)}
                  aria-label="닫기"
                >
                  <svg width="32" height="31" viewBox="0 0 32 31" fill="none">
                    <path
                      d="M0.916016 1.13867C2.21997 -0.287866 4.4345 -0.387689 5.86133 0.916016L15.8047 10.0029L25.749 0.916992C27.176 -0.386751 29.3905 -0.28724 30.6943 1.13965C31.9977 2.56645 31.898 4.78011 30.4717 6.08398L20.6045 15.1016L30.4717 24.1182C31.8983 25.4221 31.998 27.6366 30.6943 29.0635C29.3905 30.4903 27.176 30.5898 25.749 29.2861L15.8047 20.1982L5.86133 29.2852C4.43437 30.5891 2.21996 30.4895 0.916016 29.0625C-0.387483 27.6356 -0.287884 25.422 1.13867 24.1182L11.0059 15.1006L1.13867 6.08398C-0.288116 4.78002 -0.387873 2.56557 0.916016 1.13867Z"
                      fill="currentColor"
                    />
                  </svg>
                </button>
                <div className="record-detail-content">
                  <div className="record-detail-image">
                    {/* 추후 카드 이미지 연결 */}
                  </div>
                  <h3>카드 이름</h3>
                  <p>카드 설명</p>
                </div>
              </GlassBackground>
            </aside>
          )}
            <div className="calendar-panel">
            <MyCalendar onSelectRecord={setSelectedReadingId} />
            </div>

        </div>
      </GlassBackground>
    </div>
  );
}

export default Mypage;
