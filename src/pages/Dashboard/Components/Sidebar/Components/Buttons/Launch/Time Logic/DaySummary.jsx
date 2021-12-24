import React from "react";

import TimeIn_TimeInput from "./TimeIn_TimeInput";
import TimeOut_TimeInput from "./TimeOut_TimeInput";

import Typography from "@material-ui/core/Typography";

import "./TextFields_styles.css";

class DaySummary extends React.Component {
  constructor() {
    super();

    this.state = {
      daySummary: 0,
    };

    this.dayStart = 0;
    this.dayEnd = 0;

    this.calcDaySummary = this.calcDaySummary.bind(this);
  }

  strTimeToMins(strTime) {
    if (!strTime) return 1;

    let [h, m] = strTime.split(":");

    return Number(h) * 60 + Number(m);
  }

  minsToStrTime(val) {
    let m = val % 60;
    let h = (val - m) / 60;

    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;

    return `${h}:${m}`;
  }

  calcDaySummary() {
    let summaryVal = this.dayEnd - this.dayStart;
    if (!summaryVal) summaryVal = 0;
    summaryVal = Math.max(summaryVal, 0);

    this.setState({
      daySummary: this.minsToStrTime(summaryVal),
    });

    this.props.changeNotifyStart(summaryVal);
    this.props.changeNotifyEnd(summaryVal);
  }

  notifyDayStart = (v) => {
    this.dayStart = v;
    this.calcDaySummary();
  };

  notifyDayEnd = (v) => {
    this.dayEnd = v;
    if (this.dayEnd < this.dayStart) this.dayEnd += 12 * 60;
    this.calcDaySummary();
  };

  render() {
    return (
      <div className="rootDiv">
        <div className="textFields">
          <div className="div-horarioInicio">
            {/* HORA INÍCIO */}
            <Typography variant="button" className="labelsFields">
              Início
            </Typography>
            <TimeIn_TimeInput
              changeNotifyStart={this.notifyDayStart}
              default="00:00"
            />
          </div>

          <div className="div-horarioTermino">
            {/* HORA TÉRMINO */}
            <Typography variant="button" className="labelsFields">
              Término
            </Typography>
            <TimeOut_TimeInput
              changeNotifyEnd={this.notifyDayEnd}
              default="00:00"
            />
          </div>
        </div>
        <div className="totalHoursLabels">
          {/* TOTAL DE HORAS TRABALHADAS */}
          <Typography variant="button" className="labelsFields">
            Total
          </Typography>
          <Typography name="timetotal" variant="inherit" className="HoursTotal">
            {this.state.daySummary}
          </Typography>
        </div>
      </div>
    );
  }
}

export default DaySummary;
