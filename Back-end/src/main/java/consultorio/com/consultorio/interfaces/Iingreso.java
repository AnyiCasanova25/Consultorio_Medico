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

    @Query("SELECT i from Ingreso i JOIN i.Paciente p JOIN i.Medico m  WHERE\r\n" + //
            "p.primerNombre LIKE %?1% OR\r\n " + //
            "m.primerNombre LIKE %?1% OR\r\n " + //
            "p.segundoNombre LIKE %?1%  OR\r\n " + //
            "m.segundoNombre LIKE %?1%  OR\r\n " + //
            "p.primerApellido LIKE %?1%  OR\r\n " + //
            "m.primerApellido LIKE %?1%  OR\r\n " + //
            "p.segundoApellido LIKE %?1%  OR\r\n " + //
            "m.segundoApellido LIKE %?1%  OR\r\n " + //
            "p.documentoIdentidad = ?1 OR\r\n "  +//
            "m.documentoIdentidad = ?1 \r\n "  //
                
    )

    
       // "i.fechaIngreso = ?1 OR\r\n" + //
            // "i.fechaSalida = ?1 OR\r\n" + //
            // "i.habitacion = ?1 \r\n "  //
    List<Ingreso> filtroIngreso(String filtro);

    @Query("SELECT i from Ingreso i JOIN i.Paciente p JOIN i.Medico m WHERE\r\n" + //
    "i.fechaIngreso = ?1 \r\n" //
    )
    List<Ingreso> filtroIngreso(Date fechaIngreso);

    @Query("SELECT i from Ingreso i JOIN i.Paciente p JOIN i.Medico m WHERE\r\n" + //
    "i.habitacion = ?1 \r\n" //
    )
    List<Ingreso> habitacion(String habitacion );
}
