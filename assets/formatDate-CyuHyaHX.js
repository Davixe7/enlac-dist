function formatDate(date) {
  let newDate = new Date(date);
  let day = String(newDate.getUTCDate()).padStart(2, "0");
  let month = String(newDate.getUTCMonth() + 1).padStart(2, "0");
  let year = newDate.getUTCFullYear();
  return `${day}/${month}/${year}`;
}
export {
  formatDate as f
};
