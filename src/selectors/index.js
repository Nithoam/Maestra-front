
export function excerpt(strg) {
  if (strg.length > 100) {
    return strg.substring(0, 100) + " [...]";
  }
  return strg;
};
export function changeDate(string) {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(string).toLocaleDateString([], options);
}

// Pour l'importer : import { changeDate } from 'src/selectors'
/// Pour l'utiliser : changeDate(reviewsData[0].created_at);

