<script setup>
import { ref, onMounted, watch } from 'vue';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
    BarElement
} from 'chart.js';
import { Bar } from 'vue-chartjs';
import MultiSelect from 'primevue/multiselect';
import Calendar from 'primevue/calendar';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
    BarElement
);

const dateRange = ref(null);

const selectedProperties = ref([]);
const selectedChannels = ref([]);

const properties = ref([
    { id: 1, name: 'Villa Sunshine' },
    { id: 2, name: 'Mountain View Lodge' },
    { id: 3, name: 'Beachfront Paradise' },
    { id: 4, name: 'City Center Apartment' },
    { id: 5, name: 'Lakeside Retreat' }
]);

const bookingChannels = ref([
    { id: 'airbnb', name: 'Airbnb' },
    { id: 'booking', name: 'Booking.com' },
    { id: 'direct', name: 'Direct' },
    { id: 'expedia', name: 'Expedia' }
]);

const kpiData = ref({
    totalBookings: 0,
    totalRevenue: 0,
    averageStay: 0,
    occupancyRate: 0
});

const tableData = ref([]);
const revenueData = ref({
    labels: [],
    datasets: []
});

const dailyBookingsData = ref({
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    datasets: []
});

const monthlyBookingsData = ref({
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: []
});

const loading = ref(false);

const revenueChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Monthly Revenue by Channel'
        }
    },
    scales: {
        y: {
            beginAtZero: true,
            stacked: true,
            ticks: {
                callback: function(value) {
                    return '$' + value.toLocaleString();
                }
            }
        },
        x: {
            stacked: true
        }
    }
};

const barChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            position: 'top',
        }
    },
    scales: {
        y: {
            beginAtZero: true,
            stacked: true
        },
        x: {
            stacked: true
        }
    }
};

const fetchData = async () => {
    loading.value = true;
    try {
        // Set default date range if not set
        if (!dateRange.value) {
            const today = new Date();
            const startDate = new Date();
            startDate.setFullYear(today.getFullYear() - 1); // One year ago
            dateRange.value = [startDate, today];
        }

        // Generate monthly labels for the past year
        const labels = [];
        const startDate = new Date();
        startDate.setFullYear(startDate.getFullYear() - 1);
        
        for (let i = 0; i < 15; i++) {
            const date = new Date(startDate);
            date.setMonth(startDate.getMonth() + i);
            labels.push(date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' }));
        }

        // Initialize revenue data with mock values
        revenueData.value = {
            labels: labels,
            datasets: [
                {
                    label: 'Airbnb',
                    data: [
                        18000, 19200, 20800, 22000, 23200, 24800,  // First half 2023
                        26000, 27200, 28800, 30000, 31200, 32800,  // Second half 2023
                        34000, 35200, 36800                        // First quarter 2024
                    ],
                    backgroundColor: 'rgba(255, 99, 132, 0.8)',
                    borderColor: 'rgba(255, 99, 132, 1)',
                    borderWidth: 1
                },
                {
                    label: 'Booking.com',
                    data: [
                        13500, 14400, 15600, 16500, 17400, 18600,  // First half 2023
                        19500, 20400, 21600, 22500, 23400, 24600,  // Second half 2023
                        25500, 26400, 27600                        // First quarter 2024
                    ],
                    backgroundColor: 'rgba(54, 162, 235, 0.8)',
                    borderColor: 'rgba(54, 162, 235, 1)',
                    borderWidth: 1
                },
                {
                    label: 'Direct',
                    data: [
                        9000, 9600, 10400, 11000, 11600, 12400,   // First half 2023
                        13000, 13600, 14400, 15000, 15600, 16400, // Second half 2023
                        17000, 17600, 18400                        // First quarter 2024
                    ],
                    backgroundColor: 'rgba(75, 192, 192, 0.8)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1
                },
                {
                    label: 'Expedia',
                    data: [
                        4500, 4800, 5200, 5500, 5800, 6200,      // First half 2023
                        6500, 6800, 7200, 7500, 7800, 8200,      // Second half 2023
                        8500, 8800, 9200                          // First quarter 2024
                    ],
                    backgroundColor: 'rgba(153, 102, 255, 0.8)',
                    borderColor: 'rgba(153, 102, 255, 1)',
                    borderWidth: 1
                }
            ]
        };

        // Update other data...
        dailyBookingsData.value = {
            labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
            datasets: [
                {
                    label: 'Airbnb',
                    data: [12, 15, 8, 10, 14, 25, 20],
                    backgroundColor: 'rgba(255, 99, 132, 0.8)',
                },
                {
                    label: 'Booking.com',
                    data: [8, 10, 6, 9, 12, 18, 15],
                    backgroundColor: 'rgba(54, 162, 235, 0.8)',
                },
                {
                    label: 'Direct',
                    data: [5, 7, 4, 6, 8, 12, 10],
                    backgroundColor: 'rgba(75, 192, 192, 0.8)',
                },
                {
                    label: 'Expedia',
                    data: [3, 4, 2, 5, 7, 9, 8],
                    backgroundColor: 'rgba(153, 102, 255, 0.8)',
                }
            ]
        };

        monthlyBookingsData.value = {
            labels: labels,
            datasets: [
                {
                    label: 'Airbnb',
                    data: [120, 150, 180, 200, 220, 250, 240, 230, 210, 190, 170, 160, 150, 140, 130],
                    backgroundColor: 'rgba(255, 99, 132, 0.8)',
                },
                {
                    label: 'Booking.com',
                    data: [80, 90, 100, 110, 120, 130, 125, 115, 105, 95, 85, 75, 70, 65, 60],
                    backgroundColor: 'rgba(54, 162, 235, 0.8)',
                },
                {
                    label: 'Direct',
                    data: [50, 60, 70, 80, 90, 100, 95, 85, 75, 65, 55, 45, 40, 35, 30],
                    backgroundColor: 'rgba(75, 192, 192, 0.8)',
                },
                {
                    label: 'Expedia',
                    data: [30, 35, 40, 45, 50, 55, 50, 45, 40, 35, 30, 25, 20, 15, 10],
                    backgroundColor: 'rgba(153, 102, 255, 0.8)',
                }
            ]
        };

        // Update KPI data
        kpiData.value = {
            totalBookings: calculateTotalBookings(dailyBookingsData.value),
            totalRevenue: calculateTotalRevenue(revenueData.value),
            averageStay: calculateAverageStay(dailyBookingsData.value),
            occupancyRate: calculateOccupancyRate(dailyBookingsData.value)
        };

    } catch (error) {
        console.error('Error fetching data:', error);
    } finally {
        loading.value = false;
    }
};

const filterData = () => {
    if (!dateRange.value) return;

    const [startDate, endDate] = dateRange.value;
    
    // Filter the data based on selected properties, channels, and date range
    const filteredRevenueData = {
        labels: revenueData.value.labels,
        datasets: revenueData.value.datasets
            .filter(dataset => 
                selectedChannels.value.length === 0 || 
                selectedChannels.value.some(channel => channel.id === dataset.label.toLowerCase())
            )
    };

    // Update KPI data based on filters
    const filteredKpiData = {
        totalBookings: calculateTotalBookings(filteredRevenueData),
        totalRevenue: calculateTotalRevenue(filteredRevenueData),
        averageStay: calculateAverageStay(filteredRevenueData),
        occupancyRate: calculateOccupancyRate(filteredRevenueData)
    };

    // Update the displayed data
    revenueData.value = filteredRevenueData;
    kpiData.value = filteredKpiData;
};

// Helper functions to calculate KPI values
const calculateTotalBookings = (data) => {
    return data.datasets.reduce((total, dataset) => 
        total + dataset.data.reduce((sum, val) => sum + val, 0), 0);
};

const calculateTotalRevenue = (data) => {
    return data.datasets.reduce((total, dataset) => 
        total + dataset.data.reduce((sum, val) => sum + val, 0), 0);
};

const calculateAverageStay = (data) => {
    // Mock calculation - replace with actual logic
    return 3.5;
};

const calculateOccupancyRate = (data) => {
    // Mock calculation - replace with actual logic
    return 85;
};

// Watch for changes in filters
watch([selectedProperties, selectedChannels, dateRange], () => {
    filterData();
}, { deep: true });

onMounted(() => {
    fetchData();
});
</script>

<template>
    <div class="space-y-6">
        <!-- Filters Section -->
        <div class="bg-white p-4 rounded-lg shadow">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Properties</label>
                    <MultiSelect
                        v-model="selectedProperties"
                        :options="properties"
                        optionLabel="name"
                        placeholder="Select Properties"
                        class="w-full"
                        :filter="true"
                    />
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Booking Channels</label>
                    <MultiSelect
                        v-model="selectedChannels"
                        :options="bookingChannels"
                        optionLabel="name"
                        placeholder="Select Channels"
                        class="w-full"
                    />
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Date Range</label>
                    <Calendar
                        v-model="dateRange"
                        selectionMode="range"
                        :showIcon="true"
                        class="w-full"
                        placeholder="Select Date Range"
                        :showButtonBar="true"
                        :manualInput="false"
                        dateFormat="yy-mm-dd"
                    />
                </div>
            </div>
        </div>

        <!-- KPI Cards -->
        <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div class="bg-white p-4 rounded-lg shadow">
                <h3 class="text-sm font-medium text-gray-500">Total Bookings</h3>
                <p class="text-2xl font-semibold text-gray-900">{{ kpiData.totalBookings }}</p>
            </div>
            <div class="bg-white p-4 rounded-lg shadow">
                <h3 class="text-sm font-medium text-gray-500">Total Revenue</h3>
                <p class="text-2xl font-semibold text-gray-900">${{ kpiData.totalRevenue.toLocaleString() }}</p>
            </div>
            <div class="bg-white p-4 rounded-lg shadow">
                <h3 class="text-sm font-medium text-gray-500">Average Stay</h3>
                <p class="text-2xl font-semibold text-gray-900">{{ kpiData.averageStay }} days</p>
            </div>
            <div class="bg-white p-4 rounded-lg shadow">
                <h3 class="text-sm font-medium text-gray-500">Occupancy Rate</h3>
                <p class="text-2xl font-semibold text-gray-900">{{ kpiData.occupancyRate }}%</p>
            </div>
        </div>

        <!-- Revenue Chart -->
        <div class="bg-white p-4 rounded-lg shadow">
            <h2 class="text-lg font-medium text-gray-900 mb-4">Monthly Revenue</h2>
            <div class="h-80">
                <Bar :data="revenueData" :options="revenueChartOptions" />
            </div>
        </div>

        <!-- Daily Bookings Chart -->
        <div class="bg-white p-4 rounded-lg shadow">
            <h2 class="text-lg font-medium text-gray-900 mb-4">Daily Bookings by Channel</h2>
            <div class="h-80">
                <Bar :data="dailyBookingsData" :options="barChartOptions" />
            </div>
        </div>

        <!-- Monthly Bookings Chart -->
        <div class="bg-white p-4 rounded-lg shadow">
            <h2 class="text-lg font-medium text-gray-900 mb-4">Monthly Bookings by Channel</h2>
            <div class="h-80">
                <Bar :data="monthlyBookingsData" :options="barChartOptions" />
            </div>
        </div>

        <!-- Table -->
        <div class="bg-white p-4 rounded-lg shadow">
            <h2 class="text-lg font-medium text-gray-900 mb-4">Recent Bookings</h2>
            <div class="overflow-x-auto">
                <table class="min-w-full divide-y divide-gray-200">
                    <thead class="bg-gray-50">
                        <tr>
                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Guest</th>
                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Check In</th>
                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Check Out</th>
                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Revenue</th>
                        </tr>
                    </thead>
                    <tbody class="bg-white divide-y divide-gray-200">
                        <tr v-for="booking in tableData" :key="booking.id">
                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{{ booking.guest }}</td>
                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{{ booking.checkIn }}</td>
                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{{ booking.checkOut }}</td>
                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${{ booking.revenue }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<style>
.p-multiselect {
    width: 100%;
}
.p-calendar {
    width: 100%;
}
.p-calendar .p-inputtext {
    width: 100%;
}
</style> 