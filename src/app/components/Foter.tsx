const Footer = () => {
  return (
    <footer className="bg-color text-white py-6 mt-8">
      <div className="container mx-auto text-center space-y-2">
        <p>© 2025 Marmina Hospital. All rights reserved.</p>
        <p>
          Contact us:{" "}
          <a href="mailto:abanoub.sobhy.ebrahim@gmail.com" className="underline">
            abanoub.sobhy.ebrahim@gmail.com
          </a>{" "}
          |{" "}
          <a
            href="https://wa.me/01203641350"
            target="_blank"
            rel="noopener noreferrer"
            className="underline mx-2"
          >
            WhatsApp
          </a>
        </p>
        <p>Developed by Abenoub Sobhy Ibrahim</p>
      </div>
    </footer>
  );
};

export default Footer;
