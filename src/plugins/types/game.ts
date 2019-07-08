import { Enum, Struct } from "@polkadot/types/codec";
import {
  getTypeRegistry,
  u32,
  u64,
  Vector,
  Balance,
  Tuple
} from "@polkadot/types";

export const ResourceType = Enum.with(["Gold"]);

export const Resource = Struct.with({
  level: u32,
  time: u64,
  accrual: Balance,
  rate: u32,
  resource_type: ResourceType,
  resource_amount: Balance
});

export const ResourceBuilding = Struct.with({
  level: u32,
  time: u64,
  accrual: Balance,
  rate: u32,
  resource_type: ResourceType,
  resource_amount: Balance
});

export const EmptyTuple = Tuple.with([]);
export const CleanTerrain = EmptyTuple;
export const GoldVein = EmptyTuple;
export const GoldMine = ResourceBuilding;

export const Terrain = Enum.with({
  CleanTerrain,
  GoldVein,
  GoldMine
});

export const VecResources = Vector.with(Resource);
export const VecTerrain = Vector.with(Terrain);
export const VecVecTerrain = Vector.with(VecTerrain);

export const City = Struct.with({
  grid: VecVecTerrain,
  resources: VecResources
});

export const registerGameTypes = () => {
  try {
    const typeRegistry = getTypeRegistry();
    typeRegistry.register({
      VecResources,
      VecTerrain,
      VecVecTerrain,

      ResourceType,
      Resource,
      ResourceBuilding,

      EmptyTuple,
      CleanTerrain,
      GoldVein,
      GoldMine,
      Terrain,

      City
    });
  } catch (err) {
    console.error("Failed to register custom types", err);
  }
};
