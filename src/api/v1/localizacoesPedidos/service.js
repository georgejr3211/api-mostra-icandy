import Resource from './model';

export async function getAllResources(offset, limit, s) {
  const resources = await Resource.findAndCountAll({
    include: [{ all: true }],
    order: [['id', 'DESC']],
    offset,
    limit,
  });

  return resources;
}

export async function getResource(id) {
  const resource = await Resource.findByPk(id, {
    include: [{ all: true }],
  });

  return resource;
}

export async function getLocalizacaoPedido(id) {
  const resource = await Resource.findOne({
    where: {
      pedido_id: id,
    },
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
