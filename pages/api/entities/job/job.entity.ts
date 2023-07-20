import { randomUUID } from "crypto";

interface JobInterface {
  get id(): string;
  get position(): string;
  get enterprise(): string;
  get start(): string;
  get end(): string;
  get isCurrent(): boolean;
}

type JobProps = {
  id: string;
  position: string;
  enterprise: string;
  start: string;
  end?: string;
  isCurrent: boolean;
};

export class Job implements JobInterface {
  private _id: string;
  private _position: string;
  private _enterprise: string;
  private _start: string;
  private _end: string;
  private _isCurrent: boolean;

  constructor(props: JobProps) {
    this._id = randomUUID();
    this._position = props.position;
    this._enterprise = props.enterprise;
    this._start = props.start;
    this._end = props.end || "";
    this._isCurrent = props.isCurrent;
  }

  get id(): string {
    return this._id;
  }

  get position(): string {
    return this._position;
  }

  get enterprise(): string {
    return this._enterprise;
  }

  get start(): string {
    return this._start;
  }

  get end(): string {
    return this._end;
  }

  get isCurrent(): boolean {
    return this._isCurrent;
  }
}
