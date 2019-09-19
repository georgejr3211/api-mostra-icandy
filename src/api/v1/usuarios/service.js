import { Op } from 'sequelize';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import nodemailer from 'nodemailer';
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

export async function sendEmail(email, novaSenha) {
  const transporter = nodemailer.createTransport({
    service: 'gmail', // smtp.gmail.com  //in place of service use host...
    secure: false, // true
    port: 25, // 465
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });


  const HelperOptions = {
    from: '"ICandy" <georgefeitosajr12@gmail.com',
    to: email,
    subject: 'Nova senha',
    text: `Aqui está sua nova senha ${novaSenha}`,
  };


  transporter.sendMail(HelperOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log('The message was sent!');
    console.log(info);
  });
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

export async function getResourceEmail(email) {
  const resource = await Resource.findOne({
    order: [['id', 'DESC']],
    include: [
      {
        association: Resource.Perfil,
        attributes: ['id', 'descricao'],
      },
    ],
    where: {
      ativo: 1,
      email: {
        [Op.like]: `${email}`,
      },
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

export async function authenticate(email, password) {
  const user = await Resource.findOne({
    where: {
      email,
    },
  });

  if (!user) {
    throw new Error('Usuário não encontrado');
  } else {
    const hash = user.get('password');
    const compare = bcrypt.compareSync(password, hash);
    const payload = { ...user.toJSON() };

    // token
    return compare
      ? jwt.sign(payload, process.env.TOKEN_SECRET_KEY, { expiresIn: '6h' })
      : null;
  }
}
