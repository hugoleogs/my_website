import './Nav.css'
import React from 'react'

export default props =>
    <aside className="menu-area">
        <nav className="menu">
            {/* Refatorar Depois!! */}
            <a href="https://calculadorareactv2.netlify.app/" target="__blank">
                <i className="fa fa-calculator"></i>
                <strong> Calculadora React</strong>
            </a>
            <a href="https://github.com/hugoleogs/calculadora_react/" target="__blank">
                <i className="fa fa-file-code-o"></i> 
                <strong> Cod Calculadora</strong>
            </a>
            <a href="https://getclosedcaptionv3.netlify.app/" target="__blank">
                <i className="fa fa-language"></i> 
                <strong> Speack to Write</strong>
            </a>
            <a href="https://github.com/hugoleogs/getClosedCaption/" target="__blank">
                <i className="fa fa-file-code-o"></i> 
                <strong> Cod Speack/Write</strong>
            </a>
            <a href="https://github.com/hugoleogs/data_science_sacolao/blob/main/case_afrodev_sacolao.ipynb" target="__blank">
                <i className="fa fa-align-left"></i> 
                <strong> Bag Analysis</strong>
            </a>
            <a href="https://github.com/hugoleogs/projeto_de_metodos/blob/main/modelo.ipynb" target="__blank">
                <i className="fa fa-stethoscope"></i> 
                <strong> SEIRD to Covid 19</strong>
            </a>
            <a href="https://github.com/hugoleogs/exercicios_python/" target="__blank">
                <i className="fa fa-file-code-o"></i> 
                <strong> Exercicios Python</strong>
            </a>
            <a href="https://github.com/hugoleogs/exercicios_Javascript" target="__blank">
                <i className="fa fa-file-code-o"></i> 
                <strong> Exercicios JS</strong>
            </a>
        </nav>
    </aside>