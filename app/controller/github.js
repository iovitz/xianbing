const { Controller } = require("egg");
const { Octokit } = require("octokit");
const cryptoJs = require("crypto-js");

const encodedToken = "U2FsdGVkX18+7DXJqxvMdOr3h3Xvap4deABcs8pLL8MXCpQG15qFIQ3NWpNsdSc76ZVkgBYhzIWV+UF8oPgWeQ==";
const token = cryptoJs.AES.decrypt(encodedToken, "").toString(cryptoJs.enc.Utf8);

class BizController extends Controller {
  async getCommits() {
    const { ctx } = this;

    const { page, perPage } = ctx.getPagination();

    const octokit = new Octokit({
      auth: token,
    });

    const { data } = await octokit.request("GET /repos/{owner}/{repo}/commits", {
      owner: "iovitz",
      repo: "duuk-client",
      per_page: perPage,
      page,
    });
    ctx.success(data);
  }
}

module.exports = BizController;
