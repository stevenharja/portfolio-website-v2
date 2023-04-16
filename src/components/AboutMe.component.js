import React, { Component } from 'react';

class AboutMe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            homeButton: props.homeButton,
            skills: {
                myintegrator: [
                    'wordpress',
                    'shopify',
                    'html5',
                    'css3',
                    'sass',
                    'js',
                    'react',
                    'php',
                    'laravel'
                ],
                kobecreations: [
                    'wordpress',
                    'shopify',
                    'html5',
                    'css3',
                    'sass',
                    'js',
                    'php',
                ],
                berniesmusicland: [
                    'wordpress',
                    'html5',
                    'css3',
                    'js',
                    'php'
                ]
            },
            skillOpened: 'myintegrator',
            skillNames: {
                html5: 'HTML',
                css3: 'CSS',
                sass: 'Sass',
                js: 'Javascript',
                react: 'React',
                php: 'PHP',
                laravel: 'Laravel',
                wordpress: 'Wordpress / Woocommerce',
                shopify: 'Shopify'
            }
        };
    }

    openSkill(jobName) {
        let skillOpened = this.state.skillOpened;
        if (skillOpened === jobName) {
            this.setState({
                skillOpened: null
            });
        } else {
            this.setState({
                skillOpened: jobName
            })
        }
    }

    render() {
        return (
            <>
                {this.state.homeButton ? this.state.homeButton : <></>}
                <div className="about-me">
                    <div className="hero">
                        <div className="hero__content">
                            <h1 className="text-center hero__heading h3 pb-2 appear-from-top appear-from-top--1">Hi There! I'm Steven</h1>
                            <h2 className="text-center hero__subheading pb-3 appear-from-top appear-from-top--2">A passionate developer that likes to problem-solve and learn.</h2>
                            <div className="text-center appear-from-top appear-from-top--3">
                                <a href="#experience" className="hero__link h3 mx-3">
                                    Experience
                                </a>
                                <a href="/pdf/Steven_Harjapramana_Resume.pdf" target="_blank" className="hero__link h3 mx-3">
                                    Resume
                                </a>
                                <a href="mailto:stevenharja@gmail.com" className="hero__link h3 mx-3">
                                    Email
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="experience row" id="experience">
                    <div className="experience__header-wrapper py-4 col-2">
                        <p className="experience__header">Experience</p>
                    </div>
                    <div className="experience-list col-10">
                        <div className="experience-list__item pt-4 pb-5">
                            <h2 className='experience-list__item-header mb-3'>MyIntegrator {"(2021 - Present)"}</h2>
                            <ul className='experience-list__item-list'>
                                <li>
                                    <span className='experience-list__item-list__span experience-list__item-list__span--main'>Connect E-Commerce Platforms</span>
                                    <span className='experience-list__item-list__span experience-list__item-list__span--sub'>{"(Woocommerce, BigCommerce, Shopify, Ordermentum, etc.)"}</span>
                                </li>
                                <li>
                                    <span className='experience-list__item-list__span experience-list__item-list__span--main'>With Accounting & ERP Platforms</span>
                                    <span className='experience-list__item-list__span experience-list__item-list__span--sub'>{"(XERO, MYOB, Sage, Pronto, etc.)"}</span>
                                </li>
                                <li>
                                    <span className='experience-list__item-list__span experience-list__item-list__span--main'>Other Relevant Processes</span>
                                    <span className='experience-list__item-list__span experience-list__item-list__span--sub'>{"(API, Git Version Control & CI/CD, Linux, etc.)"}</span>
                                </li>
                            </ul>
                            <p className='experience-list__item-detail'>
                                As a developer in MyIntegrator, I am responsible for enabling IT and e-commerce for business needs across many different online platforms.
                                My responsibilities involves developing an integration for a business, by connecting different e-commerce platforms towards other platform and allowing them to seamlessly connect their two different platforms, such as creating customers, sending orders, maintain inventory and products. <br/><br/>
                                This also requires me to maintain a constant communication and good expectations with my clients, gathering requirements as well as doing research and implementing APIs or direct database access in order to create the connection between the two platform while making sure proper testing and documentation is done.
                            </p>
                            <div className={this.state.skillOpened === 'myintegrator' ? 'experience-list__item-skill experience-list__item-skill--active' : 'experience-list__item-skill'} onClick={() => {this.openSkill('myintegrator')}}>
                                <span className='experience-list__item-skill__title'>Language, Framework & Platform Experience</span>
                            </div>
                            {this.state.skillOpened === 'myintegrator' ? 
                            <ul className="experience-list__item-skill-list">
                                {
                                    this.state.skills.myintegrator.map((line) => {
                                        return <li data-message={`${this.state.skillNames[line]}`} key={line}><i className={`fa-brands fa-${line}`}></i></li>
                                    })
                                }
                            </ul> : <></>}
                        </div>
                        <div className="experience-list__item py-5">
                            <h2 className='experience-list__item-header mb-3'>Kobe Creations {"(2021 - Present)"}</h2>
                            <ul className='experience-list__item-list'>
                                <li>
                                    <span className='experience-list__item-list__span experience-list__item-list__span--main'>Create Responsive Website</span>
                                    <span className='experience-list__item-list__span experience-list__item-list__span--sub'>{"(Wordpress, Shopify Liquid, BigCommerce Stencil, Woocommerce)"}</span>
                                </li>
                                <li>
                                    <span className='experience-list__item-list__span experience-list__item-list__span--main'>and Customized Apps</span>
                                    <span className='experience-list__item-list__span experience-list__item-list__span--sub'>{"(BigCommerce, Shopify, Wordpress Plugin)"}</span>
                                </li>
                                <li>
                                    <span className='experience-list__item-list__span experience-list__item-list__span--main'>Other</span>
                                    <span className='experience-list__item-list__span experience-list__item-list__span--sub'>{"(Git Version Control & CI/CD, Responsive Design)"}</span>
                                </li>
                            </ul>
                            <p className='experience-list__item-detail'>
                                In Kobe Creations, I am tasked for developing websites or integrations for clients across many popular e-commerce platforms, such as Woocommerce, Shopify and BigCommerce.
                                My responsibilities involves developing a website or an app by following through design specifications and client communication to ensure that client are satisfied with how their brand is represented. <br/><br/>
                                This requires me to focus on creating a responsive website design, or customised apps and maintaining client relationship before, during and after development to update according to their feedbacks.
                            </p>
                            <div className={this.state.skillOpened === 'kobecreations' ? 'experience-list__item-skill experience-list__item-skill--active' : 'experience-list__item-skill'} onClick={() => {this.openSkill('kobecreations')}}>
                                <span className='experience-list__item-skill__title'>Language, Framework & Platform Experience</span>
                            </div>
                            {this.state.skillOpened === 'kobecreations' ? 
                            <ul className="experience-list__item-skill-list">
                                {
                                    this.state.skills.kobecreations.map((line) => {
                                        return <li data-message={`${this.state.skillNames[line]}`} key={line}><i className={`fa-brands fa-${line}`}></i></li>
                                    })
                                }
                            </ul> : <></>}
                        </div>
                        <div className="experience-list__item py-5">
                            <h2 className='experience-list__item-header mb-3'>Bernies Music Land {"(2020 - 2021)"}</h2>
                            <ul className='experience-list__item-list'>
                                <li>
                                    <span className='experience-list__item-list__span experience-list__item-list__span--main'>Manage website content</span>
                                </li>
                                <li>
                                    <span className='experience-list__item-list__span experience-list__item-list__span--main'>Maintain and grow online presence</span>
                                    <span className='experience-list__item-list__span experience-list__item-list__span--sub'>{"(Mailchimp, Google Analytics, Facebook)"}</span>
                                </li>
                            </ul>
                            <p className='experience-list__item-detail'>
                                As a website administrator & developer, I am responsible for updating website content, which includes deleting obsolete pages, adding new pages, events or products as instructed, troubleshoot any technical issues for staff, 
                                and maintain a good online presence of the business by publishing events or using email services to send out notifications.
                            </p>
                            <div className={this.state.skillOpened === 'berniesmusicland' ? 'experience-list__item-skill experience-list__item-skill--active' : 'experience-list__item-skill'} onClick={() => {this.openSkill('berniesmusicland')}}>
                                <span className='experience-list__item-skill__title'>Language, Framework & Platform Experience</span>
                            </div>
                            {this.state.skillOpened === 'berniesmusicland' ? 
                            <ul className="experience-list__item-skill-list">
                                {
                                    this.state.skills.berniesmusicland.map((line) => {
                                        return <li data-message={`${this.state.skillNames[line]}`} key={line}><i className={`fa-brands fa-${line}`}></i></li>
                                    })
                                }
                            </ul> : <></>}
                        </div>
                    </div>
                </div>
            </>
        );
    }
  }
  
export default AboutMe;
  