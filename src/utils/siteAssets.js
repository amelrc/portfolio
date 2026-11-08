const siteImageContext = require.context(
  "../images",
  false,
  /^\.\/(?:hill [1-3]|product-design-consultant)\.(?:png|jpe?g|webp)$/i
);

export const getSiteImage = (filename) => {
  if (!filename) return null;
  const key = `./${filename}`;
  return siteImageContext.keys().includes(key) ? siteImageContext(key) : null;
};
