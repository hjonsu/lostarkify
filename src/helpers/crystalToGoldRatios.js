export default function crystalConverter(conversionRatio, marketRatio) {
  console.log(conversionRatio, marketRatio)
  return conversionRatio > marketRatio
    ? "You should buy with crystals."
    : "You should buy with gold.";
}
