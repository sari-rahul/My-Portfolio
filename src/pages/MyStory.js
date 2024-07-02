import React from 'react';
import generalStyles from '../styles/General.module.css';
import styles from '../styles/MyStory.module.css';
import codelove from '../assets/love-to-code.jpg';
import educationalbg from '../assets/graduationcap.webp';
import adventures from '../assets/adventures.avif';
import earlycareer from '../assets/early-career.jpg';
import maternity from '../assets/maternity.jpg';
import selflearning from '../assets/selftaught.jpg';
import cms from '../assets/cms.png';
import masterpiece from '../assets/masterpiece.png';



const MyStory = () => {
  return (
    <div className={styles.MystoryContainer}>
        <div className={styles.HeadingContainer}>
            <h2 className={`${generalStyles.Heading}`}>
                Crafting Passion and Code 
            </h2>
            <h4 className={styles.Tagline}>My Journey of Ingenuity and Innovation</h4>
        </div>

        <p className={`${generalStyles.Details} ${styles.Paragraphs}`}>
            Welcome to a short story about my career and life, where creativity meets technology 
            and every challenge is an opportunity. Join me as I share my journey, from a childhood 
            love for art and coding to a fulfilling career in web development, embracing new cultures 
            and continuous learning along the way.
        </p>

        <h3 className={generalStyles.Title}>A Love for Art and Code</h3> 
        <div className={styles.OutterDiv}>
            <div className='w-25'>
                <img src={codelove} alt="Heart in curlybraces" />
            </div>
            <div className='w-75'>
                <p className={`${generalStyles.Details} ${styles.Paragraphs}`}>
                    From a young age, my fascination with colors, designs, and art 
                    was evident in everything I did. Alongside this artistic inclination, 
                    I developed a keen interest in computer science and programming. 
                    Solving complex problems and creating solutions that could make a 
                    difference brought me immense joy. I also loved interacting with 
                    people and helping them, adding a social dimension to my technical interests.
                </p>
            </div>            
        </div>
        <hr />

        <h3 className={generalStyles.Title}>A Diverse Educational Canvas</h3>
        <div className={styles.OutterDiv}>
            <div className='w-75'>
                <p className={`${generalStyles.Details} ${styles.Paragraphs}`}>
                    In high school, I chose to study computer science, deepening my understanding
                    of programming and technology. However, my academic journey took an interesting
                    turn when I pursued a degree in Life Sciences from Kerala University of 
                    Health Sciences in India. This diverse educational background gave me a unique 
                    perspective and a holistic approach to problem-solving.
                </p>
            </div>            
            <div className='w-25'>
                <img src={educationalbg} alt="convocation hat" />
            </div>
            
        </div>

        <h3 className={generalStyles.Title}>Crafting My Early Career</h3>
        <div className={styles.OutterDiv}>
            <div className='w-25'>
                <img src={earlycareer} alt="convocation hat" />
            </div>

            <div className='w-75'>
                <p className={`${generalStyles.Details} ${styles.Paragraphs}`}>
                    After completing my degree, I seized an opportunity to do an internship at a 
                    company where I was trained in the basics of web development. This internship 
                    was a pivotal moment in my career, allowing me to blend my artistic talents with 
                    my technical skills. I continued to work at the company for 2.5 years, gaining 
                    valuable experience and honing my web development skills.
                </p>
            </div>
        </div>

        <h3 className={generalStyles.Title}>New Adventures in Germany</h3>
        <div className={styles.OutterDiv}>
            <div className='w-75'>
                <p className={`${generalStyles.Details} ${styles.Paragraphs}`}>
                    Life took me on another adventure when I moved to Germany with my husband. 
                    Adapting to a new country came with its challenges, particularly the language 
                    barrier. Undeterred, I enrolled in a language school to learn German, embracing
                    the new culture and language with enthusiasm.
                </p>
            </div>            
            <div className='w-25'>
                <img src={adventures} alt="earth with flight" />
            </div>
        </div>
        
        <h3 className={generalStyles.Title}>Maternity Break and Lifelong Learning</h3>
        <div className={styles.OutterDiv}>
            <div className='w-25'>
                <img src={maternity} alt="mom with son" />
            </div>
            <div className='w-75'>
                <p className={`${generalStyles.Details} ${styles.Paragraphs}`}>
                    During this time, I also took a break for maternity purposes. Eager to continue 
                    my professional development, I enrolled in an online diploma program from the 
                    Code Institute in Dublin. This program was incredibly beneficial, providing me 
                    with an official degree in web development. I undertook several projects during 
                    the course, each one a stepping stone that expanded my knowledge and skills.
                </p>
            </div>    
        </div>
        
        
        <h3 className={generalStyles.Title}>Self-Taught Tech Explorer</h3>
        <div className={styles.OutterDiv}>
            <div className='w-75'>
                <p className={`${generalStyles.Details} ${styles.Paragraphs}`}>
                    My passion for learning didn’t stop there. Recognizing the importance of staying
                    updated with the latest technologies, I took online courses in MongoDB and Node.js.
                    These self-learning experiences showcased my efficiency in independently acquiring
                    new skills and further strengthened my expertise in full-stack development.
                </p>
            </div>
            <div className='w-25'>
                <img src={selflearning} alt="selflearning" />
            </div>    
        </div>

        
        <h3 className={generalStyles.Title}>CMS Adventures Unveiled</h3>
        <div className={styles.OutterDiv}>
        <div className='w-25'>
            <img src={cms} alt="CMS" />
        </div>
        <div className='w-75'>
            <p className={`${generalStyles.Details} ${styles.Paragraphs}`}>
                Upon completing the diploma, I joined another company where I delved into the world
                of Content Management Systems (CMS) using Drupal and WordPress. This role allowed 
                me to explore the intricacies of CMS platforms, further enriching my expertise 
                in web development.
            </p>
        </div>

        </div>
        
        <h3 className={generalStyles.Title}>Turning Challenges into Masterpieces</h3>
        <div className={styles.OutterDiv}>
        <div className='w-75'>
            <p className={`${generalStyles.Details} ${styles.Paragraphs}`}>
                I have always believed that every challenge presents a unique opportunity. Whether 
                it was adapting to a new culture and language in Germany or navigating the ever-evolving 
                landscape of web development, I embraced each obstacle as a chance to grow and learn. 
                This mindset has not only enriched my professional journey but has also empowered me 
                to continuously seek out and seize new opportunities, turning potential setbacks into 
                stepping stones for success.
            </p>
        </div>
        <div className='w-25'>        
            <img src={masterpiece} alt="masterpiece" />
       </div>

        </div>

        
        <h3 className={generalStyles.Title}>A Symphony of Creativity and Technology:</h3>
        <p className={`${generalStyles.Details} ${styles.Paragraphs}`}>
        I don't believe in perfection; rather, I cherish the journey toward achieving it. My path is a
        tapestry woven with creativity, technology, and a deep-seated passion for helping others. 
        From a curious child enchanted by colors and designs to a proficient web developer with a 
        rich and varied educational background and a zeal for self-learning, I have seized every opportunity 
        to learn and evolve. Each phase of my journey has been fueled by a love for both the artistic and 
        the technical, shaping me into a versatile and empathetic professional in the realm of web development.
        </p>
        
    </div>   
    )
}

export default MyStory
