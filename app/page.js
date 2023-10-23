'use client' 
 import React, { useRef } from 'react';  
  import Image from 'next/image';  
  import { useClient } from 'next/client';  
  import { MdComputer } from 'react-icons/md';  
  import { FaLaptop, FaTabletButton, FaTv } from 'react-icons/fa6';  
  import { Link } from 'react-router-dom';  
  import { useInView, motion } from 'framer-motion';  
  import { FaGooglePlay } from 'react-icons/fa6'; 
  
 const App = () => { 
  
     const refs = useRef()  
      const ref = useRef()  
      const refo = useRef()  
      const terr = useRef();  
      const isView = useInView(ref);  
      const isTerr = useInView(terr)  
      const InView = useInView(refo);  
      const isInView = useInView(refs); 
   return ( 
 <> 
                   <div className='main'>  
              <div className='header'>  
                  <div className='firstbox'>  
                  <Image  
                              src="/unnamed.png"  
                              alt="My Image"  
                              width={30}  
                              height={30}  
        
                          />  
                      <p className='headlogo'>  
                          eydata  
                      </p>  
                  </div>  
                   
                  
                    
              </div>  
    
                  <div className='textcover' style={{  
                      backgroundImage: `url('./background.png')`,  
                      backgroundSize: 'cover',  
                      backgroundRepeat: 'no-repeat',  
                  }}>  
                      <div className='text-c'>  
                          <p className='welcometext'>Cheapest</p>  
                          <p className='welcometext'> Mobile Data</p>  
                          <p className='welcometext'>Solutions </p>  
                          <p className='welcometext'> with </p>  
                          <p className='welcometexts'>HeyData</p>  
                          <p className='liltext'>...offers instant recharge of Airtime, Data Bundle, CableTV (DStv, GOtv & Startimes), Electricity Bill Payment, Recharge Card Printing and so  
                              much more to our customers.</p>  
                          <div className='logbox'>  
                              <a href="https://apps.apple.com"><button className='signbutton'>Apple Store</button></a>  
                              <a href="https://play.google.com">  
    <button className="signbutton">  
      <FaGooglePlay size={20} /> Google Play  
    </button>  
  </a>  
    
                          </div>  
                      </div>  
                      <div className='imagecover'>  
                          <Image  
                              src="/phone.png"  
                              alt="My Image"  
                              width={300}  
                              height={200}  
                              className='idanimage'  
                          />  
                      </div>  
                  </div>  
    
                  <p className='choose'>Main Features</p>  
                  <div className='fatherbox'>  
                      <motion.div  
                          ref={refs}  
                          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 100 }}  
                          transition={{ duration: 1 }} className='showbox'>  
                          <div className='show1'>  
                              <p className='emojis' > ⚡️⚡️</p>  
                          </div>  
                          <div className='show2'>  
                              <p className='databig'>Fast Transactions</p>  
                              <p className='datasmall'>  
                                  Make quick and efficient transactions within matter of minutes <strong>Heydata</strong> Ensures the fastest transaction process ever!.  
                              </p>  
                          </div>  
    
                      </motion.div>  
                      <motion.div  
                          ref={ref}  
                          animate={{ opacity: isView ? 1 : 0, x: isView ? 0 : 100 }}  
                          transition={{ duration: 1 }} className='showboxa'>  
                          <div className='show1'>  
                              <p className='emojis' > 🔐</p>  
                          </div>  
                          <div className='show2'>  
                              <p className='databig'>Secure Transactions</p>  
                              <p className='datasmall'>  
                                  Your safety is our priority. HeyData guarantees your every secure payments and transactions .  
                              </p>  
                          </div>  
    
                      </motion.div>  
                      <motion.div  
                          ref={terr}  
                          animate={{ opacity: isTerr ? 1 : 0, y: isTerr ? 0 : 100 }}  
                          transition={{ duration: 1 }} className='showboxb'>  
                          <div className='show1'>  
                              <p className='emojis' > 💰💰</p>  
                          </div>  
                          <div className='show2'>  
                              <p className='databig'>Cheap & Affordable</p>  
                              <p className='datasmall'>  
                               HeyData offers the cheapest and mouth-watering competitive prices while maintaining savings on each top-up!  
                              </p>  
                          </div>  
    
                      </motion.div>  
                      <motion.div  
                          ref={refo}  
                          animate={{ opacity: InView ? 1 : 0, y: InView ? 0 : 100 }}  
                          transition={{ duration: 1 }} className='showboxc'>  
                          <div className='show1'>  
                              <p className='emojis' > 👩🏿‍💻</p>  
                          </div>  
                          <div className='show2'>  
                              <p className='databig'>24HR customers service</p>  
                              <p className='datasmall'>Our customer service are always availabe to attend to complains or give our customers guidance.</p>  
                          </div>  
    
                      </motion.div>  
                  </div >  
                             <p className='choosez'>Why Join Heydata?</p>  
    
              <p className='shalaye'>  
                HeyData provides the cheapest, High quality services and product, Our services are quick and Efficient, you also get to enjoy various bonuses and random gift packages🎁.  
              </p>  
              <p className='chooser'>Data Plans</p>  
              <div className='choosebox'>  
                  <div className='choosein'>  
                      <p className='chooseintext'>MTN</p>  
                  </div>  
                  <div className='choosein'>  
                      <p className='chooseintext1'>Airtel</p>  
                  </div>  
                  <div className='choosein'>  
                      <p className='chooseintext2'>9Mobile</p>  
                  </div>  
    
                  <div className='choosein'>  
                      <p className='chooseintext3'>Glo</p>  
                  </div>  
              </div>  
              <p className='shalayes'>Remember, HeyData is not just a website; it's an ethos - A celebration of the anxious, unrestricted power of human thought!  
              Join us today and be free from expensive services.🚀 </p>  
              <div className='logbox'>  
                      <a href='https://app.apple.com'><button className='signbutton'><FaGooglePlay size={20} /> Apps Store</button></a>  
                      <a href='https://play.google.com'><button className='signbutton'><FaGooglePlay size={20} /> Google Play</button></a>  
                  </div> 
              </div >  
             <div className='footerbox'>  
                  <div className='footercover'>  
                       
                        
                      <div className='footer'>  
                          <p className='headservice'>  
                              Contact Us  
                          </p>  
                          <p className='miniservices'>Heydata00@gmail.com</p>  
                          <p className='miniservices'>+234 800 HEY DATA</p>  
                          <p className='miniservices'>No 35, Gaki street, Abuja</p>  
    
    
                      </div>  
                  </div>  
                  <p><strong>Glo</strong></p>  
              </div> 
          </> 
 ) 
 }; 
  
 export default App;
