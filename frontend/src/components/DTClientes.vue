<template>
  <div class="p-grid">
    <div class="p-col-12">
      <div class="card">
        <DataTable
          :value="clientes"
          :lazy="true"
          :paginator="true"
          :rows="numReg"
          ref="dt"
          :totalRecords="totalRecords"
          :loading="loading"
          @page="onPage($event)"
          @sort="onSort($event)"
        >
          <template #header>
            <div class="table-header">
              Clientes
              <Button icon="pi pi-refresh" @click="recharge" />
            </div>
          </template>
          <Column field="dni" header="DNI" :sortable="true"> </Column>
          <Column field="nombre" header="Nombre" :sortable="true"></Column>
          <Column
            field="papellido"
            header="P. Apellido"
            :sortable="true"
          ></Column>
          <Column
            field="sapellido"
            header="S. Apellido"
            :sortable="true"
          ></Column>
          <Column field="telefono" header="Teléfono" :sortable="true"></Column>
          <template #footer>
            En total hay {{ clientes ? clientes.length : 0 }} clientes.
          </template>
        </DataTable>
      </div>
    </div>
  </div>
</template>

<script src="../scripts/DTClientesScript.js"></script>
<style lang="scss">
@import "../scss/_datatablestyles.scss";
</style>