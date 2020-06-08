﻿import React from "react";
import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { greeting } from "../../portfolio";
import {Fade} from "react-reveal";
import emoji from "react-easy-emoji";

export default function Greeting() {
  return (
    <Fade bottom duration={1000} distance="40px">
    <div className="greet-main" id="greeting">
      <div className="greeting-main">
        <div className="greeting-text-div">
          <div>
            <h1 className="greeting-text">
              {" "}
              Hey you, <br/> <span className="dev-name">I'm Dani</span>
              {" "}
              <span className="wave-emoji">{emoji("👋")}</span>
            </h1>
            <p className="greeting-text-p subTitle">
              A passionate <b>Software Developer</b> {emoji("🚀")} experienced in building beautiful iOS applications in <b>Swift</b> and <b>Obj-c</b>.
              <br/>Moreover I also have experience building web apps with React.
            </p>
            <SocialMedia />
            <div className="button-greeting-div">
              <Button text="Contact me" href="#contact" />
              {/** <Button text="See my resume" newTab={true} href={greeting.resumeLink} />*/}
            </div>
          </div>
        </div>
        <div className="greeting-image-div">
          <img alt="saad sitting on table" src={require("../../assets/images/manOnTable.svg")}></img>
        </div>
      </div>
    </div>
    </Fade>
  );
}
