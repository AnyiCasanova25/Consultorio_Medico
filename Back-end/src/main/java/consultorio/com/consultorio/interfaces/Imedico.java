package consultorio.com.consultorio.interfaces;


import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import consultorio.com.consultorio.models.Medico;


@Repository
public interface Imedico extends CrudRepository< Medico , String>{
    

    //?1 es la primera variable (?2,?3 y asi sucesivamente)
    @Query("SELECT m FROM Medico m WHERE m.primerNombre LIKE %?1% OR m.documentoIdentidad LIKE %?2% OR m.Estado LIKE %?3%")
    List<Medico> filtroMedico(String filtro);
}
