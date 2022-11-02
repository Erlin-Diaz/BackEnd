class usuario {
	constructor(nombre, apellido, libros, mascotas){
		this.nombre = nombre;
		this.apellido = apellido;
		this.libros = [];
		this.mascotas = []
	}

		getFullName(){
			return `Mi nombre completo es: ${this.nombre} ${this.apellido}`
		}

		addMascota(mascota){
			this.mascotas.push(mascota);		 
		}

		countMascotas(){
			return `Tengo ${this.mascotas.length} mascotas`;
		}

		addBook(libro, autor){
			this.libros.push({tit: libro, aut: autor});
		}

		getBookNames(){
			return this.libros.map(elem => elem.tit)
		}	
}

const user = new usuario("Erlin", "Díaz");

user.addMascota("duke");
user.addMascota("rolly");
user.addMascota("negrita");

user.addBook("Los secretos de la mente millonaria", "T. Harv Eker");
user.addBook("El hombre más rico de Babilonia", "George S. Clason");
user.addBook("Tus zonas erróneas", "Wayne Dyer");

user.getFullName();
user.countMascotas();
user.getBookNames()