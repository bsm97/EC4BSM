package com.example.demo.Repository;


import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.example.demo.Entitys.Lventa;

@RepositoryRestResource(collectionResourceRel = "ventas", path = "ventas")
public interface VentaRepository extends CrudRepository<Lventa, Long>  {
    
}
