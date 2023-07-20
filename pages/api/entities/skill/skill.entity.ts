interface SkillInterface {
  get id(): string;
  get name(): string;
  get level(): number;
}

type SkillProps = {
  id: string;
  name: string;
  level: number;
};

export class Skill implements SkillInterface {
  private _id: string;
  private _name: string;
  private _level: number;

  constructor(props: SkillProps) {
    this._id = props.id;
    this._name = props.name;
    this._level = props.level;
  }

  get id(): string {
    return this._id;
  }

  get name(): string {
    return this._name;
  }

  get level(): number {
    return this._level;
  }
}
