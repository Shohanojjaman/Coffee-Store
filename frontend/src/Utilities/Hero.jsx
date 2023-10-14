const Hero = () => {
  return (
    <div className="hero-bg ">
      <div className=" container ">
        <div className="min-h-[40rem] md:min-h-[50rem] grid grid-cols-1 lg:grid-cols-2 justify-center items-center">
          <div className="lg:col-start-2">
            <h1 className="text-white text-6xl">Would you like a Cup of Delicious Coffee?</h1>
            <p className="text-white mt-4 mb-8">
              It &apos;s coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of
              every moment!!! Enjoy the beautiful moments and make them memorable.
            </p>
            <button className="primary-btn">Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
