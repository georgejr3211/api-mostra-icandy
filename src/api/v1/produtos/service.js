import { Op } from 'sequelize';
import Resource from './model';

export async function getAllResources(offset, limit, s) {
  const resources = await Resource.findAndCountAll({
    include: [{ all: true }],
    where: {
      [Op.or]: [
        { '$categoria.nome$': { [Op.like]: `%${s}%` } },
        { '$restaurante.nome$': { [Op.like]: `%${s}%` } },
        { '$restaurante.cnpj$': { [Op.like]: `%${s}%` } },
        { '$restaurante.descricao$': { [Op.like]: `%${s}%` } },
        { '$restaurante.telefone$': { [Op.like]: `%${s}%` } },
      ],
    },
    order: [['id', 'DESC']],
    offset,
    limit,
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
