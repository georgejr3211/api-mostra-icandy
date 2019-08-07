import Usuario from './model';

export async function getAllResources() {
  const resources = await Usuario.findAll();

  return resources;
}

export async function getResource(id) {
  const resources = null; // await Usuario.findAll(id);

  return resources;
}
