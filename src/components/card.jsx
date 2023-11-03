import { React, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Icon = ({ icon, className }) => {
  const IconComponent = icon; // Assuming 'icon' is a component
  return (
    <IconComponent
      className={`text-6xl rounded-full bg-slate-200 dark:bg-slate-900 p-2 ${className}`}
    />
  );
};

function TestimoniCard(props) {
  const { textTestimoni, textUser } = props;
  return (
    <div className="w full px-8 bg-white dark:bg-base-100 mt-3 py-6 rounded-xl text-center">
      <div className="flex flex-col md:flex-row gap-3">
        <div className="flex w-full justify-center items-center">
          {" "}
          <img
            className="w-32 rounded-full bg-slate-300 mb-4 md:mb-0"
            src={`https://robohash.org/${textUser}.png`}
            alt=""
          />
        </div>
        <div className="text-center md:text-start">
          <p className="font-medium">{textTestimoni}</p>
          <p className="italic">{textUser}</p>
        </div>
      </div>
    </div>
  );
}

function BenefitsCard(props) {
  const { title, description, icon } = props;
  return (
    <div className="flex">
      <div className="me-4">
        <Icon icon={icon} />
      </div>
      <div className="flex flex-col">
        <p className="font-bold">{title}</p>
        <p>{description}</p>
      </div>
    </div>
  );
}

function ClassCard(props) {
  const { title, description, url, onClick } = props;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const image = new Image();
    image.src = "https://picsum.photos/1080/?blur";

    image.onload = () => {
      setLoading(false);
    };
  }, []);

  return (
    <div
      className="card xl:card-side shadow-xl bg-base-100 cursor-pointer hover:scale-105 transition ease-in"
      onClick={onClick}
    >
      <figure className="w-38 xl:w-64 h-38">
        <img src={url} className="object-cover h-38 w-full" />
      </figure>
      <div className="card-body">
        <div>
          <h2 className="card-title lg:text-3xl">{title}</h2>
          <p className="lg:text-xl">{description}</p>
        </div>
      </div>
    </div>
  );
}

function MeetingCard(props) {
  const { title, description, onClick } = props;
  return (
    <div
      className="w-full px-8 py-4 bg-[#F4ECDC] rounded-xl mb-4 cursor-pointer dark:bg-base-200"
      onClick={onClick}
    >
      <p className="font-bold text-2xl text-[#2C44BC]">{title}</p>
      <p className="text-md">{description}</p>
    </div>
  );
}

export { TestimoniCard, BenefitsCard, ClassCard, MeetingCard };
