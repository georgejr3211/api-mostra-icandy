import { Op } from 'sequelize';
import Resource from './model';

export async function getAllResources(offset, limit, search) {
  const resources = await Resource.findAll({
    include: [{ all: true }],
    offset,
    limit,
    where: {
      nome: {
        [Op.like]: `%${search}%`,
      },
      qtd_estoque: {
        [Op.gt]: 0,
      },
      ativo: 1,
    },
    order: [['id', 'DESC']],
  });
  return resources;
}

export async function getResource(id) {
  const resource = await Resource.findByPk(id);

  return resource;
}

export async function getResourceProdutosByIdForaEstoque(ids) {
  const resource = await Resource.findAll({
    where: [
      {
        id: {
          [Op.in]: ids,
        },
      },
    ],
  });

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
