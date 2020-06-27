// TWO THINGS - ADD & DELETE

export const NEXT_INGREDIENT = "NEXT_INGREDIENT";

export const nextIngredient = pinch => {
  return {
    type: NEXT_INGREDIENT,
    payload: pinch
  };
};

/* 
  dispatch({type: API_CALL_STARTE});
  dispatch({type: API_CALL_SUCCESS});
  dispatch({type: API_CALL_FAIL});
  nextIngredient() // function( return {new state})
*/
