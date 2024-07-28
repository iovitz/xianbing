const { Controller } = require("egg");
const { reduce } = require("lodash");
const { values } = require("lodash");

class BizController extends Controller {
  async searchContent() {
    const { ctx } = this;
    const body = ctx.$body;
    ctx.validate(
      {
        content: { type: "string", required: true, max: 100, min: 1 },
        type: { type: "enum", values: ["all", "user", "voice", "lyric", "user", "group"] },
      },
      body,
    );
    const { page, perPage } = ctx.getPagination(1, 10);

    if (body.type === "user") {
      // 搜索用户
      const followQueryRes = await this.service.user.searchUser(page, perPage, body.content);
      const followUserInfo = reduce(
        followQueryRes,
        (prev, curr) => {
          prev[curr.user_id] = {
            ...curr,
            followed: false,
          };
          return prev;
        },
        {},
      );
      // 搜索粉丝
      const userIds = followQueryRes.map((r) => r.user_id);
      const followedItems = await ctx.service.fans.getFans(ctx.userId, userIds);
      followedItems.forEach(({ userId }) => {
        followUserInfo[userId].followed = true;
      });
      return ctx.success(values(followUserInfo));
    }
  }
}
// 2919331045 2655084380
module.exports = BizController;
