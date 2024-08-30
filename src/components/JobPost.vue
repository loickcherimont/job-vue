<template>
    <div class='border border-emerald-300 rounded-lg flex flex-col w-11/12 p-3 gap-y-2'>
        <h2 class='text-3xl font-bold text-emerald-300'>{{ position }}</h2>
        <p class="text-lg text-slate-200">{{ description }}</p>
        <div class="flex justify-around">
            <p class="rounded border border-emerald-300 px-4 py-px text-emerald-300">{{ type }}</p>
            <p class="rounded border border-emerald-300 px-4 py-px text-emerald-300">{{ location }}</p>
            <p class="rounded border border-emerald-300 px-4 py-px text-emerald-300">{{ salary }}€</p>
        </div>

        <p class="italic text-slate-200">{{ posted }}</p>

    </div>
</template>
<script setup>

defineProps({
    id: Number,
    position: String,
    description: String,
    type: String,
    posted: String,
    location: Object,
    salary: Number
})
</script>