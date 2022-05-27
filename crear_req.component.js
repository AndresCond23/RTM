import React, { Component } from 'react';
import "./crear_req.css";

export default class CrearReq extends Component {

    constructor(props) {
        super(props);
        this.onChangeId = this.onChangeId.bind(this);
        this.onChangeDescripcion = this.onChangeDescripcion.bind(this);
        this.onChangeDescripcion = this.onChangeDescripcion.bind(this);
        this.onChangeEstado = this.onChangeEstado.bind(this);
        this.onChangeFecha_inicio = this.onChangeFecha_inicio.bind(this);
        this.onChangeFecha_fin = this.onChangeFecha_fin.bind(this);

        
        this.onSubmit = this.onSubmit.bind(this);

        this.state =
        {
            Id_req: '',
            Descripcion: '',
            Estado: '',
            Fecha_inicio: '',
            Fecha_fin: '',


        }
    }

    onChangeId(e) {
        this.setState(
            { Id_req: e.target.value }
        )
    }

    onChangeDescripcion(e) {
        this.setState(
            { Descripcion: e.target.value }
        )
    }

    onChangeEstado(e) {
        this.setState(
            { Estado: e.target.value }
        )
    }

    onChangeFecha_inicio(e) {
        this.setState(
            { Fecha_inicio: e.target.value }
        )
    }

    onChangeFecha_fin(e) {
        this.setState(
            { Fecha_fin: e.target.value }
        )
    }

    onSubmit(e) {
        e.preventDefault();

        console.log(`Se envio el formulario`);
        console.log(`ID de requerimiento: ${this.state.Id_req}`);
        console.log(`Descripcion: ${this.state.Descripcion}`);
        console.log(`Estado: ${this.state.Estado}`);
        console.log(`Fecha_inicio: ${this.state.Fecha_inicio}`);
        console.log(`Fecha_fin: ${this.state.Fecha_fin}`);
    }

    render() {

        return (
            <div style={{ marginTop: 10 }} >
                <form onSubmit={this.onSubmit}>

                    <div className='form-group'>

                        <h1 id="subtitulo">CREAR REQUERIMIENTO</h1>

                        <div>
                            <label>ID de requerimiento: </label>
                            <input type="text"
                                className="form-control"
                                value={this.state.Id_req}
                                onChange={this.onChangeId}
                            />
                        </div><br />

                        <div>
                            <label>Descripcion: </label><br></br>
                            <textarea cols="40" rows="2"
                                className="form-control"
                                value={this.state.Descripcion}
                                onChange={this.onChangeDescripcion}
                            />
                        </div><br />

                        <div>
                            <label>Estado: </label>
                            <select name='estado' id='estado'>
                                <option value="selected" selected>--Seleccione una opcion--</option>
                                <option value="En_desarrollo">En desarrollo</option>
                                <option value="Finalizado_en_desarrollo">Finalizado en desarrollo</option>
                                <option value="Asignado_a_pruebas">Asignado a pruebas</option>
                                <option value="En_proceso">En proceso</option>
                                <option value="Finalizado_en_pruebas">Finalizado en pruebas</option>

                                className="form-control"
                                value={this.state.Estado}
                                onChange={this.onChangeEstado}

                            </select>
                        </div><br />

                        <div>
                            <label>Registrar fecha estimada incio: </label>
                            <input type="date"
                                className="form-control"
                                value={this.state.Fecha_inicio}
                                onChange={this.onChangeFecha_inicio}
                            />
                        </div><br />

                        <div>
                            <label>Registrar fecha estimada fin: </label>
                            <input type="date"
                                className="form-control"
                                value={this.state.Fecha_fin}
                                onChange={this.onChangeFecha_fin}
                            />
                        </div>

                        <br />
                        <br />
                        <div>
                            <input type="Submit" value="Guardar" className="btn btn-primary" />
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}