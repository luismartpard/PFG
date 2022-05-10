<template>
  <div class="p-grid">
    <div class="p-col-12">
      <div class="card">
        <div class="p-col-12 p-lg-12">
          <h3>¿Qué es el Gestor de Taller?</h3>
          <p>
            Es una aplicación que permite gestionar un taller, con varios
            opciones de forma muy fácil y rápida.
          </p>
        </div>
        <div class="p-col-12 p-lg-6">
          <h3>¿Que se puede gestionar?</h3>
          <p>
            En la versión actual, se puede gestionar clientes, mecánico,
            vehículos, reparaciones y otras funciones más...
          </p>
          <p>
            En el Dashboard se puede ver de forma rápida el número de clientes
            que tenemos guardado en la base de datos, el número de reparaciones
            que se han realizado o están por realizar, el número de vehículos
            que se han almacenado en la base de datos, las últimas
            reparaciones...
          </p>
        </div>
        <div class="p-col-12 p-lg-6">
          <h3>¿Cómo puedo ver a los Clientes?</h3>
          <p>
            Para ver a un cliente, se debe ir al apartado
            <span style="color: black; font-weight: bold">Clientes</span> se
            abrirá un desplegable y se mostrará una opción llamada
            <span style="color: black; font-weight: bold">Listado Clientes</span
            >, y en el se mostrará todos los clientes que tenemos registrado.
          </p>
        </div>
        <div class="p-col-12 p-lg-6">
          <h3>¿Cómo puedo añadir un nuevo Cliente?</h3>
          <p>
            Para agregar un cliente, debes ir al apartado
            <span style="color: black; font-weight: bold">Clientes</span>
            abrirá un desplegable y se mostrará una opción llamada
            <span style="color: black; font-weight: bold">Nuevo Cliente</span>,
            y en el se mostrará un formulario para introducir el cliente.
          </p>
        </div>
        <div class="p-col-12 p-lg-6">
          <h3>¿Cómo puedo mostrar a los Mecánicos?</h3>
          <p>
            Para ver a un mecánico, se debe ir al apartado
            <span style="color: black; font-weight: bold">Mecánicos</span> se
            abrirá un desplegable y se mostrará una opción llamada
            <span style="color: black; font-weight: bold"
              >Listado Mecánicos</span
            >, y en el se mostrará todos los mecánicos que está disponibles.
          </p>
        </div>
        <div class="p-col-12 p-lg-6">
          <h3>¿Cómo puedo añadir a un nuevo Mecánico?</h3>
          <p>
            Para agregar a un mecánico, debes ir al apartado
            <span style="color: black; font-weight: bold">Mecánicos</span>
            abrirá un desplegable y se mostrará una opción llamada
            <span style="color: black; font-weight: bold">Nuevo Mecánico</span>,
            y en el se mostrará un formulario para introducir el mecánico.
          </p>
        </div>
        <div class="p-col-12 p-lg-6">
          <h3>¿Cómo veo el listado de Vehículos?</h3>
          <p>
            Para ver a los vehículos, se debe ir al apartado
            <span style="color: black; font-weight: bold">Vehículos</span>
            y seleccionar la opción
            <span style="color: black; font-weight: bold"
              >Listado de Vehículos</span
            >, y en el se mostrará un listado de vehículos de clientes que han
            sido añadidos a la base de datos
          </p>
        </div>
        <div class="p-col-12 p-lg-6">
          <h3>¿De que marcas y modelo dispongo en la aplicación?</h3>
          <p>
            Para ver a las marcas y modelos de coches, debe ir a la apartado
            <span style="color: black; font-weight: bold">Vehículos</span>
            y seleccionar la opción
            <span style="color: black; font-weight: bold">Marcas y Modelos</span
            >, en el se mostrará las marcas y modelos disponibles. También
            puedes buscar la marca que desees desde el buscador, o añadir una
            nueva marca, o un modelo en concreto a una marca...
          </p>
        </div>
        <div class="p-col-12 p-lg-6">
          <h3>¿Puedo añadir nuevos vehículos para los clientes?</h3>
          <p>
            Para añadir vehículos de los clientes, estos primeros deben estar
            registrados. Para añadir un vehículo hay que ir al apartado
            <span style="color: black; font-weight: bold">Vehículos</span>
            y seleccionar la opción
            <span style="color: black; font-weight: bold">Nuevo Vehículo</span>,
            nos aparecerá una tabla en el que buscaremos a la persona mediante
            su nombre y le podremos agregar el vehículo que tengamos rellenando
            un formulario.
          </p>
        </div>
        <div class="p-col-12 p-lg-6">
          <h3>¿Dónde puedo ver las reparaciones?</h3>
          <p>
            Para ver las reparaciones registradas nos dirigimos al apartado
            <span style="color: black; font-weight: bold">Reparaciones</span>
            y seleccionar la opción
            <span style="color: black; font-weight: bold"
              >Listado Reparaciones</span
            >, en la tabla que nos aparece, podremos ver el listado de
            reparaciones, asignar a mecánicos reparaciones y finalizar la
            reparación.
          </p>
        </div>
        <div class="p-col-12 p-lg-6">
          <h3>¿Cómo creo una reparación?</h3>
          <p>
            Para crear una nueva reparación nos vamos al apartado
            <span style="color: black; font-weight: bold">Reparaciones</span>
            y seleccionar la opción
            <span style="color: black; font-weight: bold">Nueva Reparación</span
            >, buscamos el vehículo del cliente mediante la matrícula, y
            seleccionamos dicho vehículo. Debemos rellenar el formulario con los
            dos campos que se piden.
          </p>
        </div>
        <div class="p-col-12 p-lg-6">
          <h3>¿Cómo asigno un mecánico a una reparación?</h3>
          <p>
            Para asignar a un mecánico se debe ir al apartado
            <span style="color: black; font-weight: bold">Reparaciones</span>
            y seleccionar la opción
            <span style="color: black; font-weight: bold"
              >Listado Reparaciones</span
            >, buscamos la reparación mediante su identificador, y le asignamos
            al mecánico que queramos. Buscamos por nombre, y seleccionamos por
            DNI
          </p>
        </div>
      </div>
    </div>
  </div>
</template>