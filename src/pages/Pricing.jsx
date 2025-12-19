import PricingCard from "../components/PricingCard.jsx";

const Pricing = () => {
  const plans = [
    {
      id: "001",
      title: "Starter",
      tagline: "A clean and modern landing page",
      price: 150,
      color1: "--pricing11",
      color2: "--pricing12",
      description: [
        "One fully responsive landing page",
        "Custom design tailored to your brand",
        "Clear content structure and call-to-action",
        "Contact form integration",
        "Fast-loading page with basic SEO setup",
        "Deployment and setup",
      ],
    },
    {
      id: "002",
      title: "Bussiness",
      tagline: "A complete multi-page business website",
      price: 350,
      color1: "--pricing-main1",
      color2: "--pricing-main2",
      description: [
        "Professional website with multiple pages",
        "Modern and user-friendly design",
        "Mobile, tablet, and desktop optimization",
        "Well-organized pages and intuitive navigation",
        "Contact form and essential integrations",
        "SEO-ready structure",
        "Deployment and domain connection",
      ],
    },
  ];

  return (
    <div
      id="pricing"
      className="w-full min-h-screen p-5 flex flex-col items-center gap-10 bg-(--dark-bg) sm:pt-30"
    >
      <h2 className="text-4xl sm:text-5xl text-(--white)">Pricing options</h2>
      <p className="text-(--text-dark) text-center md:px-20">
        Simple and transparent pricing designed to offer professional web
        solutions, from clean landing pages to fully custom websites.
      </p>
      <div className="grid grid-cols-1 gap-15 min-[1300px]:grid-cols-2 pt-5">
        {plans.map((plan) => (
          <PricingCard key={plan.id} option={plan} />
        ))}
      </div>
    </div>
  );
};

export default Pricing;
