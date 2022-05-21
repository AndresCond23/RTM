import React, { Component } from 'react'

export default class CrearDes extends Component {


    constructor(props) {
        super(props);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeDocument = this.onChangeDocument.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state =
        {
            dev_document: '',
            dev_name: ''
        }
    }

    onChangeDocument(e) {
        this.setState(
            { dev_document: e.target.value }
        )
    }

    onChangeName(e) {
        this.setState(
            { dev_name: e.target.value }
        )
    }

    onSubmit(e) {
        e.preventDefault();

        console.log(`Se envio el formulario`);
        console.log(`Todo Description: ${this.state.dev_document}`);
        console.log(`Documento del desarrollador: ${this.state.dev_document}`);

    }

    render() {
        return (
            <div style={{ marginTop: 10 }} >
                <form onSubmit={this.onSubmit}>

                    <div className='form-group'>
                        <label>Documento Desarrollador:</label>
                        <input type="text"
                            className="form-control"
                            value={this.state.dev_document}
                            onChange={this.onChangeDocument}
                        />
                    </div>
                    <div className='form-group'>
                        <label>Nombre Desarrollador:</label>
                        <input type="text"
                            className="form-control"
                            value={this.state.dev_name}
                            onChange={this.onChangeName}
                        />
                    </div>
                    <br />
                    <div className="form-group">
                        <input type="Submit" value="Guardar" className="btn btn-primary" />

                    </div>
                </form>
            </div>
        )
    }
}
