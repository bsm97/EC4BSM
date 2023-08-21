package com.example.demo;


import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import com.example.demo.Entitys.Lventa;
import com.example.demo.Entitys.Producto;
import com.example.demo.Entitys.Vdetalle;
import com.example.demo.Repository.ProductoRepository;
import com.example.demo.Repository.VentaDetalleRepository;
import com.example.demo.Repository.VentaRepository;

@Component
public class DatabaseLoader implements CommandLineRunner {

    private final ProductoRepository repositoryP;
    private final VentaRepository repositoryV;
    private final VentaDetalleRepository repositoryD;

    public DatabaseLoader(ProductoRepository repositoryP, VentaRepository repositoryV,
            VentaDetalleRepository repositoryD) {
        this.repositoryP = repositoryP;
        this.repositoryV = repositoryV;
        this.repositoryD = repositoryD;
    }

    @Override
    public void run(String... strings) throws Exception {

        Producto pro1 = new Producto("Pechuga", 10);
        Producto pro2 = new Producto("Alitas", 15);
        Producto pro3 = new Producto("Muslo", 25);
        Producto pro4 = new Producto("Entre Pierna", 20);
        Producto pro5 = new Producto("Papas Peladas", 5);

        this.repositoryP.save(pro1);
        this.repositoryP.save(pro2);
        this.repositoryP.save(pro3);
        this.repositoryP.save(pro4);
        this.repositoryP.save(pro5);


        Lventa ven1 = new Lventa("KFC");
        Lventa ven2 = new Lventa("POPEYES");
        Lventa ven3 = new Lventa("NORKYS");
        Lventa ven4 = new Lventa("ROCKYS");
        Lventa ven5 = new Lventa("PARDOS");

        this.repositoryV.save(ven1);
        this.repositoryV.save(ven2);
        this.repositoryV.save(ven3);
        this.repositoryV.save(ven4);
        this.repositoryV.save(ven5);


        Vdetalle det1 = new Vdetalle("b001",ven1, pro1, 2);
        Vdetalle det2 = new Vdetalle("b002",ven2, pro2, 10);
        Vdetalle det3 = new Vdetalle("b003",ven3, pro3, 5);
        Vdetalle det4 = new Vdetalle("b004",ven4, pro4, 1);
        Vdetalle det5 = new Vdetalle("b005",ven5, pro5, 3);


        this.repositoryD.save(det1);
        this.repositoryD.save(det2);
        this.repositoryD.save(det3);
        this.repositoryD.save(det4);
        this.repositoryD.save(det5);

    }

}