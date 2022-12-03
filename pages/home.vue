<template>
  <div class="">
    <div class="
        grid grid-cols-1
        2xl:grid-cols-2
        xl:grid-cols-2
        lg:grid-cols-2
        md:grid-cols-1
        place-content-center place-items-center
        gap-5
        mt-5
        xs:ml-10
        
      ">
      <select class="select w-full max-w-xs">
        <option disabled selected>job categories</option>
        <option>Homer</option>
        <option>Marge</option>
        <option>Bart</option>
        <option>Lisa</option>
        <option>Maggie</option>
      </select>
      <div class="relative">
        <div class="absolute left-64 inset-y-0 pl-3 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
            stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
          </svg>
        </div>

        <input class="
            input
            w-80
            py-4
            border
            rounded-full
            focus:border-blue-500 focus:shadow-outline
            outline-none
          " type="text" placeholder="location" />
      </div>
    </div>
    <div class="flex items-center justify-center mt-5">
      <button
        class="btn 2xl:ml-0 xl:ml-0 lg:ml-0 md:ml-0 sm:ml-0 4xl:ml-0 5xl:ml-0 xs:-mr-10 xs:w-80 5xl:w-80 2xl:w-52 xl:w-52 lg:w-52 md:w-5/12 w-7/12 btn-primary">
        Send for componies
      </button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>

</style>