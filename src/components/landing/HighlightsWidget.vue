<template>
    <div id="highlights" class="py-6 px-6 lg:px-20 mx-0 my-12 lg:mx-20">
        <div class="text-center">
            <div class="text-surface-900 dark:text-surface-0 font-normal mb-2 text-4xl">Powerful Everywhere</div>
            <span class="text-muted-color text-2xl">Amet consectetur adipiscing elit...</span>
        </div>

        <div class="grid grid-cols-12 gap-4 mt-20 pb-2 md:pb-20 bg-gray-100 p-10" style="border-radius: 1.5rem">
            <div class="flex justify-center items-center col-span-12 lg:col-span-6 bg-purple-100 p-0 order-1 lg:order-none overflow-hidden" style="border-radius: 1rem; aspect-ratio: 4/3;">
                <img src="/demo/images/landing/kitken.png" class="w-full h-full object-cover" alt="mockup mobile" />
            </div>

            <div class="col-span-12 lg:col-span-6 my-auto flex flex-col lg:items-end text-center lg:text-right gap-4">
                <div class="leading-none text-surface-900 dark:text-surface-0 text-4xl font-normal">Congue Quisque Egestas</div>
                <span class="text-surface-700 dark:text-surface-100 text-2xl leading-normal ml-0 md:ml-2" style="max-width: 650px"
                    >Lectus arcu bibendum at varius vel pharetra vel turpis nunc. Eget aliquet nibh praesent tristique magna sit amet purus gravida. Sit amet mattis vulputate enim nulla aliquet.</span
                >
                <Tag value="Torino"  icon="pi pi-map-marker" severity="contrast" rounded/>
                <span class="text-surface-700 dark:text-surface-100 text-2xl leading-normal italic">Example citation</span>
                <div class="flex items-center gap-4 mt-6 lg:justify-end">
                    <div class="flex flex-col items-end">
                        <span class="text-surface-900 dark:text-surface-0 font-semibold">Sarah Johnson</span>
                        <span class="text-surface-600 text-sm">Homeowner</span>
                    </div>
                    <Avatar icon="pi pi-user" shape="circle" size="xlarge" />
                </div>
            </div>
        </div>
    </div>
</template>
