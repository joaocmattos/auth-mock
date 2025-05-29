export interface Pedido {
  id: number;
  data: Date;
  status: string;
  itens: string[];
}

export interface Profile {
  id: number;
  telefone: string;
  cpf: string;
  endereco: string;
  historicoPedidos: Pedido[];
}

export interface User {
  id: number;
  nome: string;
  email: string;
  senha: string;
  profile: Profile;
}
