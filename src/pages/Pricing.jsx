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
      "Performance and basic SEO optimization",
      "Deployment and setup",
      "7 days of post-launch support",
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
      "Structured content and smooth navigation",
      "Contact form and essential integrations",
      "Basic SEO optimization",
      "Deployment and domain connection",
      "14 days of post-launch support",
    ],
  },
  {
    id: "003",
    title: "Profesional",
    tagline: "A custom and advanced web application",
    price: 650,
    color1: "--pricing11",
    color2: "--pricing12",
    description: [
      "Fully custom web application",
      "Dynamic content and user interactions",
      "User authentication and protected areas",
      "Admin or management functionality",
      "Scalable architecture for future growth",
      "Full deployment and configuration",
      "30 days of post-launch support",
    ],
  },
];


  return (
    <div id="pricing" className="w-full p-5 flex flex-col items-center gap-15 bg-(--dark-bg)">
      <h2 className="text-4xl text-(--white)">
        Pricing options
      </h2>
      <p className="text-(--text-dark) text-center px-20">
        Simple and transparent pricing designed to offer professional web
        solutions, from clean landing pages to fully custom web applications.
      </p>
      <div className="grid grid-cols-1 gap-15 min-[1300px]:grid-cols-3">
        {plans.map((plan) => (
          <PricingCard key={plan.id} option={plan} />
        ))}
      </div>
    </div>
  );
};

export default Pricing;
