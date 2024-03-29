package consultorio.com.consultorio.service;

import java.sql.Date;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import consultorio.com.consultorio.interfaceService.IingresoService;
import consultorio.com.consultorio.interfaces.Iingreso;
import consultorio.com.consultorio.models.Ingreso;

@Service

public class ingresoService implements IingresoService {

    @Autowired
    private Iingreso data;

    @SuppressWarnings("null")
    @Override
    public String save(Ingreso Ingreso) {
        data.save(Ingreso);
        return Ingreso.getIdIngreso();
    }

    @Override
    public List<Ingreso> findAll() {
        List<Ingreso> listaIngreso = (List<Ingreso>) data.findAll();
        return listaIngreso;
    }

    @Override
    public List<Ingreso>  filtroIngreso(String filtro) {
        List<Ingreso> listaIngreso = data.filtroIngreso(filtro);
        return listaIngreso;
    }

    @Override
    public List<Ingreso>filtroFechaIngreso(Date fechaIngreso) {
        List<Ingreso> listaIngreso = data.filtroFechaIngreso(fechaIngreso);
        return listaIngreso;
    }

    @Override
    public List<Ingreso>filtroEstado(char estado) {
        List<Ingreso> listaIngreso = data.filtroEstado(estado);
        return listaIngreso;
    }

    @Override
    public Optional<Ingreso> findOne(String id) {
        @SuppressWarnings("null")
        Optional<Ingreso> Ingreso = data.findById(id);
        return Ingreso;
    }

    @SuppressWarnings("null")
    @Override
    public int deleteForever(String id) {
        data.deleteById(id);
        return 1;
    }
}