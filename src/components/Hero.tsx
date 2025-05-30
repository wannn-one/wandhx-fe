import { useState, useEffect } from 'react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('Backend Developer');
  const texts = ['Backend Developer', 'Computer Vision', 'IoT Enthusiast'];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    let timeout: number;

    const type = () => {
      const currentText = texts[currentIndex];
      
      if (!isDeleting) {
        setDisplayText(currentText.substring(0, displayText.length + 1));
        setTypingSpeed(150);

        if (displayText === currentText) {
          setIsDeleting(true);
          setTypingSpeed(100);
          timeout = window.setTimeout(type, 2000); // Pause before deleting
          return;
        }
      } else {
        setDisplayText(currentText.substring(0, displayText.length - 1));
        setTypingSpeed(100);

        if (displayText === '') {
          setIsDeleting(false);
          setCurrentIndex((currentIndex + 1) % texts.length);
          if (currentIndex === texts.length - 2) {
            timeout = window.setTimeout(type, typingSpeed);
            return;
          }
        }
      }

      timeout = window.setTimeout(type, typingSpeed);
    };

    timeout = window.setTimeout(type, typingSpeed);

    return () => window.clearTimeout(timeout);
  }, [displayText, currentIndex, isDeleting, typingSpeed, texts]);

  return (
    <section className="min-h-screen flex items-center pt-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 flex items-center">
            <span className="text-accent">
              {displayText}
              <span className="animate-blink">|</span>
            </span>
          </h1>
          <p className="text-lg md:text-xl text-secondary mb-8 dark:text-gray-300">
            Hi, I'm Ikhwanul Abiyu Dhiyya'ul Haq. A passionate Backend Developer / Computer Vision / IoT Enthusiast. Fresh graduate from <span className="text-accent">Computer Engineering</span>, Institut Teknologi Sepuluh Nopember.
          </p>
          <div className="flex gap-4">
            <a
              href="#contact"
              className="px-6 py-3 bg-primary text-white hover:bg-accent transition-colors dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
            >
              Contact Me
            </a>
            <a
              href="#projects"
              className="px-6 py-3 border border-primary hover:border-accent hover:text-accent transition-colors dark:border-gray-700 dark:text-white dark:hover:border-accent dark:hover:text-accent"
            >
              View Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
