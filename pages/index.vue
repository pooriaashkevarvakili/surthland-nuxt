<template>
  <div style="height: 800px" class="bg-gray-300 h-screen">
    <div class="flex">
      <div
        style="height: 800px"
        class="
          w-3/12
          hidden
          h-full
          2xl:block
          xl:block
          lg:hidden
          md:hidden
          ml-10
          bg-blue-400
        "
      >
        <div class="flex items-center justify-center">
          <img class="mt-10" src="user.png" alt="" />
        </div>
        <div class="flex flex-col items-center justify-center">
          <div class="text-white">michael</div>
          <div class="text-white">graphics</div>
        </div>

        <div class="text-white mt-5 ml-3">latest masseges</div>
        <div class="card w-64 ml-3 bg-base-100 shadow-xl">
          <div class="card-body">
            <h2 class="card-title">title</h2>
            <p>text:</p>
          </div>
        </div>
        <div class="card mt-3 w-64 ml-3 bg-base-100 shadow-xl">
          <div class="card-body">
            <h2 class="card-title">title</h2>
            <p>text:</p>
          </div>
        </div>
        <div class="card w-64 mt-3 ml-3 bg-base-100 shadow-xl">
          <div class="card-body">
            <h2 class="card-title">title</h2>
            <p>text:</p>
          </div>
        </div>
        <div class="card w-64 mt-3 ml-3 bg-base-100 shadow-xl">
          <div class="card-body">
            <h2 class="card-title">title</h2>
            <p>text:</p>
          </div>
        </div>
      </div>
      <div class="2xl:w-8/12 xl:w-8/12 lg:w-11/12 md:w-11/12 w-11/12">
        <div
          class="
            card
            2xl:ml-3
            xl:ml-3
            lg:ml-3
            md:ml-6
            ml-6
            w-full
            mt-5
            h-36
            bg-gray-400
            shadow-xl
          "
        >
          <div class="card-title"></div>
        </div>
        <div class="mt-5 flex items-center justify-center px-2 w-full">
          <div class="relative">
            <div class="absolute left-64 inset-y-0 pl-3 flex items-center">
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
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </div>

            <input
              class="
                input
                w-80
                py-4
                border
                rounded-full
                focus:border-blue-500 focus:shadow-outline
                outline-none
              "
              type="text"
              placeholder="enter your search"
            />
          </div>
        </div>
        <div
          class="
            grid grid-cols-1
            2xl:grid-cols-2
            xl:grid-cols-2
            lg:grid-cols-2
            md:grid-cols-1
            place-content-center place-items-center
            gap-5
            mt-5
          "
        >
          <select class="select w-full max-w-xs">
            <option disabled selected>job categories</option>
            <option>Homer</option>
            <option>Marge</option>
            <option>Bart</option>
            <option>Lisa</option>
            <option>Maggie</option>
          </select>
          <select class="select w-full max-w-xs">
            <option disabled selected>type of work</option>
            <option>Homer</option>
            <option>Marge</option>
            <option>Bart</option>
            <option>Lisa</option>
            <option>Maggie</option>
          </select>
        </div>
        <home />
      </div>
    </div>
  </div>
</template>

<script>
import home from "./home.vue";
export default {
  components: { home },
  layout: "default",
};
</script>
