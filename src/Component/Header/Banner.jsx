// import Banne from '../../assets/cheif.png';
const Banner = () => {
  return (
    <div>
      <div className="banner rounded-3xl p-5 lg:px-52 lg:py-32 space-y-4 text-center">
        {/* <img src="./cheif.png" alt="" /> */}

        <h3 className=" text-white text-2xl lg:text-5xl font-bold">
          Discover an exceptional cooking class tailored for you!
        </h3>
        <p className="text-white text-sm lg:text-lg">
          Unveil culinary delights in a personalized cooking class just for you!
          Embark on a flavorful journey with an exceptional culinary experience
          tailored to your tastes!
        </p>
        <div className="space-x-6">
            <button className="btn btn-success rounded-3xl bg-[#0BE58A]">Explore Now</button>
            <button className="btn btn-outline rounded-3xl border border-white text-white ">Our Feedback</button>
        </div>

      </div>
    </div>
  );
};

export default Banner;
