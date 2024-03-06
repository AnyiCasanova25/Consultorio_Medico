package consultorio.com.consultorio.interfaces;

import java.sql.Date;
import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import consultorio.com.consultorio.models.Ingreso;

@Repository
public interface Iingreso extends CrudRepository<Ingreso, String> {

    @Query ("SELECT m FROM Ingreso m WHERE m.fechaIngreso = ?1 ")
    List<Ingreso>filtroFechaIngreso(Date fechaIngreso); 

    @Query("SELECT m FROM Ingreso m WHERE m.Estado LIKE %?1% ")
    List<Ingreso> filtroIngreso(char estado);

    // @Query ("SELECT m,p,i from Ingreso i INNER JOIN Paciente p ON
    // i.idPaciente=p.idPaciente\r\n" + //
    // "INNER JOIN Medico m ON i.idMedico=m.idMedico\r\n" + //
    // "WHERE\r\n" + //
    // "p.primerNombre LIKE %?1% OR\r\n " + //
    // "m.primerNombre LIKE %?1% OR\r\n " + //
    // "i.habitacion = ?1 OR\r\n " + //
    // "i.fechaIngreso = ?1")

    @Query("SELECT i from Ingreso i JOIN i.Paciente p JOIN i.Medico m  WHERE\r\n" + //
            "p.primerNombre LIKE %?1% OR\r\n " + //
            "m.primerNombre LIKE %?1%  OR\r\n " + //
            "i.habitacion = ?1 \r\n "  //
            
    )
    List<Ingreso> filtroIngreso(String filtro);
}
