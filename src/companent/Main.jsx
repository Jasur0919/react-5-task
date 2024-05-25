// import "./Card.css";
const Card = ({ product, deleteProduct, editProduct }) => {
  return (
    <div className="wrapper ">
      <div className="container2">
        <div className="wrapper-cards" >
          <div class="article-body">
            <h2>{product.name}</h2>
            <p>{product.desc}</p>

            <div className="btn-more">
              <button
                className="btn-btn_delete"
                onClick={() => deleteProduct(product.id)}
              >
                delete
              </button>
              <button
                className="btn-btn_edit"
                onClick={() => editProduct(product.id)}
              >
                edit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;