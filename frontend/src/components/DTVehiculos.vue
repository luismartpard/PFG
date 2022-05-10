<template>
  <div class="p-grid">
    <div class="p-col-12">
      <div class="card">
        <DataTable
          :value="vehiculos"
          :lazy="true"
          :totalRecords="totalRecords"
          :loading="loading"
          :paginator="true"
          :rows="numReg"
          v-model:selection="selectionVehiculo"
          selectionMode="single"
          ref="dt"
          dataKey="id"
          @page="onPage($event)"
          @sort="onSort($event)"
          lass="p-datatable-sm"
          showGridlines
        >
          <template #header>
            <div class="table-header">
              Vehículos
              <Button icon="pi pi-refresh" @click="recharge" />
            </div>
          </template>
          <Column
            field="matricula"
            header="Matrícula"
            :sortable="true"
          ></Column>
          <Column field="marca.nombre" header="Marca" :sortable="true"></Column>
          <Column field="modelo" header="Modelo" :sortable="true"></Column>
          <Column field="potencia" header="CV" :sortable="true"></Column>
          <Column
            field="combustible"
            header="Motor"
            :sortable="true"
          ></Column>
          <Column
            field="transmision"
            header="Transmisión"
            :sortable="true"
          ></Column>
          <Column field="km" header="KM" :sortable="true"></Column>
          <Column field="fechacompra" header="Fecha Compra" :sortable="true"></Column>
          <template #footer>
            En total hay {{ vehiculos ? vehiculos.length : 0 }} vehículo/s.
          </template>
        </DataTable>
      </div>
    </div>
  </div>
</template>

<script src="../scripts/DTVehiculosScript.js"></script>
<style lang="scss">
@import "../scss/_datatablestyles.scss";
</style>