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

@RequestMapping("/api/v1/Paciente/")
@RestController
public class pacienteController {

    @Autowired
    private IpacienteService pacienteService;

    @PostMapping("/")
    public ResponseEntity<Object> save(@ModelAttribute("Paciente") Paciente Paciente) {
        var listaPaciente = pacienteService.findAll()
                .stream().filter(paciente -> paciente.getDocumentoIdentidad()
                        .equals(Paciente.getDocumentoIdentidad()));
        if (listaPaciente.count() != 0) {
            return new ResponseEntity<>("El paciente ya existe", HttpStatus.BAD_REQUEST);
        }
        // verificar que el campo documento de identidad sea diferente vacio
        if (Paciente.getDocumentoIdentidad().equals("")) {

            return new ResponseEntity<>("El documento de identidad es un campo obligatorio", HttpStatus.BAD_REQUEST);
        }

        if (Paciente.getPrimerNombre().equals("")) {

            return new ResponseEntity<>("El primer nombre es un campo obligatorio", HttpStatus.BAD_REQUEST);
        }
        if (Paciente.getPrimerApellido().equals("")) {

            return new ResponseEntity<>("El primer apellido es un campo obligatorio", HttpStatus.BAD_REQUEST);
        }

        if (Paciente.getCelular().equals("")) {

            return new ResponseEntity<>("El numero de celular es un campo obligatorio", HttpStatus.BAD_REQUEST);
        }

        if (Paciente.getCorreo().equals("")) {

            return new ResponseEntity<>("La direccion de correo es un campo obligatorio", HttpStatus.BAD_REQUEST);
        }
        if (Paciente.getNombrePersonaContacto().equals("")) {

            return new ResponseEntity<>("El Nombre Persona Contacto es un campo obligatorio", HttpStatus.BAD_REQUEST);
        }

        if (Paciente.getTelefonoPersonaContacto().equals("")) {

            return new ResponseEntity<>(" El Telefono Persona Contacto es un campo obligatorio",
                    HttpStatus.BAD_REQUEST);
        }

        // todo bien
        pacienteService.save(Paciente);
        return new ResponseEntity<>(Paciente, HttpStatus.OK);

    }

    @GetMapping("/")
    public ResponseEntity<Object> findAll() {
        var listaPaciente = pacienteService.findAll();
        return new ResponseEntity<>(listaPaciente, HttpStatus.OK);
    }

    @GetMapping("/busquedafiltro/{filtro}")
    public ResponseEntity<Object> findFiltro(@PathVariable String filtro) {
        var listaPaciente = pacienteService.filtroPaciente(filtro);
        return new ResponseEntity<>(listaPaciente, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Object> findOne(@PathVariable String id) {
        var Paciente = pacienteService.findOne(id);
        return new ResponseEntity<>(Paciente, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Object> delete(@PathVariable String id) {
        var Paciente = pacienteService.findOne(id).get();
        if (Paciente != null) {
            if (Paciente.getEstado().equals("H")) {

                Paciente.setEstado("D");
                return new ResponseEntity<>("Se ha deshabilitado correctamente el paciente", HttpStatus.OK);
            } else
                Paciente.setEstado("H");
            return new ResponseEntity<>("Se ha habilitado correctamente el paciente", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("No se ha encontrado el registro", HttpStatus.BAD_REQUEST);
        }
    }

    @DeleteMapping("/eliminarPermanente/{id}")
    public ResponseEntity<Object> deleteForever(@PathVariable String id) {
        pacienteService.deleteForever(id);
        return new ResponseEntity<>("Registro eliminado Permanentemente", HttpStatus.OK);
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
