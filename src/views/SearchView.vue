<template>
  <section class="min-h-screen hidden xl:block">
    <TopBarDashboard
      :TopBarTitle="'Ferrero S.P.A.'"
      :ButtonLogoText="'RG'"
      :ProfileName="'Robert Gray'"
      :ProfileAccount="'Hykee Account'"
    />

    <div
      class="flex flex-col mt-[170px] items-center justify-center text-white"
    >
      <div class="text-center">
        <h1
          class="text-4xl font-bold flex items-center justify-center gap-2 mb-[34px]"
        >
          <LogoLarge />
        </h1>
        <p
          class="mt-4 text-center text-white opacity-[70%] font-inter text-xs font-normal max-w-[520px] mb-[50px]"
        >
          HYKEE velocizza le fasi di osservazione e valutazione di
          un'organizzazione. Raccoglie dati eterogenei in un unico sistema e li
          converte in informazioni. Dalla sinergia tra tecnologia e competenza
          nasce il concetto di Consulenza Aumentata.
        </p>
      </div>

      <div
        class="flex items-center bg-Sidebar-bg border border-primary-color text-white rounded-[10px] w-[784px] h-[53px] px-5"
      >
        <input
          type="text"
          placeholder="Search"
          class="bg-transparent font-barlow font-normal text-sm outline-none text-white flex-1"
        />
        <button class="text-gray-400 hover:text-white">
          <font-awesome-icon
            icon="fa-solid fa-magnifying-glass"
            class="text-primary-color w-[15px] h-[15px]"
          />
        </button>
      </div>
    </div>
  </section>
  <section class="pt-[41px] xl:hidden min-h-screen text-white pb-16">
    <div class="flex items-center text-primary-color ml-[16px] space-x-[10px]">
      <button><font-awesome-icon icon="fa-solid fa-chevron-left" /></button>
      <h1 class="text-lg font-medium font-gotham">Research</h1>
    </div>

    <div class="mt-[60px] flex space-x-[7px]">
      <input
        type="text"
        placeholder="Enter your company name or VAT number"
        class="w-full px-[9px] py-[14px] bg-Searchbg rounded-md text-[10px] text-white"
      />
      <button class="px-[28px] py-[14px] bg-DropdownBg text-white rounded-md">
        Search
      </button>
    </div>

    <div class="mt-4">
      <h2 class="text-white text-sm font-poppins font-normal">
        Custom Searches
      </h2>
      <div class="mt-6">
        <span class="font-poppins font-normal text-xs">Ateco Code:</span>
        <div
          class="bg-Searchbg px-[8px] py-[6px] max-w-[57px] w-full font-poppins font-medium text-[10px] rounded-[12.5px] flex gap-x-[5px]"
        >
          34.56 <span class="mt-[2.5px]"><CrossIcon /></span>
        </div>
      </div>
      <div class="mt-[14px]">
        <span class="font-poppins font-normal text-xs">Province:</span>
        <div class="flex space-x-[9px]">
          <div
            class="bg-Searchbg px-[8px] py-[6px] max-w-[38px] w-full font-poppins font-medium text-[10px] rounded-[12.5px] flex gap-x-[5px]"
          >
            BO <span class="mt-[2.5px]"><CrossIcon /></span>
          </div>
          <div
            class="bg-Searchbg px-[8px] py-[6px] max-w-[38px] w-full font-poppins font-medium text-[10px] rounded-[12.5px] flex gap-x-[5px]"
          >
            RE <span class="mt-[2.5px]"><CrossIcon /></span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import TopBarDashboard from "@/components/DashboardView/TopBarDashboard.vue";
import LogoLarge from "@/components/icons/LogoLarge.vue";
import CrossIcon from "@/components/icons/CrossIcon.vue";
</script>
