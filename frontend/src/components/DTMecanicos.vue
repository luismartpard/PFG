<template>
  <div class="p-grid">
    <div class="p-col-12">
      <div class="card">
        <Toast />
        <Toolbar class="p-mb-4">
          <template #left>
            <Button
              label="Dar de Alta"
              icon="pi pi-plus"
              class="p-button-success p-mr-2"
              @click="darAlta"
            />
            <Button
              label="Dar de Baja"
              icon="pi pi-trash"
              class="p-button-danger"
              @click="darBaja"
            />
          </template>
          <template #right>
            <span class="p-input-icon-left">
              <i class="pi pi-search" />
              <InputText
                id="busqueda"
                type="text"
                placeholder="Buscar Mecánico"
                @keyup="buscarMecanico"
              />
            </span>
          </template>
        </Toolbar>
        <DataTable
          :value="mecanicos"
          :lazy="true"
          :paginator="true"
          :rows="numReg"
          :loading="loading"
          :totalRecords="totalRecords"
          v-model:selection="selectedMecanico"
          selectionMode="single"
          dataKey="id"
          ref="dt"
          @page="onPage($event)"
          @sort="onSort($event)"
        >
          <template #header>
            <div class="table-header">
              Mecánicos
              <Button icon="pi pi-refresh" @click="recharge" />
            </div>
          </template>
          <template #empty> No se han encontrado mecánicos. </template>
          <template #loading> Cargando mecánicos. Por favor, espere </template>
          <Column field="dni" header="DNI" ref="dni" :sortable="true"> </Column>
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
          <Column field="deleted" header="Estado Laboral" :sortable="true">
            <template #body="slotProps">
              <Tag
                v-if="slotProps.data.deleted == false"
                class="p-mr-2"
                icon="pi pi-check"
                severity="success"
                value="Disponible"
              ></Tag>
              <Tag
                v-else
                class="p-mr-2"
                icon="pi pi-check"
                severity="danger"
                value="Dado de Baja"
              ></Tag>
            </template>
          </Column>
          <template #footer>
            En total hay {{ mecanicos ? mecanicos.length : 0 }} mecánicos.
          </template>
        </DataTable>
      </div>
    </div>
  </div>
</template>

<script src="../scripts/DTMecanicosScript.js"></script>
<style lang="scss">
@import "../scss/_datatablestyles.scss";
</style>