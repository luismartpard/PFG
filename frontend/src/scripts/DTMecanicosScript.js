import MecanicoService from "../services/MecanicoService.js";
export default {
  data() {
    return {
      loading: false,
      mecanicos: null,
      page: 0,
      totalRecords: 0,
      lazyParams: {},
      numReg: 10,
      fieldOrder: null,
      orderSort: null,
      selectedMecanico: null
    };
  },
  mecanicoService: null,
  created() {
    this.mecanicoService = new MecanicoService();
  },
  mounted() {
    this.loading = true;
    this.lazyParams = {
      first: 0,
      rows: this.$refs.dt.rows,
      sortField: null,
      sortOrder: null,
      page: 0,
    };
    this.loadLazyData();
  },
  methods: {
    loadLazyData() {
      this.loading = true;
      this.mecanicoService
        .obtnMecanicos(this.page, this.numReg, this.fieldOrder, this.orderSort)
        .then((data) => {
          this.mecanicos = data.data.content;
          this.totalRecords = data.data.totalElements;
          this.loading = false;
        });
    },
    recharge() {
      location.reload();
    },
    onPage(event) {
      this.lazyParams = event;
      this.page = this.lazyParams.page;

      if (document.getElementById("busqueda").value == "") {
        this.loadLazyData();
      } else {
        this.buscarMecanico();
      }

    },
    onSort(event) {
      this.lazyParams = event;
      this.page = this.lazyParams.page;
      this.fieldOrder = this.lazyParams.sortField;

      if (this.lazyParams.sortOrder == 1) {
        this.orderSort = "asc";
      } else {
        this.orderSort = "desc";
      }

      this.loadLazyData();
    },
    darBaja() {

      if (this.selectedMecanico.deleted == false) {
        this.mecanicoService.darBaja(this.selectedMecanico.id).then((data) => {
          if (data.status === 200) {
            this.$toast.add({ severity: 'success', summary: 'Baja Correcta', detail: 'Se ha dado de baja correctamente', life: 3000 });
            location.reload();
          }
        });
      } else {
        this.$toast.add({ severity: 'error', summary: 'Error', detail: 'Ya está dado de baja', life: 3000 });
      }

    },
    darAlta() {

      if (this.selectedMecanico.deleted == true) {
        this.mecanicoService.darAlta(this.selectedMecanico.id).then((data) => {
          if (data.status === 200) {
            this.$toast.add({ severity: 'success', summary: 'Alta Correcta', detail: 'Se ha dado de alta correctamente', life: 3000 });
            location.reload();
          }
        });
      } else {
        this.$toast.add({ severity: 'error', summary: 'Error', detail: 'Ya está dado de alta', life: 3000 });
      }

    },
    buscarMecanico() {
      if (document.getElementById("busqueda").value == "") {
        this.loadLazyData();
      } else {
        this.mecanicoService.buscarMecanico(document.getElementById("busqueda").value, this.page).then((data) => {
          this.mecanicos = data.data.content;
          this.totalRecords = data.data.totalElements;
        });
      }
    }
  },
};