package consultorio.com.consultorio.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity(name = "Paciente")
public class Paciente {

    /**
     * id (UIID autogenerado)
     * - documento de identidad (obligatorio)
     * - primer nombre (obligatorio)
     * - segundo nombre (opcional)
     * - primer apellido (obligatorio)
     * - segundo apellido (opcional)
     * - celular (obligatorio)
     * - correo electrónico (obligatorio)
     * - nombre persona de contacto (obligatorio)
     * - telefono persona de contacto (obligatorio)
     * - Estado
     */

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    @Column(name = "idPaciente", nullable = false, length = 36)
    private String idPaciente;

    @Column(name = "documentoIdentidad", nullable = false, length = 11)
    private String documentoIdentidad;

    @Column(name = "primerNombre", nullable = false, length = 36)
    private String primerNombre;

    @Column(name = "segundoNombre", nullable = false, length = 36)
    private String segundoNombre;

    @Column(name = "primerApellido", nullable = false, length = 36)
    private String primerApellido;

    @Column(name = "segundoApellido", nullable = false, length = 36)
    private String segundoApellido;

    @Column(name = "Celular", nullable = false, length = 13)
    private String Celular;

    @Column(name = "Correo", nullable = false, length = 100)
    private String Correo;

    @Column(name = "nombrePersonaContacto", nullable = false, length = 36)
    private String nombrePersonaContacto;

    @Column(name = "telefonoPersonaContacto", nullable = false, length = 13)
    private String telefonoPersonaContacto;

    @Column(name = "Estado", nullable = false, length = 1)
    private String Estado;

    public Paciente() {
    }

    public Paciente(String idPaciente, String documentoIdentidad, String primerNombre, String segundoNombre,
            String primerApellido, String segundoApellido, String celular, String correo, String nombrePersonaContacto,
            String telefonoPersonaContacto, String estado) {
        this.idPaciente = idPaciente;
        this.documentoIdentidad = documentoIdentidad;
        this.primerNombre = primerNombre;
        this.segundoNombre = segundoNombre;
        this.primerApellido = primerApellido;
        this.segundoApellido = segundoApellido;
        Celular = celular;
        Correo = correo;
        this.nombrePersonaContacto = nombrePersonaContacto;
        this.telefonoPersonaContacto = telefonoPersonaContacto;
        Estado = estado;
    }

    public String getIdPaciente() {
        return idPaciente;
    }

    public void setIdPaciente(String idPaciente) {
        this.idPaciente = idPaciente;
    }

    public String getDocumentoIdentidad() {
        return documentoIdentidad;
    }

    public void setDocumentoIdentidad(String documentoIdentidad) {
        this.documentoIdentidad = documentoIdentidad;
    }

    public String getPrimerNombre() {
        return primerNombre;
    }

    public void setPrimerNombre(String primerNombre) {
        this.primerNombre = primerNombre;
    }

    public String getSegundoNombre() {
        return segundoNombre;
    }

    public void setSegundoNombre(String segundoNombre) {
        this.segundoNombre = segundoNombre;
    }

    public String getPrimerApellido() {
        return primerApellido;
    }

    public void setPrimerApellido(String primerApellido) {
        this.primerApellido = primerApellido;
    }

    public String getSegundoApellido() {
        return segundoApellido;
    }

    public void setSegundoApellido(String segundoApellido) {
        this.segundoApellido = segundoApellido;
    }

    public String getCelular() {
        return Celular;
    }

    public void setCelular(String celular) {
        Celular = celular;
    }

    public String getCorreo() {
        return Correo;
    }

    public void setCorreo(String correo) {
        Correo = correo;
    }

    public String getNombrePersonaContacto() {
        return nombrePersonaContacto;
    }

    public void setNombrePersonaContacto(String nombrePersonaContacto) {
        this.nombrePersonaContacto = nombrePersonaContacto;
    }

    public String getTelefonoPersonaContacto() {
        return telefonoPersonaContacto;
    }

    public void setTelefonoPersonaContacto(String telefonoPersonaContacto) {
        this.telefonoPersonaContacto = telefonoPersonaContacto;
    }

    public String getEstado() {
        return Estado;
    }

    public void setEstado(String estado) {
        Estado = estado;
    }

}