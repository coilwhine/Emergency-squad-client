import "./NextBriefingCard.scss";
import { TbClockFilled, TbMapPinFilled, TbCalendarFilled, TbCalendarDown } from "react-icons/tb";

function NextBriefingCard(): JSX.Element {
    return (
        <div className="NextBriefingCard data-card">
            <h2 className="heading">תדריך הבא</h2>

            <div className="data-wraper">
                <div className="all-data-wraper">
                    <div className="date-time-wraper">
                        <div className="data-div date">
                            <i><TbCalendarFilled /></i>
                            <span>24/02/24</span>
                        </div>
                        <div className="data-div time">
                            <i><TbClockFilled /></i>
                            <span>12:00</span>
                        </div>
                    </div>
                    <div className="data-div location">
                        <i><TbMapPinFilled /></i>
                        <span id="briefing-location-span">  שדג שדג שדג שדחניון בית העלמין הישן ניסיון ניסיון ניסיון ניסיון </span>
                    </div>
                </div>
                <div className="data-div btn-wraper">
                    <a className="btn" href="data:text/calendar;charset=utf-8,BEGIN:VCALENDAR
                VERSION:2.0
                BEGIN:VEVENT
                SUMMARY:Meeting with John
                DTSTART:20240127T090000
                DTEND:20240127T100000
                LOCATION:Office
                DESCRIPTION:Discuss project updates.
                END:VEVENT
                END:VCALENDAR"
                        download="event.ics"><TbCalendarDown /></a>
                </div>
            </div>
        </div>
    );
}

export default NextBriefingCard;
