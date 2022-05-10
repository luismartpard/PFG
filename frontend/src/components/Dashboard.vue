 <template>
  <div class="p-grid p-fluid dashboard">
    <div class="p-col-12 p-lg-4">
      <div class="card summary">
        <span class="title">Clientes</span>
        <span class="detail">Número de Clientes</span>
        <span class="count visitors">{{ totalClientes }}</span>
      </div>
    </div>
    <div class="p-col-12 p-lg-4">
      <div class="card summary">
        <span class="title">Reparaciones</span>
        <span class="detail">Total de Reparaciones</span>
        <span class="count purchases">{{ totalReparaciones }}</span>
      </div>
    </div>

    <div class="p-col-12 p-lg-4">
      <div class="card summary">
        <span class="title">Vehículos</span>
        <span class="detail">Total de Vehículos</span>
        <span class="count revenue">{{ totalVehiculos }}</span>
      </div>
    </div>

    <div class="p-col-12 p-lg-12">
      <div class="card">
        <DataTable :value="reparaciones" :paginator="true" :rows="numReg">
          <template #header>
            <div class="table-header">
              Reparaciones Recientes
              <Button icon="pi pi-refresh" @click="recharge" />
            </div>
          </template>
          <Column field="mecanico.dni" header="DNI Mecánico">
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
          ></Column>
          <Column
            field="descliente"
            header="Desc. Cliente"
          ></Column>
          <Column
            field="entrada"
            header="Fecha Entrada"
          ></Column>
          <Column field="estado" header="Est. Reparación">
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
        </DataTable>
      </div>
    </div>
  </div>
</template>

<script src="../scripts/DashboardScript.js"></script>

<style lang="scss">
@import "../scss/_dashboard.scss";
</style>