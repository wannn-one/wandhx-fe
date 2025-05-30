const About = () => {
  return (
    <section id="about" className="bg-gray-50 dark:bg-gray-800 min-h-screen flex items-center py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 dark:text-white">About Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="max-w-3xl">
            <p className="text-secondary dark:text-gray-300 mb-6">
              Fresh Graduate of Computer Engineering Bachelor at Sepuluh Nopember Institute of Technology, actively engaged in academic and personal development. Quick to adapt, eager to learn new things, and capable of working across multiple domains as a generalist. Currently passionate about Backend Development, Computer Vision, and IoT, with a focus on building practical solutions and enhancing technical skills.  
            </p>
            <p className="text-secondary dark:text-gray-300 mb-6">
              I enjoy solving complex problems and working with technologies that power the web behind the scenes. 
              When I'm not coding, you can find me exploring new technologies and contributing to open-source projects.
            </p>
          </div>
          <div className="order-first md:order-last flex justify-center">
            <div className="w-80 h-80 rounded-full overflow-hidden bg-gray-100 dark:bg-gray-700">
              <img 
                src="https://res.cloudinary.com/odoltracker/image/upload/v1745229705/86358803_t6uk5l.jpg"
                alt="Wann's Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 