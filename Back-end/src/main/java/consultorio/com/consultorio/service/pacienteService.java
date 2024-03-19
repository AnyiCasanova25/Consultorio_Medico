package consultorio.com.consultorio.service;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import consultorio.com.consultorio.interfaceService.IpacienteService;
import consultorio.com.consultorio.interfaces.Ipaciente;
import consultorio.com.consultorio.models.Paciente;

@Service

public class pacienteService implements IpacienteService {

    @Autowired
    private Ipaciente data;

    @SuppressWarnings("null")
    @Override
    public String save(Paciente Paciente) {
        data.save(Paciente);
        return Paciente.getIdPaciente();
    }

    @Override
    public List<Paciente> findAll() {
        List<Paciente> listaPaciente = (List<Paciente>) data.findAll();
        return listaPaciente;
    }

    @Override
    public List<Paciente> filtroPaciente(String filtro) {
        List<Paciente>listaPaciente=data.filtroPaciente(filtro);
        return listaPaciente;
    }

    @Override
    public List<Paciente> filtroPacienteEstado(char estado) {
        List<Paciente> listaPaciente =data.filtroPacienteEstado(estado);
        return listaPaciente;
    }


    @Override
    public Optional<Paciente> findOne(String id) {
        @SuppressWarnings("null")
        Optional<Paciente> Paciente = data.findById(id);
        return Paciente;
    }

    @SuppressWarnings("null")
    @Override
    public int deleteForever(String id) {
        data.deleteById(id);
        return 1;
    }
}