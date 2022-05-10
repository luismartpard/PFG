<template>
  <div class="p-grid">
    <div class="p-col-12">
      <div class="card">
        <Toast />
        <Toolbar class="p-mb-4">
          <template #left>
            <Button
              label="Asignar"
              icon="pi pi-user-plus"
              class="p-button-info p-mr-2"
              @click="openDialog"
            />
            <Button
              label="Finalizar"
              icon="pi pi-circle-on"
              class="p-button-help p-mr-2"
              @click="finalizarReparacion"
            />
          </template>
          <template #right>
            <span class="p-input-icon-left">
              <i class="pi pi-search" />
              <InputText
                id="busqueda"
                type="text"
                placeholder="Buscar Reparación"
                @keyup="buscarReparacion"
              />
            </span>
          </template>
        </Toolbar>
        <DataTable
          :value="reparaciones"
          :lazy="true"
          :paginator="true"
          :rows="numReg"
          :loading="loading"
          ref="dt"
          v-model:selection="selectedReparacion"
          @page="onPage($event)"
          @sort="onSort($event)"
          dataKey="id"
        >
          <template #header>
            <div class="table-header">
              Reparaciones
              <Button icon="pi pi-refresh" @click="recharge" />
            </div>
          </template>
          <Column
            selectionMode="single"
            style="width: 3rem"
            :exportable="false"
          ></Column>
          <Column field="id" header="ID Reparación" :sortable="true"></Column>
          <Column field="mecanico.dni" header="DNI Mecánico" :sortable="true">
            <template #body="slotProps">
              <Tag
                class="p-mr-2"
                v-if="slotProps.data.mecanico == null"
                icon="pi pi-exclamation-triangle"
                severity="warning"
                value="Sin Asignar"
              ></Tag>
              <Tag class="p-mr-2" v-else icon="pi pi-check" severity="success">
                <span>{{ slotProps.data.mecanico.dni }}</span></Tag
              >
            </template>
          </Column>
          <Column
            field="vehiculo.matricula"
            header="Matrícula Vehículo"
            :sortable="true"
          ></Column>
          <Column
            field="descliente"
            header="Desc. Cliente"
            :sortable="true"
          ></Column>
          <Column
            field="entrada"
            header="Fecha Entrada"
            :sortable="true"
          ></Column>
          <Column
            field="salida"
            header="Fecha Salida"
            :sortable="true"
          ></Column>
          <Column field="estado" header="Est. Reparación" :sortable="true">
            <template #body="slotProps">
              <Tag
                class="p-mr-2"
                v-if="slotProps.data.estado == 0"
                icon="pi pi-exclamation-triangle"
                severity="warning"
                value="Esperando Asignación"
              ></Tag>
              <Tag
                class="p-mr-2"
                v-if="
                  slotProps.data.mecanico != null && slotProps.data.estado == 0
                "
                severity="warning"
                value="En Espera"
              ></Tag>
              <Tag
                class="p-mr-2"
                v-if="slotProps.data.estado == 1"
                icon="pi pi-info-circle"
                severity="info"
                value="En Reparación"
              ></Tag>
              <Tag
                class="p-mr-2"
                v-if="slotProps.data.estado == 2"
                icon="pi pi-check"
                severity="success"
                value="Finalizada"
              ></Tag>
            </template>
          </Column>
          <template #footer>
            En total hay
            {{ reparaciones ? reparaciones.length : 0 }} reparaciones.
          </template>
        </DataTable>
        <div class="p-grid">
          <Dialog
            v-model:visible="dialogoReparacion"
            :style="{ width: '450px' }"
            header="Detalles de la Reparación"
            :modal="true"
            class="p-fluid"
          >
            <br />
            <div class="p-mr-2 p-order-2 p-order-md-1"></div>

            <div class="p-mr-2 p-order-3 p-order-md-2"></div>

            <div class="p-formgrid p-grid">
              <div class="p-field p-col-9">
                <InputText
                  v-model="buscarNombre"
                  placeholder="Buscar Mecánico"
                />
              </div>
              <div class="p-field p-col-3">
                <Button
                  label="Buscar"
                  icon="pi pi-search"
                  @click="loadLazyDataMecanicos"
                />
              </div>
              <div class="p-field p-col-12">
                <Dropdown
                  id="dniMec"
                  v-model="selectedMecanico"
                  v-model.trim="reparacion"
                  :options="mecanicos"
                  optionLabel="dni"
                  optionValue="dni"
                  placeholder="Selecciona un mecánico"
                >
                  <template #empty> No hay mecánicos </template>
                </Dropdown>
              </div>
            </div>
            <br />
            <Button
              label="Asignar"
              class="p-button-help"
              @click="asignarReparacion"
            />
          </Dialog>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="../scripts/DTReparacionesScript.js"></script>
<style lang="scss">
@import "../scss/_datatablestyles.scss";
</style>