import {
  Document,
  FilterQuery,
  Model,
  ProjectionType,
  UpdateQuery,
} from 'mongoose';

export abstract class EntityRepository<T extends Document> {
  constructor(protected readonly entityModel: Model<T>) {}

  async findOne(
    filterQuery: FilterQuery<T>,
    projection?: ProjectionType<T>,
  ): Promise<T> {
    return this.entityModel
      .findOne(filterQuery, {
        _id: 0,
        __v: 0,
        ...(projection as object),
      })
      .exec();
  }

  async find(
    filterQuery: FilterQuery<T>,
    projection?: ProjectionType<T>,
  ): Promise<T[]> {
    return this.entityModel
      .find(filterQuery, {
        _id: 0,
        __v: 0,
        ...(projection as object),
      })
      .exec();
  }

  async create(createEntityData: Partial<T>): Promise<T> {
    const newEntity = new this.entityModel(createEntityData);
    return newEntity.save();
  }

  async findOneAndUpdate(
    entityFilterQuery: FilterQuery<T>,
    updateEntityData: UpdateQuery<T>, // TODO: the type can be unknown
  ): Promise<T> {
    return this.entityModel.findOneAndUpdate(
      entityFilterQuery,
      updateEntityData,
      {
        new: true,
      },
    );
  }

  async deleteMany(entityFilterQuery: FilterQuery<T>): Promise<boolean> {
    const deleteResult = await this.entityModel.deleteMany(entityFilterQuery);

    return deleteResult.deletedCount > 0;
  }
}
