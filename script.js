// ============================================================
// script.js — Chronicles of Code: Zara Darkbane
// ============================================================

// --- Variables del personaje ---
const name = "Zara Darkbane";
const characterClass = "Hechicera";
const level = 7;
const health = 80;
const mana = 120;
const attack = 45;
const defense = 30;

// ============================================================
// Funciones
// ============================================================

/**
 * Calcula el daño neto restando la defensa al ataque.
 * Si el resultado es negativo, retorna 0.
 * @param {number} attack - Valor de ataque del personaje.
 * @param {number} defense - Valor de defensa del enemigo.
 * @returns {number} Daño causado (mínimo 0).
 */
function calculateDamage(attack, defense) {
  const damage = attack - defense;
  if (damage < 0) {
    return 0;
  }
  return damage;
}

/**
 * Indica si el personaje sigue vivo.
 * @param {number} health - Puntos de vida actuales.
 * @returns {boolean} true solo si health es estrictamente mayor a 0.
 */
const isAlive = (health) => health > 0;

/**
 * Indica si el personaje puede lanzar un hechizo.
 * @param {number} currentMana - Mana disponible actualmente.
 * @param {number} spellCost - Costo en mana del hechizo.
 * @param {boolean} isStunned - true si el personaje está aturdido.
 * @returns {boolean} true solo si hay mana suficiente y no está aturdido.
 */
const canCastSpell = (currentMana, spellCost, isStunned) =>
  currentMana >= spellCost && !isStunned;

/**
 * Genera una presentación del personaje en formato legible.
 * @param {string} name - Nombre del personaje.
 * @param {string} characterClass - Clase del personaje.
 * @param {number} level - Nivel actual.
 * @returns {string} Presentación con el formato: 'Nombre — Clase (Nivel N)'.
 */
function getPresentation(name, characterClass, level) {
  return `${name} — ${characterClass} (Nivel ${level})`;
}

// ============================================================
// Llamadas y resultados en consola
// ============================================================

console.log("=== Chronicles of Code: Zara Darkbane ===");

console.log("Presentación:", getPresentation(name, characterClass, level));

console.log("¿Está viva?", isAlive(health));

console.log(
  "¿Puede lanzar Bola de Fuego (costo 30)?",
  canCastSpell(mana, 30, false)
);

console.log(
  "Daño causado (ataque 45 vs defensa 30):",
  calculateDamage(attack, defense)
);

console.log(
  "Daño causado si defensa supera el ataque (45 vs 60):",
  calculateDamage(attack, 60)
);
