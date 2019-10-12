"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAllAdminDevices = getAllAdminDevices;
exports.getAllResources = getAllResources;
exports.sendEmail = sendEmail;
exports.getResource = getResource;
exports.getResourceEmail = getResourceEmail;
exports.createResource = createResource;
exports.updateResource = updateResource;
exports.deleteResource = deleteResource;
exports.authenticate = authenticate;

var _sequelize = require("sequelize");

var _bcryptjs = _interopRequireDefault(require("bcryptjs"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _nodemailer = _interopRequireDefault(require("nodemailer"));

var _model = _interopRequireDefault(require("./model"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function getAllAdminDevices() {
  const adminDevices = _model.default.findAll({
    where: {
      perfis_id: 2
    }
  });

  return adminDevices;
}

async function getAllResources(offset, limit, search) {
  const resources = _model.default.findAll({
    order: [['id', 'DESC']],
    offset,
    limit,
    include: [{
      association: _model.default.Perfil,
      attributes: ['id', 'descricao'],
      as: 'perfil'
    }],
    where: {
      ativo: 1,
      [_sequelize.Op.or]: [{
        '$perfil.descricao$': {
          [_sequelize.Op.like]: `%${search}%`
        }
      }, {
        nome: {
          [_sequelize.Op.like]: `%${search}%`
        }
      }, {
        email: {
          [_sequelize.Op.like]: `%${search}%`
        }
      }, {
        sobrenome: {
          [_sequelize.Op.like]: `%${search}%`
        }
      }, {
        username: {
          [_sequelize.Op.like]: `%${search}%`
        }
      }]
    }
  });

  return resources;
}

async function sendEmail(email, novaSenha) {
  const transporter = _nodemailer.default.createTransport({
    service: 'gmail',
    // smtp.gmail.com  //in place of service use host...
    secure: false,
    // true
    port: 25,
    // 465
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD
    },
    tls: {
      rejectUnauthorized: false
    }
  });

  const HelperOptions = {
    from: '"ICandy" <georgefeitosajr12@gmail.com',
    to: email,
    subject: 'Nova senha',
    text: `Aqui está sua nova senha ${novaSenha}`
  };
  transporter.sendMail(HelperOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }

    console.log('The message was sent!');
    console.log(info);
  });
}

async function getResource(id) {
  const resource = await _model.default.findByPk(id, {
    include: [{
      association: _model.default.Perfil,
      attributes: ['id', 'descricao']
    }]
  });
  return resource;
}

async function getResourceEmail(email) {
  const resource = await _model.default.findOne({
    order: [['id', 'DESC']],
    include: [{
      association: _model.default.Perfil,
      attributes: ['id', 'descricao']
    }],
    where: {
      ativo: 1,
      email: {
        [_sequelize.Op.like]: `${email}`
      }
    }
  });
  return resource;
}

function createResource(resource) {
  return _model.default.create(resource);
}

function updateResource(id, resource) {
  return _model.default.update(resource, {
    where: {
      id
    }
  });
}

function deleteResource(id) {
  return _model.default.findByPk(id).then(res => res.destroy());
}

async function authenticate(email, password) {
  const user = await _model.default.findOne({
    where: {
      email
    }
  });

  if (!user) {
    throw new Error('Usuário não encontrado');
  } else {
    const hash = user.get('password');

    const compare = _bcryptjs.default.compareSync(password, hash);

    const payload = { ...user.toJSON()
    }; // token

    return compare ? _jsonwebtoken.default.sign(payload, process.env.TOKEN_SECRET_KEY, {
      expiresIn: '6h'
    }) : null;
  }
}
//# sourceMappingURL=service.js.map