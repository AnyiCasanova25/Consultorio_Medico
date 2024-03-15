package consultorio.com.consultorio.interfaces;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import consultorio.com.consultorio.models.Paciente;


@Repository
public interface Ipaciente extends CrudRepository< Paciente , String>{

    // ?1 es la primera variable
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

    @Query("SELECT m FROM Paciente m WHERE m.primerNombre LIKE %?1% OR m.segundoNombre LIKE %?1% OR m.primerApellido LIKE %?1% OR m.segundoApellido LIKE %?1% OR documentoIdentidad LIKE %?1%")
    List<Paciente> filtroPaciente(String filtro);

    @Query("SELECT m FROM Paciente m WHERE m.Estado LIKE %?1% ")
    List<Paciente> filtroPacienteEstado(char estado); 
    
}
