<template>
  <div class="p-grid">
    <div class="p-col-12">
      <div class="card">
        <Toast />
        <Toolbar class="p-mb-4">
          <template #left>
            <Button
              label="Nuevo Marca"
              icon="pi pi-plus"
              class="p-button-primary p-mr-2"
              @click="openDialog"
            />
            <Button
              label="Nuevo Modelo"
              icon="pi pi-plus"
              class="p-button-secondary p-mr-2"
              @click="openDialogModelo"
            />
          </template>
          <template #right>
            <span class="p-input-icon-left">
              <i class="pi pi-search" />
              <InputText
                id="busqueda"
                type="text"
                placeholder="Buscar Marca"
                @keyup="buscarMarca"
              />
            </span>
          </template>
        </Toolbar>
        <br />
        <DataTable
          :value="marcas"
          :lazy="true"
          :paginator="true"
          :rows="numReg"
          ref="dt"
          :totalRecords="totalRecords"
          :loading="loading"
          @page="onPage($event)"
          @sort="onSort($event)"
          v-model:selection="selectionMarca"
          selectionMode="single"
          v-model:expandedRows="expandedRows"
          @rowExpand="onRowExpand"
          @rowCollapse="onRowCollapse"
        >
          <Column :expander="true" headerStyle="width: 3rem" />
          <Column field="id" header="ID" :sortable="true"></Column>
          <Column field="nombre" header="Marca" :sortable="true"></Column>
          <template #expansion="slotProps">
            <div class="orders-subtable">
              <h5>Modelos de {{ slotProps.data.nombre }}</h5>
              <DataTable
                :value="modelos"
                responsiveLayout="scroll"
              >
                <Column field="id" header="Id"></Column>
                <Column field="nombre" header="Modelo"></Column>
              </DataTable>
            </div>
          </template>
        </DataTable>
        <Dialog
          v-model:visible="nuevaMarcaDialog"
          :style="{ width: '450px' }"
          header="Nueva Marca"
          :modal="true"
          class="p-fluid"
        >
          <br />
          <div class="p-field">
            <InputText
              id="marca"
              v-model.trim="marca.nombre"
              placeholder="Nombre"
            />
            <div id="validation-marca"></div>
          </div>
          <br />
          <div class="p-field">
            <Button label="Guardar" @click="nuevaMarca" />
          </div>
        </Dialog>
        <!-- Nuevo modelo -->
        <Dialog
          v-model:visible="nuevoModeloDialog"
          :style="{ width: '450px' }"
          header="Nueva Marca"
          :modal="true"
          class="p-fluid"
        >
          <br />
          <div class="p-field">
            <InputText
              id="modelo"
              v-model="modelo.nombre"
              placeholder="Nombre modelo"
            />
          </div>
          <br />
          <div class="p-field">
            <Button label="Guardar" @click="nuevoModelo" />
          </div>
        </Dialog>
      </div>
    </div>
  </div>
</template>

<script src="../scripts/DTMarcasScript.js"></script>