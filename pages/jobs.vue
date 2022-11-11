<template>
  <div class="bg-gray-300">
    <div class="w-9/12 mt-3 bg-white ml-10">
      <div class="flex px-12 justify-between">
        <div class="mt-5 hidden 2xl:block xl:block lg:hidden md:hidden">
          Suijobs jobs for you
        </div>
        <div class="mt-5 space-x-2 hidden 2xl:flex xl:flex lg:hidden md:hidden">
          <span
            class="text-blue-300 2xl:block xl:block lg:block hidden md:hidden"
            >more</span
          >

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="
              w-6
              h-6
              2xl:block
              xl:block
              lg:block
              hidden
              md:hidden
              text-blue-300
            "
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </div>
      </div>
      <div
        class="
          grid
          gap-3
          mt-5
          2xl:ml-5
          xl:ml-5
          lg:ml-5
          ml-6
          md:ml-48
          2xl:grid-cols-3
          xl:grid-cols-3
          lg:grid-cols-2
          md:grid-cols-1
          grid-cols-1
        "
      >
        <div
          class="
            card
            2xl:w-64
            xl:w-64
            lg:w-64
            md:w-80
            w-80
            bg-base-100
            shadow-xl
          "
        >
          <div class="card-body bg-gray-300">
            <h2 class="card-title">job title</h2>
          </div>
          <div class="card-body">
            <h2 class="card-title">job title</h2>
          </div>
        </div>
        <div
          class="
            card
            2xl:w-64
            xl:w-64
            lg:w-64
            md:w-80
            w-80
            bg-base-100
            shadow-xl
          "
        >
          <div class="card-body bg-gray-300">
            <h2 class="card-title">job title</h2>
          </div>
          <div class="card-body">
            <h2 class="card-title">job title</h2>
          </div>
        </div>
        <div
          class="
            card
            2xl:w-64
            xl:w-64
            lg:w-64
            md:w-80
            w-80
            bg-base-100
            shadow-xl
          "
        >
          <div class="card-body bg-gray-300">
            <h2 class="card-title">job title</h2>
          </div>
          <div class="card-body">
            <h2 class="card-title">job title</h2>
          </div>
        </div>
      </div>
      <jobs-one />
    </div>
  </div>
</template>

<script>
import jobsOne from "./jobsOne.vue";
export default {
  components: {
    jobsOne,
  },
};
</script>

<style>
</style>