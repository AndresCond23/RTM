import React, { Component } from 'react';
import "./asignar_req.css";

export default class AsignarReq extends Component {
    render() {
        return (
            <div className='consulta'>
                
                <h1 id="subtitulo">ASIGNACION DE REQUERIMIENTOS FUNCIONAL Y NO FUNCIONAL</h1>

                <div className='form-group'>
                        <label>ID requerimiento: </label>

                        <select name="ID_requerimiento" id="ID_requerimiento" required>
                        <option selected>--Seleccione una opcion--</option>
                        </select><br/><br/>
                </div>

                <div className='form-group'>
                    <label>Fecha de asignacion: </label>
                    <input type="date"/><br/><br/>           
                </div>

               <div className='form-group'>
                    <label>CC Ing desarrollo: </label>
                    <select name="CC_Ing_desarrollo" id="CC_Ing_desarrollo" required>
                    <option selected>--Seleccione una opcion--</option>
                    </select><br/><br/><br/>
                </div>

                <div className="form-group">
                        <input type="Submit" value="Guardar" className="btn btn-primary" />
                </div>

            </div>
         );
    }
}
