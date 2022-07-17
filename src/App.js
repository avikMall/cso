import './App.css';
import React, { useState } from 'react';
import Slider from './components/Slider/Slider'
import logo from './components/duck.png'
import menu from './components/menu.png'
import Events from './components/Events';
import avik from './About/avik.jpeg'
import drishti from './About/drishti.jpeg'
import kelly from './About/kelly.jpg'
import sachi from './About/Sachi.JPG'
import Collapsible from './Committees/Collapsible';
import codeed from './Committees/codeed.png'
import opensource from './Committees/opensource.png'
import goods from './Committees/goods.PNG'
import cyber from './Committees/cyber.PNG'
import gwc from './Committees/gwc.PNG'
import webdev from './Committees/webdev.PNG'
import ch1 from './Committees/sahithi.jpg'
import ch2 from './Committees/samuel.jpg'
import ch3 from './Committees/ch3.png'
import ch4 from './Committees/ch4.PNG'
import ch5 from './Committees/ch5.PNG'
import ch6 from './Committees/ch6.PNG'
import ch7 from './Committees/ch7.PNG'
import ch8 from './Committees/ch8.PNG'
import ch9 from './Committees/ch9.PNG'
import ch10 from './Committees/ch10.PNG'
import ch11 from './Committees/ch11.PNG'

// NOTES:
// - About, Blog, Commitees, HackTAMS (special box)
// - Footer w/ socials and contact info
// - Main page w/ what is CSO info, promoVid, and upcoming events/facebook, and slideshow maybe
// - about page with same what is CSO info and exec intros
// - commitee page w/ list of commitee's, commitee head info and description/ fb link
// - Blog go to the blog i think 
// - hacktams special box w/ redirect to hacktams page


const ShowHome = () => {
  const [show, setShow] = useState(false);

  if (window.location.pathname === "/") {
    return (
      <div className='content'>
        
            <div className='first-section'>
              <div className='slider-item'>
              <h1 className="slider-head"><strong className='purple'>Gallery</strong></h1>
              <Slider />
              </div>
              <div className="cso-desc" id='cso-desc' onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>
                <h1 className="desc-head"><strong className='green'>What is CSO?</strong></h1>
                <p className="desc-text">Welcome to the 2022-2023 CSO Website! The TAMS Computer Science Organization (CSO) exposes students to a wide array of <a className={show && 'txv'}>opportunities</a> within <a className={show && 'txv'}>computer science</a> such as hackathons, competitive programming, volunteering, and much more! It doesn't matter if you have <a className={show && 'txv'}>no experience</a> or you aren't on the CS track. See you in the fall!</p>
                <h1 className="desc-head"><strong className='blue'>What do we do?</strong></h1>
                <p className="desc-text">CSO holds a variety of events, GAs, and competitions throughout the year. Our biggest event, <a className={show && 'tvv'}>HackTAMS</a>, takes place in February. Make sure to visit the HackTAMS website for more information. Apart from HackTAMS, CSO also hosts <a className={show && 'tvv'}>bi-weekly GAs</a> where you can learn more about computer science! We also have a number of <a className={show && 'tvv'}>committees</a> that do different activities (check out the committees page), and a <a className={show && 'tvv'}>competitions</a> team that competes throughout the year!</p>
              </div>
            </div>
            
            
            <div className='third-section'>
            <div className='upcoming-events' id='upcoming-events'>
                <h1 className="upcoming-head"><strong className='red'>Upcoming Events</strong></h1>
                <Events />
              </div>  
              <div className='fb' id='fb'>
              <div id="fb-root"></div>
                {(function(d, s, id) {
                    var js, fjs = d.getElementsByTagName(s)[0];
                    if (d.getElementById(id)) return;
                    js = d.createElement(s);
                    js.id = id;
                    js.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v14.0&appId=1265760814201130&autoLogAppEvents=1';
                    fjs.parentNode.insertBefore(js, fjs);
                }(document, 'script', 'facebook-jssdk'))}
              
              <h1 className="fb-head"><strong className='yellow'>FaceBook Group</strong></h1>
              <div className="fb-group" 
                data-href="https://www.facebook.com/groups/5862984087050740" 
                data-width="380" 
                data-show-metadata="false"
                data-skin="dark">
              </div>
              </div>
                
                          
            </div>
        
            <div className="promo-vid">
            <h1 className="desc-head"><strong className='other'>Promo Video</strong></h1>
            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/dUbwAnW3SWc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
      </div>
    );
  }
}

const showAbout = () => {
  if (window.location.pathname === "/about") {
    return(
      <div className='about-content'>
      <div className='left'>
        <div className='content left-content'>
          <h1><strong className='blue t'>Avik Malladi - President</strong></h1>
          <div className='desc'>Hi guys! My name is Avik, and I will be your CSO President for next year! I am from Coppell High School and I am on the computer science track at TAMS. Outside of CSO, I am also an exec for JBoard and a committee head for TBO and HOPE. In my free time, I am a basketball captain for TAMS and I also listen to a lot of music (Tyler, Frank ocean, Daniel Caesar). I am super excited to meet you guys, and feel free to reach out to me with any questions or just to talk! </div>
        </div>
        <div className='pic left-pic' >
          <img src={avik} alt='avik' width="300px"/>
        </div>
      </div>

      <div className='right'>
      <div className='pic right-pic' >
        <img src={drishti} alt='drishti' width="300px"/>
      </div>
      <div className='content right-content'>
        <h1><strong className='green t'>Drishti Gupta - Logistics Director</strong></h1>
        <div className='desc'>Hi! I'm Drishti and I will be your Logistics Director for this year. At TAMS, I am on the CS track and, besides CSO, I am also a Calculus 1/Calculus 2 tutor and HOPE committee head. I will also be leading CSO's Tech-Ed committee this year. In my free time, I love working out, going on runs, reading thrillers, listening to music (still woozy, brent faiyaz, lorde, etc), and painting. Feel free to reach out if you have any questions. Looking forward to a great year! </div>
      </div>
      
      </div>

      <div className='left'>
        <div className='content left-content'>
          <h1><strong className='purple t'>Kelly Zhou - HackTAMS Director</strong></h1>
          <div className='desc'>Hey buddies, I'm Kelly, and I'm super excited to be CSO's Hackathon Director for this year! Before coming to TAMS, I went to Tompkins High School in Katy, TX (Houston gang!!). In my free time, I like to binge kdramas, listen to Taylor Swift (State Of Grace {'>>>'}), go to Pohl, and bother my roommate. Anyways, I'm really cool and stuff so y'all should like talk to me or something:)</div>
        </div>
        <div className='pic left-pic' >
          <img src={kelly} alt='kelly' width="300px"/>
        </div>
      </div>

      <div className='right'>
      <div className='pic right-pic' >
        <img src={sachi} alt='sachi' width="400px"/>
      </div>
      <div className='content right-content'>
        <h1><strong className='red t'>Sachi Hansalia - Volunteering Director</strong></h1>
        <div className='desc'>hello ladies, my name is Sachi, and I am the Volunteering Director this year! I will be managing Code-Ed, Good Samaritan, and Open Source, so come volunteer with us! In addition to CSO I am committee head for Gift of Words (HOPE) and SWENext (GirlUp)! I like doing nothing! However, I might be willing to discuss music, anime, gym, and bruciteria, so feel free to reach out to me!  I also take a lot of pictures on my old digital camera (I WILL photograph you)! </div>
      </div>
      </div>

      <div className='right'>
      <div className='content right-content'>
        <h1><strong className='yellow t'>Drishti Gupta - Logistics Director</strong></h1>
        <div className='desc'>Hi! I'm Drishti and I will be your Logistics Director for this year. At TAMS, I am on the CS track and, besides CSO, I am also a Calculus 1/Calculus 2 tutor and HOPE committee head. I will also be leading CSO's Tech-Ed committee this year. In my free time, I love working out, going on runs, reading thrillers, listening to music (still woozy, brent faiyaz, lorde, etc), and painting. Feel free to reach out if you have any questions. Looking forward to a great year!</div>
      </div>

      <div className='pic right-pic' >
        <img src={drishti} alt='drishti' width="300px"/>
      </div>      
      </div>

      </div>
    )
  }
}

const showCommittees = () => {
  if (window.location.pathname === "/committees") {
    return (
      <div className='committees-content'>
        <Collapsible label="Code-Ed" col="green" >
          <div className='first-row'>
            <div className='comm-desc'>
              <h2 className='comm-desc-title'><strong className='red'>Description</strong></h2>
              <div className='comm-desc-cont'>We are the TAMS Code-Ed committee under CSO. We help TAMS students get opportunities to teach students in Denton about programming! Code-Ed aims to provide students across Denton with educational programming opportunities in Python, Scratch, and Web Development. We will do this by having TAMS students volunteer to teach programming topics on a weekly basis, which will foster a spirit of volunteerism and allow them to refresh the basics of computer science.</div>
            </div>
              <img src={codeed} alt='codeed' width="400px"/>
          </div>
          <div className='second-row'>
            <div className='t-i'>
              <h2 className='comm-head-title'><strong className='purple'>Committee Head(s)</strong></h2>
              <img src={ch1} alt="ch1" width="300px"/>
            </div>
            <div className='t-d'>
              <h2 className='ch-title'><strong className='yellow'>Sahithi Uppalapati</strong></h2>
              <div className='t-content'>
              Hi yall!!! My name is Sahithi and I can't wait to be one of your CODE-ED committee heads this year! I'm currently on the CS track and I love to play volleyball, listen to music, and eat ferrero rochers. Always reach out to me w my socials below if you wanna talk and i can't wait to meet you guys:)) 😽 Insta: _sahithi_varma_  sc: sahithi_varma07 
              </div>
            </div>
            </div>
            
            <div className='second-row'>
            <div className='t-i'>
              <h2 className='comm-head-title'><strong className='purple'></strong></h2>
              <img src={ch2} alt="ch1" width="300px"/>
            </div>
            <div className='t-d'>
              <h2 className='ch-title'><strong className='yellow'>Samuel Jacob</strong></h2>
              <div className='t-content'>
              Hey Everyone!!! My name is Samuel and I will be one of your Code-Ed Committee heads for the 2022-2023 school year. I am on the CS track, so I am always here to answer your cs/programming related questions. Outside of school, I enjoy playing the cello, watching Marvel movies, and relaxing with friends. Let me know if you ever have any questions! Insta: samuel_t_jacob
              </div>
            </div>
            </div>
        </Collapsible>
        <Collapsible label="Open Source" col="blue">
        <div className='first-row'>
            <div className='comm-desc'>
              <h2 className='comm-desc-title'><strong className='red'>Description</strong></h2>
              <div className='comm-desc-cont'>We are the TAMS Open Source committee under CSO. Our mission is to contribute to massive open source projects like Missing Maps, Wikisource, and the National Archives. No computer science experience is needed for any of these opportunities, and if you need any help, we're here for you! We'll be hosting monthly editathons this year, so feel free to join us if you just want to hang out. Volunteering hours will be determined by the number of contributions made to either project.</div>
            </div>
              <img src={opensource} alt='codeed' width="400px"/>
          </div>
          <div className='second-row'>
            <div className='t-i'>
              <h2 className='comm-head-title'><strong className='purple'>Committee Head(s)</strong></h2>
              <img src={ch3} alt="ch1" width="300px"/>
            </div>
            <div className='t-d'>
              <h2 className='ch-title'><strong className='yellow'>James Yang</strong></h2>
              <div className='t-content'>
              Hello hello! My name's James Yang, and I'm so excited to be your Open Source Committee Heads this year. I'm from Memorial High School in Houston, and I love to mess around with history, math, or computer science. When I'm not doing any of that, I'll usually be messing around with some kind of strategy game. Let me know if you have any questions, and I can't wait to meet you all! 
              </div>
            </div>
            </div>
        </Collapsible>
        <Collapsible label="Good Samaritan" col="purple">
        <div className='first-row'>
            <div className='comm-desc'>
              <h2 className='comm-desc-title'><strong className='red'>Description</strong></h2>
              <div className='comm-desc-cont'>We are the TAMS Good Samaritan committee! We offer TAMS students the opportunity to help senior citizens with the basics of technology. No coding experience is needed to volunteer. We hope to make an impact in the Denton community by helping senior citizens learn how to use technology and discover the positive impact that it can have on their lives. Additionally, we hope to offer a unique opportunity for TAMS students who are interested in technology to express this interest by teaching others.</div>
            </div>
              <img src={goods} alt='codeed' width="400px"/>
          </div>
          <div className='second-row'>
            <div className='t-i'>
              <h2 className='comm-head-title'><strong className='purple'>Committee Head(s)</strong></h2>
              <img src={ch4} alt="ch1" width="300px"/>
            </div>
            <div className='t-d'>
              <h2 className='ch-title'><strong className='yellow'>Saathvik Chepyala</strong></h2>
              <div className='t-content'>
              Hey guys, my name is Saathvik Chepyala and I am going to be your 2022-2023 Good Samaritan committee head! In my free time I love to play and watch sports (especially football and basketball) and hang out with friends. Additionally, some of the other clubs I am involved with are TBO, where I am the treasurer; FACES, where I am a committee head for KIVA; and Sports Club, where I'll be the football captain. If you have any questions about anything or just want to talk, feel free to reach out on messenger or any other platform! 
              </div>
            </div>
            </div>
        </Collapsible>
        <Collapsible label="Cybersecurity" col="red">
        <div className='first-row'>
            <div className='comm-desc'>
              <h2 className='comm-desc-title'><strong className='red'>Description</strong></h2>
              <div className='comm-desc-cont'>We are the TAMS Cybersecurity committee under CSO. We are here to introduce you to the fascinating world of cybersecurity through workshops and competitions. We hope to introduce our peers to cybersecurity through lessons dedicated to the basics of ethical and competitive hacking, as well as competitions like Cyberpatriot, CyberStart America, and various CTFs. Come and join if you would like to push the boundaries of your knowledge in computer science beyond what you are taught.</div>
            </div>
              <img src={cyber} alt='codeed' width="400px"/>
          </div>
          <div className='second-row'>
            <div className='t-i'>
              <h2 className='comm-head-title'><strong className='purple'>Committee Head(s)</strong></h2>
              <img src={ch5} alt="ch1" width="300px"/>
            </div>
            <div className='t-d'>
              <h2 className='ch-title'><strong className='yellow'>Manas Navale</strong></h2>
              <div className='t-content'>
              Hey duckies, my name is Manas Navale, and I am going to be one of your Cybersecurity committee heads. I like playing video games, watching tv, and hanging out with friends. If you have any questions please ask me.
              </div>
            </div>
            </div>
            
            <div className='second-row'>
            <div className='t-i'>
              <h2 className='comm-head-title'><strong className='purple'></strong></h2>
              <img src={ch6} alt="ch1" width="300px"/>
            </div>
            <div className='t-d'>
              <h2 className='ch-title'><strong className='yellow'>Dhruv Chanana</strong></h2>
              <div className='t-content'>
              “Hi! My name is Dhruv Chanana, and I'm also one of your Cybersecurity committee heads. I'm a senior on the CS track and I like movies, board games, and especially Cybersecurity!”
              </div>
            </div>
            </div>
        </Collapsible>
        <Collapsible label="Girls Who Code" col="yellow">
        <div className='first-row'>
            <div className='comm-desc'>
              <h2 className='comm-desc-title'><strong className='red'>Description</strong></h2>
              <div className='comm-desc-cont'>We are the TAMS Girls Who Code committee under CSO. We help empower girls pursue and learn more about computer science. Whether it be holding workshops and events or introducing them to CS competitions and careers. Come join us for this great experience! Our mission is to encourage girls in the Denton area to pursue careers in computer science by working with the national Girls Who Code nonprofit organization and volunteering with local schools. Come join us in our efforts to close the gender gap in computer science and change the image of modern programmers! </div>
            </div>
              <img src={gwc} alt='codeed' width="400px"/>
          </div>
          <div className='second-row'>
            <div className='t-i'>
              <h2 className='comm-head-title'><strong className='purple'>Committee Head(s)</strong></h2>
              <img src={ch8} alt="ch1" width="300px"/>
            </div>
            <div className='t-d'>
              <h2 className='ch-title'><strong className='yellow'>Shreya Amalapurapu</strong></h2>
              <div className='t-content'>
              Hey everyone!!! My name is Shreya and I'm super excited to be one of your Girls Who Code committee heads. In my free time, I love to sit in starbucks and smell coffee and I love to play copious amounts of Just Dance. I also love talking to and meeting new people, so feel free to reach out (we can talk about anything)!!! This year, I will also be one of your Research Organization executives and a HOPE committee head. I am super excited to meet everyone!!!
              </div>
            </div>
            </div>
            
            <div className='second-row'>
            <div className='t-i'>
              <h2 className='comm-head-title'><strong className='purple'></strong></h2>
              <img src={ch9} alt="ch1" width="300px"/>
            </div>
            <div className='t-d'>
              <h2 className='ch-title'><strong className='yellow'>Madison Huang</strong></h2>
              <div className='t-content'>
              Heyooo!! My name is Madison and I am thrilled to be one of your Girls Who Code committee heads! When I'm free I love to watch random youtube videos and play candy crush (lolll it's an addiction). Aside from that, I love to meet new people and just socialize, so reach out if you have anything you want to talk about, I can hopefully offer advice (don't bet on it) :)).
              </div>
            </div>
            </div>

            <div className='second-row'>
            <div className='t-i'>
              <h2 className='comm-head-title'><strong className='purple'></strong></h2>
              <img src={ch7} alt="ch1" width="300px"/>
            </div>
            <div className='t-d'>
              <h2 className='ch-title'><strong className='yellow'>Daisy Gan</strong></h2>
              <div className='t-content'>
              Hello, hello! My name is Daisy Gan and I'm excited to be one of your Girls Who Code committee heads. I specialize in presentations, because that's the only thing I was hired for. Although I'm in the CS track, I like art, especially realism, and I keep up with my little collection of animes and mangas. If you ever need advice in low-level math or creative design, you can always talk to me!
              </div>
            </div>
            </div>
        </Collapsible>
        <Collapsible label="Web-Dev" col="other">
        <div className='first-row'>
            <div className='comm-desc'>
              <h2 className='comm-desc-title'><strong className='red'>Description</strong></h2>
              <div className='comm-desc-cont'>We are the TAMS Web Dev committee under CSO. We help TAMS students learn or enhance their coding skills to become experts in the field of Web Development. Come join us for a fun experience! We hope to shine a light on this amazing field of computer science by showing the wonderful aspects of its application in the real world and to provide a delightful, enjoyable experience in a newly found passion and ambition.</div>
            </div>
              <img src={webdev} alt='codeed' width="400px"/>
          </div>
          <div className='second-row'>
            <div className='t-i'>
              <h2 className='comm-head-title'><strong className='purple'>Committee Head(s)</strong></h2>
              <img src={ch10} alt="ch1" width="300px"/>
            </div>
            <div className='t-d'>
              <h2 className='ch-title'><strong className='yellow'>Rohit Maheshwari</strong></h2>
              <div className='t-content'>
              Hey ducks! I am Rohit and I am excited to be your 2022-2023 Web Dev committee head! I really enjoy a lot of things such as video games, anime, piano, tennis, and obviously coding!!! If you have any questions about web dev or even anything in coding, you can always hmu and I'll try my best to help whenever I can. Even if you wanna hmu just to hang out, I'll probably be down. Looking forward to meeting all of y'all next year!!
              </div>
            </div>
            </div>
            
            <div className='second-row'>
            <div className='t-i'>
              <h2 className='comm-head-title'><strong className='purple'></strong></h2>
              <img src={ch11} alt="ch1" width="300px"/>
            </div>
            <div className='t-d'>
              <h2 className='ch-title'><strong className='yellow'>Jeremiah Thomas</strong></h2>
              <div className='t-content'>
              Hey ducks🦆!!! I'm Jerry and I can't wait to help yall as CSO's webdev commitee head!󰞵I enjoy basketball🏀, watching The Office, and programming ofc😉If you have any webdev related questions feel free to message me and if u need someone to hang out w j ask rohit im sure he'll be down.
              </div>
            </div>
            </div>
        </Collapsible>
      </div>
    )
  }
}


function App() {
  const [showLinks, setShowLinks] = useState(false); 
  
  return (
    <div className="App">
      <div class="topnav">
        <a href="/"><img src={logo} alt='logo' width='80px' className='logo'/></a>
        <div className='title'><a href="/" >TAMS | CSO</a></div>
        <div className='pages'>
        <a href="https://hacktams.org" className="y page special hover-1 " target="_blank">HackTAMS</a>
        <a href="https://csoblog.vercel.app/" className="page split" target="_blank">Blog</a>
        <a href="/committees" className="p page split">Committees</a>
        <a href="/about" className="b page split">About</a>
        </div>

        {/* <button onClick={() => setShowLinks(!showLinks)}>Open</button> */}
        <img src={menu} alt='menu' className='men' onClick={() => setShowLinks(!showLinks)}></img>
        <div className={showLinks ? 'showing' : 'not-showing'}>
          <div className='mobile-pages'>
            <a href="/about" className="b page four">About</a>
            <a href="/committees" className="p page three">Committees</a>
            <a href="https://csoblog.vercel.app/" className="page two">Blog</a>
            <a href="https://hacktams.org" className="y page one">HackTAMS</a>
          </div>
        </div>
      </div>
      
      <div className='real'>
        {ShowHome()}
        {showAbout()}
        {showCommittees()}
      </div>

      <footer class="footer">
  <div class="footer__addr">
    <h1 class="footer__logo">TAMS | CSO</h1>
      
      <div className='contac'>
    <h2>Contact</h2>
    
    <address>
    1705 W Sycamore St, Denton, TX 76201<br />
          
      <a class="footer__btn" href="mailto:tamscomputerscience@gmail.com">Email Us</a>
    </address>
    </div>
  </div>
  
  <ul class="footer__nav">
    <li class="nav__item">
      <h2 class="nav__title">Socials</h2>

      <ul class="nav__ul">
        <li>
          <a href="https://www.facebook.com/groups/5862984087050740" target="_blank">Facebook</a>
        </li>

        <li>
          <a href="https://www.instagram.com/tamscso/" target="_blank">CSO Instagram</a> 
        </li>
            
        <li>
          <a href="https://www.instagram.com/hacktams/" target="_blank">HackTAMS Instagram</a>
        </li>
      </ul>
    </li>
    
    <li class="nav__item nav__item">
      <h2 class="nav__title">Quick Links</h2>
      
      <ul class="nav__ul nav__ul">
        <li>
          <a href="https://tams.club" target="_blank">tams.club</a>
        </li>
        
        <li>
          <a href="https://github.com/tams-cso" target="_blank">GitHub</a>
        </li>

        <li>
          <a href="https://unt.campuslabs.com/engage/organization/tams-computer-science" target="_blank">UNT OrgSync</a>
        </li>
      </ul>
    </li>

    <li class="nav__item">
      <h2 class="nav__title">HackTAMS</h2>
      
      <ul class="nav__ul">
        <li>
          <a href="https://hacktams.org" target="_blank">HackTAMS Website</a>
        </li>
        
        <li>
          <a href="mailto:hacktams@gmail.com" target="_blank">HackTAMS Email</a>
        </li>
        
        <li>
          <a href="https://www.facebook.com/groups/5862984087050740" target="_blank">HackTAMS Facebook</a>
        </li>
      </ul>
    </li>
    
    
  </ul>
  
  <div class="legal__links">
    <p>&copy; 2022 TAMS CSO. All rights reserved.</p>
  </div>
      </footer>

    </div>
  );
}

export default App;
