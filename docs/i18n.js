(function () {
  var stored = localStorage.getItem("aulalliure-lang");
  var lang = (stored || navigator.language || "es").toLowerCase();
  var isVal = lang.indexOf("ca") === 0;
  var isEn = lang.indexOf("en") === 0;
  var locale = stored || (isEn ? "en" : isVal ? "ca-valencia" : "es");

  var strings = {
    es: {
      title: "AulaLliure ISO",
      tag: "Debian Live · Moksha · AulaLliure",
      "hero-title": "ISO educativa ligera, lista para el aula.",
      "hero-lead":
        "AulaLliure es una ISO basada en Debian trixie, pensada para entornos escolares. Incluye Moksha como escritorio liviano, software educativo y un instalador desatendido mediante preseed.",
      warning:
        "ATENCIÓN: la instalación es automática (desatendida) y borra todo el contenido del disco duro donde se instala.",
      "btn-repo": "Ver repositorio",
      "btn-build": "Cómo construir",
      "hero-alt": "Libros y aprendizaje en el aula",
      "includes-title": "Incluye",
      "includes-1": "Entorno Moksha optimizado para equipos modestos.",
      "includes-2": "Aplicaciones de aula: GCompris, TuxPaint, JClic y más.",
      "includes-3": "Instalación desatendida con preseed en modo live.",
      "includes-4": "Repositorios Bodhi para temas y paquetes Moksha.",
      "panel-1-title": "Objetivo",
      "panel-1-text":
        "Proveer un entorno estable, rápido y con herramientas educativas, fácil de desplegar en laboratorios o equipos del aula.",
      "panel-2-title": "Base técnica",
      "panel-2-text":
        "Debian trixie con live-build, kernel estándar y soporte firmware, empaquetado en ISO híbrida.",
      "panel-3-title": "Instalación",
      "panel-3-text":
        "Preseed en `config/preseed/auto.cfg` para instalación automática durante el arranque live.",
      "panel-4-title": "Acceso",
      "panel-4-text":
        "Usuario por defecto: aulalliure · Contraseña por defecto: lliure",
      "panel-5-title": "Modos de build",
      "panel-5-text":
        "Disponibles builds minimal y full con scripts automáticos para iterar más rápido.",
      footer: "Proyecto AulaLliure · MIT License · Debian Live Build"
    },
    en: {
      title: "AulaLliure ISO",
      tag: "Debian Live · Moksha · AulaLliure",
      "hero-title": "A lightweight education ISO, ready for the classroom.",
      "hero-lead":
        "AulaLliure is a Debian trixie-based ISO designed for schools. It includes Moksha as a lightweight desktop, educational software, and unattended installation via preseed.",
      warning:
        "WARNING: installation is automatic (unattended) and will erase all data on the target disk.",
      "btn-repo": "View repository",
      "btn-build": "How to build",
      "hero-alt": "Books and classroom learning",
      "includes-title": "Includes",
      "includes-1": "Moksha desktop tuned for modest hardware.",
      "includes-2": "Classroom apps: GCompris, TuxPaint, JClic, and more.",
      "includes-3": "Unattended install with preseed in live mode.",
      "includes-4": "Bodhi repositories for Moksha themes and packages.",
      "panel-1-title": "Goal",
      "panel-1-text":
        "Provide a stable, fast environment with educational tools, easy to deploy in labs or classrooms.",
      "panel-2-title": "Technical base",
      "panel-2-text":
        "Debian trixie with live-build, standard kernel and firmware support, packaged as a hybrid ISO.",
      "panel-3-title": "Installation",
      "panel-3-text":
        "Preseed in `config/preseed/auto.cfg` for automatic installation during live boot.",
      "panel-4-title": "Access",
      "panel-4-text":
        "Default user: aulalliure · Default password: lliure",
      "panel-5-title": "Build modes",
      "panel-5-text":
        "Minimal and full builds are available with scripts for faster iteration.",
      footer: "AulaLliure Project · MIT License · Debian Live Build"
    },
    "ca-valencia": {
      title: "AulaLliure ISO",
      tag: "Debian Live · Moksha · AulaLliure",
      "hero-title": "ISO educativa lleugera, llesta per a l'aula.",
      "hero-lead":
        "AulaLliure és una ISO basada en Debian trixie, pensada per a entorns escolars. Inclou Moksha com a escriptori lleuger, programari educatiu i un instal·lador desatés mitjançant preseed.",
      warning:
        "ATENCIÓ: la instal·lació és automàtica (desatesa) i esborra tot el contingut del disc dur on s'instal·la.",
      "btn-repo": "Veure repositori",
      "btn-build": "Com construir",
      "hero-alt": "Llibres i aprenentatge a l'aula",
      "includes-title": "Inclou",
      "includes-1": "Escriptori Moksha optimitzat per a equips modestos.",
      "includes-2": "Aplicacions d'aula: GCompris, TuxPaint, JClic i més.",
      "includes-3": "Instal·lació desatesa amb preseed en mode live.",
      "includes-4": "Repositoris Bodhi per a temes i paquets de Moksha.",
      "panel-1-title": "Objectiu",
      "panel-1-text":
        "Proveir un entorn estable, ràpid i amb eines educatives, fàcil de desplegar en laboratoris o equips d'aula.",
      "panel-2-title": "Base tècnica",
      "panel-2-text":
        "Debian trixie amb live-build, kernel estàndard i suport de firmware, empaquetat en ISO híbrida.",
      "panel-3-title": "Instal·lació",
      "panel-3-text":
        "Preseed en `config/preseed/auto.cfg` per a instal·lació automàtica durant l'arrancada live.",
      "panel-4-title": "Accés",
      "panel-4-text":
        "Usuari per defecte: aulalliure · Contrasenya per defecte: lliure",
      "panel-5-title": "Modes de build",
      "panel-5-text":
        "Hi ha builds minimal i full amb scripts automàtics per iterar més ràpid.",
      footer: "Projecte AulaLliure · Llicència MIT · Debian Live Build"
    }
  };

  function applyLocale(next) {
    var dict = strings[next] || strings.es;
    document.documentElement.lang = next === "en" ? "en" : "ca";
    document.title = dict.title;

    document.querySelectorAll("[data-i18n]").forEach(function (node) {
      var key = node.getAttribute("data-i18n");
      if (dict[key]) {
        node.textContent = dict[key];
      }
    });

    document.querySelectorAll("[data-i18n-alt]").forEach(function (node) {
      var key = node.getAttribute("data-i18n-alt");
      if (dict[key]) {
        node.setAttribute("alt", dict[key]);
      }
    });

    document.querySelectorAll(".lang button").forEach(function (btn) {
      btn.classList.toggle("active", btn.getAttribute("data-lang") === next);
    });
  }

  function setLocale(next) {
    localStorage.setItem("aulalliure-lang", next);
    applyLocale(next);
  }

  document.querySelectorAll(".lang button").forEach(function (btn) {
    btn.addEventListener("click", function () {
      setLocale(btn.getAttribute("data-lang"));
    });
  });

  applyLocale(locale);
})();
