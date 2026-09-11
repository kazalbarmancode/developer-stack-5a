import BannerImage from "../../assets/banner-stack.png";
export function Banner() {
  return (
    <div className="flex flex-col md:flex-row items-center   container mx-auto ">
      <div className="flex flex-col  text-center items-center md:items-baseline md:text-left mt-10">
        <div className="mx-10">
          <h1 className="flex flex-col font-bold text-4xl md:text-6xl">
            Build Your Ideal
            <span className="font-extrabold bg-linear-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent">
              {" "}
              Development Stack
            </span>
          </h1>
          <p className="text-1xl">
            Explore frontend, backend, database, and tooling options, compare
            them side by side, and put together the stack that fits your next
            project.
          </p>
        </div>
        <div className="flex gap-2 mt-4 ">
          <button className="btn border-2 btn-secondary font-extrabold bg-linear-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED]  ">
            Explore Technologies
          </button>
          <button className="btn border-2">Learn More</button>
        </div>
      </div>
      <div className=" items-center">
        <img
          src={BannerImage}
          alt="BannerImage"
          className="w-100 md:w-150 h-100  items-center"
        />
      </div>
    </div>
  );
}