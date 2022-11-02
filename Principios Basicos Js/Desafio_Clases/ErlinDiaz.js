class usuario {
	constructor(nombre, apellido){
		this.nombre = nombre;
		this.apellido = apellido;
	}

		getFullName(nombre, apellido){
			return `Mi nombre completo es: ${this.nombre} ${this.apellido}`
		}

		addMascota(mascota){
			this.mascotas.push(mascota);		 
		}

	
}