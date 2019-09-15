import { Op } from 'sequelize';
import Resource from './model';

export async function getAllResources(offset, limit, s) {
  const resources = await Resource.findAll({
    include: [{ all: true }],
    where: {
      [Op.or]: [
        // { '$pedido.formas_pagamento_id$': { [Op.like]: `%${s}%` } },
        // { '$pedido.usuarios_id$': { [Op.like]: `%${s}%` } },
        // { '$pedido.status_pedido_id$': { [Op.like]: `%${s}%` } },
        { '$pedido.observacao$': { [Op.like]: `%${s}%` } },
        { '$pedido.troco$': { [Op.like]: `%${s}%` } },
        { '$produto.nome$': { [Op.like]: `%${s}%` } },
        { '$produto.descricao$': { [Op.like]: `%${s}%` } },
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
