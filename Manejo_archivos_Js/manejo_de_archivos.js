class Contenedor{
	constructor (filename){
		this.filename = filename

	}

	save (obj){
		const objString = JSON.stringify(obj, null, 2)
		console.log(`Guardar ${obj} dentro de archivo ${this.filename}`)
	}

	getById (id){
		console.log(`Devolver producto con Id correspondiente ${id}`)
	}
}

const productosContenedor = new Contenedor("productos.txt")