package consultorio.com.consultorio.service;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import consultorio.com.consultorio.interfaceService.ImedicoService;
import consultorio.com.consultorio.interfaces.Imedico;
import consultorio.com.consultorio.models.Medico;

@Service

public class medicoService implements ImedicoService {

    @Autowired
    private Imedico data;

    @Override
    public String save(Medico Medico) {
        data.save(Medico);
        return Medico.getIdMedico();
    }

    @Override
    public List<Medico> findAll() {
        List<Medico> listaMedico = (List<Medico>) data.findAll();
        return listaMedico;
    }

    @Override
    public Optional<Medico> findOne(String id) {
        Optional<Medico> Medico = data.findById(id);
        return Medico;
    }

    @Override
    public int delete(String id) {
        data.deleteById(id);
        return 1;
    }
}
