<template>
  <div class="p-grid">
    <div class="p-col-12">
      <div class="card">
        <h5>Buscar Cliente</h5>
        <!-- Toolbar -->
        <Toast />
        <Toolbar class="p-mb-4">
          <template #left>
            <Button
              label="Nuevo Vehículo"
              icon="pi pi-plus"
              class="p-button-primary p-mr-2"
              @click="openDialog"
            />
          </template>
          <template #right>
            <span class="p-input-icon-left">
              <i class="pi pi-search" />
              <InputText
                id="busqueda"
                type="text"
                placeholder="Buscar Cliente"
                @keyup="buscarCliente"
              />
            </span>
          </template>
        </Toolbar>
        <!-- DataTable -->
        <DataTable
          :value="clientes"
          :paginator="true"
          :lazy="true"
          :rows="numReg"
          :totalRecords="totalRecords"
          :loading="loading"
          v-model:selection="selectedCliente"
          selectionMode="single"
          ref="dt"
          @page="onPage($event)"
          showGridlines
          stripedRows
          dataKey="id"
        >
          <template #empty> No se han encontrado clientes. </template>
          <template #loading> Cargando clientes. Por favor, espere </template>
          <Column field="dni" header="DNI"> </Column>
          <Column field="nombre" header="Nombre"></Column>
          <Column field="papellido" header="P. Apellido"></Column>
          <Column field="sapellido" header="S. Apellido"></Column>
          <Column field="telefono" header="Teléfono"></Column>
        </DataTable>
        <!-- Diálogo del nuevo vehículo -->
        <Dialog
          v-model:visible="nuevoVehDialogo"
          :style="{ width: '450px' }"
          header="Detalles del Vehículo"
          :modal="true"
          class="p-fluid"
        >
          <br />
          <form>
            <!-- Matrícula del vehículo -->
            <div class="p-field">
              <InputText
                id="matricula"
                type="text"
                placeholder="Matrícula"
                v-on:keyup="contentMatri"
                autofocus
              />
              <div id="validation-matr"></div>
            </div>
            <br />
            <!-- Dropdown Marcas -->
            <div class="p-field">
              <div class="p-formgrid p-grid">
                <div class="p-field p-col-6">
                  <Dropdown
                    id="marcas"
                    v-model="selectedMarca"
                    :options="marcas"
                    optionLabel="nombre"
                    optionValue="nombre"
                    placeholder="Selecciona una marca"
                    @click="cargarMarcas"
                    @change="contentMarca"
                  >
                    <template #empty>No existen marcas</template>
                  </Dropdown>
                  <div id="validation-marca"></div>
                </div>
                <div class="p-field p-col-6">
                  <Dropdown
                    id="modelos"
                    v-model="selectedModelo"
                    :options="modelos"
                    optionLabel="nombre"
                    optionValue="nombre"
                    placeholder="Selecciona un modelo"
                    @click="cargarModelos"
                    @change="contentModelo"
                  >
                    <template #empty>No existen marcas</template>
                  </Dropdown>
                  <div id="validation-modelo"></div>
                </div>
              </div>
            </div>
            <br />
            <!-- Potencia CV -->
            <div class="p-field">
              <InputNumber
                id="potencia"
                :min="60"
                :max="500"
                placeholder="CV"
                mode="decimal"
                :useGrouping="false"
              />
              <div id="validation-potencia"></div>
            </div>
            <br />
            <div class="p-field">
              <div class="p-formgrid p-grid">
                <div class="p-field p-col-6">
                  <Dropdown
                    id="combustible"
                    v-model="selectedCombustile"
                    :options="combustibles"
                    optionLabel="tipo"
                    optionValue="tipo"
                    placeholder="Selecciona el tipo de combustible"
                  />
                  <div id="validation-combustible"></div>
                </div>
                <div class="p-field p-col-6">
                  <Dropdown
                  id="carroceria"
                  v-model="selectedCarrorecia"
                  :options="carrocerias"
                  optionLabel="tipo"
                  optionValue="tipo"
                  placeholder="Selecciona el tipo de carrocería"
                />
                </div>
              </div>
            </div>
            <!--  -->
            <div class="p-field">
              <div class="p-formgrid p-grid">
                <div class="p-field p-col-6">
                  <Dropdown
                    id="transmision"
                    v-model="selectedTransmision"
                    :options="transmision"
                    optionLabel="tipo"
                    optionValue="tipo"
                    placeholder="Selecciona el tipo de transmision"
                  />
                  <div id="validation-transmision"></div>
                </div>
                <div class="p-field p-col-6">
                  <InputNumber
                    id="km"
                    placeholder="Nº de Kilómetros"
                    mode="decimal"
                    :useGrouping="false"
                  />
                  <div id="validation-km"></div>
                </div>
              </div>
            </div>
            <br />
            <div class="p-field">
              <Calendar
                id="fechaCompra"
                v-model="fecha"
                :showIcon="true"
                placeholder="Fecha Compra"
                dateFormat="dd-mm-yy"
              />
              <div id="validation-fecha"></div>
            </div>
            <br />
            <div class="p-field">
              <div class="p-formgrid p-grid">
                <div class="p-field p-col-3"></div>
                <div class="p-field p-col-3"></div>
                <div class="p-field p-col-3"></div>
                <div class="p-field p-col-3">
                  <input
                    type="hidden"
                    id="cliente.id"
                    v-model="vehiculo.cliente.id"
                  />
                  <Button
                    label="Guardar"
                    class="p-button-primary p-mr-2"
                    @click="checkForm"
                  />
                </div>
              </div>
            </div>
          </form>
        </Dialog>
      </div>
    </div>
  </div>
</template>

<script src="../scripts/FormVehiculoScript.js"></script>
<style lang="scss">
@import "../scss/_datatablestyles.scss";
</style>