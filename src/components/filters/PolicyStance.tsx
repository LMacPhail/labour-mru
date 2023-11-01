import React from "react";

const categories: string[] = [
  "climate",
  "migration",
  "LGBTQ",
  "workers",
  "nhs",
  "benefits",
  "strikes",
  "public ownership",
];

export const PolicyStance: React.FC = () => {
  return (
    <div className="my-4">
      <h3 className="w-full my-4 text-center font-bold text-lg">
        Stance on policy
      </h3>
      <div className="flex flex-row justify-between mx-2">
        <span>Negative</span>
        <span>Positive</span>
      </div>
      {categories.map((category) => (
        <PositiveNegativeChoice category={category} />
      ))}
    </div>
  );
};

const PositiveNegativeChoice: React.FC<{
  category: string;
  positive?: boolean;
}> = ({ category, positive }) => {
  const negative = positive !== undefined && !positive;
  return (
    <div className="flex flex-row justify-between m-3">
      <input
        type="checkbox"
        className="checkbox checkbox-bordered-error"
        checked={negative}
      />
      <p className="flex align-middle text-center">{category}</p>
      <input
        type="checkbox"
        className="checkbox checkbox-bordered-success"
        checked={positive}
      />
    </div>
  );
};
