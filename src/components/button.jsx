export default function Button(props) {
  const { label, className, ...rest } = props;
  const buttonClass = `btn btn-neutral btn-wide ${className || ""}`;
  return (
    <button className={buttonClass} {...rest}>
      {label}
    </button>
  );
}
