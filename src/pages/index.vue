<template>
  <div class="container">
    <div>
      <h1 class="title">Raphcoin website</h1>
      <button @click="connect">Click on me</button>
    </div>
  </div>
</template>

<script lang="ts">
import { ApiPromise, WsProvider } from "@polkadot/api";
import * as testKeyring from "@polkadot/keyring/testing";

const ALICE = "5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY";

export default {
  data() {
    return {
      api: null
    };
  },
  methods: {
    async connect() {
      try {
        const provider = new WsProvider("ws://127.0.0.1:9944");
        const api = await ApiPromise.create(provider);

        // const keyring = testKeyring.default();
        // const nonce: any = await api.query.system.accountNonce(ALICE);
        // const alicePair = keyring.getPair(ALICE);

        // await api.tx.game
        //   .init()
        //   .sign(alicePair, { nonce })
        //   .send(({ events = [], status }) => {
        //     console.log("Transaction status:", status.type);

        //     if (status.isFinalized) {
        //       console.log(
        //         "Completed at block hash",
        //         status.asFinalized.toHex()
        //       );
        //     }
        //   });
        const res = await api.query.game.cities(ALICE);
        console.log(res);
      } catch (err) {
        console.error(err);
      }
    }
  }
};
</script>

<style>
.container {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;

  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
  padding-bottom: 15px;
}
</style>
