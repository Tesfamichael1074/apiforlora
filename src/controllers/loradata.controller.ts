import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {Loradata} from '../models';
import {LoradataRepository} from '../repositories';

export class LoradataController {
  constructor(
    @repository(LoradataRepository)
    public loradataRepository : LoradataRepository,
  ) {}

  @post('/loradata', {
    responses: {
      '200': {
        description: 'Loradata model instance',
        content: {'application/json': {schema: getModelSchemaRef(Loradata)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Loradata, {
            title: 'NewLoradata',
            exclude: ['id'],
          }),
        },
      },
    })
    loradata: Omit<Loradata, 'id'>,
  ): Promise<Loradata> {
    return this.loradataRepository.create(loradata);
  }

  @get('/loradata/count', {
    responses: {
      '200': {
        description: 'Loradata model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(Loradata) where?: Where<Loradata>,
  ): Promise<Count> {
    return this.loradataRepository.count(where);
  }

  @get('/loradata', {
    responses: {
      '200': {
        description: 'Array of Loradata model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(Loradata, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(Loradata) filter?: Filter<Loradata>,
  ): Promise<Loradata[]> {
    return this.loradataRepository.find(filter);
  }

  @patch('/loradata', {
    responses: {
      '200': {
        description: 'Loradata PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Loradata, {partial: true}),
        },
      },
    })
    loradata: Loradata,
    @param.where(Loradata) where?: Where<Loradata>,
  ): Promise<Count> {
    return this.loradataRepository.updateAll(loradata, where);
  }

  @get('/loradata/{id}', {
    responses: {
      '200': {
        description: 'Loradata model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Loradata, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Loradata, {exclude: 'where'}) filter?: FilterExcludingWhere<Loradata>
  ): Promise<Loradata> {
    return this.loradataRepository.findById(id, filter);
  }

  @patch('/loradata/{id}', {
    responses: {
      '204': {
        description: 'Loradata PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Loradata, {partial: true}),
        },
      },
    })
    loradata: Loradata,
  ): Promise<void> {
    await this.loradataRepository.updateById(id, loradata);
  }

  @put('/loradata/{id}', {
    responses: {
      '204': {
        description: 'Loradata PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() loradata: Loradata,
  ): Promise<void> {
    await this.loradataRepository.replaceById(id, loradata);
  }

  @del('/loradata/{id}', {
    responses: {
      '204': {
        description: 'Loradata DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.loradataRepository.deleteById(id);
  }
}
