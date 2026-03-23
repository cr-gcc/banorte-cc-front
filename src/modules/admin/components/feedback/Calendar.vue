<script setup>
  import { ref, onMounted, computed } from 'vue';
  //import { useAppStore } from '@/stores/useAppStore';
  //import api from '@/plugins/axios';

  const emit = defineEmits(['day-selected']);

  //const app = useAppStore();
  const currentDate = new Date();
  const year = ref(currentDate.getFullYear());
  const month = ref(currentDate.getMonth());
  const paymentDates = ref([]);
  const variant = ref(null);
	const message = ref(null);

  const daysOfWeek = [
    'Dom', 
    'Lun', 
    'Mar', 
    'Mie', 
    'Jue', 
    'Vie', 
    'Sab'
  ];

  const firstDayOfWeek = computed(() => {
    return new Date(year.value, month.value, 1).getDay();
  });

  const daysInMonth = computed(() => {
    return new Date(year.value, month.value + 1, 0).getDate();
  });

  const monthName = computed(() => {
    return new Date(year.value, month.value).toLocaleString('default', { month: 'long' })
  });

  const promiseDates = computed(() => {
    if (!paymentDates.value) return [];
    /*return paymentDates.value.map(d => parseLocalDate(d));*/
		return [new Date(2026, 2, 20), new Date(2026, 2, 16), new Date(2026, 2, 17), new Date(2026, 2, 2)];
  });

  const parseLocalDate = (dateStr) => {
    const [year, month, day] = dateStr.split('-').map(Number);
    return new Date(year, month - 1, day);
  };

  const isToday = (day) => {
    const today = new Date();
    return (
      day === today.getDate() &&
      month.value === today.getMonth() &&
      year.value === today.getFullYear()
    )
  };

  const isPromiseDate = (day) => {
		
    return promiseDates.value.some(date =>
      day === date.getDate() &&
      month.value === date.getMonth() &&
      year.value === date.getFullYear()
    );
		/*
		return day === 20 && month.value === 2 && year.value === 2026;*/
  };

  const prevMonth = async() => {
    month.value--
    if (month.value < 0) {
      month.value = 11
      year.value--
    }
    /*await getPaymentDates();*/ 
  }

  const nextMonth = async() => {
    month.value++
    if (month.value > 11) {
      month.value = 0
      year.value++
    }
    /*await getPaymentDates();*/ 
  }

  const emitDate = (day) => {
    emit('day-selected', { day, month: month.value, year: year.value });
  }
	/*
  onMounted(() => {
    getPaymentDates();
  });
	*/
</script>

<template>
  <div class="flex justify-center">
    <div class="w-full mx-auto">
      <div class="bg-white shadow-lg overflow-hidden">
        <div class="flex items-center justify-between px-6 py-3 bg-gray-700">
          <button @click="prevMonth()" class="text-white cursor-pointer">
            <i class="fa-solid fa-arrow-left"></i>
          </button>
          <h2 class="text-white">{{ monthName }} {{ year }}</h2>
          <button @click="nextMonth()" class="text-white cursor-pointer">
            <i class="fa-solid fa-arrow-right"></i>
          </button>
        </div>
        <div class="grid grid-cols-7 gap-2 p-4 bg-gray-200">
          <div class="text-center font-semibold" v-for="(day, index) in daysOfWeek" :key="'dow-' + index">
            {{ day }}
          </div>
          <div v-for="n in firstDayOfWeek" :key="'empty-' + n"></div>
          <template v-for="day in daysInMonth" :key="'day-'+day">
            <div v-if="isPromiseDate(day)" class="calendar-frame bg-red-800 text-white cursor-pointer" @click="emitDate(day)">
              {{ day }}
            </div>
            <div v-else-if="isToday(day)" class="calendar-frame bg-red-700 text-white" >
              {{ day }}
            </div>
            <div v-else class="calendar-frame text-gray-900">
              {{ day }}
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
	.calendar-frame {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 48px;
		width: auto;
		border-radius: 20px;
	}
</style>
