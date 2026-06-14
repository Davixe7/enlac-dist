import { a4 as api } from "./index-DKrRlTZm.js";
async function exportXlsFile(url, params = {}, defaultFilename = "reporte_descargado.xlsx") {
  try {
    const response = await api({
      url,
      method: "GET",
      responseType: "blob",
      params
    });
    const contentDisposition = response.headers["content-disposition"];
    let filename = defaultFilename;
    if (contentDisposition) {
      const filenameMatch = contentDisposition.match(/filename=(?:"([^"]+)"|([^;]+))/);
      if (filenameMatch) {
        filename = filenameMatch[1] || filenameMatch[2];
      }
    }
    const blob = new Blob([response.data], {
      type: response.headers["content-type"]
    });
    const blobUrl = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = blobUrl;
    link.setAttribute("download", filename);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(blobUrl);
    console.log(`Descarga de ${filename} iniciada.`);
  } catch (error) {
    console.log(error);
  }
}
export {
  exportXlsFile as e
};
