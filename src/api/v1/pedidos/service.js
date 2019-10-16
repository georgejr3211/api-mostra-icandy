import { Op, Sequelize } from 'sequelize';
import Resource from './model';
import StatusPedido from '../statusPedidos/model';

export async function getAllResources(offset, limit, s) {
  let resources = await Resource.findAndCountAll({
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
      ativo: 1,
      '$usuario.ativo$': 1,
    },
    order: [['id', 'DESC']],
    offset,
    limit,
  });

  const status = await Resource.findAll({
    // include: [{
    //   model: StatusPedido,
    //   as: 'statusPedido',
    //   attributes: ['descricao'],
    // }],
    attributes: [
      'status_pedido_id',
      [Sequelize.fn('count', Sequelize.col('status_pedido_id')), 'qtd'],
    ],
    group: ['status_pedido_id'],
  });

  resources = { ...resources, status };

  return resources;
}

export async function getResource(id) {
  const resource = await Resource.findByPk(id, {
    include: [{ all: true }],
  });

  return resource;
}

export async function getResourceUser(id) {
  const resource = await Resource.findAll({
    include: [{ all: true }],
    where: {
      usuarios_id: id,
    },
    order: [['id', 'DESC']],
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
