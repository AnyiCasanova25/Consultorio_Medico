package consultorio.com.consultorio.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity(name = "Medico")
public class Medico {

    /**
     * id (UIID autogenerado)
     * - documento de identidad (obligatorio)
     * - primer nombre (obligatorio)
     * - segundo nombre (opcional)
     * - primer apellido (obligatorio)
     * - segundo apellido (opcional)
     * - celular (obligatorio)
     * - correo electrónico (obligatorio)
     * - Estado (Habilitado, Deshabilitado)
     */

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    @Column(name = "idMedico", nullable = false, length = 36)
    private String idMedico;

    @Column(name = "documentoIdentidad", nullable = false, length = 13)
    private String documentoIdentidad;

    @Column(name = "primerNombre", nullable = false, length = 36)
    private String primerNombre;

    @Column(name = "segundoNombre", nullable = false, length = 36)
    private String segundoNombre;

    @Column(name = "primerApellido", nullable = false, length = 36)
    private String primerApellido;

    @Column(name = "segundoApellido", nullable = false, length = 36)
    private String segundoApellido;

    @Column(name = "Celular", nullable = false, length = 11)
    private String Celular;

    @Column(name = "Correo", nullable = false, length = 100)
    private String Correo;

    @Column(name = "Estado", nullable = false, length = 1)
    private String Estado;

    public Medico() {
    }

    public Medico(String idMedico, String documentoIdentidad, String primerNombre, String segundoNombre,
            String primerApellido, String segundoApellido, String celular, String correo, String estado) {
        this.idMedico = idMedico;
        this.documentoIdentidad = documentoIdentidad;
        this.primerNombre = primerNombre;
        this.segundoNombre = segundoNombre;
        this.primerApellido = primerApellido;
        this.segundoApellido = segundoApellido;
        Celular = celular;
        Correo = correo;
        Estado = estado;
    }

    public String getIdMedico() {
        return idMedico;
    }

    public void setIdMedico(String idMedico) {
        this.idMedico = idMedico;
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

    public String getEstado() {
        return Estado;
    }

    public void setEstado(String estado) {
        Estado = estado;
    }

}
