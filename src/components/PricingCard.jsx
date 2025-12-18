const PricingCard = ({option}) => {
  return (
    <div className={`p-7 rounded-2xl  ${option.id === "002" ? "bg-linear-to-br from-(--prm-dark-1) to-(--prm-dark-2) shadow-outher-sm-dark" : "bg-(--card-dark) shadow-[0px_0px_15px_1px_var(--white)]"}  flex flex-col items-start gap-3`}>
      <h3 className="text-2xl font-semibold text-(--white)">{option.title}</h3>
      <p className="text-(--text-dark)">{option.tagline}</p>
      <p className="font-semibold text-2xl text-(--white)">${option.price}</p>
      <div className="flex flex-col items-start gap-3">
        {option.description.map((point, index) => (
          <span key={index} className="flex items-start text-(--text-dark)">- {point}</span>
        ))}
      </div>
    </div>
  )
}

export default PricingCard
