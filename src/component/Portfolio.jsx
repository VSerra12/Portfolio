import linkedInLogo from '../assets/linkedin.svg'
import gitHubLogo from '../assets/github.svg'
import emailLogo from '../assets/envelope-at.svg'
import chevronLeft from '../assets/chevron-left.svg'
import { useState } from 'react';


const Portfolio = () => {

    const [selected, setSelected] = useState("0")

    const selectedTab = e => {
        e.preventDefault()


        setSelected(e.target.id)
    }

    return (
        <>

            <header>
                <nav className="navbar bg-body-tertiary">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">
                            <img src={linkedInLogo} alt="Logo" className="d-inline-block align-text-top shadow-svg"></img>
                        </a>
                        <a className="navbar-brand" href="#">
                            <img src={gitHubLogo} alt="Logo" className="d-inline-block align-text-top shadow-svg"></img>
                        </a>
                        <a className="navbar-brand" href="#">
                            <img src={emailLogo} alt="Logo" className="d-inline-block align-text-top shadow-svg"></img>
                        </a>
                    </div>
                </nav>
            </header>
            <main>

                <div className='container'>
                    <div className="w-50 p-3 title-menu">
                        <h1>VICTORIA SERRA</h1>
                        <h2>Front-end Developer</h2>
                        <div className="tabs">
                            <div className='tab-border'>
                                <div className="tab-header">
                                    <div id='0' className={`${selected === "0" ? 'active' : ''}`} onClick={selectedTab}>
                                        <i className="fa fa-code"></i> Code
                                    </div>
                                    <div id='1' className={`${selected === "1" ? 'active' : ''}`} onClick={selectedTab}>
                                        <i className="fa fa-pencil-square"></i> About
                                    </div>
                                    <div id='2' className={`${selected === "2" ? 'active' : ''}`} onClick={selectedTab}>
                                        <i className="fa fa-bar-chart"></i> Services
                                    </div>
                                    <div id='3' className={`${selected === "3" ? 'active' : ''}`} onClick={selectedTab}>
                                        <i className="fa fa-envelope"></i> Contact
                                    </div>
                                </div>
                                <div className="tab-indicator" style={{ marginTop: `calc(50px + ${selected * 50}px)` }}><img src={chevronLeft} alt="Logo" className="d-inline-block align-text-top shadow-svg"></img></div>
                            </div>
                        </div>
                    </div>
                    <div className="w-50 p-3">
                        <div className="tab-content">

                            <div className={`${selected === "0" ? 'active' : ''}`}>
                                <i className="fa fa-code"></i>
                                <h2>This is code section</h2>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis eum similique quisquam officiis neque, cumque dignissimos architecto nisi totam sapiente eos et illum laborum atque vero ea perferendis consectetur veritatis.</p>
                            </div>

                            <div className={`${selected === "1" ? 'active' : ''}`}>
                                <i className="fa fa-pencil-square"></i>
                                <h2>This is about section</h2>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis eum similique quisquam officiis neque, cumque dignissimos architecto nisi totam sapiente eos et illum laborum atque vero ea perferendis consectetur veritatis.</p>
                            </div>

                            <div className={`${selected === "2" ? 'active' : ''}`}>
                                <i className="fa fa-bar-chart"></i>
                                <h2>This is services section</h2>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis eum similique quisquam officiis neque, cumque dignissimos architecto nisi totam sapiente eos et illum laborum atque vero ea perferendis consectetur veritatis.</p>
                            </div>

                            <div className={`${selected === "3" ? 'active' : ''}`}>
                                <i className="fa fa-envelope"></i>
                                <h2>This is contact section</h2>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis eum similique quisquam officiis neque, cumque dignissimos architecto nisi totam sapiente eos et illum laborum atque vero ea perferendis consectetur veritatis.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

        </>
    )
}

export default Portfolio