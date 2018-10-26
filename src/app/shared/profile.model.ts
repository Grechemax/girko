export class Profile {
  constructor(
    public $key: string,
    public imgPath: string,
    public location: number,
    public money: number,
    public name: string,
    public phone: number,
    desc: string
  ) {}
}
