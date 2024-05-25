// import { useState } from "react";
// import "./App.css";
// import Main from './companent/Main'
// import { nanoid } from "nanoid";
// import Rodal from "rodal";
// import "rodal/lib/rodal.css";

// function App() {
//   const [product, setProduct] = useState([
//     {
//       id: 1,
//       name: "olma",
//       desc: "  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates ratione repellendus aperiam voluptas neque iure nostrum modi illo praesentium amet reiciendis animi, veniam ex rem et laboriosam vel consequatur quaerat! ",
//     },
//   ]);

//   const [cardData, SetCardData] = useState({});

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const id = nanoid();
//     let payload = { ...cardData, id };
//     console.log(payload);
//     product.push(payload);
//     setProduct([...product]);
//     event.target.reset();
//   };

//   const handeleChange = (event) => {
//     const { name, value } = event.target;
//     SetCardData({ ...cardData, [name]: value });
//   };

//   const deleteCard = (id) => {
//     const new_card = product?.filter((item) => item.id !== id);
//     setProduct([...new_card]);
//   };

//   const [modalVisible, setModalVisible] = useState(false);
//   const editCard = (id) => {
//     setModalVisible(true);
//     // event.target.reset(product[id]);
//     console.log(product[id]);
//   };

//   const closeModal = () => {
//     setModalVisible(false);
//   };

//   return (
//     <>
//       <div class="container">
//         <form id="contact" onSubmit={handleSubmit}>
//           <fieldset>
//             <input
//               placeholder="Fruit name enter..."
//               type="text"
//               name="name"
//               required
//               onChange={handeleChange}
//             />
//           </fieldset>

//           <fieldset>
//             <textarea
//               placeholder=" Your message about the product "
//               name="desc"
//               onChange={handeleChange}
//               required
//             ></textarea>
//           </fieldset>
//           <fieldset>
//             <button name="submit" type="submit">
//               Add new product card
//             </button>
//           </fieldset>
//         </form>
//       </div>

//       {product?.map((item, index) => (
//         <>
//           <Main
//             product={item}
//             deleteProduct={deleteCard}
//             editProduct={editCard}
//           />
//         </>
//       ))}

//       <Rodal visible={modalVisible} onClose={closeModal} height={320}>
//         <div class="container">
//           <form id="contact" onSubmit={handleSubmit}>
//             <fieldset>
//               <input
//                 placeholder="Enter fruit name"
//                 type="text"
//                 tabindex="1"
//                 name={product.name}
//                 required
//                 autofocus
//                 onChange={handeleChange}
//               />
//             </fieldset>

//             <fieldset>
//               <textarea
//                 placeholder=" Your message about the product "
//                 tabindex="5"
//                 name={product.desc}
//                 onChange={handeleChange}
//                 required
//               ></textarea>
//             </fieldset>
//             <fieldset>
//               <button>Save</button>
//             </fieldset>
//           </form>
//         </div>
//       </Rodal>
//     </>
//   );
// }

// export default App;


import { useState } from "react";
import "./App.css";
import Main from './companent/Main';
import { nanoid } from "nanoid";
import Rodal from "rodal";
import "rodal/lib/rodal.css";

function App() {
  const [product, setProduct] = useState([
    {
      id: 1,
      name: "olma",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates ratione repellendus aperiam voluptas neque iure nostrum modi illo praesentium amet reiciendis animi, veniam ex rem et laboriosam vel consequatur quaerat!",
    },
  ]);

  const [cardData, setCardData] = useState({});
  const [modalVisible, setModalVisible] = useState(false);
  const [editId, setEditId] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const id = editId || nanoid();
    const payload = { ...cardData, id };

    if (editId) {
      setProduct(product.map(item => item.id === id ? payload : item));
      setEditId(null);
    } else {
      setProduct([...product, payload]);
    }

    setCardData({});
    event.target.reset();
    setModalVisible(false);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCardData({ ...cardData, [name]: value });
  };

  const deleteCard = (id) => {
    const newProducts = product.filter(item => item.id !== id);
    setProduct(newProducts);
  };

  const editCard = (id) => {
    const productToEdit = product.find(item => item.id === id);
    setCardData(productToEdit);
    setEditId(id);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setCardData({});
    setEditId(null);
  };

  return (
    <>
      <div className="container">
        <form id="contact" onSubmit={handleSubmit}>
          <fieldset>
            <input
              placeholder="Fruit name enter..."
              type="text"
              name="name"
              required
              onChange={handleChange}
            />
          </fieldset>

          <fieldset>
            <textarea
              placeholder="Your message about the product"
              name="desc"
              onChange={handleChange}
              required
            ></textarea>
          </fieldset>
          <fieldset>
            <button name="submit" type="submit">
              {editId ? "Save changes" : "Add new product card"}
            </button>
          </fieldset>
        </form>
      </div>

      {product.map((item) => (
        <Main
          key={item.id}
          product={item}
          deleteProduct={deleteCard}
          editProduct={editCard}
        />
      ))}

      <Rodal visible={modalVisible} onClose={closeModal} height={320}>
        <div className="container">
          <form id="contact" onSubmit={handleSubmit}>
            <fieldset>
              <input
                placeholder="Enter fruit name"
                type="text"
                name="name"
                value={cardData.name || ''}
                required
                onChange={handleChange}
              />
            </fieldset>

            <fieldset>
              <textarea
                placeholder="Your message about the product"
                name="desc"
                value={cardData.desc || ''}
                onChange={handleChange}
                required
              ></textarea>
            </fieldset>
            <fieldset>
              <button type="submit">
                {editId ? "Save changes" : "Add new product card"}
              </button>
            </fieldset>
          </form>
        </div>
      </Rodal>
    </>
  );
}

export default App;

