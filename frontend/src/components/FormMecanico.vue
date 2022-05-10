<template>
  <div class="p-grid">
    <div class="p-col-12">
      <div class="card">
        <h5>Detalles del Mecánico</h5>
        <br />
        <div class="p-fluid p-formgrid p-grid">
          <!-- DNI DEL PACIENTE -->
          <div class="p-field p-col-12 p-md-6">
            <label for="dni">DNI*</label>
            <InputText
              id="dni"
              type="text"
              v-model.trim="mecanico.dni"
              v-on:keyup="contentDNI"
              autofocus
            />
            <div id="validation-dni"></div>
          </div>
          <!-- NOMBRE DEL PACIENTE -->
          <div class="p-field p-col-12 p-md-6">
            <label for="nombre">Nombre*</label>
            <InputText
              id="nombre"
              type="text"
              v-model.trim="mecanico.nombre"
              v-on:keyup="contentName"
            />
            <div id="validation-nombre"></div>
          </div>
          <!-- P APELLIDO DEL CLIENTE -->
          <div class="p-field p-col-12 p-md-6">
            <label for="papellido">P. Apellido*</label>
            <InputText
              id="papellido"
              type="text"
              v-model.trim="mecanico.papellido"
              v-on:keyup="contentSurname"
            />
            <div id="validation-papellido"></div>
          </div>
          <!-- S APELLIDO DEL CLIENTE -->
          <div class="p-field p-col-12 p-md-6">
            <label for="sapellido">S. Apellido*</label>
            <InputText
              id="sapellido"
              type="text"
              v-model.trim="mecanico.sapellido"
              v-on:keyup="contentSSurname"
            />
            <div id="validation-sapellido"></div>
          </div>
          <!-- TELÉFONO DEL CLIENTE -->
          <div class="p-field p-col-12 p-md-6">
            <label for="telefono">Teléfono*</label>
            <InputText
              id="telefono"
              type="text"
              v-model.trim="mecanico.telefono"
              v-on:keyup="contentMobile"
            />
            <div id="validation-telefono"></div>
          </div>
          <!-- Botón -->
          <Button label="Guardar" @click="checkForm" />
        </div>
      </div>
    </div>
  </div>
</template>

<script src="../scripts/FormMecanicoScript.js"></script>