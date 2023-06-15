import React from "react";

import TimeUtil from "./TimeUtil";

import TextField from "@material-ui/core/TextField";

class TimeIn_TimeInput extends React.Component {
  constructor(props) {
    super(props);

    this.currVal = "";
    this.state = {
      keyVal: "",
      formattedVal: this.props.default,
      minutes: 0,
    };
    this.unformattedVal = "";
    this.inputRef = React.createRef();

    this.props.changeNotifyStart(TimeUtil.timeStrToMins(this.props.default));
  }

  onInputHandleStart = (ev) => {
    let val = ev.target.value;

    val = val.replace(/\D/g, "");

    if (val.length > 4) val = val.slice(0, 4);

    if (val) {
      if (val.length === 1) {
        if (Number(val) > 2) val = "0" + val;
      }
      if (val.length < 4) {
        this.currVal = val;
      } else if (val.length === 4) {
        let h = Number(val.slice(0, 2));
        let m = Number(val.slice(2));
        h = Math.min(h, 23);
        m = Math.min(m, 59);

        h = h < 10 ? "0" + h : h;
        m = m < 10 ? "0" + m : m;

        this.currVal = `${h}:${m}`;
      }
    } else {
      this.currVal = "";
    }

    let formattedVal = this.currVal;
    this.setState({ formattedVal: formattedVal });
    this.setState({ minutes: TimeUtil.timeStrToMins(formattedVal) });

    this.props.changeNotifyStart(TimeUtil.timeStrToMins(formattedVal));
  };

  validateTimeInput(inputVal) {
    let val = inputVal.replace(/[^0-9]+/g, "");

    if (!val) return "";

    if (val[0] > 2) return "0" + val;
  }

  render() {
    return (
      <div>
        <TextField
          color="secondary"
          name="projectStart"
          type="text"
          size="small"
          onChange={this.onInputHandleStart}
          onClick={(e) => e.target.select()}
          value={this.state.formattedVal}
        />
      </div>
    );
  }
}

export default TimeIn_TimeInput;
