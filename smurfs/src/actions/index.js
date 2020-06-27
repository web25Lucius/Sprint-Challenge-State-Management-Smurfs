

export const NEXT_INGREDIENT = "NEXT_INGREDIENT";

export const nextIngredient = pinch => {
  return {
    type: NEXT_INGREDIENT,
    payload: pinch
  };
};


