// Code generated by Slice Machine. DO NOT EDIT.

import { defineAsyncComponent } from "vue";
import { defineSliceZoneComponents } from "@prismicio/vue";

export const components = defineSliceZoneComponents({
  alternate_grid: defineAsyncComponent(
    () => import("./AlternateGrid/index.vue"),
  ),
  hero: defineAsyncComponent(() => import("./Hero/index.vue")),
});
