package com.example.demo.Repository;


import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.example.demo.Entitys.Vdetalle;

@RepositoryRestResource(collectionResourceRel = "ventadetalles", path = "ventadetalles")
public interface VentaDetalleRepository extends CrudRepository<Vdetalle, Long>  {
    
}