import { fn, col } from 'sequelize';
import Resource from './model';

export async function getAllResources() {
  const resources = await Resource.findOne({
    // include: [{ all: true }],
    attributes: [[fn('avg', col('avaliacao')), 'avgAvaliacao']],
    raw: true,
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
