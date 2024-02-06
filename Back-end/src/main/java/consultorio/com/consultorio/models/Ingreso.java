package consultorio.com.consultorio.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity(name = "Ingreso")
public class Ingreso {

    /**
     * id (UIID autogenerado)
     * - habitacion(obligatorio)
     * - cama(obligatorio)
     * - paciente(obligatorio)
     * - medico(obligatorio)
     * - fecha de ingreso(obligatorio)
     * - fecha de salida(obligatorio)
     * - estado(obligatorio)
     */

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    @Column(name = "idIngreso", nullable = false, length = 36)
    private String idIngreso;

    @Column(name = "habitacion", nullable = false, length = 36)
    private String habitacion;

    @Column(name = "cama", nullable = false, length = 36)
    private String cama;

    @ManyToOne
    @JoinColumn(name="idPaciente")
    private Paciente Paciente;

    @ManyToOne
    @JoinColumn(name="idMedico")
    private Medico Medico;

    @Column(name = "fechaIngreso", nullable = false, length = 36)
    private String fechaIngreso;

    @Column(name = "fechaSalida", nullable = false, length = 36)
    private String Celular;

    @Column(name = "Estado", nullable = false, length = 36)
    private String Estado;

    public Ingreso() {
    }

    public Ingreso(String idIngreso, String habitacion, String cama,
            consultorio.com.consultorio.models.Paciente paciente, consultorio.com.consultorio.models.Medico medico,
            String fechaIngreso, String celular, String estado) {
        this.idIngreso = idIngreso;
        this.habitacion = habitacion;
        this.cama = cama;
        Paciente = paciente;
        Medico = medico;
        this.fechaIngreso = fechaIngreso;
        Celular = celular;
        Estado = estado;
    }

    public String getIdIngreso() {
        return idIngreso;
    }

    public void setIdIngreso(String idIngreso) {
        this.idIngreso = idIngreso;
    }

    public String getHabitacion() {
        return habitacion;
    }

    public void setHabitacion(String habitacion) {
        this.habitacion = habitacion;
    }

    public String getCama() {
        return cama;
    }

    public void setCama(String cama) {
        this.cama = cama;
    }

    public Paciente getPaciente() {
        return Paciente;
    }

    public void setPaciente(Paciente paciente) {
        Paciente = paciente;
    }

    public Medico getMedico() {
        return Medico;
    }

    public void setMedico(Medico medico) {
        Medico = medico;
    }

    public String getFechaIngreso() {
        return fechaIngreso;
    }

    public void setFechaIngreso(String fechaIngreso) {
        this.fechaIngreso = fechaIngreso;
    }

    public String getCelular() {
        return Celular;
    }

    public void setCelular(String celular) {
        Celular = celular;
    }

    public String getEstado() {
        return Estado;
    }

    public void setEstado(String estado) {
        Estado = estado;
    }

}

