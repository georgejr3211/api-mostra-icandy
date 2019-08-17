import { Op } from 'sequelize';
import Resource from './model';

export async function getAllResources(offset, limit, search) {
  const resources = Resource.findAll({
    order: [['id', 'DESC']],
    offset,
    limit,
    where: {
      ativo: 1,
      [Op.or]: [
        {
          nome: { [Op.like]: `%${search}%` },
        },
      ],
    },
  });

  return resources;
}

export async function getResource(id) {
  const resource = await Resource.findByPk(id);

  return resource;
}

export function createResource(resource) {
  return Resource.create(resource);
}

export function updateResource(id, resource) {
  return Resource.update(resource, { where: { id } });
}

export function deleteResource(id) {
  return Resource.findByPk(id).then(res => res.destroy());
}
