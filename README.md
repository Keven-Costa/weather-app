<p align="center">
  <img src="./src/assets/images/Weather-App.png" alt="Weather App Banner">
</p>

![Status](https://img.shields.io/badge/status-Concluído-green)
![Tecnologias](https://img.shields.io/badge/tech-JavaScript%20|%20Node.js%20|%20Open--Meteo-blue)
![License](https://img.shields.io/badge/license-MIT-green)

Este é um aplicativo simples de previsão do tempo desenvolvido em **JavaScript**, que consome a API pública **Open-Meteo** para obter a **temperatura atual** de uma cidade informada pelo usuário via terminal.  
O projeto tem foco em **boas práticas**, **organização de código** e **separação de responsabilidades**.

---

## 📌 Índice

- [**Tecnologias Utilizadas**](#tecnologias-utilizadas)
- [**Funcionalidades**](#funcionalidades)
- [**Estrutura do Projeto**](#estrutura-do-projeto)
- [**Como Executar**](#como-executar)
- [**Possíveis Melhorias Futuras**](#possiveis-melhorias)

---

## <a id="tecnologias-utilizadas"></a> 🛠️ Tecnologias Utilizadas

- JavaScript (ES Modules)
- Node.js
- API Open-Meteo (Geocoding + Weather)
- Fetch API (nativa do Node)

---

## <a id="funcionalidades"></a> 🌦️ Funcionalidades

- Recebe o nome da cidade via terminal
- Converte o nome da cidade em coordenadas geográficas
- Consulta a temperatura atual usando a API Open-Meteo
- Exibe o resultado de forma clara no console
- Tratamento básico de erros (cidade inválida, falha na requisição)

---

## <a id="estrutura-do-projeto"></a> 📂 Estrutura do Projeto

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

````

**Descrição das camadas:**
- `api`: comunicação com APIs externas
- `services`: lógica de negócio
- `ui`: exibição dos dados no console
- `main.js`: ponto de entrada da aplicação

---

## <a id="como-executar"></a> 🚀 Como Executar o Projeto

### Pré-requisitos

- **Node.js 18 ou superior**

Verifique a versão:
```bash
node -v
````

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

No `package.json`, certifique-se de que existe:

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

## <a id="possiveis-melhorias"></a> 📌 Possíveis Melhorias Futuras

* Exibir mais dados climáticos (vento, sensação térmica, umidade)
* Criar interface web com HTML e CSS
* Implementar cache de cidades
* Adicionar testes automatizados
* Migrar a lógica para um backend (ex: Spring Boot)

---

## 📄 Licença

Este projeto está sob a licença MIT. Sinta-se à vontade para usar, modificar e compartilhar.


