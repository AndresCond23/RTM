import React, { Component } from 'react';

export default class CrearReq extends Component {
    render() {
        return (
            <div className='consulta'>

                <h1 id="subtitulo">CREAR REQUERIMIENTO</h1>

                <div className='form-group'>
                    <label>ID de requerimiento:</label>
                    <input name="txtName" type="text" required /><br /><br />
                </div>

                <div className='form-group'>
                    <label>Descripcion:</label><br />
                    <textarea name="" id="" cols="40" rows="2"></textarea><br /><br />
                </div>

                <div className='form-group'>
                    <label>Estado: </label>
                    <select name="estado" id="estado" required>
                        <option value="" selected>--Seleccione una opcion--</option>
                        <option value="En_desarrollo">En desarrollo</option>
                        <option value="Finalizado_en_desarrollo">Finalizado en desarrollo</option>
                        <option value="Asignado_a_pruebas">Asignado a pruebas</option>
                        <option value="En_proceso">En proceso</option>
                        <option value="Finalizado_en_pruebas">Finalizado en pruebas</option>
                    </select><br /><br />
                </div>


                <div className='form-group'>
                    <label>Registrar fecha estimada inicio: </label>
                    <input type="date" /><br /><br />
                </div>

                <div className='form-group'>
                    <label>Registrar fecha estimada fin: </label>
                    <input type="date" /><br /><br /><br />
                </div>

                <div className='form-group'>
                    <button type="submit" value="Crear">Guardar</button>
                </div>

            </div>

        );
    }
}
