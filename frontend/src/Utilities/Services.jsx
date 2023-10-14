const Services = () => {
  return (
    <div className="bg-[#ECEAE3] py-14 ">
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-10">
        <div className="space-y-4 max-sm:text-center">
          <img src="/assets/services/services1.png" className="max-sm:mx-auto" alt="Awesome Aroma" />
          <div className="space-y-2">
            <h4 className="text-4xl">Awesome Aroma</h4>
            <p>You will definitely be a fan of the design & aroma of your coffee</p>
          </div>
        </div>
        <div className="space-y-4 max-sm:text-center">
          <img src="/assets/services/services2.png" className="max-sm:mx-auto" alt="High Quality" />
          <div className="space-y-2">
            <h4 className="text-4xl">High Quality</h4>
            <p>We served the coffee to you maintaining the best quality</p>
          </div>
        </div>
        <div className="space-y-4 max-sm:text-center">
          <img src="/assets/services/services3.png" className="max-sm:mx-auto" alt="Pure Grades" />
          <div className="space-y-2">
            <h4 className="text-4xl">Pure Grades</h4>
            <p>The coffee is made of the green coffee beans which you will love</p>
          </div>
        </div>
        <div className="space-y-4 max-sm:text-center">
          <img src="/assets/services/services4.png" className="max-sm:mx-auto" alt="Proper Roasting" />
          <div className="space-y-2">
            <h4 className="text-4xl">Proper Roasting</h4>
            <p>Your coffee is brewed by first roasting the green coffee beans</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
