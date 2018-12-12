import {ModelAbstraction} from "./Model.abstaraction";
import {IsDefined, IsInt, IsString} from "class-validator";
import {Exclude} from "class-transformer";

interface ProfileDto {
  desc: string;
  imgPath: string;
  location: string;
  money: number;
  name: string;
  phone: number;
}

export class Profile extends ModelAbstraction implements ProfileDto {
  @Exclude() @IsString() @IsDefined() private _desc: string;
  @Exclude() @IsString() private _imgPath: string;
  @Exclude() @IsString() @IsDefined() private _location: string;
  @Exclude() @IsInt() @IsDefined() private _money: number;
  @Exclude() @IsDefined() @IsInt() private _name: string;
  @Exclude() @IsDefined() @IsInt() private _phone: number;


  constructor(desc: string, imgPath: string, location: string, money: number, name: string, phone: number) {
    super();
    this._desc = desc;
    this._imgPath = imgPath;
    this._location = location;
    this._money = money;
    this._name = name;
    this._phone = phone;
  }


  get desc(): string {
    return this._desc;
  }

  set desc(value: string) {
    this._desc = value;
  }

  get imgPath(): string {
    return this._imgPath;
  }

  set imgPath(value: string) {
    this._imgPath = value;
  }

  get location(): string {
    return this._location;
  }

  set location(value: string) {
    this._location = value;
  }

  get money(): number {
    return this._money;
  }

  set money(value: number) {
    this._money = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get phone(): number {
    return this._phone;
  }

  set phone(value: number) {
    this._phone = value;
  }
}
