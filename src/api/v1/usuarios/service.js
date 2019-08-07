import Resource from './model';

export async function getAllResources() {
  const resources = await Resource.findAll();

  return resources;
}

export async function getResource(id) {
  const resource = await Resource.findByPk(id);

  return resource;
}

export function createResource(resource) {
  return Resource.bulkCreate(resource);
}

export function updateResource(id, resource) {
  return Resource.findByPk(id)
    .then(res => res.update({ first_name: resource.first_name }));
}

export function deleteResource(id) {
  return Resource.findByPk(id)
    .then(res => res.destroy());
}
