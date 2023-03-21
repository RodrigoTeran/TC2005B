# ¿En qué consiste el control de acceso basado en roles?
- El control de acceso basado en roles consiste en tener un filtro en el cual se proteje cuáles acciones pueden tener los diferentes actores de nuestro sistema.
- Básicamente es un sistema de privilegios

# Investiguen y describan 2 sistemas, uno que aplique RBAC y uno que no. Realicen un análisis de las ventajas y desventajas de cada uno con respecto al control de acceso.
- Sistema RBAC:
    -  En este caso pueden haber muchos roles y muchas funcionalidades mapeadas a cada rol
    - Ventajas:
        - Mayor flexibilidad en la creación y mantenimiento de los roles
    - Desventajas:
        - Mayor complejidad cuando la aplicación crece

- Sistema sin RBAC:
    - Antiguamente había un superusuario que tenía acceso a todas las funciones.
    - Ventajas:
        - Cualquier funcionalidad de administrador lo debe de hacer un desarrollador ya que no hay un sistema dinámico de roles
    - Desventajas:
        - No hay dinamismo en la creación de los roles.
        - Cada vez que se tiene que agregar una nueva funcionalidad, se deben hacer cambios en el código