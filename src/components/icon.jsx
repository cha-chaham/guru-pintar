import React from "react";

const Icon = ({ icon, className }) => {
  const IconComponent = icon; // Assuming 'icon' is a component
  return (
    <IconComponent
      className={`text-6xl rounded-full bg-slate-200 dark:bg-slate-900 p-2 ${className}`}
    />
  );
};

export default Icon;
