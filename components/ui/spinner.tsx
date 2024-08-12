"use client";

import { MoonLoader } from "react-spinners";

const Spinner = () => {
  return (
    <div className="flex items-center justify-center mt-16">
      <MoonLoader color="#58e51f" size={320} />
    </div>
  );
};

export default Spinner;
