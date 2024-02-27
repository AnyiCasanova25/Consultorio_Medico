package consultorio.com.consultorio.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import consultorio.com.consultorio.interfaceService.IingresoService;
import consultorio.com.consultorio.models.Ingreso;

import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;

@RequestMapping("/api/v1/Ingreso/")
@RestController
public class ingresoController {

    @Autowired
    private IingresoService ingresoService;

    @PostMapping("/")
    public ResponseEntity<Object> save(@ModelAttribute("Ingreso") Ingreso Ingreso) {
        var listaIngreso = ingresoService.findAll()
                .stream().filter(ingreso -> ingreso.getCama()
                        .equals(Ingreso.getCama()));
        if (listaIngreso.count() != 0) {
            return new ResponseEntity<>("El ingreso ya existe", HttpStatus.BAD_REQUEST);
        }
        //verificar que el campo documento de identidad sea diferente vacio
        if (Ingreso.getHabitacion().equals("")) {

            return new ResponseEntity<>("El campo habitacion es obligatorio", HttpStatus.BAD_REQUEST);
        }

        if (Ingreso.getCama().equals("")) {
            
            return new ResponseEntity<>("El campo cama es obligatorio", HttpStatus.BAD_REQUEST);
        }
        if (Ingreso.getPaciente().equals("")) {
            
            return new ResponseEntity<>("El campo paciente es obligatorio", HttpStatus.BAD_REQUEST);
        }
        if (Ingreso.getMedico().equals("")) {
            
            return new ResponseEntity<>("El campo medico es obligatorio", HttpStatus.BAD_REQUEST);
        }
        if (Ingreso.getFechaIngreso().equals("")) {
            
            return new ResponseEntity<>("El campo fecha ingreso es obligatorio", HttpStatus.BAD_REQUEST);
        }
        if (Ingreso.getFechaSalida().equals("")) {
            
            return new ResponseEntity<>("El campo fecha salida es obligatorio", HttpStatus.BAD_REQUEST);
        }
        if (Ingreso.getEstado().equals("")) {
            
            return new ResponseEntity<>("El campo estado es obligatorio", HttpStatus.BAD_REQUEST);
        }
          // todo bien
          ingresoService.save(Ingreso); 
          return new ResponseEntity<>(Ingreso, HttpStatus.OK);
    }

    @GetMapping("/")
    public ResponseEntity<Object> findAll() {
        var listaIngreso = ingresoService.findAll();
        return new ResponseEntity<>(listaIngreso, HttpStatus.OK);
    }

    @GetMapping("/busquedafiltro/{filtro}")
    public ResponseEntity<Object> findFiltro(@PathVariable String filtro){
        var listaIngreso = ingresoService.filtroIngreso(filtro);
        return new ResponseEntity<>(listaIngreso, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Object> findOne(@PathVariable String id) {
        var Ingreso = ingresoService.findOne(id);
        return new ResponseEntity<>(Ingreso, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Object> delete(@PathVariable String id) {
        var Ingreso = ingresoService.findOne(id).get();
        if (Ingreso != null) {
            if (Ingreso.getEstado().equals("H")) {

                Ingreso.setEstado("D");
                return new ResponseEntity<>("Se ha deshabilitado correctamente", HttpStatus.OK);
            } else
            Ingreso.setEstado("H");
            return new ResponseEntity<>("Se ha habilitado correctamente", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("No se ha encontrado el registro", HttpStatus.BAD_REQUEST);
        }
    }

    @DeleteMapping("/eliminarPermanente/{id}")
        public ResponseEntity<Object> deleteForever(@PathVariable String id) {
        ingresoService.deleteForever(id);
        return new ResponseEntity<>("Registro eliminado Permanentemente", HttpStatus.OK);
     }


    @PutMapping("/{id}")
    public ResponseEntity<Object> update(@PathVariable String id, @ModelAttribute("Ingreso") Ingreso IngresoUpdate) {
        var Ingreso = ingresoService.findOne(id).get();
        if (Ingreso != null) {

            Ingreso.setHabitacion(IngresoUpdate.getHabitacion());
            Ingreso.setCama(IngresoUpdate.getCama());
            Ingreso.setPaciente(IngresoUpdate.getPaciente());
            Ingreso.setMedico(IngresoUpdate.getMedico());
            Ingreso.setFechaIngreso(IngresoUpdate.getFechaIngreso());
            Ingreso.setFechaSalida(IngresoUpdate.getFechaSalida());
            Ingreso.setEstado(IngresoUpdate.getEstado());

            ingresoService.save(Ingreso);
            return new ResponseEntity<>(Ingreso, HttpStatus.OK);

        } else {
            return new ResponseEntity<>("Error Ingreso NO Encontrado", HttpStatus.BAD_REQUEST);
        }
    }

}