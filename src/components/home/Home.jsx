import React from "react"
import gif from '../../assets/imgs/gif.gif'
import Main from '../template/Main'

export default props => 
    <Main icon="home" title="Início" subtitle="Portifólio de Projetos">
        <div className='display-4'>Bem Vindo!</div>
        <hr />
        <p className="mb-0">Portifólio criado com o intuito de mostrar meus projetos ao decorrer da minha carreira.</p>

        <div className="gif_abertura">
            <img src={gif} alt="gif_engraçado" />
        </div>
        <a href="https://www.linkedin.com/in/hugo-leonardo-gomes-silva/"  className="redes_sociais" target="__blank">
            <img src="https://img.shields.io/badge/-Hugo%20Gomes-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/hugo-leonardo-gomes-silva/" alt="Linkedin.com" />
        </a>
        <a href="https://github.com/hugoleogs/" className="redes_sociais"  target="__blank">
            <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white/" alt="GitHub" />
        </a>
    </Main>