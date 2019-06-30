<template>
  <div class="container">
    <div>
      <h1 class="title">Raphcoin website</h1>
      <button @click="connect">Click on me</button>
    </div>
  </div>
</template>

<script>
import { ApiPromise, WsProvider } from "@polkadot/api";
import { Enum, Struct } from "@polkadot/types/codec";
import { getTypeRegistry, u32, u64, Vector, Balance } from "@polkadot/types";

class ResourceType extends Enum {
  constructor(value) {
    super(["Gold"], value);
  }
}

class Terrain extends Enum {
  constructor(value) {
    super(["CleanTerrain"], value);
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

export class City extends Struct {
  constructor(value) {
    super(
      {
        grid: Vector.with(Vector.with(Terrain)),
        resources: Vector.with(Resource)
      },
      value
    );
  }
}

try {
  const typeRegistry = getTypeRegistry();
  typeRegistry.register({
    ResourceType,
    Terrain,
    Resource,
    City
  });
} catch (err) {
  console.error("Failed to register custom types of blogs module", err);
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
        debugger;
        console.log(await api.query.gameModule.cities(Alice));
      } catch (err) {
        console.error(err);
      }
    }
  }
};
</script>

<style>
.container {
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
