<template>
  <div class="bg-gray-300 h-screen">
    <div class="flex">
      <div class="w-3/12 hidden 2xl:block xl:block lg:hidden md:hidden ml-10">
        <div class="flex relative">
          <div>
            <div class="
                absolute
                flex
                items-center
                justify-center
                flex-col
                ml-20
                mt-3
              ">
              <div class="flex items-center justify-center">
                <img class="mt-4 rounded-xl" src="user.png" alt="" />
              </div>
              <div class="flex flex-col items-center justify-center">
                <div class="text-white">michael</div>
                <div class="text-white">graphics</div>
              </div>
            </div>
          </div>
          <div class="absolute mt-40">
            <div class="text-white ml-3">latest masseges</div>
            <div class="card w-64 h-28 ml-3 mt-3 bg-base-100 shadow-xl">
              <div class="card-body">
                <h2 class="card-title">title</h2>
                <p>text:</p>
              </div>
            </div>
            <div class="card mt-3 w-64 h-28 ml-3 bg-base-100 shadow-xl">
              <div class="card-body">
                <h2 class="card-title">title</h2>
                <p>text:</p>
              </div>
            </div>
            <div class="card w-64 h-28 mt-3 ml-3 bg-base-100 shadow-xl">
              <div class="card-body">
                <h2 class="card-title">title</h2>
                <p>text:</p>
              </div>
            </div>
          </div>
          <img src="logo.png" class="w-72 h-screen" alt="" />
        </div>
      </div>
      <div class="2xl:w-8/12 xl:w-8/12 lg:w-11/12 md:w-11/12 w-11/12">
        <img src="logoone.png"
          class="hidden 2xl:block xl:block lg:block md:hidden sm:hidden xs:hidden 4xl:hidden 5xl:hidden w-full ml-6"
          alt="" />
        <div class="mt-5 flex items-center justify-center px-2 w-full">
          <div class="relative">
            <div class="absolute left-64 xs:left-72 inset-y-0 pl-3 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
            </div>

            <input class="
                input
                w-80
                xs:ml-10
                
                py-4
                border
                rounded-full
                focus:border-blue-500 focus:shadow-outline
                outline-none
              " type="text" placeholder="enter your search" />
          </div>
        </div>
        <div class="
            grid grid-cols-1
            2xl:grid-cols-2
            xl:grid-cols-2
            lg:grid-cols-2
            md:grid-cols-1
            xs:ml-10
            place-content-center place-items-center
            gap-5
            mt-5
          ">
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
};
</script>

<style>

</style>