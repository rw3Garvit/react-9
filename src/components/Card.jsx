function Card({ title, price, desc }) {
  let submit = () => {
    console.log("clicked");
  };

  return (
    <div class="card" style={{ width: "18rem" }}>
      <div class="card-body">
        <h5 class="card-title">{title}</h5>
        <h6 class="card-subtitle mb-2 text-muted">{price}</h6>
        <p class="card-text">{desc}</p>
        <a href="#" class="card-link" onClick={submit}>
          Card link
        </a>
        <a href="#" class="card-link">
          Another link
        </a>
      </div>
    </div>
  );
}

export default Card;
