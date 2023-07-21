import { v4 as uuidv4 } from "uuid";

interface PerfilInterface {
  get id(): string;
  get image(): string;
  get name(): string;
  get jobTitle(): string;
  get bio(): {
    title: string;
    paragraph: string[];
  }[];
  get birthday(): string;
}

export type Paragraph = {
  title: string;
  paragraph: string[];
}[];

export type PerfilProps = {
  id?: string;
  image: string;
  name: string;
  jobTitle: string;
  bio: {
    title: string;
    paragraph: string[];
  }[];
  birthday: string;
};

export class Perfil implements PerfilInterface {
  private _id: string;
  private _image: string;
  private _name: string;
  private _jobTitle: string;
  private _bio: {
    title: string;
    paragraph: string[];
  }[];
  private _birthday: string;

  constructor(props: PerfilProps) {
    this._id = props.id || uuidv4();
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

  get bio(): {
    title: string;
    paragraph: string[];
  }[] {
    return this._bio;
  }

  get birthday(): string {
    return this._birthday;
  }
}
