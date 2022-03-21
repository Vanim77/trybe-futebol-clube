import * as sinon from 'sinon';
import * as chai from 'chai';
import * as jwt from 'jsonwebtoken';
import * as bcrypt from 'bcryptjs';
import chaiHttp = require('chai-http');
import { Response } from 'superagent';
import { app } from '../app';
import Users from '../database/models/Users';

chai.use(chaiHttp);

const { expect } = chai;

let ChaiHttpResponse: Response;

const loginSucess = {
  user: {
    id: 77,
    username: 'vanim77',
    role: 'atacante',
    email: 'vanim77@gmail.com'
  },
  token: '@abcdefgh0987654321@'
}

const token = '@abcdefgh0987654321@';

describe('Testa a rota POST /login', () => {
  before(async () => {
    sinon.stub(Users, 'findOne')
      .resolves({
        id: 77,
        username: 'vanim77',
        role: 'atacante',
        email: 'vanim77@gmail.com',
        password: '123456789'
      } as Users)

    sinon.stub(jwt, 'sign')
      .resolves(token)
  })

  after(() => {
    (Users.findOne as sinon.SinonStub).restore();
    (jwt.sign as sinon.SinonStub).restore();
  })

  it(`Deve retornar um objeto com as propriedades esperadas
   quando a requisição é feita com dados válidos`, async () => {
    ChaiHttpResponse = await chai.request(app)
    .post('/login')
    .send({ email: 'vanim77@gmail.com', password: '123456789' })

    expect(ChaiHttpResponse).to.have.status(200);
    expect(ChaiHttpResponse.body).to.have.a.property('user');
    expect(ChaiHttpResponse.body.user).to.have.a.property('id');
    expect(ChaiHttpResponse.body.user).to.have.a.property('username');
    expect(ChaiHttpResponse.body.user).to.have.a.property('role');
    expect(ChaiHttpResponse.body.user).to.have.a.property('email');
    expect(ChaiHttpResponse.body).to.have.a.property('token');
  })
})

// describe('Testa a rota GET /login/validate', () => {
//   chai.request(app).get('/login/validate')
// })