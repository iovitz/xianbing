module.exports = {
  get $body() {
    return this.request.body ?? {};
  },
  get $query() {
    return this.request.query ?? {};
  },
  get $params() {
    return this.params ?? [];
  },
  get $header() {
    return this.request.header;
  },

  getPagination(defaultPage = 1, defaultPerPage = 20) {
    const query = this.$query;
    this.validate(
      {
        page: { type: "number", min: 1, convertType: "number" },
        per_page: { type: "number", min: 1, max: 500, convertType: "number" },
      },
      query,
    );
    return {
      page: Number(query.page ?? defaultPage),
      perPage: Number(query.per_page ?? defaultPerPage),
    };
  },

  success(data, msg = "success") {
    this.status = 200;
    this.body = {
      code: 0,
      data,
      msg,
    };
  },
  paramsError(message = "Params Validation Failed") {
    this.status = 422;
    this.body = {
      code: 40022,
      message: Array.isArray(message) ? message.map((info) => `${info.field} ${info.message}`) : message,
    };
  },
  authError(message = "Login Request") {
    this.status = 403;
    this.body = {
      code: 40003,
      message,
    };
  },
  serverError(message = "Internal Server Error", status = 500, code = 50000) {
    this.status = status;
    this.body = {
      code,
      message,
    };
  },
};
