import { randomUUID } from "crypto";

interface PerfilInterface {
  get id(): string;
  get image(): string;
  get name(): string;
  get jobTitle(): string;
  get bio(): Paragraph;
  get birthday(): string;
}

type Paragraph = {
  title: string;
  paragraph: string[];
}[];

type PerfilProps = {
  id?: string;
  image: string;
  name: string;
  jobTitle: string;
  bio: Paragraph;
  birthday: string;
};

export class Perfil implements PerfilInterface {
  private _id: string;
  private _image: string;
  private _name: string;
  private _jobTitle: string;
  private _bio: Paragraph;
  private _birthday: string;

  constructor(props: PerfilProps) {
    this._id = randomUUID();
    this._image = props.image;
    this._name = props.name;
    this._jobTitle = props.jobTitle;
    this._bio = props.bio;
    this._birthday = props.birthday;
  }

  get id(): string {
    return this._id;
  }

  get image(): string {
    return this._image;
  }

  get name(): string {
    return this._name;
  }

  get jobTitle(): string {
    return this._jobTitle;
  }

  get bio(): Paragraph {
    return this._bio;
  }

  get birthday(): string {
    return this._birthday;
  }
}
