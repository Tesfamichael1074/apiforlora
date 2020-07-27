import {DefaultCrudRepository} from '@loopback/repository';
import {Loradata, LoradataRelations} from '../models';
import {MongodbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class LoradataRepository extends DefaultCrudRepository<
  Loradata,
  typeof Loradata.prototype.id,
  LoradataRelations
> {
  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource,
  ) {
    super(Loradata, dataSource);
  }
}
