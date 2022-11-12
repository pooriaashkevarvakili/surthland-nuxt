<template>
  <div class="drawer">
    <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content flex flex-col">
      <div class="w-full navbar bg-white">
        <div
          class="
            flex
            2xl:hidden
            xl:hidden
            lg:hidden
            md:hidden
            flex-1
            justify-between
          "
        >
          <div>
            <label for="my-drawer-3" class="">
              <div class="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  class="inline-block cursor-pointer w-6 h-6 stroke-current"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
                <nuxt-link to="/messages">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6 ml-4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                    />
                  </svg>
                </nuxt-link>
              </div>
            </label>
          </div>
          <div>logo</div>

          <div><img class="w-6 h-6 rounded-full" src="user.png" alt="" /></div>
        </div>
        <div class="flex-none lg:hidden"></div>

        <div class="2xl:block hidden xl:block lg:block md:hidden flex-1">
          logo
        </div>

        <div class="flex-1 hidden lg:block">
          <ul class="menu menu-horizontal">
            <li><nuxt-link to="/header">Home</nuxt-link></li>
            <li><nuxt-link to="/resume">Resume</nuxt-link></li>
            <li><nuxt-link to="/jobs">jobs</nuxt-link></li>
          </ul>
        </div>

        <div class="flex-none hidden 2xl:block xl:block lg:hidden md:hidden">
          <nuxt-link to="/messages">
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
                d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
              />
            </svg>
          </nuxt-link>
        </div>
      </div>

      <Nuxt />
    </div>
    <div class="drawer-side">
      <label for="my-drawer-3" class="drawer-overlay"></label>
      <ul class="menu p-4 w-80 bg-base-100">
        <!-- Sidebar content here -->
        <li><nuxt-link to="/header">Home</nuxt-link></li>
        <li><nuxt-link to="/resume">Resume</nuxt-link></li>
        <li><nuxt-link to="/jobs">jobs</nuxt-link></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>