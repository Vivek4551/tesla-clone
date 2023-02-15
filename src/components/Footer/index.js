import React from "react";

import { Wrapper,Content } from "./footer.syle";

const Footer = ({bottom}) =>{

    return(
        <Wrapper>
            <Content className={bottom} >
                <div>
                <a href="https://github.com/Vivek4551/tesla-clone" target='_blank' >Tesla-Clone &copy; 2022</a>
                </div>
                <div>
                <a href="mailto:chiragchouhan163@gmail.com" target='_blank'>Gmail</a>
                <a href="https://www.linkedin.com/in/vivek-kumar-5a0b38200/" target="_blank" >LinkedIn</a>
                <a href="https://github.com/Vivek4551" target="_blank" >GitHub</a>
                </div>
            </Content>
        </Wrapper>
    )
}

export default Footer