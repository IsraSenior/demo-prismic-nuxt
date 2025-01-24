<template>
  <div>
    <pre>
      {{ home }}
    </pre>
    <slice-zone wrapper="main" :components="components" :slices="home.data.slices" />
  </div>
</template>

<script setup>
 import { components } from "~/slices";
const { client } = usePrismic();

const { data: home } = await useAsyncData("home", () => {
  return client.getSingle("home", { lang: "en-us" })
});
</script>