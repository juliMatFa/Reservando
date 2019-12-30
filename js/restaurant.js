var Restaurant = function(id, nombre, rubro, ubicacion, horarios, imagen, calificaciones) {
    this.id = id;
    this.nombre = nombre;
    this.rubro = rubro;
    this.ubicacion = ubicacion;
    this.horarios = horarios;
    this.imagen = imagen;
    this.calificaciones = calificaciones;
}

Restaurant.prototype.reservarHorario = function(horarioReservado) {
    this.horarios = this.horarios.filter(function(horario){
        return horario !== horarioReservado;
    });
}

Restaurant.prototype.calificar = function(nuevaCalificacion) {
    if (Number.isInteger(nuevaCalificacion) && nuevaCalificacion > 0 && nuevaCalificacion < 10) {
        this.calificaciones.push(nuevaCalificacion);
    }
}

Restaurant.prototype.obtenerPuntuacion = function() {
    if (this.calificaciones.length === 0) {
        return 0;
    } else {
        return this.promedio(this.calificaciones);
    }
}

Restaurant.prototype.totalsum = function(sumArray){
    let totalSum = 0;

    sumArray.forEach(element => {
        totalSum += element;
    });

    return totalSum;
}

Restaurant.prototype.promedio = function(averageArray){
    return Math.round((this.totalsum(averageArray) / averageArray.length) * 10) / 10;
}

