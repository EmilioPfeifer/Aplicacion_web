class DBService {
  constructor () {
    let ProductosDB = localStorage.getItem('Productos');
    this.productos = ProductosDB ? JSON.parse(ProductosDB) : [];

    let VentasDB = localStorage.getItem('Ventas');
    this.ventas = VentasDB ? JSON.parse(VentasDB) : [];

  }

  getProductos () {
    return this.productos;
  }
  agregarProducto(producto) {
    this.productos.push(producto);
    localStorage.setItem('Productos', JSON.stringify(this.productos));
  }

  getVentas () {
    return this.ventas;
  }
  agregarVenta (venta) {
    this.ventas.push(venta);
    localStorage.setItem('Ventas', JSON.stringify(this.ventas));
  }
  removeVenta (index){
    this.ventas.splice(index,1);
    localStorage.setItem('Ventas', JSON.stringify(this.ventas));
  }
}

export default DBService
