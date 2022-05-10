<template>
  <div :class="containerClass" @click="onWrapperClick">
    <AppTopBar @menu-toggle="onMenuToggle" />

    <transition name="layout-sidebar">
      <div
        :class="sidebarClass"
        @click="onSidebarClick"
        v-show="isSidebarVisible()"
      >
        <div class="layout-logo">
          <router-link to="/">
            <img alt="Logo" :src="logo" />
          </router-link>
        </div>

        <AppProfile />
        <AppMenu :model="menu" @menuitem-click="onMenuItemClick" />
      </div>
    </transition>

    <div class="layout-main">
      <router-view />
    </div>

    <AppConfig
      :layoutMode="layoutMode"
      :layoutColorMode="layoutColorMode"
      @layout-change="onLayoutChange"
      @layout-color-change="onLayoutColorChange"
    />
  </div>
</template>

<script>
import AppTopBar from "./AppTopbar.vue";
import AppProfile from "./AppProfile.vue";
import AppMenu from "./AppMenu.vue";
import AppConfig from "./AppConfig.vue";

export default {
  data() {
    return {
      layoutMode: "static",
      layoutColorMode: "dark",
      staticMenuInactive: false,
      overlayMenuActive: false,
      mobileMenuActive: false,
      menu: [
        // Home
        { label: "Dashboard", icon: "pi pi-fw pi-home", to: "/" },
        // Clientes
        {
          label: "Clientes",
          icon: "pi pi-users",
          items: [
            // Listado de clientes
            {
              label: "Lista de Clientes",
              icon: "pi pi-list",
              to: "/lista-clientes",
            },
            // Nuevo cliente
            {
              label: "Nuevo Cliente",
              icon: "pi pi-user-plus",
              to: "/nuevo-cliente",
            },
          ],
        },
        // Mecánicos
        {
          label: "Mecánicos",
          icon: "pi pi-users",
          items: [
            {
              label: "Listado Mecánicos",
              icon: "pi pi-list",
              to: "/lista-mecanicos",
            },
            {
              label: "Nuevo Mecánico",
              icon: "pi pi-user-plus",
              to: "/nuevo-mecanico",
            },
          ],
        },
        // Vehículos
        {
          label: "Vehículos",
          icon: "pi pi-circle-on",
          items: [
            {
              label: "Listado Vehículos",
              icon: "pi pi-list",
              to: "/lista-vehiculos",
            },
            {
              label: "Marcas y Modelos",
              icon: "pi pi-list",
              to: "/listado-marcas",
            },
            {
              label: "Nuevo Vehículo",
              icon: "pi pi-plus",
              to: "/nuevo-vehiculo",
            },
          ],
        },
        // Reparaciones
        {
          label: "Reparaciones",
          icon: "pi pi-cog",
          items: [
            {
              label: "Listado Reparaciones",
              icon: "pi pi-list",
              to: "/lista-reparaciones",
            },
            {
              label: "Nueva Reparación",
              icon: "pi pi-plus",
              to: "/nueva-reparacion",
            },
          ],
        },
        {
          label: "Ayuda",
          icon: "pi pi-question",
          to: '/ayuda'
        },
      ],
    };
  },
  watch: {
    $route() {
      this.menuActive = false;
      this.$toast.removeAllGroups();
    },
  },
  methods: {
    onWrapperClick() {
      if (!this.menuClick) {
        this.overlayMenuActive = false;
        this.mobileMenuActive = false;
      }

      this.menuClick = false;
    },
    onMenuToggle() {
      this.menuClick = true;

      if (this.isDesktop()) {
        if (this.layoutMode === "overlay") {
          if (this.mobileMenuActive === true) {
            this.overlayMenuActive = true;
          }

          this.overlayMenuActive = !this.overlayMenuActive;
          this.mobileMenuActive = false;
        } else if (this.layoutMode === "static") {
          this.staticMenuInactive = !this.staticMenuInactive;
        }
      } else {
        this.mobileMenuActive = !this.mobileMenuActive;
      }

      event.preventDefault();
    },
    onSidebarClick() {
      this.menuClick = true;
    },
    onMenuItemClick(event) {
      if (event.item && !event.item.items) {
        this.overlayMenuActive = false;
        this.mobileMenuActive = false;
      }
    },
    onLayoutChange(layoutMode) {
      this.layoutMode = layoutMode;
    },
    onLayoutColorChange(layoutColorMode) {
      this.layoutColorMode = layoutColorMode;
    },
    addClass(element, className) {
      if (element.classList) element.classList.add(className);
      else element.className += " " + className;
    },
    removeClass(element, className) {
      if (element.classList) element.classList.remove(className);
      else
        element.className = element.className.replace(
          new RegExp(
            "(^|\\b)" + className.split(" ").join("|") + "(\\b|$)",
            "gi"
          ),
          " "
        );
    },
    isDesktop() {
      return window.innerWidth > 1024;
    },
    isSidebarVisible() {
      if (this.isDesktop()) {
        if (this.layoutMode === "static") return !this.staticMenuInactive;
        else if (this.layoutMode === "overlay") return this.overlayMenuActive;
        else return true;
      } else {
        return true;
      }
    },
  },
  computed: {
    containerClass() {
      return [
        "layout-wrapper",
        {
          "layout-overlay": this.layoutMode === "overlay",
          "layout-static": this.layoutMode === "static",
          "layout-static-sidebar-inactive":
            this.staticMenuInactive && this.layoutMode === "static",
          "layout-overlay-sidebar-active":
            this.overlayMenuActive && this.layoutMode === "overlay",
          "layout-mobile-sidebar-active": this.mobileMenuActive,
          "p-input-filled": this.$appState.inputStyle === "filled",
          "p-ripple-disabled": this.$primevue.config.ripple === false,
        },
      ];
    },
    sidebarClass() {
      return [
        "layout-sidebar",
        {
          "layout-sidebar-dark": this.layoutColorMode === "dark",
          "layout-sidebar-light": this.layoutColorMode === "light",
        },
      ];
    },
    logo() {
      return this.layoutColorMode === "dark"
        ? "assets/layout/images/logo-white.svg"
        : "assets/layout/images/logo.svg";
    },
  },
  beforeUpdate() {
    if (this.mobileMenuActive)
      this.addClass(document.body, "body-overflow-hidden");
    else this.removeClass(document.body, "body-overflow-hidden");
  },
  components: {
    AppTopBar: AppTopBar,
    AppProfile: AppProfile,
    AppMenu: AppMenu,
    AppConfig: AppConfig,
  },
};
</script>

<style lang="scss">
@import "./App.scss";
</style>
