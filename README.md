# 💸 DayForDay - Gestor de Gastos Mensais

Um sistema de gestão financeira pessoal desenvolvido com foco em performance e usabilidade. A aplicação permite o controle detalhado de despesas organizadas por datas, oferecendo métricas automáticas para análise de consumo.

![Status do Projeto](https://img.shields.io/badge/Status-EmDesenvolvimento-yellow) ![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB)

## 📸 Demonstração

<img width="1920" height="922" alt="Captura de tela 2025-12-27 092617" src="https://github.com/user-attachments/assets/8b4c407e-4bb6-4282-9059-865761b67acd" />
<img width="550" height="643" alt="image" src="https://github.com/user-attachments/assets/8a667d87-64ba-4383-a65d-d44216474e9d" /> <img width="446" height="621" alt="image" src="https://github.com/user-attachments/assets/0ed996b9-7215-4a24-8a6e-9f7b864c8eac" />

<br>
<br>

## 🚀 Tecnologias Utilizadas

O projeto foi construído utilizando o ecossistema moderno do React, priorizando velocidade e componentização.

- **[React.js](https://reactjs.org/)**: Biblioteca para construção da interface reativa.
- **[Vite](https://vitejs.dev/)**: Ferramenta de build para garantir alta performance e HMR instantâneo.
- **[JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)**: Lógica avançada para manipulação de arrays e datas.
- **CSS Modules / Custom Components**: Estilização modular. _Nota: O projeto utiliza modais customizados para inserção de dados, substituindo dependências externas pesadas._

<br>
<br>

## ✨ Funcionalidades Principais

O sistema conta com algoritmos dedicados para processar os dados inseridos e gerar insights em tempo real.

<br>

### 📝 Gestão de Despesas

- **Lançamento por Data:** Adição de gastos vinculados a dias específicos, permitindo um histórico cronológico.
- **Controle Granular:** Funcionalidade para **deletar gastos específicos** dentro de uma data, sem perder o registro do dia inteiro.

### 📊 Dashboard de Métricas (Analytics)

O sistema calcula automaticamente indicadores financeiros baseados nos dados inseridos:

- **💰 Total do Mês:** Soma consolidada de todas as despesas ativas.
- **📅 Média Mensal:** Projeção e cálculo estatístico do comportamento de gasto mensal.
- **daily Média por Dia:** Cálculo dinâmico: `(Total Gasto / Dias com Registros)`.
- **🏆 Categoria de Maior Gasto:** Algoritmo que agrupa despesas e identifica qual setor (ex: Alimentação, Transporte) está consumindo a maior fatia do orçamento.

<br>
<br>

## 🔧 Como rodar o projeto localmente

Siga os passos abaixo para testar a aplicação na sua máquina:

1. **Clone o repositório:**

   ```bash
   git clone (---)

   ```

2. **Acesse a pasta do projeto:**

   ```bash
   cd DayForDay\DayForDay

   ```

3. **Instale as dependências:**

   ```bash
   npm install

   ```

4. **Inicie o servidor de desenvolvimento:**

   ```bash
   npm run dev

   ```

5. **Acesse no navegador:**
   ```bash
   http://localhost:5173
   ```

<br>
<br>

## 🧠 Aprendizados e Desafios

Este projeto foi fundamental para consolidar conceitos de desenvolvimento Front-end:

Gerenciamento de Estado (React Hooks): Sincronização entre a lista de gastos, o modal de inserção e os componentes de visualização (Cards de médias).

Lógica de Programação: Implementação de algoritmos para iterar sobre arrays de objetos complexos, filtrar categorias e calcular médias aritméticas em tempo real.

Componentização: Criação de Modais interativos manuais, focando em manter o bundle leve sem depender de bibliotecas de UI externas.

## 📄 Licença

Este projeto está sob a licença MIT. Sinta-se à vontade para utilizar como base para estudos.

<br>

**Desenvolvido por Samuel Salles Lopes Macedo**
