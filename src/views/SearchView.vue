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

    <div class="mt-[31px]">
      <h2 class="font-poppins font-normal text-sm">345 companies</h2>

      <div
        class="bg-SearchTableBg mt-4 max-w-[343px] w-full h-auto text-white rounded-[10px]"
      >
        <div class="font-poppins font-normal px-[11px] pt-[14px] text-sm mb-2">
          Top 3
        </div>
        <table
          class="w-full text-left text-sm font-poppins divide-y divide-SearchTableDivider"
        >
          <thead>
            <tr>
              <th class=""></th>
              <th></th>
              <th class="text-center"></th>
              <th class="text-center"></th>
              <th class="text-center"></th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(item, index) in companies"
              :key="index"
              :class="{
                'bg-SearchTableBg': index % 2 === 0,
                'bg-TableEvenRow': index % 2 !== 0,
              }"
            >
              <td class="py-2 font-poppins font-normal pl-[10px] text-[12px]">
                <span>{{ index + 1 }}.</span>
                <span class="">{{ item.name }}</span>
              </td>
              <td>{{ item.location }}</td>
              <td class="text-center">
                <div class="flex">
                  <span
                    class="bg-primary-color mt-[2px] font-poppins font-medium text-[10px] flex justify-center items-center mx-auto h-4 w-4 text-white rounded-full text-xs"
                  >
                    R
                  </span>
                  <span class="font-poppins font-normal text-[12px]">{{
                    item.revenue
                  }}</span>
                </div>
              </td>
              <td class="text-center">
                <div class="flex">
                  <span
                    class="bg-primary-color mt-[2px] flex justify-center items-center mx-auto h-4 w-4 text-white rounded-full text-xs"
                  >
                    E
                  </span>
                  <span class="font-poppins font-normal text-[12px]">{{
                    item.employees
                  }}</span>
                </div>
              </td>
              <td class="text-center pr-[11px]">
                <div class="flex">
                  <span
                    class="bg-primary-color mt-[2px] flex justify-center items-center mx-auto h-4 w-4 text-white rounded-full text-xs"
                  >
                    P
                  </span>
                  <span class="font-poppins font-normal text-[12px]">{{
                    item.profit
                  }}</span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div
        class="bg-SearchTableBg mt-4 max-w-[343px] w-full h-auto text-white rounded-[10px]"
      >
        <div class="font-poppins font-normal px-[11px] pt-[14px] text-sm mb-2">
          Top 3
        </div>
        <table
          class="w-full text-left text-sm font-poppins divide-y divide-SearchTableDivider"
        >
          <thead>
            <tr>
              <th class=""></th>
              <th></th>
              <th class="text-center"></th>
              <th class="text-center"></th>
              <th class="text-center"></th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(item, index) in companies"
              :key="index"
              :class="{
                'bg-SearchTableBg': index % 2 === 0,
                'bg-TableEvenRow': index % 2 !== 0,
              }"
            >
              <td class="py-2 font-poppins font-normal pl-[10px] text-[12px]">
                <span>{{ index + 1 }}.</span>
                <span class="">{{ item.name }}</span>
              </td>
              <td>{{ item.location }}</td>
              <td class="text-center">
                <div class="flex">
                  <span
                    class="bg-primary-color mt-[2px] font-poppins font-medium text-[10px] flex justify-center items-center mx-auto h-4 w-4 text-white rounded-full text-xs"
                  >
                    R
                  </span>
                  <span class="font-poppins font-normal text-[12px]">{{
                    item.revenue
                  }}</span>
                </div>
              </td>
              <td class="text-center">
                <div class="flex">
                  <span
                    class="bg-primary-color mt-[2px] flex justify-center items-center mx-auto h-4 w-4 text-white rounded-full text-xs"
                  >
                    E
                  </span>
                  <span class="font-poppins font-normal text-[12px]">{{
                    item.employees
                  }}</span>
                </div>
              </td>
              <td class="text-center pr-[11px]">
                <div class="flex">
                  <span
                    class="bg-primary-color mt-[2px] flex justify-center items-center mx-auto h-4 w-4 text-white rounded-full text-xs"
                  >
                    P
                  </span>
                  <span class="font-poppins font-normal text-[12px]">{{
                    item.profit
                  }}</span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>

<script setup>
import TopBarDashboard from "@/components/DashboardView/TopBarDashboard.vue";
import LogoLarge from "@/components/icons/LogoLarge.vue";
import CrossIcon from "@/components/icons/CrossIcon.vue";
const companies = [
  {
    name: "Ferrero S.P.A",
    location: "BO",
    revenue: "12.988",
    employees: "45.000",
    profit: "75.000",
  },
  {
    name: "Agrifood Srl",
    location: "BO",
    revenue: "12.988",
    employees: "45.000",
    profit: "75.000",
  },
  {
    name: "Firen Srl",
    location: "RE",
    revenue: "12.988",
    employees: "45.000",
    profit: "75.000",
  },
];
</script>
