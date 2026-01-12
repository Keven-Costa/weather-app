<p align="center">
  <img src="./src/assets/images/Weather-App.png" alt="Weather App Banner">
</p>

![Status](https://img.shields.io/badge/status-Concluído-green)
![Tecnologias](https://img.shields.io/badge/tech-JavaScript%20|%20Node.js%20|%20Open--Meteo-blue)
![License](https://img.shields.io/badge/license-MIT-green)

## 🌤️ Visão Geral do Projeto

Este projeto é um **aplicativo simples de previsão do tempo**, desenvolvido em **JavaScript** para execução via terminal. Ele permite que o usuário informe o nome de uma cidade e retorna a **temperatura atual**, consumindo a API pública **Open-Meteo**.

O objetivo principal do projeto é praticar **consumo de APIs**, **organização de código**, **boas práticas de desenvolvimento** e **separação de responsabilidades**, sendo ideal para fins acadêmicos e aprendizado.

---

## 📌 Índice

* Tecnologias Utilizadas
* Funcionalidades
* Estrutura do Projeto
* Como Executar
* Tratamento de Erros
* API Utilizada
* Possíveis Melhorias Futuras

---

## 🛠️ Tecnologias Utilizadas

* JavaScript (ES Modules)
* Node.js (v18 ou superior)
* Fetch API (nativa do Node)
* API Open-Meteo (Geocoding + Weather Forecast)

---

## 🌦️ Funcionalidades

* Entrada do nome da cidade via terminal
* Conversão do nome da cidade em coordenadas geográficas
* Consulta da temperatura atual
* Exibição clara do resultado no console
* Código modularizado e organizado em camadas

---

## 📂 Estrutura do Projeto

```
weather-app/
├── src/
│   ├── config/
│   │   └── apiConfig.js
│   ├── js/
│   │   ├── api/
│   │   │   └── weatherApi.js
│   │   ├── services/
│   │   │   └── weatherService.js
│   │   ├── ui/
│   │   │   └── consoleView.js
│   │   └── main.js
├── package.json
└── README.md
```

**Descrição das camadas:**

* `api`: responsável pela comunicação com a API externa
* `services`: contém a lógica de negócio
* `ui`: responsável pela exibição dos dados no console
* `main.js`: ponto de entrada da aplicação

---

## 🚀 Como Executar

### Pré-requisitos

* Node.js **18 ou superior**

Verifique a versão instalada:

```bash
node -v
```

---

### 1. Clone o repositório

```bash
git clone https://github.com/[seu-usuario]/weather-app.git
```

Acesse a pasta do projeto:

```bash
cd weather-app
```

---

### 2. Configure o projeto

No arquivo `package.json`, verifique se existe a configuração:

```json
{
  "type": "module"
}
```

---

### 3. Execute o aplicativo

```bash
node src/js/main.js "São Paulo"
```

Ou:

```bash
node src/js/main.js London
```

---

## ❗ Tratamento de Erros

O aplicativo trata os seguintes cenários:

* Cidade não encontrada
* Entrada de cidade ausente
* Falhas na requisição à API

Mensagens de erro são exibidas de forma clara no console.

---

## 🌐 API Utilizada

* **Open-Meteo Geocoding API**: converte o nome da cidade em latitude e longitude
* **Open-Meteo Weather Forecast API**: retorna os dados climáticos com base nas coordenadas

Documentação oficial: [https://open-meteo.com/](https://open-meteo.com/)

---

## 📌 Possíveis Melhorias Futuras

* Exibir mais dados climáticos (vento, umidade, sensação térmica)
* Criar interface web com HTML e CSS
* Implementar cache para cidades consultadas
* Adicionar testes automatizados
* Migrar a lógica para um backend (ex: Spring Boot)

---

## 📄 Licença

Este projeto está sob a licença MIT. Sinta-se à vontade para usar, modificar e compartilhar.
