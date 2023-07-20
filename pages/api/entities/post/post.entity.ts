interface PostInterface {
  get title(): string;
  get image(): string;
  get date(): string;
  get link(): string;
  toString(): string;
}

type PostProps = {
  title: string;
  image: string;
  date: string;
  link: string;
};

export class Post implements PostInterface {
  private _title: string;
  private _image: string;
  private _date: string;
  private _link: string;

  constructor(props: PostProps) {
    this._title = props.title;
    this._image = props.image;
    this._date = props.date;
    this._link = props.link;
  }

  get title(): string {
    return this._title;
  }

  get image(): string {
    return this._image;
  }

  get date(): string {
    return this._date;
  }

  get link(): string {
    return this._link;
  }

  toString(): string {
    return this._title + ", postado em " + this._date;
  }
}
