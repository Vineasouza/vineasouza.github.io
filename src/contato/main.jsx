import React from "react";
import "./styles.css";
import { Icon } from "@iconify/react";
import codeOutlined from "@iconify/icons-ant-design/code-outlined";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";
import bxCoffeeTogo from "@iconify/icons-bx/bx-coffee-togo";
import bxlGitlab from "@iconify/icons-bx/bxl-gitlab";
import fileEarmark from "@iconify/icons-bi/file-earmark";
import facebookFill from "@iconify/icons-akar-icons/facebook-fill";
import instagramFill from "@iconify/icons-akar-icons/instagram-fill";
import githubFill from "@iconify/icons-akar-icons/github-fill";
import linkedinFill from "@iconify/icons-akar-icons/linkedin-fill";
import vscoIcon from "@iconify/icons-cib/vsco";
import mailOutlined from "@iconify/icons-ant-design/mail-outlined";

export default function main() {
  return (
    <div className="container" id="contato">
      <div className="leftContainerContato">
        <div className="fraseContainer">
          <Fade>
            <h1 className="textFrase">Turning</h1>
            <h1 className="textFrase">coffee</h1>
            <h1 className="textFrase">into</h1>
            <h1 className="textFrase">knowledge</h1>
          </Fade>
        </div>
      </div>

      <div className="rightContainerContato">
        <Zoom>
          <div className="headerContainerContato">
            <Icon icon={codeOutlined} width={38} />
            <p className="textHeader">Contato</p>
          </div>
        </Zoom>
        <div className="linksContainer">
          <Fade right>
            <div className="linkContainer">
              <Icon icon={bxCoffeeTogo} height={38} />
              <a
                className="textLink"
                href="https://www.notion.so/vineasouza/Coffee-Stores-bf7e904562ef4541b88e2ca68e577647"
                rel="noopener noreferrer"
                target="_blank"
              >
                Coffee Stores
              </a>
            </div>
            <div className="linkContainer">
              <Icon icon={fileEarmark} height={38} />
              <a
                className="textLink"
                href="https://drive.google.com/file/d/1sRg2qM5QQEb8v9w_s7K5MZNa3Fs_fm6v/view?usp=sharing"
                rel="noopener noreferrer"
                target="_blank"
              >
                Curriculum vitæ
              </a>
            </div>
            <div className="linkContainer">
              <Icon icon={facebookFill} height={38} />
              <a
                className="textLink"
                href="https://www.facebook.com/vineasouza"
                rel="noopener noreferrer"
                target="_blank"
              >
                Facebook
              </a>
            </div>
            <div className="linkContainer">
              <Icon icon={instagramFill} height={38} />
              <a
                className="textLink"
                href="https://www.instagram.com/vineasouza/"
                rel="noopener noreferrer"
                target="_blank"
              >
                Instagram
              </a>
            </div>
            <div className="linkContainer">
              <Icon icon={githubFill} height={38} />
              <a
                className="textLink"
                href="https://github.com/Vineasouza"
                rel="noopener noreferrer"
                target="_blank"
              >
                Github
              </a>
            </div>
            <div className="linkContainer">
              <Icon icon={bxlGitlab} height={38} />
              <a
                className="textLink"
                href="https://gitlab.com/vineasouza"
                rel="noopener noreferrer"
                target="_blank"
              >
                Gitlab
              </a>
            </div>
            <div className="linkContainer">
              <Icon icon={linkedinFill} height={38} />
              <a
                className="textLink"
                href={`https://www.linkedin.com/in/vineasouza/`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Linkedin
              </a>
            </div>
            <div className="linkContainer">
              <Icon icon={vscoIcon} height={38} />
              <a
                className="textLink"
                href="https://vsco.co/vineasouza/gallery"
                rel="noopener noreferrer"
                target="_blank"
              >
                VSCO
              </a>
            </div>
            <div className="linkContainer">
              <Icon icon={mailOutlined} height={38} />
              <a
                className="textLink"
                href="mailto:vineasouza33@hotmail.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                Email
              </a>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
}
