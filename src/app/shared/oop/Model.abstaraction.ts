import {validate, ValidationError} from 'class-validator';
import {serialize, deserialize} from 'class-transformer';

export abstract class ModelAbstraction {
  // public static deserialize(string: string): this {
  //   return deserialize(this, string);
  // }

  public serialize(): string {
    return serialize(this);
  }

  public async validate() {
    const erros: ValidationError[] = await validate(this);
    if (erros.length) throw erros[0];
  }
}
