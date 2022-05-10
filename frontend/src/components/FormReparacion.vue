<template>
  <div class="p-grid">
    <div class="p-col-12">
      <div class="card">
        <Toast />
        <h5>Nueva Reparación</h5>
        <br />
        <Toolbar class="p-mb-4">
          <template #left>
            <Button
              label="Nuevo Reparación"
              icon="pi pi-plus"
              class="p-button-primary p-mr-2"
              @click="openDialog"
          /></template>
          <template #right>
            <span class="p-input-icon-left">
              <i class="pi pi-search" />
              <InputText
                id="busqueda"
                type="text"
                placeholder="Buscar Vehiculo"
                @keyup="buscarVehiculo"
              />
            </span>
          </template>
        </Toolbar>
        <br />
        <DataTable
          :value="vehiculos"
          :lazy="true"
          :paginator="true"
          :loading="loading"
          :totalRecords="totalRecords"
          :rows="numReg"
          ref="dt"
          @page="onPage($event)"
          v-model:selection="selectedVehiculo"
          selectionMode="single"
        >
          <template #empty> No se han encontrado vehículos. </template>
          <template #loading> Cargando vehículos. Por favor, espere. </template>
          <Column field="matricula" header="Matricula"></Column>
          <Column field="marca.nombre" header="Marca"></Column>
          <Column field="modelo" header="Modelo"></Column>
          <Column field="potencia" header="CV"></Column>
          <Column field="combustible" header="Motor"></Column>
          <Column field="transmision" header="Transmisión"></Column>
          <Column field="km" header="KM"></Column>
          <Column field="fechacompra" header="Fecha Compra"></Column>
        </DataTable>
        <Dialog
          v-model:visible="reparacionDialog"
          :style="{ width: '450px' }"
          header="Detalles de la Reparación"
          :modal="true"
          class="p-fluid"
        >
          <br />
          <div class="p-field">
            <label for="descripcion">Descripción del Cliente</label>
            <Textarea
              id="descliente"
              :autoResize="true"
              rows="5"
              cols="30"
              :maxlength="100"
              autofocus
              @keyup="checkContentDesc"
            />
            <div id="validation-descliente"></div>
          </div>
          <br />
          <div class="p-field">
            <Calendar
              id="fentrada"
              v-model="fecha"
              dateFormat="dd-mm-yy"
              placeholder="Fecha Entrada"
              :showIcon="true"
            />
            <div id="validation-fentrada"></div>
          </div>
          <div class="p-field">
            <Button label="Guardar" @click="nuevaReparacion" />
          </div>
        </Dialog>
      </div>
    </div>
  </div>
</template>

<script src="../scripts/FormReparacionScript.js"></script>