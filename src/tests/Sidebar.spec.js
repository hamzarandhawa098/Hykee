import { mount } from "@vue/test-utils";
import Sidebar from "@/components/global/Sidebar.vue";
import { createRouter, createWebHistory } from "vue-router";
import { nextTick } from "vue";

describe("Sidebar.vue", () => {
  let wrapper;

  const router = createRouter({
    history: createWebHistory(),
    routes: [
      { path: "/dashboard", name: "Dashboard" },
      { path: "/search", name: "Search" },
    ],
  });

  beforeEach(async () => {
    wrapper = mount(Sidebar, {
      global: {
        plugins: [router],
      },
    });
    await router.push("/search");
    await nextTick();
  });

  it("renders the navigation items correctly", () => {
    const navigationItems = wrapper.findAll("li");
    expect(navigationItems.length).toBe(6);
    expect(navigationItems[0].text()).toContain("Home");
    expect(navigationItems[1].text()).toContain("Ricerca");
    expect(navigationItems[2].text()).toContain("Ricerche Salvate");
  });
  it("sets the correct active index based on route", async () => {
    await router.push("/search");
    await nextTick();

    const activeItem = wrapper.find(".active-class");
    expect(activeItem.classes()).toContain("bg-Sidebar-Active");
  });

  it("updates active index when a nav item is clicked", async () => {
    const items = wrapper.findAll(".icon-div");

    await items[1].trigger("click");
    await nextTick();

    expect(wrapper.vm.activeIndex).toBe(1);
    expect(items[1].classes()).toContain("bg-Sidebar-Active");
  });

  it("sets the correct active index on initial render", async () => {
    await router.push("/search");
    await nextTick();

    const items = wrapper.findAll(".icon-div");
    expect(items[1].classes()).toContain("bg-Sidebar-Active");
  });
});
