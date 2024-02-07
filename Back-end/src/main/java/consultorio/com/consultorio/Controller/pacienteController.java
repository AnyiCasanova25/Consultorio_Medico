package consultorio.com.consultorio.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import consultorio.com.consultorio.interfaceService.IpacienteService;
import consultorio.com.consultorio.models.Paciente;

import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;

@RequestMapping("/api/v1/Paciente")
@RestController
public class pacienteController {

    @Autowired
    private IpacienteService pacienteService;

    @PostMapping("/")
    public ResponseEntity<Object> save(@ModelAttribute("Paciente") Paciente Paciente) {
        pacienteService.save(Paciente);
        return new ResponseEntity<>(Paciente, HttpStatus.OK);
    }

    @GetMapping("/")
    public ResponseEntity<Object> findAll() {
        var listaPaciente = pacienteService.findAll();
        return new ResponseEntity<>(listaPaciente, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Object> findOne(@PathVariable String id) {
        var Paciente = pacienteService.findOne(id);
        return new ResponseEntity<>(Paciente, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Object> delete(@PathVariable String id) {
        pacienteService.delete(id);
        return new ResponseEntity<>("Paciente Eliminado", HttpStatus.OK);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Object> update(@PathVariable String id, @ModelAttribute("Paciente") Paciente PacienteUpdate) {
        var Paciente = pacienteService.findOne(id).get();
        if (Paciente != null) {

            Paciente.setDocumentoIdentidad(PacienteUpdate.getDocumentoIdentidad());
            Paciente.setPrimerNombre(PacienteUpdate.getPrimerNombre());
            Paciente.setSegundoNombre(PacienteUpdate.getSegundoNombre());
            Paciente.setPrimerApellido(PacienteUpdate.getPrimerApellido());
            Paciente.setSegundoApellido(PacienteUpdate.getSegundoApellido());
            Paciente.setCelular(PacienteUpdate.getCelular());
            Paciente.setCorreo(PacienteUpdate.getCorreo());
            Paciente.setNombrePersonaContacto(PacienteUpdate.getNombrePersonaContacto());
            Paciente.setTelefonoPersonaContacto(PacienteUpdate.getTelefonoPersonaContacto());
            Paciente.setEstado(PacienteUpdate.getEstado());
            
           

            pacienteService.save(Paciente);
            return new ResponseEntity<>(Paciente, HttpStatus.OK);

        } else {
            return new ResponseEntity<>("Error Paciente NO Encontrado", HttpStatus.BAD_REQUEST);
        }
    }

}
