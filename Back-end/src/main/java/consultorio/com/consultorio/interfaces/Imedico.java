package consultorio.com.consultorio.interfaces;


import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import consultorio.com.consultorio.models.Medico;


@Repository
public interface Imedico extends CrudRepository< Medico , String>{
    

    //?1 es la primera variable (?2,?3 y asi sucesivamente)
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
    @Query("SELECT m FROM Medico m WHERE m.primerNombre LIKE %?1% OR m.segundoNombre LIKE %?1% OR m.primerApellido LIKE %?1% OR m.segundoApellido LIKE %?1% OR m.documentoIdentidad  LIKE %?1%")
    List<Medico> filtroMedico(String filtro);

    @Query("SELECT m FROM Medico m WHERE m.Estado LIKE %?1%")
    List<Medico> filtroMedicoEstado(char estado);


}


