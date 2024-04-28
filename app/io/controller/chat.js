exports.ping = async function (ctx) {
  const { payload } = ctx;
  console.log(payload);
  await this.socket.emit("res", `Hi! I've got your message:`);
};
