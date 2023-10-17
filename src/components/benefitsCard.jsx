import Icon from "./icon";

export default function BenefitsCard(props) {
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
