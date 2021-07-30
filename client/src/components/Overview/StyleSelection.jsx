/* eslint-disable import/extensions */
import React, { useContext } from 'react';
import ProductContext from '../../context';
import CartForm from './CartForm.jsx';

export default function StyleSelection({ currentStyle, changeSelectedStyle }) {
  const { styles } = useContext(ProductContext);
  // use the current style to overlay a checkmark on the thumbnail of that style
  // when the user clicks a new thumbnail, remove the checkmark from the old one
  // and overlay it on the new one.
  // Probably need a local state to keep track of the one that is selected.
  // Create an onclick handler that takes in the event's value, locates the correct style
  // from the style list, and passes the object back up the chain. Hopefully...
  function handleStyleSelection(event) {
    event.persist();
    let newSelection;
    const selectionId = event.target.attributes[0].value;
    for (let i = 0; i < styles.length; i++) {
      if (+(styles[i].style_id) === +(selectionId)) {
        newSelection = styles[i];
      }
    }
    changeSelectedStyle(newSelection);
  }
  return (
    <>
      <div>
        {styles.map((style) => (
          <img
            key={style.style_id}
            value={style.style_id}
            className="style-select-thumb"
            src={style.photos[0].thumbnail_url}
            alt="cool person in product"
            onClick={handleStyleSelection}
          />
        ))}
      </div>
      <CartForm />
    </>
  );
}
