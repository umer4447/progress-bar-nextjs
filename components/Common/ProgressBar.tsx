import React from "react";
import classnames from "classnames";

import ProgressBarType, {
  ProgressBarEventsType,
} from "@/types/Common/ProgressBarType";
import css from "@/styles/Common/ProgressBar.module.scss";
import useDidMount from "../../hooks/useDidMount";

const ProgressBar = ({
  className = "",
  percent = -1,
  onTop = false,
  autoIncrement = false,
  intervalTime = 200,
  spinner = "left",
}: ProgressBarType) => {
  const [progress, setProgress] = React.useState(percent);
  const [events, setEvents] = React.useState({
    interval: undefined,
    timeout: undefined,
  } as ProgressBarEventsType);

  useDidMount(() => {
    handleProps();
    return () => {
      clearEvents();
    };
  }, []);
  React.useEffect(() => {
    if (progress >= 99) {
      events.timeout = setTimeout(() => {
        setProgress(-1);
        clearEvents();
      }, 400);
    }
  }, [progress]);

  const clearEvents = () => {
    if (events.interval) {
      clearInterval(events.interval);
    }
    if (events.timeout) {
      clearTimeout(events.timeout);
    }
  };
  const increment = () => {
    setProgress((prev) => {
      const val = prev + Math.random() + 1;
      return val < 99 ? val : 99;
    });
  };
  const handleProps = () => {
    if (autoIncrement && percent >= 0 && percent < 99) {
      const event = setInterval(increment, intervalTime);
      setEvents({ ...events, interval: event });
    }

    if (percent >= 99) {
      setProgress(99.9);
    } else {
      setProgress(percent);
    }
  };

  return (
    <div
      className={classnames(css.progressBar, className, {
        [css.progressBarOnTop]: onTop,
        [css.progressBarHide]: progress < 0 || progress >= 100,
      })}
    >
      <div
        className={css.progressBarProgress}
        style={{ width: `${progress < 0 ? 0 : progress}%` }}
      />
      {spinner ? (
        <div
          className={classnames(css.progressBarSpinner, {
            [spinner === "left"
              ? css.progressBarSpinnerLeft
              : css.progressBarSpinnerRight]: spinner,
          })}
        >
          <div className={css.progressBarSpinnerIcon} />
        </div>
      ) : null}
    </div>
  );
};

export default ProgressBar;
