import { User } from './user.model';

export const users: User[] = [
  {
    id: 1,
    nome: 'João Silva',
    email: 'joao.silva@email.com',
    senha: 'senha123',
    profile: {
      id: 1,
      telefone: '11999999999',
      cpf: '12345678900',
      endereco: 'Rua das Flores, 123',
      historicoPedidos: [
        {
          id: 1,
          data: new Date('2024-05-01'),
          status: 'Entregue',
          itens: ['Sushi', 'Temaki']
        },
        {
          id: 2,
          data: new Date('2024-06-15'),
          status: 'Em preparo',
          itens: ['Yakissoba']
        }
      ]
    }
  },
  {
    id: 2,
    nome: 'Maria Souza',
    email: 'maria.souza@email.com',
    senha: 'maria2024',
    profile: {
      id: 2,
      telefone: '11988888888',
      cpf: '98765432100',
      endereco: 'Av. Central, 456',
      historicoPedidos: [
        {
          id: 3,
          data: new Date('2024-05-20'),
          status: 'Entregue',
          itens: ['Combo Sushi', 'Refrigerante']
        }
      ]
    }
  },
  {
    id: 3,
    nome: 'Carlos Pereira',
    email: 'carlos.pereira@email.com',
    senha: '1234seguro',
    profile: {
      id: 3,
      telefone: '11977777777',
      cpf: '11223344556',
      endereco: 'Rua da Paz, 789',
      historicoPedidos: []
    }
  }
];
