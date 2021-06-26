const { Client } = require("discord-rpc");
const config = require("./config.json");

const rpc = new Client({ transport: "ipc" });
let clientId = "509135915482873856";

const setRPC = () => {
  global.current_game = config.rpcinfo;
  rpc.setActivity(config.rpcinfo);
  console.log("RPC has been set, check Discord!");
};

rpc.on("ready", () => {
  console.log(
    `J-RPC has successfully connected to Discord ID: ${config.discordappid}.`
  );
  global.current_game = {};
  setRPC();
});

rpc.login({ clientId }).catch(console.error);
