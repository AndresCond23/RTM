import React, { Component } from 'react'

export default class CrearDes extends Component {


    constructor(props) {
        super(props);
        this.onChangeCc_des = this.onChangeCc_des.bind(this);
        this.onChangeNombre = this.onChangeNombre.bind(this);
        this.onChangeEdad = this.onChangeEdad.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeDireccion = this.onChangeDireccion.bind(this);
        this.onChangeTelefono = this.onChangeTelefono.bind(this);
        this.onChangeProfesion = this.onChangeProfesion.bind(this);
        this.onChangeCargo = this.onChangeCargo.bind(this);
        this.onChangeExperiencia = this.onChangeExperiencia.bind(this);
        this.onChangeFoto = this.onChangeFoto.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state =
        {
            Cc_des: '',
            Nombre: '',
            Edad: '',
            Email: '',
            Direccion: '',
            Telefono: '', 
            Profesion: '',
            Cargo: '',
            Experiencia: '',
            Foto: ''
        }
    }

    onChangeCc_des(e) {
        this.setState(
            { Cc_des: e.target.value }
        )
    }

    onChangeNombre(e) {
        this.setState(
            { Nombre: e.target.value }
        )
    }

    onChangeEdad(e) {
        this.setState(
            { Edad: e.target.value }
        )
    }

    onChangeEmail(e) {
        this.setState(
            { Email: e.target.value }
        )
    }

    onChangeDireccion(e) {
        this.setState(
            { Direccion: e.target.value }
        )
    }

    onChangeTelefono(e) {
        this.setState(
            { Telefono: e.target.value }
        )
    }

    onChangeProfesion(e) {
        this.setState(
            { Profesion: e.target.value }
        )
    }

    onChangeCargo(e) {
        this.setState(
            { Cargo: e.target.value }
        )
    }

    onChangeExperiencia(e) {
        this.setState(
            { Experiencia: e.target.value }
        )
    }

    onChangeFoto(e) {
        this.setState(
            { Foto: e.target.value }
        )
    }


    onSubmit(e) {
        e.preventDefault();

        console.log(`Se envio el formulario`);
        console.log(`Documento del desarrollador: ${this.state.Cc_des}`);
        console.log(`Nombre: ${this.state.Nombre}`);
        console.log(`Edad: ${this.state.Edad}`);
        console.log(`Email: ${this.state.Email}`);
        console.log(`Direccion: ${this.state.Direccion}`);
        console.log(`Telefono: ${this.state.Telefono}`);
        console.log(`Profesion: ${this.state.Profesion}`);
        console.log(`Cargo: ${this.state.Cargo}`);
        console.log(`Experiencia: ${this.state.Experiencia}`);
        console.log(`Foto: ${this.state.Foto}`);
    }

    render() {
        return (

            <div style={{ marginTop: 10 }} >
                <form onSubmit={this.onSubmit}>

                    <div className='form-group'>

                        <h1 id="subtitulo">REGISTRO DE INGENIEROS DE DESARROLLO</h1>

                        <div>
                            <label>N° documento: </label>
                            <input type="text"
                                className="form-control"
                                value={this.state.Cc_des}
                                onChange={this.onChangeCc_des}
                            />
                        </div><br />

                        <div>
                            <label>Nombre completo: </label>
                            <input type="text"
                                className="form-control"
                                value={this.state.Nombre}
                                onChange={this.onChangeNombre}
                            />
                        </div><br />

                        <div>
                            <label>Edad: </label>
                            <input type="text"
                                className="form-control"
                                value={this.state.Edad}
                                onChange={this.onChangeEdad}
                            />
                        </div><br />


                        <div>
                            <label>Email: </label>
                            <input name="txtEmail" placeholder="email@server.com" pattern="[a-z0-9._%+-]+@[a-z0-9--]+\.[a-z]{2,4}$"
                                className="form-control"
                                value={this.state.Email}
                                onChange={this.onChangeEmail}
                            />
                        </div><br />

                        <div>
                            <label>Direccion de residencia: </label>
                            <input type="text"
                                className="form-control"
                                value={this.state.Direccion}
                                onChange={this.onChangeDireccion}
                            />
                        </div><br />

                        <div>
                            <label>Telefono: </label>
                            <input type="text"
                                className="form-control"
                                value={this.state.Telefono}
                                onChange={this.onChangeTelefono}
                            />
                        </div><br />

                        <div>
                            <label>Profesion: </label>
                            <input type="text"
                                className="form-control"
                                value={this.state.Profesion}
                                onChange={this.onChangeProfesion}
                            />
                        </div><br />

                        <div>
                            <label>Cargo: </label>
                            <input type="text"
                                className="form-control"
                                value={this.state.Cargo}
                                onChange={this.onChangeCargo}
                            />
                        </div><br />

                        <div>
                            <label>Experiencia: </label><br></br>
                            <textarea cols="40" rows="2"
                                className="form-control"
                                value={this.state.Experiencia}
                                onChange={this.onChangeExperiencia}
                            />
                        </div><br />

                        <div>
                            <label>Añada una Foto: </label><br></br>
                            <input type="file"
                                className="form-control"
                                value={this.state.Foto}
                                onChange={this.onChangeFoto}
                            />
                        </div><br />

                        <br />
                        <div>
                            <input type="Submit" value="Guardar" className="btn btn-primary" />
                        </div>
                    </div>
                </form>
            </div>

        )
    }
}