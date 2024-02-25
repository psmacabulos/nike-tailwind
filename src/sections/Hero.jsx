import Button from "../components/Button";
import { arrowRight } from "../assets/icons";
import { statistics } from "../constants";

const Hero = () => {
  return (
    <section
      id="home"
      className="max-container flex min-h-screen w-full flex-col justify-center gap-10 border-2 border-red-500 xl:flex-row"
    >
      <div className="max-xl:padding-x relative flex w-full flex-col items-start justify-center bg-yellow-100 pt-28 xl:w-2/5">
        <p>Our Summer Collection</p>
        <h1>
          <span>The New Arrival</span>
          <br />
          <span>Nike</span>Shoes
          <p>
            Discover stylish Nike arrivals, quality comfort, and innovation for
            your active life.
          </p>
        </h1>
        <Button label="Shop Now" iconUrl={arrowRight} />
        <div className="mt-20  flex w-full flex-wrap items-start justify-start gap-16">
          {statistics.map((stat) => (
            <div key={stat.label}>
              <p>{stat.value}</p>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
