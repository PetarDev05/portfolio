import { motion } from "motion/react";

const PricingCard = ({ option }) => {
  const item = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
    variants={item}
      className={`sm:p-7 p-4 rounded-2xl bg-linear-to-br shadow-outher-sm-blue from-(--pricing-card-1) to-(--pricing-card-2) flex flex-col items-start gap-3`}
    >
      <h3 className="text-2xl font-semibold text-(--white)">{option.title}</h3>
      <p className="text-(--white)">{option.tagline}</p>
      <p className="font-semibold text-2xl text-(--white)">${option.price}</p>
      <ul className="flex flex-col items-start gap-3 list-disc list-inside">
        {option.description.map((point, index) => (
          <li key={index} className="text-(--white)">
            {point}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default PricingCard;
