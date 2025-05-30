const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <p className="text-center text-secondary dark:text-gray-400">
          Ikhwanul Abiyu Dhiyya'ul Haq @ {currentYear}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
