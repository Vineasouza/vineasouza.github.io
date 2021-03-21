import React from 'react'
import './styles.css'
import { Icon } from '@iconify/react';
import codeOutlined from '@iconify/icons-ant-design/code-outlined';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import Perfil from '../assets/perfil2.jpg'

export default function main() {
    return (
        <div className="container" id="sobremim">

            <div className="leftContainerSobreMin">
                <Fade bottom>
                    <div className="imageContainer"/>
                </Fade>
            </div>

            <div className="rightContainerSobreMim">
                <img src={Perfil} className="hiddenImg" alt="personal"/>
                <Zoom>
                    <div className="headerContainer">
                        <Icon icon={codeOutlined} width={38}/>
                        <p className="textHeader">Sobre mim...</p>
                    </div>
                </Zoom>
                
                <Fade right>
                    <div className="contentContainer">
                        <p className="textContent">Olá, meu nome é Vinicius Souza. Acadêmico de Engenharia de Computação na Universidade Tecnológica Federal do Paraná - Campus Cornélio Procópio.</p>
                    </div>
                </Fade>
               
            </div>

        </div>
    )
}
