<template>
    <main class="flex flex-grow">
        <aside
            class="p-4 flex-grow bg-gray-50 dark:bg-zinc-900 border-l border-gray-300 dark:border-zinc-600"
        >
            <main v-for="user in currentGroups">
                {{ user.tabel }}
                {{ user.change }}
                {{ user.active_from }}
            </main>
            <!-- <SmenaViewer :transport="selectTransport" /> -->
        </aside>
        <nav
            class="flex flex-col gap-0.5 items-end py-4 border-l border-gray-300 dark:border-zinc-600 min-w-40"
        >
            <template v-for="car in props.transports.content">
                <TabButton
                    class="w-full text-left"
                    direction="left"
                    @click="onSelectTransport(car)"
                    :active="currentTab.garage_number == car.garage_number"
                >
                    {{ car.transport_list.name }} № - {{ car.garage_number }}
                </TabButton>
            </template>
        </nav>
    </main>
</template>

<script setup lang="ts">
import GroupRepo from "../repositories/GroupRepo";
import TabButton from "./TabButton.vue";
import { ref, Ref, onMounted } from "vue";
import { ITab, ITransport, IGroup } from "../Interfaces";
const props = defineProps<{ transports: ITab }>();
const currentTab: Ref<ITransport> = ref(props.transports.content[0]);
const currentGroups: Ref<IGroup[] | null> = ref(null);
function onSelectTransport(transport: ITransport) {
    currentGroups.value = null;
    currentTab.value = transport;
    GroupRepo.getGroupsByTransportId(
        currentTab.value.id || 0,
        ({ data }: { data: IGroup[] }) => {
            currentGroups.value = data;
        }
    );
}

onMounted(() => {
    onSelectTransport(currentTab.value);
});
</script>
