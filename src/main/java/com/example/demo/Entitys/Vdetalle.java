package com.example.demo.Entitys;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class Vdetalle {

    @Id
    @GeneratedValue
    private Long id;

    private String NroBoleta;

    @ManyToOne()
    @JoinColumn(name = "id_venta")
    private Lventa venta;

    @ManyToOne()
    @JoinColumn(name = "id_producto")
    private Producto producto;

    private int cantidad;

    public Vdetalle() {
    }

    public Vdetalle(String nroBoleta, Lventa venta, Producto producto, int cantidad) {
        this.NroBoleta = nroBoleta;
        this.venta = venta;
        this.producto = producto;
        this.cantidad = cantidad;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Lventa getVenta() {
        return venta;
    }

    public void setVenta(Lventa venta) {
        this.venta = venta;
    }

    public Producto getProducto() {
        return producto;
    }

    public void setProducto(Producto producto) {
        this.producto = producto;
    }

    public int getCantidad() {
        return cantidad;
    }

    public void setCantidad(int cantidad) {
        this.cantidad = cantidad;
    }

    public String getNroBoleta() {
        return NroBoleta;
    }

    public void setNroBoleta(String nroBoleta) {
        NroBoleta = nroBoleta;
    }

}
