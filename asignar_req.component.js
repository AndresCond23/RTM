import React, { Component } from 'react';

export default class AsignarReq extends Component {

    constructor(props) {
        super(props);
        this.onChangeId_asign = this.onChangeId_asign.bind(this);
        this.onChangeId_req = this.onChangeId_req.bind(this);
        this.onChangeCc_des = this.onChangeCc_des.bind(this);
        this.onChangeFecha_asign = this.onChangeFecha_asign.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state =
        {
            Id_asign: '',
            Id_req: '',
            Cc_des: '',
            Fecha_asign: ''
        }
    }

    onChangeId_asign(e) {
        this.setState(
            { Id_asign: e.target.value }
        )
    }

    onChangeId_req(e) {
        this.setState(
            { Id_req: e.target.value }
        )
    }

    onChangeCc_des(e) {
        this.setState(
            { Cc_des: e.target.value }
        )
    }


    onChangeFecha_asign(e) {
        this.setState(
            { Fecha_asign: e.target.value }
        )
    }

    onSubmit(e) {
        e.preventDefault();

        console.log(`Se envio el formulario`);
        console.log(`ID de requerimiento: ${this.state.Id_asign}`);
        console.log(`Descripcion: ${this.state.Id_req}`);
        console.log(`Estado: ${this.state.Cc_des}`);
        console.log(`Fecha_inicio: ${this.state.Fecha_asign}`);

    }


    render() {
        return (
            <div style={{ marginTop: 10 }} >
                <form onSubmit={this.onSubmit}>

                    <div className='form-group'>

                        <h1 id="subtitulo">ASIGNACION DE REQUERIMIENTOS</h1>

                        <div>
                            <label>ID de asignamiento: </label>
                            <input type="text"
                                className="form-control"
                                value={this.state.Id_asign}
                                onChange={this.onChangeId_asign}
                            />
                        </div><br />

                        <div>
                            <label>Seleccione un requerimiento: </label>
                            <select name='Id_req' id='Id_req'>
                                <option value="selected" selected>--Requerimientos--</option>
                             
                                className="form-control"
                                value={this.state.Id_req}
                                onChange={this.onChangeId_req}

                            </select>
                        </div><br />

                        <div>
                            <label>Seleccione el ingeniero a asignar: </label>
                            <select name='Cc_des' id='Cc_des'>
                                <option value="selected" selected>--Ingenieros--</option>
                             
                                className="form-control"
                                value={this.state.Cc_des}
                                onChange={this.onChangeCc_des}

                            </select>
                        </div><br />

                        <div>
                            <label>Fecha de asignacion: </label>
                            <input type="date"
                                className="form-control"
                                value={this.state.Fecha_asign}
                                onChange={this.onChangeFecha_asign}
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