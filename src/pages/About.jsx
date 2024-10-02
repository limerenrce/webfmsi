const About = () => {
  return (
    <>
  {/* ABOUT SECTION */} 
    <div className="container mx-auto flex flex-col items-center text-center">
      <h2 className="text-4xl font-semibold mb-12">About Demure</h2>
      <div className="flex flex-col md:flex-row items-center justify-center gap-8">
        {/* About Image */}
        <div className="md:w-1/3">
          <img
            src="2.jpg"
            alt="Jewelry Showcase"
            className="w-full rounded-full shadow-lg"
          />
        </div>
        {/* About Text */}  
        <div className="md:w-1/2">
          <p className="text-lg leading-relaxed mb-6">
            At Demure, we believe in celebrating the subtle elegance of white
            silver. Our jewelry pieces are designed to enhance your natural
            beauty with a modern touch. Each piece is meticulously crafted to
            offer a sophisticated yet understated look that complements any
            outfit. <br />
            <br />
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit
            consectetur esse odit deleniti vero tempore cum dolor eius
            repudiandae. Atque, ea. Officiis voluptatum voluptatibus debitis
            incidunt ex porro excepturi numquam!
          </p>
          <a
            href="#contact"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg text-lg hover:bg-blue-500 transition"
          >
            Learn More
          </a>
        </div>
      </div>
    </div> 
</>

    
  );
}

export default About;
