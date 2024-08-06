
import linkedInLogo from '../assets/linkedin.svg'
import gitHubLogo from '../assets/github.svg'
import emailLogo from '../assets/envelope-at.svg'
import chevronLeft from '../assets/chevron-left.svg'
import { useState } from 'react';
import { Fade } from 'react-bootstrap';


const Portfolio = () => {

    const [selected, setSelected] = useState("0")

    const selectedTab = e => {
        e.preventDefault()


        setSelected(e.target.id)
    }

    const isSelected = (num) => {
        return selected === num
    }

    // tabs.click(function() {
    //     var content = this.hash.replace('/','');
    //     tabs.removeClass("active");
    //     $(this).addClass("active");
    //     $("#content").find('p').hide();
    //     $(content).fadeIn(200);
    //   });

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
                                    <div id='0' className={`${isSelected("0")? 'active' : ''}`} onClick={selectedTab}>
                                        Code
                                    </div>
                                    <div id='1' className={`${isSelected("1")? 'active' : ''}`} onClick={selectedTab}>
                                        About
                                    </div>
                                    <div id='2' className={`${isSelected("2")? 'active' : ''}`} onClick={selectedTab}>
                                        Services
                                    </div>
                                    <div id='3' className={`${isSelected("3")? 'active' : ''}`} onClick={selectedTab}>
                                        Contact
                                    </div>
                                </div>
                                <div className="tab-indicator" style={{ marginTop: `calc(50px + ${selected * 50}px)` }}><img src={chevronLeft} alt="Logo" className="d-inline-block align-text-top shadow-svg"></img></div>
                            </div>
                        </div>
                    </div>
                    <div className="w-50 p-3">
                        <div className="tab-content">
                            <Fade in={isSelected("0")} className={`${isSelected("0")? '' : 'tab'}`}>
                                <div>
                                    <h2>This is code section</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis eum similique quisquam officiis neque, cumque dignissimos architecto nisi totam sapiente eos et illum laborum atque vero ea perferendis consectetur veritatis.</p>
                                </div>
                            </Fade>
                            <Fade in={isSelected("1")} className={`${isSelected("1")? '' : 'tab'}`}>
                                <div>
                                    <h2>This is about section</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis eum similique quisquam officiis neque, cumque dignissimos architecto nisi totam sapiente eos et illum laborum atque vero ea perferendis consectetur veritatis.</p>
                                </div>
                            </Fade>
                            <Fade in={isSelected("2")} className={`${isSelected("2")? '' : 'tab'}`}>
                                <div>
                                    <h2>This is services section</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis eum similique quisquam officiis neque, cumque dignissimos architecto nisi totam sapiente eos et illum laborum atque vero ea perferendis consectetur veritatis.</p>
                                </div>
                            </Fade>
                            <Fade in={isSelected("3")} className={`${isSelected("3")? '' : 'tab'}`}>
                                <div>
                                    <h2>This is contact section</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis eum similique quisquam officiis neque, cumque dignissimos architecto nisi totam sapiente eos et illum laborum atque vero ea perferendis consectetur veritatis.</p>
                                </div>
                            </Fade>
                        </div>
                    </div>
                </div>
            </main>

        </>
    )
}

export default Portfolio