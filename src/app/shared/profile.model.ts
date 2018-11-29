export class Profile {
  constructor(
    public $key: string,
    public imgPath: string,
    public location: string,
    public money: number,
    public name: string,
    public phone: number,
    desc: string
  ) {}
}
