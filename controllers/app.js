export const getMainPage = (req, res) => {
  res.render("index", { title: "Main page", active: "main" });
};
export const getFeaturesPage = (req, res) => {
  res.render("features", { title: "Features page", active: "features" });
};
export const getAboutPage = (req, res) => {
  res.redirect("/features");
};
