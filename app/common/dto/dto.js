exports.pagination = {
  page: { type: "number", required: true, min: 1, convertType: "number" },
  per_page: { type: "number", required: true, min: 1, max: 500, convertType: "number" },
};
