const bufferToUrl = (buffer) => {
  const blob = new Blob([buffer]);
  return URL.createObjectURL(blob);
};

const bufferToBlobUrl = (buffer) => {
  const uint8Array = new Uint8Array(buffer.data);
  const blob = new Blob([uint8Array], { type: "image/png" });
  const url = URL.createObjectURL(blob);
  return url;
};

export { bufferToUrl, bufferToBlobUrl };
