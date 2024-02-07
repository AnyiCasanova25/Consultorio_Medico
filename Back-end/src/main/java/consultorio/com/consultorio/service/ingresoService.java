package consultorio.com.consultorio.service;

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
    public Optional<Ingreso> findOne(String id) {
        Optional<Ingreso> Ingreso = data.findById(id);
        return Ingreso;
    }

    @Override
    public int delete(String id) {
        data.deleteById(id);
        return 1;
    }
}