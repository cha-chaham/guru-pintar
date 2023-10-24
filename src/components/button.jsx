import { RiArrowLeftLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

function Button(props) {
  const { label, className, ...rest } = props;
  const buttonClass = `btn btn-neutral btn-wide ${className || ""}`;
  return (
    <button className={buttonClass} {...rest}>
      {label}
    </button>
  );
}

function ButtonBack(props) {
  const navigate = useNavigate();
  const { title } = props;
  return (
    <div className="flex gap-4 items-center mb-6">
      <div
        className="rounded-full bg-base-300 p-2 cursor-pointer"
        onClick={() => navigate(-1)}
      >
        <RiArrowLeftLine size={25} />
      </div>
      <p className="font-bold text-3xl">{title}</p>
    </div>
  );
}

export { Button, ButtonBack };
