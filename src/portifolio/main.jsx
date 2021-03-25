import React from 'react'
import { Icon } from '@iconify/react';
import codeOutlined from '@iconify/icons-ant-design/code-outlined';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import letterC from '@iconify/icons-emojione-monotone/letter-c';
import javaIcon from '@iconify/icons-cib/java';
import bxlPython from '@iconify/icons-bx/bxl-python';
import bxlJavascript from '@iconify/icons-bx/bxl-javascript';
import bxlReact from '@iconify/icons-bx/bxl-react';
import htmlFive2 from '@iconify/icons-icomoon-free/html-five2';
import html3Icon from '@iconify/icons-uil/html3';
import nodeIcon from '@iconify/icons-fa-brands/node';
import mysqlIcon from '@iconify/icons-grommet-icons/mysql';
import postgresqlIcon from '@iconify/icons-cib/postgresql';
import apacheSpark from '@iconify/icons-cib/apache-spark';
import hadoopIcon from '@iconify/icons-grommet-icons/hadoop';
import amazonAws from '@iconify/icons-cib/amazon-aws';
import MongoDB from '../assets/MongoDB.png';
import './styles.css'

export default function Main() {
    return (
        <div className="containerPortifolio" id="portifolio">

            <div className="leftContainerPorfolio">
            </div>

            <div className="rightContainerPortifolio">
                <Zoom>
                    <div className="headerContainerPortifolio">
                        <Icon icon={codeOutlined} width={38}/>
                        <p className="textHeader">Portifólio</p>
                    </div>
                </Zoom>
                <Fade>
                    <div className="stackContainer">
                        <p>Stack</p>
                        <Fade right>
                            <div className="iconStackContainer">
                                <Icon icon={letterC} width={38} />
                                <Icon icon={javaIcon} width={38} />
                                <Icon icon={bxlPython} width={38} />
                                <Icon icon={htmlFive2} width={38} />
                                <Icon icon={html3Icon} width={38} />
                                <Icon icon={bxlJavascript} width={38} />
                                <Icon icon={nodeIcon} width={38} />
                                <Icon icon={bxlReact} width={38} />
                            </div>
                        </Fade>
                    </div>

                    <div className="stackContainer">
                        <p>Database</p>
                        <Fade right>
                            <div className="iconStackContainer">
                                <Icon icon={mysqlIcon} width={38} />
                                <Icon icon={postgresqlIcon} width={38} />
                                <img src={MongoDB} alt="" style={{width: 100, height: 40}}/>
                            </div>
                        </Fade>
                    </div>

                    <div className="separator"></div>
                    
                    {/* *** INICIAÇÃO CIENTIFICA *** */}
                    <div className="portifolioContainer">   
                        <a className="portifolioTextTitle" href="https://github.com/Vineasouza/AnaliseSentimentoMercadoAcoes" rel="noopener noreferrer" target="_blank">Iniciação Científica</a>
                        <p className="icTextSubTitle">Análise de sentimento em tempo real de notícias do mercado de ações brasileiro</p>
                        <div className="portifolioTechContainer">
                            <p className="portifolioTextTech">Tecnologias</p>
                            <div className="portifolioTechs">
                                <Icon icon={bxlPython} width={38} />
                                <Icon icon={apacheSpark} width={38} />
                                <Icon icon={hadoopIcon} width={38} />
                            </div>
                        </div>
                        <Fade right>    
                            <div className="portifolioContent">
                                <p className="portifolioTextContent">
                                    Este projeto descreve o treinamento de um classificador Naive Bayes, baseado em tweets previamente classificados quanto a sua polaridade, o qual é utilizado para realizar uma análise  de  sentimento  sobre  textos  gerados  em  stream,  provenientes  da  rede  social Twitter. O objetivo deste estudo é realizar uma análise de sentimento em tempo real, sobre tweets publicados por veículos de notícias especializados no mercado de ações brasileiro. 
                                </p>
                                <p className="portifolioTextContent">
                                    O desenvolvimento do analisador de sentimento requereu 6 fases: armazenamento da base de tweets manualmente rotulados; pré-processamento, utilizando métodos de limpeza do texto,  tokenização  e  remoção  de  stopwords; aplicação  do  método  Term  Frequency–Inverse Document Frequency (TF-IDF); treinamento do classificador; coleta dos novos tweets em streaming e; análise de sentimento em  tempo real. Após o desenvolvimento das fases citadas anteriormente, o analisador de sentimento atingiu uma acurácia de 76,8 por cento
                                </p>
                                <div className="icPubli">
                                    <p className="portifolioTextContent">Publicações:</p>
                                    <li>
                                    <a className="icTextPubli" href="https://eventos.utfpr.edu.br/sicite/sicite2020/paper/view/6244" rel="noopener noreferrer" target="_blank">XXV Seminário de Iniciação Científica e Tecnológica da UTFPR (SICITE 2020)</a>                                
                                    </li>
                                    <li>
                                        <a className="icTextPubli" href="https://www.brazilianjournals.com/index.php/BRJD/article/view/23959" rel="noopener noreferrer" target="_blank"> Brazilian Journal of Development</a>                                
                                    </li>
                                </div>
                            </div>
                        </Fade>
                    </div>

                    <div className="separator"></div>

                    {/* *** BOT COVID *** */}
                    <div className="portifolioContainer">
                        <a className="portifolioTextTitle" href="https://github.com/Vineasouza/covid-twitterbot" rel="noopener noreferrer" target="_blank">Bot COVID-19</a>
                        <div className="portifolioTechContainer">
                            <p className="portifolioTextTech">Tecnologias</p>
                            <div className="portifolioTechs">
                                <Icon icon={bxlPython} width={38} />
                            </div>
                        </div>
                        <Fade right>
                            <div className="portifolioContent">
                                <p className="portifolioTextContent">
                                    O bot foi desenvolvido em Python para rede social Twitter, com a
                                    função de realizar atualizações automáticas dos
                                    números do COVID-19 no Brasil e no mundo, utilizando
                                    como fonte o site Worldometer. O deploy foi realizado
                                    utilizando a plataforma Heroku, em servidor 24/7.
                                </p>
                            </div>
                        </Fade>
                    </div>

                    <div className="separator"></div>

                    {/* MEDRADAR */}
                    <div className="portifolioContainer">
                        <a className="portifolioTextTitle" href="https://github.com/Vineasouza/MedRadar" rel="noopener noreferrer" target="_blank">MedRadar</a>
                        <div className="portifolioTechContainer">
                            <p className="portifolioTextTech">Tecnologias</p>
                            <div className="portifolioTechs">
                                <Icon icon={nodeIcon} width={38} />
                                <Icon icon={bxlReact} width={38} />
                                <Icon icon={htmlFive2} width={38} />
                                <Icon icon={html3Icon} width={38} />
                                <Icon icon={amazonAws} width={38} />
                                <img src={MongoDB} alt="" style={{width: 80, height: 30}}/>
                            </div>
                        </div>
                        <Fade right>
                            <div className="portifolioContent">
                                <p className="portifolioTextContent">
                                    A ideia do projeto é realizar um buscador de
                                    profissionais da saúde, em um aplicativo web, que reúna
                                    todas as informações do profissional e a localização do
                                    seu consultório, clínica ou hospital em um mapa
                                    integrado ao aplicativo.
                                </p>
                                <p className="portifolioTextContent">
                                    As tecnologias utilizadas foram NodeJS para o BackEnd, MongoDB para o banco de dados NoSQL e ReactJS para o FrontEnd. Também foram utilizadas a Geocoding API
                                    do Google Maps, API de localidade do IBGE e o serviço
                                    da AWS S3, para armazenamento das imagens via
                                    upload. O deploy foi realizado utilizando as plataforma
                                    Heroku e Vercel.
                                </p>
                            </div>
                        </Fade>
                    </div>
                    
                    <div className="separator"></div>
                    
                    {/* CLICKCONSULTAS */}
                    <div className="portifolioContainer">
                        <a className="portifolioTextTitle" href="#portifolioContainer" rel="noopener noreferrer" target="">CickConsultas</a>
                        <div className="portifolioTechContainer">
                            <p className="portifolioTextTech">Tecnologias</p>
                            <div className="portifolioTechs">
                                <Icon icon={nodeIcon} width={32} />
                                <Icon icon={bxlReact} width={32} />
                                <Icon icon={htmlFive2} width={32} />
                                <Icon icon={html3Icon} width={32} />
                                <Icon icon={postgresqlIcon} width={32} />
                            </div>
                        </div>
                        <Fade right>
                            <div className="portifolioContent">
                                <p className="portifolioTextContent">
                                    Sistema de agendamento de consultas, realizado em um aplicativo mobile desenvolvido em React Native, destinado ao usuário final, um gerenciador web desenvolvido em ReactJS, destinado a donos de clinicas e seus médicos, o backend desenvolvido em NodeJS e o banco de dados utilizando PostgresSQL. 
                                </p>
                                <p className="portifolioTextContent">
                                    Projeto realizado enquanto membro da <a className="icTextPubli" href="https://www.unect.com.br/">UnectJr</a>.
                                </p>
                            </div>
                        </Fade>
                    </div>
                </Fade>

            </div>            
        </div>
    )
}
