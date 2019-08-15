import { Op } from 'sequelize';
import Resource from './model';

export async function getAllResources(offset, limit, search) {
  const resources = Resource.findAll({
    order: [['id', 'DESC']],
    offset,
    limit,
    include: [
      {
        association: Resource.Perfil,
        attributes: ['id', 'descricao'],
        as: 'perfil',
      },
    ],
    where: {
      ativo: 1,
      [Op.or]: [
        {
          '$perfil.descricao$': { [Op.like]: `%${search}%` },
        },
        {
          nome: { [Op.like]: `%${search}%` },
        },
        {
          email: { [Op.like]: `%${search}%` },
        },
        {
          sobrenome: { [Op.like]: `%${search}%` },
        },
        {
          username: { [Op.like]: `%${search}%` },
        },
      ],
    },
  });

  return resources;
}

export async function getResource(id) {
  const resource = await Resource.findByPk(id, {
    include: [
      {
        association: Resource.Perfil,
        attributes: ['id', 'descricao'],
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
