+-----------+              +-----------+
| Cliente   |              | Venta     |
+-----------+              +-----------+
| id        |1          *  | id        |
| nombre    |------------->| fecha     |
| telefono  |              | total     |
+-----------+              +-----------+

+-------------+            +-----------+
| Proveedor   |            | Compra    |
+-------------+            +-----------+
| id          |1        *  | id        |
| nombre      |----------->| fecha     |
| telefono    |            | total     |
+-------------+            +-----------+

+------------+
| Producto   |
+------------+
| id         |
| nombre     |
| precio     |
| stock      |
+------------+

Producto * <--------> * Venta
Producto * <--------> * Compra

+-----------+
| Reporte   |
+-----------+
| generar() |
+-----------+

Reporte ----> Producto
Reporte ----> Compra
Reporte ----> Venta