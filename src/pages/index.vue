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
import { Enum, Struct } from "@polkadot/types/codec";
import { getTypeRegistry, u32, u64, Vector, Balance } from "@polkadot/types";

export class ResourceType extends Enum {
  constructor(value?: any) {
    super(["Gold"], value);
  }
}

export class Terrain extends Enum {
  constructor(value?: any) {
    super(["CleanTerrain", "GoldVein"], value);
  }
}

export class Resource extends Struct {
  constructor(value) {
    super(
      {
        level: u32,
        time: u64,
        accrual: Balance,
        rate: u32,
        resource_type: ResourceType,
        resource_amount: Balance
      },
      value
    );
  }
}

export class ResourceBuilding extends Struct {
  constructor(value) {
    super(
      {
        level: u32,
        time: u64,
        accrual: Balance,
        rate: u32,
        resource_type: ResourceType,
        resource_amount: Balance
      },
      value
    );
  }
}

export class VecResources extends Vector.with(Resource) {}
export class VecTerrain extends Vector.with(Terrain) {}
export class VecVecTerrain extends Vector.with(VecTerrain) {}

export class City extends Struct {
  constructor(value) {
    super(
      {
        grid: VecVecTerrain,
        resources: VecResources
      },
      value
    );
  }
}

try {
  const typeRegistry = getTypeRegistry();
  typeRegistry.register({
    ResourceType,
    ResourceBuilding,
    Terrain,
    Resource,
    City
  });
} catch (err) {
  console.error("Failed to register custom types", err);
}

const Alice = "5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY";

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
        console.log(api.query);
        // const res = await api.query.game.resources(Alice);
        const res = await api.query.gameModule.testEnum(Alice);
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
