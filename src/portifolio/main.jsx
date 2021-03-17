import React from 'react'
import { Icon } from '@iconify/react';
import codeOutlined from '@iconify/icons-ant-design/code-outlined';
import Zoom from 'react-reveal/Zoom';
import letterC from '@iconify/icons-emojione-monotone/letter-c';
import javaIcon from '@iconify/icons-cib/java';
import bxlPython from '@iconify/icons-bx/bxl-python';
import bxlJavascript from '@iconify/icons-bx/bxl-javascript';
import bxlReact from '@iconify/icons-bx/bxl-react';
import htmlFive2 from '@iconify/icons-icomoon-free/html-five2';
import html3Icon from '@iconify/icons-uil/html3';
import nodeIcon from '@iconify/icons-fa-brands/node';
import Icon2 from '@iconify/svelte';
import mysqlIcon from '@iconify/icons-grommet-icons/mysql';
import postgresqlIcon from '@iconify/icons-cib/postgresql';
import apacheSpark from '@iconify/icons-cib/apache-spark';
import hadoopIcon from '@iconify/icons-grommet-icons/hadoop';
import './styles.css'

export default function main() {
    return (
        <div className="container" id="portifolio">

            <div className="leftContainer">
            </div>

            <div className="rightContainer">
                <Zoom>
                    <div className="headerContainerPortifolio">
                        <Icon icon={codeOutlined} width={39}/>
                        <p className="textHeader">Portifólio</p>
                    </div>
                </Zoom>
            </div>            
        </div>
    )
}
