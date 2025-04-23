export default function GoodsItem(props) {
  const {
    mainId,
    displayName,
    displayDescription,
    price,
    displayAssets,
    addToBasket = Function.prototype,
    rarity,
  } = props;

  const imageUrl =
    displayAssets?.[0]?.full_background ||
    displayAssets?.[0]?.background ||
    displayAssets?.[0]?.url;

  return (
    <div className="card" id={mainId}>
      <div className="card-image">
        <img src={imageUrl} alt={displayName} />
        <span className="card-title">
          {displayName}
          <span className={`rarity ${rarity?.id?.toLowerCase()}`}>
            {rarity?.name}
          </span>
        </span>
      </div>
      <div className="card-content">
        <p>{displayDescription || "No description available"}</p>
      </div>
      <div className="card-action">
        <button
          className="btn indigo lighten-4"
          onClick={() =>
            addToBasket({
              id: mainId,
              name: displayName,
              price: price.finalPrice,
            })
          }
        >
          Купить
        </button>
        <span className="right">
          {price.finalPrice !== price.regularPrice
            ? price.finalPrice
            : price.regularPrice}
          {" "} руб.
        </span>
      </div>
    </div>
  );
}
