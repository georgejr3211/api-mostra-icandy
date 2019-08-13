import { Op } from 'sequelize';
import Resource from './model';

export async function getAllResources(offset, limit, search) {
  const resources = Resource.findAll({
    where: {
      ativo: 1,
      nome: {
        [Op.like]: `%${search}%`,
      },
      sobrenome: {
        [Op.like]: `%${search}%`,
      },
      username: {
        [Op.like]: `%${search}%`,
      },
    },
    order: [['id', 'DESC']],
    offset,
    limit,
    include: [
      {
        association: 'perfil',
        as: 'p',
        attributes: ['id', 'descricao'],
      },
    ],
  });

  return resources;
}

export async function getResource(id) {
  const resource = await Resource.findByPk(id, {
    include: [
      {
        association: 'perfil',
        as: 'p',
        attributes: ['id', 'descricao'],
      },
    ],
  });

  return resource;
}

export function createResource(resource) {
  return Resource.create(resource, {
    include: ['perfil'],
  });
}

export function updateResource(id, resource) {
  return Resource.update(resource, { where: { id } });
}

export function deleteResource(id) {
  return Resource.findByPk(id).then(res => res.destroy());
}
