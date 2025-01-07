<template>
  <div class="flex items-center justify-center">
    <div
      class="bg-black bg-opacity-[20%] text-white rounded-lg shadow-md  w-[322px]"
    >
      <div class="flex justify-center mt-[30px]">
        <img :src="image" alt="Card Image" />
      </div>

      <div class="mt-[34px]">
        <table class="w-full max-w-[322px] text-left">
          <thead class="bg-white text-Sidebar-bg">
            <tr>
              <th class="py-[14px] pl-[27px] font-poppins font-medium text-xs">Agilità</th>
              <th class="py-[14px] pl-[27px] font-poppins font-medium text-xs">Score %</th>
              <th class="py-[14px] pl-[27px]  font-poppins font-medium text-xs">Risultato</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(item, index) in tableData"
              :key="index"
              class="odd:bg-black even:bg-black even:bg-opacity-[0%]"
            >
              <td class="py-[14px] pl-[27px] font-poppins font-medium text-xs">{{ item.name }}</td>
              <td class="py-[14px] pl-[27px] font-poppins font-medium text-xs">{{ item.score }} %</td>
              <td class="py-[14px] pl-[27px] font-poppins font-medium text-xs" :class="item.resultClass">
                {{ item.result }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  image: String,
  tableData: Array,
});
</script>
