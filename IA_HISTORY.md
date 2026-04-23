# IA_HISTORY.md — Registro de uso de IA durante el examen

---

## Prompt 1

### ¿Qué le pedí a la IA?

Le pedí que me explicara cómo reemplazar los `<div>` estructurales del HTML original por etiquetas semánticas correctas, y que me indicara qué etiqueta corresponde a cada parte de la página (encabezado, navegación, secciones, pie de página).

### ¿Qué devolvió?

Devolvió una lista de equivalencias: `<div class="header">` → `<header>`, `<div class="nav">` → `<nav>`, `<div class="main">` → `<main>`, `<div class="footer">` → `<footer>`, las secciones de contenido → `<section>`, y las tarjetas de habilidades y stats → `<article>`. También indicó que la lista de navegación debía usar `<ul>` y `<li>` en lugar de un `<div>`.

### ¿Qué debí corregir manualmente y por qué?

La IA sugirió envolver los títulos de sección en `<h2>` directamente sin revisar la jerarquía de encabezados. Tuve que verificar manualmente que el `<h1>` fuera único (el nombre del personaje, "Zara Darkbane") y que los títulos de sección ("Stats de Combate", "Habilidades", etc.) usaran `<h2>`, y los nombres de cada habilidad dentro de un `<article>` usaran `<h3>`. Sin esa jerarquía correcta, los lectores de pantalla no pueden navegar la página de forma lógica.

---

## Prompt 2

### ¿Qué le pedí a la IA?

Le pedí que me generara el código JavaScript con las cuatro funciones requeridas: `calculateDamage`, `isAlive`, `canCastSpell` y `getPresentation`, usando los tipos indicados (declaradas o arrow functions) y sin usar `var`.

### ¿Qué devolvió?

Devolvió las cuatro funciones con su lógica básica correcta. Sin embargo, en la función `canCastSpell` usó la condición `currentMana > spellCost` (estrictamente mayor) en lugar de `currentMana >= spellCost` (mayor o igual), lo que causaría que el personaje no pudiera lanzar un hechizo aunque tuviera exactamente el mana necesario.

### ¿Qué debí corregir manualmente y por qué?

Corregí la condición a `currentMana >= spellCost`. La IA cometió un error de lógica sutil: si el personaje tiene exactamente 30 de mana y el hechizo cuesta 30, debería poder lanzarlo. La condición `>` lo hubiera impedido incorrectamente. Este tipo de error no genera un fallo en la consola del navegador (el script corre sin errores), por lo que solo se detecta probando el comportamiento con valores límite y razonando sobre la lógica del juego. Esto demuestra que el output de la IA siempre debe ser revisado con criterio propio, especialmente en condiciones de borde.
