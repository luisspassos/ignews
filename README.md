<h1 align="center">

<img src="https://raw.githubusercontent.com/luisspassos/ignews/main/public/images/avatar.svg" alt="ignews" width="100px"/>

</h1>

<p align="center">
  IGNEWS - News portal 📰🚀
  <br>
  <br>

  <img alt="Language count" src="https://img.shields.io/github/repo-size/luisspassos/ignews"/>
  
  <img alt="Made by Luís Passos" src="https://img.shields.io/badge/made%20by-luisspassos-%237519C1">
  
  <a href="https://github.com/luisspassos/ignews/commits/main">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/luisspassos/ignews">
  </a>

  <img alt="License" src="https://img.shields.io/github/license/luisspassos/ignews">
</p>

---

<p align="center">
  <a href="#dart-about">About</a> &#xa0; | &#xa0; 
  <a href="#rocket-technologies">Technologies</a> &#xa0; | &#xa0;
  <a href="#white_check_mark-requirements">Requirements</a> &#xa0; | &#xa0;
  <a href="#checkered_flag-Starting">Starting</a> &#xa0; &#xa0; | &#xa0;
  <a href="#framed_picture-images">Images</a> &#xa0; &#xa0;
</p>

<br>

## :dart: About ##

The blog possesses a buy system integrated with STRIPE, and after the user to accomplish the payment, their subscription will be active and ready to view the entire content

The ig.news project is a blog where the users can access the content of each post according to their subscription status.<br>
O blog possui um sistema de compra integrado com o STRIPE, e após o usuário realizar o pagamento, sua inscrição estará ativa e pronta para visualizar o conteúdo completo
de todo o blog. Caso o usuário não deseje optar pela assinatura, ele terá acesso limitado ao conteúdo das postagens. E todos os dados necessários para se fazer verificações
de assinaturas ou dados dos usuários, estão salvos no banco de dados FaunaDB.
<br>
<br>
Essa é uma aplicação Serverless, ou seja, todo o processo que dependeria de um backend foi integrado dentro do front e seguindo o padrão da JAMStack.
<br>
As postagens são feitas pelo painel do Prismic CMS e integradas diretamente pelo front.


## :rocket: Tecnologias ##

As seguintes tecnologias foram utilizadas no projeto:

- [Next.js](https://nextjs.org/)
- [Prismic CMS](https://prismic.io/)
- [Stripe](https://stripe.com/)
- [FaunaDB](https://fauna.com/)

## :white_check_mark: Requerimentos ##

- [Node](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/lang/en/)

## :checkered_flag: Começando ##

```bash
# Clone this project
$ git clone https://github.com/luisspassos/ignews

# Access
$ cd ignews

# Install dependencies
$ yarn install

# Run the project
$ yarn dev

# The server will initialize in the <http://localhost:3000>
```
## :framed_picture: Imagens ##

<h1 align="center">
    <img alt = "Web app" src = "./.github/image-01.png" width = "500px" />
    <img alt = "Web app" src = "./.github/image-02.png" width = "500px" />
    <img alt = "Web app" src = "./.github/image-03.png" width = "500px" />
    <img alt = "Web app" src = "./.github/image-04.png" width = "500px" />
</h1>
