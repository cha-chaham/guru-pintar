import React from "react";

function TestimoniCardRight(props) {
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
function TestimoniCardLeft(props) {
  const { textTestimoni, textUser } = props;
  return (
    <div className="w full px-8 bg-white dark:bg-base-100 mt-3 py-6 rounded-xl text-center">
      <div className="flex flex-col md:flex-row gap-3">
        <div className="text-center md:text-start">
          <p className="font-medium">{textTestimoni}</p>
          <p className="italic">{textUser}</p>
        </div>
        <div className="flex w-full justify-center items-center">
          {" "}
          <img
            className="w-32 rounded-full bg-slate-300 mb-4 md:mb-0"
            src={`https://robohash.org/${textUser}.png`}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export { TestimoniCardRight, TestimoniCardLeft };
