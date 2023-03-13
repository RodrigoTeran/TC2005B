# ¿Qué ventajas tiene escribir el código SQL únicamente en la capa del modelo?
- Es bueno ya que se tiene un mejor control de cuáles funciones tienen acceso a escribir código en la base de datos

# ¿Qué es SQL injection y cómo se puede prevenir?
- Es cuando por medio de un query se mete código en vez de texto... Este código puede afectar nuestra base de datos.
- Para prevenirlo jamás se deben concatenar strings en los queries para meter valores...
Siempre hay que usar query builders para que no se meta código ajeno.
