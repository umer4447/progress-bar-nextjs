type ProgressBarType = {
  className?: string;
  percent: number;
  onTop?: boolean;
  autoIncrement?: boolean;
  intervalTime?: number;
  spinner?: false | "left" | "right";
};

export type ProgressBarEventsType = {
  interval: NodeJS.Timer | undefined;
  timeout: NodeJS.Timeout | undefined;
};

export default ProgressBarType;
