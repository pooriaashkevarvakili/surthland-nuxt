<template>
  <div>
    <div class="flex mt-5">
      <select
        class="select 2xl:ml-10 xl:ml-10 ml-0 lg:ml-0 md:ml-2 w-20 max-w-xs"
      >
        <option disabled selected>Pick your favorite Simpson</option>
        <option>Homer</option>
        <option>Marge</option>
        <option>Bart</option>
        <option>Lisa</option>
        <option>Maggie</option>
      </select>
      <input
        type="text"
        v-model="number"
        class="
          input
          border
          2xl:ml-0
          xl:ml-0
          lg:ml-0
          md:ml-2
          border-gray-300
          2xl:w-52
          xl:w-56
          lg:w-52
          md:w-72
          w-40
          ml-3
        "
      />
    </div>
    <div class="relative 2xl:ml-12 xl:ml-12 lg:ml-10 md:ml-2 ml-2 mt-3">
      <div
        class="
          absolute
          2xl:left-64
          xl:left-64
          lg:left-56
          md:left-80
          left-52
          inset-y-0
          pl-3
          flex
          items-center
        "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
          />
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      </div>

      <input
        class="
          2xl:ml-6
          xl:ml-6
          lg:ml-10
          md:ml-2
          ml-2
          input
          2xl:w-72
          xl:w-72
          lg:w-72
          md:w-full
          w-64
          border-gray-300
          py-4
          border
          rounded-full
          focus:border-blue-500 focus:shadow-outline
          outline-none
        "
        type="password"
        placeholder="password"
      />
    </div>
    <input
      type="text"
      placeholder="confirmPassword"
      class="
        input
        2xl:ml-12
        xl:ml-12
        lg:ml-12
        border border-gray-300
        2xl:w-72
        xl:w-72
        lg:w-72
        md:w-full
        w-64
        mt-5
      "
    />
    <nuxt-link to="/login">
      <button
        class="
          btn
          2xl:w-72
          xl:w-72
          2xl:ml-12
          xl:ml-12
          lg:ml-12 lg:w-72
          ml-0
          md:ml-0
          w-72
          md:w-full
          mt-5
          bg-purple-500
        "
      >
        signup
      </button>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      number: "+98",
    };
  },
};
</script>

<style>
</style>