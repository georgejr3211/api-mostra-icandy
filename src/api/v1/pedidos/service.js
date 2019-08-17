import { Op } from 'sequelize';
import Resource from './model';

export async function getAllResources(offset, limit, s) {
  const resources = await Resource.findAndCountAll({
    include: [{ all: true }],
    where: {
      [Op.or]: [
        { '$usuario.nome$': { [Op.like]: `%${s}%` } },
        { '$formaPagamento.descricao$': { [Op.like]: `%${s}%` } },
        { '$statusPedido.descricao$': { [Op.like]: `%${s}%` } },
        { '$usuario.nome$': { [Op.like]: `%${s}%` } },
        { '$usuario.email$': { [Op.like]: `%${s}%` } },
        { '$usuario.sobrenome$': { [Op.like]: `%${s}%` } },
        { '$usuario.username$': { [Op.like]: `%${s}%` } },
      ],
    },
    order: [
      ['id', 'DESC'],
    ],
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
