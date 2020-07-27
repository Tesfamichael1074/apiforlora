import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Loradata extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'number',
    required: true,
  })
  value1: number;

  @property({
    type: 'number',
    required: true,
  })
  value2: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Loradata>) {
    super(data);
  }
}

export interface LoradataRelations {
  // describe navigational properties here
}

export type LoradataWithRelations = Loradata & LoradataRelations;
