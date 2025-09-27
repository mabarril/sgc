export interface HistoricoMatricula {
  ano: number;
  unidade: string;
  classe: string;
  cargo: string;
}

export interface Desbravador {
  id: string;
  dataDeAdmissao: string;
  nomeCompleto: string;
  dataNascimento: string;
  rg: string;
  cpf: string;
  morada: string;
  numero: string;
  bairro: string;
  cidade: string;
  codigoPostal: string;
  telefone: string;
  email: string;
  nomeResponsavel: string;
  telefoneResponsavel: string;
  historicoMatriculas: HistoricoMatricula[];
}
 


const listaDesbravadores = [
  // --- Registro 1 ---
  {
    id: 'dbv_001',
    dataDeAdmissao: '2022-02-10',
    nomeCompleto: 'Carlos Eduardo Souza',
    dataNascimento: '2011-03-22',
    rg: '22.333.444-5',
    cpf: '222.333.444-55',
    morada: 'Avenida Brasil',
    numero: '1500',
    bairro: 'Jardim América',
    cidade: 'São Paulo',
    codigoPostal: '01430-000',
    telefone: '(11) 99876-5432',
    email: 'carlos.souza@email.com',
    nomeResponsavel: 'Fernanda Souza',
    telefoneResponsavel: '(11) 91234-5678',
    historicoMatriculas: [
      { ano: 2025, unidade: 'Tigres', classe: 'Excursionista', cargo: 'Membro' },
      { ano: 2024, unidade: 'Tigres', classe: 'Pioneiro', cargo: 'Membro' }
    ]
  },
  // --- Registro 2 ---
  {
    id: 'dbv_002',
    dataDeAdmissao: '2023-03-15',
    nomeCompleto: 'Beatriz Almeida Costa',
    dataNascimento: '2012-08-10',
    rg: '33.444.555-6',
    cpf: '333.444.555-66',
    morada: 'Rua das Flores',
    numero: '123',
    bairro: 'Centro',
    cidade: 'Rio de Janeiro',
    codigoPostal: '20000-000',
    telefone: '(21) 98765-4321',
    email: 'beatriz.costa@email.com',
    nomeResponsavel: 'Roberto Costa',
    telefoneResponsavel: '(21) 98765-1111',
    historicoMatriculas: [
      { ano: 2025, unidade: 'Águias', classe: 'Pioneiro', cargo: 'Membro' },
      { ano: 2024, unidade: 'Águias', classe: 'Pesquisador', cargo: 'Tesoureira de Unidade' },
      { ano: 2023, unidade: 'Águias', classe: 'Companheiro', cargo: 'Membro' }
    ]
  },
  // --- Registro 3 ---
  {
    id: 'dbv_003',
    dataDeAdmissao: '2024-02-20',
    nomeCompleto: 'Lucas Martins Ferreira',
    dataNascimento: '2013-05-30',
    rg: '44.555.666-7',
    cpf: '444.555.666-77',
    morada: 'Avenida Paulista',
    numero: '2000',
    bairro: 'Bela Vista',
    cidade: 'São Paulo',
    codigoPostal: '01310-100',
    telefone: '(11) 91234-8765',
    email: 'lucas.ferreira@email.com',
    nomeResponsavel: 'Juliana Martins',
    telefoneResponsavel: '(11) 91234-2222',
    historicoMatriculas: [
      { ano: 2025, unidade: 'Falcões', classe: 'Companheiro', cargo: 'Membro' },
      { ano: 2024, unidade: 'Falcões', classe: 'Amigo', cargo: 'Membro' }
    ]
  },
  // --- Registro 4 ---
  {
    id: 'dbv_004',
    dataDeAdmissao: '2021-08-01',
    nomeCompleto: 'Isabela Pereira Santos',
    dataNascimento: '2010-11-12',
    rg: '55.666.777-8',
    cpf: '555.666.777-88',
    morada: 'Rua da Consolação',
    numero: '500',
    bairro: 'Consolação',
    cidade: 'São Paulo',
    codigoPostal: '01301-000',
    telefone: '(11) 95555-4444',
    email: 'isabela.santos@email.com',
    nomeResponsavel: 'Marcos Pereira',
    telefoneResponsavel: '(11) 95555-3333',
    historicoMatriculas: [
      { ano: 2025, unidade: 'Panteras', classe: 'Guia', cargo: 'Capitã de Unidade' },
      { ano: 2024, unidade: 'Panteras', classe: 'Excursionista', cargo: 'Membro' }
    ]
  },
  // --- Registro 5 ---
  {
    id: 'dbv_005',
    dataDeAdmissao: '2025-02-05',
    nomeCompleto: 'Matheus Oliveira Lima',
    dataNascimento: '2014-01-25',
    rg: '66.777.888-9',
    cpf: '666.777.888-99',
    morada: 'Praça da Sé',
    numero: '10',
    bairro: 'Sé',
    cidade: 'São Paulo',
    codigoPostal: '01001-000',
    telefone: '(11) 94444-3333',
    email: 'matheus.lima@email.com',
    nomeResponsavel: 'Carla Oliveira',
    telefoneResponsavel: '(11) 94444-2222',
    historicoMatriculas: [
      { ano: 2025, unidade: 'Lobos', classe: 'Amigo', cargo: 'Membro' }
    ]
  },
  // --- Registro 6 ---
  {
    id: 'dbv_006',
    dataDeAdmissao: '2023-04-11',
    nomeCompleto: 'Gabriela Rodrigues Alves',
    dataNascimento: '2012-07-18',
    rg: '77.888.999-0',
    cpf: '777.888.999-00',
    morada: 'Avenida Ipiranga',
    numero: '800',
    bairro: 'República',
    cidade: 'São Paulo',
    codigoPostal: '01039-000',
    telefone: '(11) 93333-2222',
    email: 'gabriela.alves@email.com',
    nomeResponsavel: 'Sérgio Rodrigues',
    telefoneResponsavel: '(11) 93333-1111',
    historicoMatriculas: [
      { ano: 2025, unidade: 'Leoas', classe: 'Pesquisador', cargo: 'Membro' },
      { ano: 2024, unidade: 'Leoas', classe: 'Companheiro', cargo: 'Membro' }
    ]
  },
  // --- Registro 7 ---
  {
    id: 'dbv_007',
    dataDeAdmissao: '2020-02-12',
    nomeCompleto: 'Rafael Azevedo Ribeiro',
    dataNascimento: '2009-09-09',
    rg: '88.999.000-1',
    cpf: '888.999.000-11',
    morada: 'Rua Augusta',
    numero: '1200',
    bairro: 'Cerqueira César',
    cidade: 'São Paulo',
    codigoPostal: '01412-000',
    telefone: '(11) 92222-1111',
    email: 'rafael.ribeiro@email.com',
    nomeResponsavel: 'Lúcia Azevedo',
    telefoneResponsavel: '(11) 92222-0000',
    historicoMatriculas: [
      { ano: 2025, unidade: 'Tubarões', classe: 'Guia', cargo: 'Conselheiro Associado' }
    ]
  },
  // --- Registro 8 ---
  {
    id: 'dbv_008',
    dataDeAdmissao: '2024-03-01',
    nomeCompleto: 'Laura Barbosa Mendes',
    dataNascimento: '2013-12-01',
    rg: '99.000.111-2',
    cpf: '999.000.111-22',
    morada: 'Avenida Rio Branco',
    numero: '300',
    bairro: 'Campos Elíseos',
    cidade: 'São Paulo',
    codigoPostal: '01206-000',
    telefone: '(11) 96666-5555',
    email: 'laura.mendes@email.com',
    nomeResponsavel: 'Fábio Mendes',
    telefoneResponsavel: '(11) 96666-4444',
    historicoMatriculas: [
      { ano: 2025, unidade: 'Corujas', classe: 'Companheiro', cargo: 'Membro' },
      { ano: 2024, unidade: 'Corujas', classe: 'Amigo', cargo: 'Membro' }
    ]
  },
  // --- Registro 9 ---
  {
    id: 'dbv_009',
    dataDeAdmissao: '2022-09-10',
    nomeCompleto: 'Vinicius Gomes Rocha',
    dataNascimento: '2011-06-15',
    rg: '12.345.678-9',
    cpf: '123.456.789-00',
    morada: 'Rua Frei Caneca',
    numero: '700',
    bairro: 'Consolação',
    cidade: 'São Paulo',
    codigoPostal: '01307-000',
    telefone: '(11) 97777-6666',
    email: 'vinicius.rocha@email.com',
    nomeResponsavel: 'Sandra Gomes',
    telefoneResponsavel: '(11) 97777-5555',
    historicoMatriculas: [
      { ano: 2025, unidade: 'Tigres', classe: 'Excursionista', cargo: 'Membro' },
      { ano: 2024, unidade: 'Tigres', classe: 'Pioneiro', cargo: 'Secretário de Unidade' },
      { ano: 2023, unidade: 'Tigres', classe: 'Pesquisador', cargo: 'Membro' }
    ]
  },
  // --- Registro 10 ---
  {
    id: 'dbv_010',
    dataDeAdmissao: '2025-02-18',
    nomeCompleto: 'Sofia Castro Nunes',
    dataNascimento: '2014-04-04',
    rg: '23.456.789-0',
    cpf: '234.567.890-11',
    morada: 'Largo do Arouche',
    numero: '50',
    bairro: 'República',
    cidade: 'São Paulo',
    codigoPostal: '01219-010',
    telefone: '(11) 98888-7777',
    email: 'sofia.nunes@email.com',
    nomeResponsavel: 'Ricardo Castro',
    telefoneResponsavel: '(11) 98888-6666',
    historicoMatriculas: [
      { ano: 2025, unidade: 'Águias', classe: 'Amigo', cargo: 'Membro' }
    ]
  }
];

// Para usar estes dados no futuro, poderíamos exportá-los.
export default listaDesbravadores;
