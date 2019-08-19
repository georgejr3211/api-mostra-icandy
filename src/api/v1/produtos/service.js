import Resource from './model';

export async function getAllResources(offset, limit, search) {
  const resources = await Resource.findAll({
    attributes: ['id', 'nome'],
    include: [
      {
        association: Resource.Restaurante,
        required: true,
        attributes: ['id', 'nome'],
      },
      // {
      //   association: Resource.Categoria,
      //   required: false,
      //   attributes: ['id', 'nome'],
      // },
    ],
    // where: {
    //   '$restaurante.nome$': `${search}`,
    // },
    offset,
    limit,
  });
  // required: true => inner join, false => left join
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
