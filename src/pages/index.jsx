import React from "react";


const Home = () => {

    return (
        <div className="div-home">
            <h2>About</h2>
            <div>
                <p className="p-home">
                    I am a Software Engineer with expertise in Python and JavaScript. <br />
                    On the backend, I work with SQL and MongoDB databases. <br />
                    My frontend library of choice is React.
                    Explore my portfolio to see my work.
                </p>
            </div>
            <div>
                <h2>Contact</h2>
                <p className="p-home">
                You can contact me by email at  <a href="mailto:perezyenice@gmail.com" target="_blank">perezyenice@gmail.com</a><br />
                You can also find me on LinkedIn and GitHub.
                </p>
            </div>

            <div className="svgLine">
                <h2>Technologies I use</h2>

                <ul>
                    <li>
                        <img src="/js.svg" alt="js" />
                    </li>
                    <li>
                        <img src="/python.svg" alt="python" />
                    </li>
                    <li>
                        <img src="/django.svg" alt="django" />
                    </li>
                    <li>
                        <img src="/node.svg" alt="node" />
                    </li>

                    <li>
                        <img src="/mongo.svg" alt="mongodb" />
                    </li>

                    <li>
                        <img src="/mysql.svg" alt="mydql" />
                    </li>

                    <li>
                        <img src="/react.svg" alt="react" />
                    </li>
                    <li>
                        <img src="/typescript.svg" alt="golang" />
                    </li>

                </ul>
            </div>
        </div>
    )
}

export default Home;