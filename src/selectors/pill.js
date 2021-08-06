/* eslint-disable import/prefer-default-export */
/* eslint-disable arrow-body-style */

/**
 *  on trouve la recette voulue dans la liste des recettes
 * @param {Array} pillsData - toutes les pilules
 * @param {string} searchedSlug - le slug de la pilule recherchée
 * @return {Object} - La pilule trouvée
 */
 export function findPill(pillsData, searchedSlug) {
  const pill = pillsData.find((pillsData) => {
    return pillsData.slug === searchedSlug;
  });
  return pill;
}