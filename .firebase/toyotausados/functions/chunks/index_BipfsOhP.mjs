import { c as createComponent } from './astro-component_CuseIadU.mjs';
import 'piccolore';
import { r as renderTemplate, m as maybeRenderHead, i as renderComponent, u as unescapeHTML } from './server_Ze0N7VEi.mjs';
import { d as db, $ as $$Layout, a as $$Navbar } from './firebase_BQ8IeNkP.mjs';
import 'clsx';
import { getDocs, collection } from '@firebase/firestore';

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(raw || cooked.slice()) }));
var _a$1;
const $$FiltrosSidebar = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", `<div id="modalFiltros" class="fixed inset-0 z-[100] hidden backdrop-blur-sm bg-black/60 transition-all duration-300 opacity-0 pointer-events-none"> <div id="sidebarFiltros" class="absolute inset-y-0 right-0 max-w-xs w-full bg-white shadow-2xl transform translate-x-full transition-transform duration-300 flex flex-col pointer-events-auto"> <!-- Header --> <div class="flex items-center justify-between px-6 py-4 border-b border-gray-100"> <h2 class="text-lg font-bold text-gray-900 flex items-center gap-2"> <i data-lucide="sliders-horizontal" class="w-5 h-5 text-red-600"></i>
Filtros
</h2> <button onclick="cerrarMenuFiltros()" class="text-gray-400 hover:text-red-500 transition p-1 cursor-pointer"> <i data-lucide="x" class="w-6 h-6"></i> </button> </div> <!-- Campos --> <div class="p-5 overflow-y-auto flex-grow space-y-5"> <!-- Modelo --> <div> <label class="block text-xs font-bold text-gray-600 mb-1.5 uppercase tracking-wide">Modelo</label> <select id="filtroModelo" class="w-full px-3 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:outline-none bg-gray-50 text-gray-800 font-medium text-sm"> <option value="">Cualquier Modelo</option> </select> </div> <!-- Año --> <div> <label class="block text-xs font-bold text-gray-600 mb-1.5 uppercase tracking-wide">Año</label> <select id="filtroAnio" class="w-full px-3 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:outline-none bg-gray-50 text-gray-800 font-medium text-sm"> <option value="">Cualquier Año</option> </select> </div> <!-- Precio --> <div> <label class="block text-xs font-bold text-gray-600 mb-1.5 uppercase tracking-wide">Precio</label> <div class="flex gap-2 items-center"> <input type="number" id="filtroPrecioMin" placeholder="Mín" step="1000000" class="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-1 focus:ring-red-500 focus:outline-none bg-gray-50 text-gray-800 text-sm"> <span class="text-gray-400 text-sm">–</span> <input type="number" id="filtroPrecioMax" placeholder="Máx" step="1000000" class="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-1 focus:ring-red-500 focus:outline-none bg-gray-50 text-gray-800 text-sm"> </div> </div> <!-- Kilometraje --> <div> <label class="block text-xs font-bold text-gray-600 mb-1.5 uppercase tracking-wide">Kilometraje</label> <div class="flex gap-2 items-center"> <input type="number" id="filtroKmMin" placeholder="Mín" step="10000" class="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-1 focus:ring-red-500 focus:outline-none bg-gray-50 text-gray-800 text-sm"> <span class="text-gray-400 text-sm">–</span> <input type="number" id="filtroKmMax" placeholder="Máx" step="10000" class="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-1 focus:ring-red-500 focus:outline-none bg-gray-50 text-gray-800 text-sm"> </div> </div> <!-- Transmisión --> <div> <label class="block text-xs font-bold text-gray-600 mb-1.5 uppercase tracking-wide">Transmisión</label> <select id="filtroTransmision" class="w-full px-3 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:outline-none bg-gray-50 text-gray-800 font-medium text-sm"> <option value="">Cualquiera</option> <option value="Mecánica">Mecánica</option> <option value="Automática">Automática</option> </select> </div> <!-- Combustible --> <div> <label class="block text-xs font-bold text-gray-600 mb-1.5 uppercase tracking-wide">Combustible</label> <select id="filtroCombustible" class="w-full px-3 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:outline-none bg-gray-50 text-gray-800 font-medium text-sm"> <option value="">Cualquiera</option> <option value="Gasolina">Gasolina</option> <option value="Diesel">Diesel</option> <option value="Eléctrico">Eléctrico</option> <option value="Híbrido">Híbrido</option> </select> </div> <!-- Ciudad --> <div> <label class="block text-xs font-bold text-gray-600 mb-1.5 uppercase tracking-wide">Ciudad</label> <select id="filtroCiudad" class="w-full px-3 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:outline-none bg-gray-50 text-gray-800 font-medium text-sm"> <option value="">Cualquier Ciudad</option> </select> </div> </div> <!-- Botones --> <div class="p-5 border-t border-gray-100 bg-white space-y-3"> <button onclick="cerrarMenuFiltros()" class="w-full py-3 px-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl transition shadow text-center cursor-pointer">
Aplicar Filtros
</button> <button onclick="limpiarFiltros(); cerrarMenuFiltros();" class="w-full py-3 px-4 bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold rounded-xl transition text-center cursor-pointer">
Limpiar Todo
</button> </div> </div> </div> <script>
  // Correlación año ↔ modelo
  document.addEventListener('DOMContentLoaded', () => {
    const selModelo = document.getElementById('filtroModelo');
    const selAnio = document.getElementById('filtroAnio');

    function repoblarModelosPorAnio(anioSel) {
      if (!window.__filtroData) return;
      const modelos = anioSel
        ? (window.__filtroData.modelosPorAnio[anioSel] || [])
        : window.__filtroData.todosModelos;
      const cur = selModelo.value;
      selModelo.innerHTML = '<option value="">Cualquier Modelo</option>';
      [...modelos].sort().forEach(m => {
        selModelo.insertAdjacentHTML('beforeend', \`<option value="\${m}"\${m === cur ? ' selected' : ''}>\${m}</option>\`);
      });
    }

    function repoblarAniosPorModelo(modeloSel) {
      if (!window.__filtroData) return;
      const anios = modeloSel
        ? (window.__filtroData.aniosPorModelo[modeloSel] || [])
        : window.__filtroData.todosAnios;
      const cur = selAnio.value;
      selAnio.innerHTML = '<option value="">Cualquier Año</option>';
      [...anios].sort((a, b) => b - a).forEach(a => {
        selAnio.insertAdjacentHTML('beforeend', \`<option value="\${a}"\${a === cur ? ' selected' : ''}>\${a}</option>\`);
      });
    }

    selModelo?.addEventListener('change', function () {
      repoblarAniosPorModelo(this.value);
      if (typeof aplicarFiltros === 'function') aplicarFiltros();
    });

    selAnio?.addEventListener('change', function () {
      repoblarModelosPorAnio(this.value);
      if (typeof aplicarFiltros === 'function') aplicarFiltros();
    });

    // Otros filtros aplican directamente
    ['filtroPrecioMin','filtroPrecioMax','filtroKmMin','filtroKmMax','filtroTransmision','filtroCombustible','filtroCiudad'].forEach(id => {
      document.getElementById(id)?.addEventListener('change', () => {
        if (typeof aplicarFiltros === 'function') aplicarFiltros();
      });
    });
  });
<\/script>`], ["", `<div id="modalFiltros" class="fixed inset-0 z-[100] hidden backdrop-blur-sm bg-black/60 transition-all duration-300 opacity-0 pointer-events-none"> <div id="sidebarFiltros" class="absolute inset-y-0 right-0 max-w-xs w-full bg-white shadow-2xl transform translate-x-full transition-transform duration-300 flex flex-col pointer-events-auto"> <!-- Header --> <div class="flex items-center justify-between px-6 py-4 border-b border-gray-100"> <h2 class="text-lg font-bold text-gray-900 flex items-center gap-2"> <i data-lucide="sliders-horizontal" class="w-5 h-5 text-red-600"></i>
Filtros
</h2> <button onclick="cerrarMenuFiltros()" class="text-gray-400 hover:text-red-500 transition p-1 cursor-pointer"> <i data-lucide="x" class="w-6 h-6"></i> </button> </div> <!-- Campos --> <div class="p-5 overflow-y-auto flex-grow space-y-5"> <!-- Modelo --> <div> <label class="block text-xs font-bold text-gray-600 mb-1.5 uppercase tracking-wide">Modelo</label> <select id="filtroModelo" class="w-full px-3 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:outline-none bg-gray-50 text-gray-800 font-medium text-sm"> <option value="">Cualquier Modelo</option> </select> </div> <!-- Año --> <div> <label class="block text-xs font-bold text-gray-600 mb-1.5 uppercase tracking-wide">Año</label> <select id="filtroAnio" class="w-full px-3 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:outline-none bg-gray-50 text-gray-800 font-medium text-sm"> <option value="">Cualquier Año</option> </select> </div> <!-- Precio --> <div> <label class="block text-xs font-bold text-gray-600 mb-1.5 uppercase tracking-wide">Precio</label> <div class="flex gap-2 items-center"> <input type="number" id="filtroPrecioMin" placeholder="Mín" step="1000000" class="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-1 focus:ring-red-500 focus:outline-none bg-gray-50 text-gray-800 text-sm"> <span class="text-gray-400 text-sm">–</span> <input type="number" id="filtroPrecioMax" placeholder="Máx" step="1000000" class="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-1 focus:ring-red-500 focus:outline-none bg-gray-50 text-gray-800 text-sm"> </div> </div> <!-- Kilometraje --> <div> <label class="block text-xs font-bold text-gray-600 mb-1.5 uppercase tracking-wide">Kilometraje</label> <div class="flex gap-2 items-center"> <input type="number" id="filtroKmMin" placeholder="Mín" step="10000" class="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-1 focus:ring-red-500 focus:outline-none bg-gray-50 text-gray-800 text-sm"> <span class="text-gray-400 text-sm">–</span> <input type="number" id="filtroKmMax" placeholder="Máx" step="10000" class="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-1 focus:ring-red-500 focus:outline-none bg-gray-50 text-gray-800 text-sm"> </div> </div> <!-- Transmisión --> <div> <label class="block text-xs font-bold text-gray-600 mb-1.5 uppercase tracking-wide">Transmisión</label> <select id="filtroTransmision" class="w-full px-3 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:outline-none bg-gray-50 text-gray-800 font-medium text-sm"> <option value="">Cualquiera</option> <option value="Mecánica">Mecánica</option> <option value="Automática">Automática</option> </select> </div> <!-- Combustible --> <div> <label class="block text-xs font-bold text-gray-600 mb-1.5 uppercase tracking-wide">Combustible</label> <select id="filtroCombustible" class="w-full px-3 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:outline-none bg-gray-50 text-gray-800 font-medium text-sm"> <option value="">Cualquiera</option> <option value="Gasolina">Gasolina</option> <option value="Diesel">Diesel</option> <option value="Eléctrico">Eléctrico</option> <option value="Híbrido">Híbrido</option> </select> </div> <!-- Ciudad --> <div> <label class="block text-xs font-bold text-gray-600 mb-1.5 uppercase tracking-wide">Ciudad</label> <select id="filtroCiudad" class="w-full px-3 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:outline-none bg-gray-50 text-gray-800 font-medium text-sm"> <option value="">Cualquier Ciudad</option> </select> </div> </div> <!-- Botones --> <div class="p-5 border-t border-gray-100 bg-white space-y-3"> <button onclick="cerrarMenuFiltros()" class="w-full py-3 px-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl transition shadow text-center cursor-pointer">
Aplicar Filtros
</button> <button onclick="limpiarFiltros(); cerrarMenuFiltros();" class="w-full py-3 px-4 bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold rounded-xl transition text-center cursor-pointer">
Limpiar Todo
</button> </div> </div> </div> <script>
  // Correlación año ↔ modelo
  document.addEventListener('DOMContentLoaded', () => {
    const selModelo = document.getElementById('filtroModelo');
    const selAnio = document.getElementById('filtroAnio');

    function repoblarModelosPorAnio(anioSel) {
      if (!window.__filtroData) return;
      const modelos = anioSel
        ? (window.__filtroData.modelosPorAnio[anioSel] || [])
        : window.__filtroData.todosModelos;
      const cur = selModelo.value;
      selModelo.innerHTML = '<option value="">Cualquier Modelo</option>';
      [...modelos].sort().forEach(m => {
        selModelo.insertAdjacentHTML('beforeend', \\\`<option value="\\\${m}"\\\${m === cur ? ' selected' : ''}>\\\${m}</option>\\\`);
      });
    }

    function repoblarAniosPorModelo(modeloSel) {
      if (!window.__filtroData) return;
      const anios = modeloSel
        ? (window.__filtroData.aniosPorModelo[modeloSel] || [])
        : window.__filtroData.todosAnios;
      const cur = selAnio.value;
      selAnio.innerHTML = '<option value="">Cualquier Año</option>';
      [...anios].sort((a, b) => b - a).forEach(a => {
        selAnio.insertAdjacentHTML('beforeend', \\\`<option value="\\\${a}"\\\${a === cur ? ' selected' : ''}>\\\${a}</option>\\\`);
      });
    }

    selModelo?.addEventListener('change', function () {
      repoblarAniosPorModelo(this.value);
      if (typeof aplicarFiltros === 'function') aplicarFiltros();
    });

    selAnio?.addEventListener('change', function () {
      repoblarModelosPorAnio(this.value);
      if (typeof aplicarFiltros === 'function') aplicarFiltros();
    });

    // Otros filtros aplican directamente
    ['filtroPrecioMin','filtroPrecioMax','filtroKmMin','filtroKmMax','filtroTransmision','filtroCombustible','filtroCiudad'].forEach(id => {
      document.getElementById(id)?.addEventListener('change', () => {
        if (typeof aplicarFiltros === 'function') aplicarFiltros();
      });
    });
  });
<\/script>`])), maybeRenderHead());
}, "C:/Users/John Paez/Downloads/autosya/toyotausados-astro/src/components/FiltrosSidebar.astro", void 0);

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Hero;
  return renderTemplate`<!-- Importar fuente Montserrat de Google Fonts (Astro moverá esto automáticamente al <head>) --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,800;0,900&display=swap" rel="stylesheet"><!-- Contenedor Principal -->${maybeRenderHead()}<div class="flex flex-col items-center justify-center w-full px-4 md:px-0" style="margin-top: 16px; margin-bottom: 0;"> <!-- SECCIÓN 1: Fila de Botones Romboidales (Ahora son 3) --> <div class="flex flex-col md:flex-row gap-[5px] items-center justify-center w-full max-w-5xl"> <!-- NUEVO BOTÓN 1: Fondo Amarillo --> <div class="opacity-0 animate-slide-left w-full md:w-auto"> <button class="group w-full bg-[#FFCC00] text-black px-4 md:px-6 py-[5px] transform -skew-x-12 shadow-md shadow-yellow-500/40 hover:bg-[#E6B800] hover:shadow-lg hover:shadow-yellow-600/50 hover:-translate-y-[2px] transition-all duration-300 ease-in-out cursor-pointer focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-50 flex justify-center"> <span class="inline-block transform skew-x-12 font-['Montserrat'] font-black uppercase tracking-widest text-[11px] sm:text-sm md:text-base whitespace-nowrap">
Compramos tu auto
</span> </button> </div> <!-- BOTÓN 2: Fondo Negro (Texto actualizado) --> <div class="opacity-0 animate-slide-left w-full md:w-auto" style="animation-delay: 0.2s;"> <button class="group w-full bg-black text-white px-4 md:px-6 py-[5px] transform -skew-x-12 shadow-md shadow-gray-400 hover:bg-gray-800 hover:shadow-lg hover:shadow-gray-500 hover:-translate-y-[2px] transition-all duration-300 ease-in-out cursor-pointer focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 flex justify-center"> <span class="inline-block transform skew-x-12 font-['Montserrat'] font-black uppercase tracking-widest text-[11px] sm:text-sm md:text-base whitespace-nowrap">
Venta - Consignación
</span> </button> </div> <!-- BOTÓN 3: Fondo Rojo --> <div class="opacity-0 animate-slide-right w-full md:w-auto" style="animation-delay: 0.4s;"> <button class="group w-full bg-[#FF0000] text-white px-4 md:px-6 py-[5px] transform -skew-x-12 shadow-md shadow-[#FF0000]/50 hover:bg-[#CC0000] hover:shadow-lg hover:shadow-[#FF0000]/50 hover:-translate-y-[2px] transition-all duration-300 ease-in-out cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#FF0000] focus:ring-opacity-50 flex justify-center"> <span class="inline-block transform skew-x-12 font-['Montserrat'] font-black uppercase tracking-widest text-[11px] sm:text-sm md:text-base whitespace-nowrap">
Permuta - Financiación
</span> </button> </div> </div> <!-- CONTENEDOR ANIMADO 3: Enlace "Publica Gratis" --> <!-- Solo visible en móviles (md:hidden) --> <div class="opacity-0 animate-slide-up mt-[10px] md:hidden text-center w-full" style="animation-delay: 0.6s;"> <a href="/add" class="inline-block bg-[#FF0000] text-white font-['Montserrat'] font-black text-sm py-[5px] px-[20px] rounded-md shadow-md shadow-gray-300 hover:bg-[#CC0000] hover:shadow-lg hover:-translate-y-[1px] transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#FF0000] focus:ring-opacity-50">
Publica Gratis
</a> </div> </div>`;
}, "C:/Users/John Paez/Downloads/autosya/toyotausados-astro/src/components/Hero.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const prerender = false;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  let firebaseData = [];
  try {
    const snapshot = await getDocs(collection(db, "Toyota"));
    firebaseData = snapshot.docs.map((doc) => ({ firebaseId: doc.id, ...doc.data() }));
  } catch (e) {
    console.error("Error al cargar data de Firebase en SSR:", e);
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Catálogo de Vehículos Toyota Usados" }, { "default": async ($$result2) => renderTemplate(_a || (_a = __template([" ", " ", " ", '<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-8" id="inventario"> <div class="bg-white p-2 rounded-xl shadow-sm border border-gray-200 mb-8 flex"> <div class="flex-1 relative flex items-center"> <i data-lucide="search" class="absolute left-4 text-gray-400 w-5 h-5"></i> <input type="text" id="buscador" placeholder="Buscar por palabra clave..." class="w-full pl-12 pr-12 py-3 bg-transparent text-gray-800 placeholder-gray-400 focus:outline-none text-lg"> <button onclick="abrirMenuFiltros()" class="absolute right-2 p-2 bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-lg transition text-red-600" title="Ver Filtros"> <i data-lucide="sliders-horizontal" class="w-5 h-5"></i> </button> </div> </div> <div id="loading" class="flex flex-col items-center justify-center py-20"> <i data-lucide="loader-2" class="w-10 h-10 text-red-600 animate-spin mb-4"></i> <p class="text-gray-500 font-medium">Cargando el inventario disponible...</p> </div> <div id="catalogoGrid" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 hidden"></div> <!-- Spinner para Cargar Más --> <div id="loadingMas" class="hidden flex-col items-center justify-center py-10 mt-4"> <i data-lucide="loader-2" class="w-8 h-8 text-red-600 animate-spin mb-2"></i> <p class="text-gray-500 font-medium text-sm">Cargando más vehículos...</p> </div> <div id="sinResultados" class="hidden text-center py-20"> <p class="text-xl text-gray-500 font-medium">No encontramos vehículos con esos filtros.</p> <button onclick="limpiarFiltros()" class="mt-4 text-red-600 hover:underline">Ver todos los vehículos</button> </div> </div> ', '  <script id="firebase-data" type="application/json">', `<\/script> <script>

    let inventarioGlobal = [];
    let inventarioFiltradoGlobal = [];
    let cargadosActuales = 0;
    const CARGAR_POR_PAGINA = 15;
    let cargandoMas = false;

    const formatearDinero = (cantidad) => {
      return new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', maximumFractionDigits: 0 }).format(cantidad);
    };

    const formatearKm = (km) => {
      return new Intl.NumberFormat('es-CO').format(km) + ' km';
    };

    const slugify = (text) => {
      if(!text) return 'auto';
      return text.toString().toLowerCase()
        .trim()
        .normalize('NFD') 
        .replace(/[\\u0300-\\u036f]/g, "") 
        .replace(/\\s+/g, '-')           
        .replace(/[^\\w\\-]+/g, '')       
        .replace(/\\-\\-+/g, '-');        
    };

    function cargarCatalogo() {
      try {
        const rawJsonStr = document.getElementById('firebase-data').textContent;
        const results = rawJsonStr ? JSON.parse(rawJsonStr) : [];
        if (!results || results.length === 0) {
          document.getElementById('loading').innerHTML = '<p class="text-red-500 font-bold">No se encontraron datos en Firestore o hubo un error.</p>';
          return;
        }

        inventarioGlobal = results.filter(carro => carro.ID && carro.Title && carro['Categorías'] && carro['Categorías'].toLowerCase().includes('toyota'));
        llenarFiltros(inventarioGlobal);
        document.getElementById('loading').classList.add('hidden');
        document.getElementById('catalogoGrid').classList.remove('hidden');
        aplicarFiltros();
      } catch (err) {
        console.error(err);
        document.getElementById('loading').innerHTML = '<p class="text-red-500 font-bold">Error al procesar el inventario desde el servidor.</p>';
      }
    }

    function llenarFiltros(datos) {
      const aniosPorModelo = {};
      const modelosPorAnio = {};
      const todosModelos = new Set();
      const todosAnios = new Set();
      const ciudades = new Set();

      datos.forEach(carro => {
        const anio = carro.a_o ? carro.a_o.trim() : null;
        let modelo = null;
        if (carro['Categorías']) {
          const partes = carro['Categorías'].split('>');
          if (partes.length > 1) modelo = partes[1].trim();
        }
        if (modelo) todosModelos.add(modelo);
        if (anio) todosAnios.add(anio);
        if (carro.ciudad_de_la_placa) ciudades.add(carro.ciudad_de_la_placa.trim());

        if (modelo && anio) {
          if (!aniosPorModelo[modelo]) aniosPorModelo[modelo] = new Set();
          aniosPorModelo[modelo].add(anio);
          if (!modelosPorAnio[anio]) modelosPorAnio[anio] = new Set();
          modelosPorAnio[anio].add(modelo);
        }
      });

      // Convertir Sets a Arrays para serialización
      const aniosPorModeloArr = {};
      Object.keys(aniosPorModelo).forEach(k => { aniosPorModeloArr[k] = [...aniosPorModelo[k]]; });
      const modelosPorAnioArr = {};
      Object.keys(modelosPorAnio).forEach(k => { modelosPorAnioArr[k] = [...modelosPorAnio[k]]; });

      // Exponer datos de correlación globalmente
      window.__filtroData = {
        aniosPorModelo: aniosPorModeloArr,
        modelosPorAnio: modelosPorAnioArr,
        todosModelos: [...todosModelos],
        todosAnios: [...todosAnios],
      };

      // Llenar Modelo
      const selectModelo = document.getElementById('filtroModelo');
      [...todosModelos].sort().forEach(modelo => {
        selectModelo.insertAdjacentHTML('beforeend', \`<option value="\${modelo}">\${modelo}</option>\`);
      });

      // Llenar Año
      const selectAnio = document.getElementById('filtroAnio');
      [...todosAnios].sort((a, b) => b - a).forEach(anio => {
        selectAnio.insertAdjacentHTML('beforeend', \`<option value="\${anio}">\${anio}</option>\`);
      });

      // Llenar Ciudad
      const selectCiudad = document.getElementById('filtroCiudad');
      if (selectCiudad) {
        [...ciudades].sort().forEach(c => {
          selectCiudad.insertAdjacentHTML('beforeend', \`<option value="\${c}">\${c}</option>\`);
        });
      }
    }

    function cargarMasVehiculos() {
      if (cargandoMas || cargadosActuales >= inventarioFiltradoGlobal.length) return;
      cargandoMas = true;

      const grid = document.getElementById('catalogoGrid');
      const loadingMas = document.getElementById('loadingMas');

      loadingMas.classList.remove('hidden');
      loadingMas.classList.add('flex');

      setTimeout(() => {
        const siguientesV = inventarioFiltradoGlobal.slice(cargadosActuales, cargadosActuales + CARGAR_POR_PAGINA);

        siguientesV.forEach(carro => {
          let urlImagen = 'https://via.placeholder.com/400x300?text=Sin+Imagen';
          if (carro.Images) {
            const idsDrive = carro.Images.split('|');
            if (idsDrive.length > 0 && idsDrive[0].trim() !== '') {
              urlImagen = \`https://drive.google.com/thumbnail?id=\${idsDrive[0].trim()}&sz=w800\`;
            }
          }

          let marca = 'Vehículo';
          if (carro['Categorías']) {
            marca = carro['Categorías'].split('>')[0].trim();
          }

          let botonEditarHTML = '';
          const userEmail = typeof localStorage !== 'undefined' ? localStorage.getItem('userEmail') : null;
          const isAdmin = typeof localStorage !== 'undefined' ? localStorage.getItem('isAdmin') === 'true' : false;
          
          if (isAdmin || (userEmail && carro.usuario === userEmail)) {
             botonEditarHTML = \`
               <a href="/edit?id=\${carro.ID}" class="px-3 bg-amber-100 hover:bg-amber-200 text-amber-800 rounded flex items-center justify-center transition" title="Editar Vehículo">
                 <i data-lucide="pencil" class="w-4 h-4"></i>
               </a>
             \`;
          }

          const tarjeta = \`
            <div class="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition flex flex-col fade-in">
              <a href="/\${carro.ID}/\${slugify(carro.Title)}" class="relative aspect-[4/3] bg-gray-100 block group overflow-hidden">
                <img src="\${urlImagen}" alt="\${carro.Title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" referrerpolicy="no-referrer">
                <div class="absolute top-2 left-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
                  \${marca}
                </div>
              </a>
              <div class="p-5 flex flex-col flex-grow">
                <h2 class="text-lg font-bold text-gray-900 leading-tight mb-2 line-clamp-2">\${carro.Title}</h2>
                <div class="text-2xl font-extrabold text-red-700 mb-4">\${formatearDinero(carro.Price || 0)}</div>
                
                <div class="grid grid-cols-2 gap-y-2 text-sm text-gray-600 mb-4 flex-grow">
                  <div class="flex items-center gap-1.5"><i data-lucide="calendar" class="w-4 h-4 text-gray-400"></i> \${carro.a_o || 'N/A'}</div>
                  <div class="flex items-center gap-1.5"><i data-lucide="gauge" class="w-4 h-4 text-gray-400"></i> \${carro.Mileage ? formatearKm(carro.Mileage) : '0 km'}</div>
                  <div class="flex items-center gap-1.5"><i data-lucide="settings-2" class="w-4 h-4 text-gray-400"></i> \${carro.Transmission || 'N/A'}</div>
                  <div class="flex items-center gap-1.5"><i data-lucide="map-pin" class="w-4 h-4 text-gray-400"></i> <span class="truncate">\${carro.ciudad_de_la_placa || 'Colombia'}</span></div>
                </div>
                
                <div class="mt-auto pt-4 border-t border-gray-100 flex gap-2">
                   <a href="/\${carro.ID}/\${slugify(carro.Title)}" class="flex-1 text-center bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-2 rounded transition text-sm flex items-center justify-center">Ver Detalles</a>
                   \${botonEditarHTML}
                </div>
              </div>
            </div>
          \`;
          grid.insertAdjacentHTML('beforeend', tarjeta);
        });

        if (window.lucide) {
          window.lucide.createIcons();
        }
        
        cargadosActuales += siguientesV.length;
        cargandoMas = false;

        if (cargadosActuales >= inventarioFiltradoGlobal.length) {
          loadingMas.classList.add('hidden');
          loadingMas.classList.remove('flex');
        } else {
          loadingMas.classList.remove('hidden');
          loadingMas.classList.add('flex');
        }
      }, 600);
    }

    function aplicarFiltros() {
      const texto = document.getElementById('buscador').value.toLowerCase();
      const modelo = document.getElementById('filtroModelo').value;
      const anio = document.getElementById('filtroAnio').value;
      const precioMin = parseFloat(document.getElementById('filtroPrecioMin')?.value) || 0;
      const precioMax = parseFloat(document.getElementById('filtroPrecioMax')?.value) || Infinity;
      const kmMin = parseFloat(document.getElementById('filtroKmMin')?.value) || 0;
      const kmMax = parseFloat(document.getElementById('filtroKmMax')?.value) || Infinity;
      const transmision = document.getElementById('filtroTransmision')?.value || '';
      const combustible = document.getElementById('filtroCombustible')?.value || '';
      const ciudad = document.getElementById('filtroCiudad')?.value || '';

      inventarioFiltradoGlobal = inventarioGlobal.filter(carro => {
        const cumpleTexto = carro.Title.toLowerCase().includes(texto) || (carro['Categorías'] && carro['Categorías'].toLowerCase().includes(texto));
        const cumpleAnio = anio === '' || carro.a_o === anio;
        let cumpleModelo = true;
        if (modelo !== '') cumpleModelo = carro['Categorías'] && carro['Categorías'].includes('>' + modelo);
        const precio = Number(carro.Price) || 0;
        const cumplePrecio = precio >= precioMin && precio <= precioMax;
        const km = Number(carro.Mileage) || 0;
        const cumpleKm = km >= kmMin && km <= kmMax;
        const cumpleTransmision = transmision === '' || (carro.Transmission || '').toLowerCase().includes(transmision.toLowerCase());
        const cumbleCombustible = combustible === '' || (carro['Fuel '] || carro['Fuel'] || '').toLowerCase().includes(combustible.toLowerCase());
        const cumpleCiudad = ciudad === '' || (carro.ciudad_de_la_placa || '').toLowerCase() === ciudad.toLowerCase();
        return cumpleTexto && cumpleAnio && cumpleModelo && cumplePrecio && cumpleKm && cumpleTransmision && cumbleCombustible && cumpleCiudad;
      });

      inventarioFiltradoGlobal = [...inventarioFiltradoGlobal].reverse();

      const grid = document.getElementById('catalogoGrid');
      const sinResultados = document.getElementById('sinResultados');
      const loadingMas = document.getElementById('loadingMas');

      grid.innerHTML = '';
      cargadosActuales = 0;

      if (inventarioFiltradoGlobal.length === 0) {
        grid.classList.add('hidden');
        sinResultados.classList.remove('hidden');
        loadingMas.classList.add('hidden');
        loadingMas.classList.remove('flex');
        return;
      }

      grid.classList.remove('hidden');
      sinResultados.classList.add('hidden');
      cargarMasVehiculos();
    }

    function limpiarFiltros() {
      document.getElementById('buscador').value = '';
      document.getElementById('filtroAnio').value = '';
      document.getElementById('filtroModelo').value = '';
      const ids = ['filtroPrecioMin','filtroPrecioMax','filtroKmMin','filtroKmMax','filtroTransmision','filtroCombustible','filtroCiudad'];
      ids.forEach(id => { const el = document.getElementById(id); if(el) el.value = ''; });
      aplicarFiltros();
    }

    document.getElementById('buscador').addEventListener('input', aplicarFiltros);
    document.getElementById('filtroAnio').addEventListener('change', aplicarFiltros);
    document.getElementById('filtroModelo').addEventListener('change', aplicarFiltros);

    // Funciones filtros Sidebar
    window.abrirMenuFiltros = function() {
      const modal = document.getElementById('modalFiltros');
      const sidebar = document.getElementById('sidebarFiltros');
      modal.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
      setTimeout(() => {
        modal.classList.remove('opacity-0', 'pointer-events-none');
        sidebar.classList.remove('translate-x-full');
      }, 10);
    }

    window.cerrarMenuFiltros = function() {
      const modal = document.getElementById('modalFiltros');
      const sidebar = document.getElementById('sidebarFiltros');
      modal.classList.add('opacity-0', 'pointer-events-none');
      sidebar.classList.add('translate-x-full');

      document.body.style.overflow = '';
      
      setTimeout(() => {
        modal.classList.add('hidden');
      }, 300);
    }

    document.getElementById('modalFiltros').addEventListener('click', function (e) {
      if (e.target === this) window.cerrarMenuFiltros();
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        if (!document.getElementById('modalFiltros').classList.contains('hidden')) window.cerrarMenuFiltros();
      }
    });

    window.addEventListener('scroll', () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      if (scrollTop + clientHeight >= scrollHeight - 400) {
        cargarMasVehiculos();
      }
    });

    cargarCatalogo();
  <\/script> `], [" ", " ", " ", '<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-8" id="inventario"> <div class="bg-white p-2 rounded-xl shadow-sm border border-gray-200 mb-8 flex"> <div class="flex-1 relative flex items-center"> <i data-lucide="search" class="absolute left-4 text-gray-400 w-5 h-5"></i> <input type="text" id="buscador" placeholder="Buscar por palabra clave..." class="w-full pl-12 pr-12 py-3 bg-transparent text-gray-800 placeholder-gray-400 focus:outline-none text-lg"> <button onclick="abrirMenuFiltros()" class="absolute right-2 p-2 bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-lg transition text-red-600" title="Ver Filtros"> <i data-lucide="sliders-horizontal" class="w-5 h-5"></i> </button> </div> </div> <div id="loading" class="flex flex-col items-center justify-center py-20"> <i data-lucide="loader-2" class="w-10 h-10 text-red-600 animate-spin mb-4"></i> <p class="text-gray-500 font-medium">Cargando el inventario disponible...</p> </div> <div id="catalogoGrid" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 hidden"></div> <!-- Spinner para Cargar Más --> <div id="loadingMas" class="hidden flex-col items-center justify-center py-10 mt-4"> <i data-lucide="loader-2" class="w-8 h-8 text-red-600 animate-spin mb-2"></i> <p class="text-gray-500 font-medium text-sm">Cargando más vehículos...</p> </div> <div id="sinResultados" class="hidden text-center py-20"> <p class="text-xl text-gray-500 font-medium">No encontramos vehículos con esos filtros.</p> <button onclick="limpiarFiltros()" class="mt-4 text-red-600 hover:underline">Ver todos los vehículos</button> </div> </div> ', '  <script id="firebase-data" type="application/json">', `<\/script> <script>

    let inventarioGlobal = [];
    let inventarioFiltradoGlobal = [];
    let cargadosActuales = 0;
    const CARGAR_POR_PAGINA = 15;
    let cargandoMas = false;

    const formatearDinero = (cantidad) => {
      return new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', maximumFractionDigits: 0 }).format(cantidad);
    };

    const formatearKm = (km) => {
      return new Intl.NumberFormat('es-CO').format(km) + ' km';
    };

    const slugify = (text) => {
      if(!text) return 'auto';
      return text.toString().toLowerCase()
        .trim()
        .normalize('NFD') 
        .replace(/[\\\\u0300-\\\\u036f]/g, "") 
        .replace(/\\\\s+/g, '-')           
        .replace(/[^\\\\w\\\\-]+/g, '')       
        .replace(/\\\\-\\\\-+/g, '-');        
    };

    function cargarCatalogo() {
      try {
        const rawJsonStr = document.getElementById('firebase-data').textContent;
        const results = rawJsonStr ? JSON.parse(rawJsonStr) : [];
        if (!results || results.length === 0) {
          document.getElementById('loading').innerHTML = '<p class="text-red-500 font-bold">No se encontraron datos en Firestore o hubo un error.</p>';
          return;
        }

        inventarioGlobal = results.filter(carro => carro.ID && carro.Title && carro['Categorías'] && carro['Categorías'].toLowerCase().includes('toyota'));
        llenarFiltros(inventarioGlobal);
        document.getElementById('loading').classList.add('hidden');
        document.getElementById('catalogoGrid').classList.remove('hidden');
        aplicarFiltros();
      } catch (err) {
        console.error(err);
        document.getElementById('loading').innerHTML = '<p class="text-red-500 font-bold">Error al procesar el inventario desde el servidor.</p>';
      }
    }

    function llenarFiltros(datos) {
      const aniosPorModelo = {};
      const modelosPorAnio = {};
      const todosModelos = new Set();
      const todosAnios = new Set();
      const ciudades = new Set();

      datos.forEach(carro => {
        const anio = carro.a_o ? carro.a_o.trim() : null;
        let modelo = null;
        if (carro['Categorías']) {
          const partes = carro['Categorías'].split('>');
          if (partes.length > 1) modelo = partes[1].trim();
        }
        if (modelo) todosModelos.add(modelo);
        if (anio) todosAnios.add(anio);
        if (carro.ciudad_de_la_placa) ciudades.add(carro.ciudad_de_la_placa.trim());

        if (modelo && anio) {
          if (!aniosPorModelo[modelo]) aniosPorModelo[modelo] = new Set();
          aniosPorModelo[modelo].add(anio);
          if (!modelosPorAnio[anio]) modelosPorAnio[anio] = new Set();
          modelosPorAnio[anio].add(modelo);
        }
      });

      // Convertir Sets a Arrays para serialización
      const aniosPorModeloArr = {};
      Object.keys(aniosPorModelo).forEach(k => { aniosPorModeloArr[k] = [...aniosPorModelo[k]]; });
      const modelosPorAnioArr = {};
      Object.keys(modelosPorAnio).forEach(k => { modelosPorAnioArr[k] = [...modelosPorAnio[k]]; });

      // Exponer datos de correlación globalmente
      window.__filtroData = {
        aniosPorModelo: aniosPorModeloArr,
        modelosPorAnio: modelosPorAnioArr,
        todosModelos: [...todosModelos],
        todosAnios: [...todosAnios],
      };

      // Llenar Modelo
      const selectModelo = document.getElementById('filtroModelo');
      [...todosModelos].sort().forEach(modelo => {
        selectModelo.insertAdjacentHTML('beforeend', \\\`<option value="\\\${modelo}">\\\${modelo}</option>\\\`);
      });

      // Llenar Año
      const selectAnio = document.getElementById('filtroAnio');
      [...todosAnios].sort((a, b) => b - a).forEach(anio => {
        selectAnio.insertAdjacentHTML('beforeend', \\\`<option value="\\\${anio}">\\\${anio}</option>\\\`);
      });

      // Llenar Ciudad
      const selectCiudad = document.getElementById('filtroCiudad');
      if (selectCiudad) {
        [...ciudades].sort().forEach(c => {
          selectCiudad.insertAdjacentHTML('beforeend', \\\`<option value="\\\${c}">\\\${c}</option>\\\`);
        });
      }
    }

    function cargarMasVehiculos() {
      if (cargandoMas || cargadosActuales >= inventarioFiltradoGlobal.length) return;
      cargandoMas = true;

      const grid = document.getElementById('catalogoGrid');
      const loadingMas = document.getElementById('loadingMas');

      loadingMas.classList.remove('hidden');
      loadingMas.classList.add('flex');

      setTimeout(() => {
        const siguientesV = inventarioFiltradoGlobal.slice(cargadosActuales, cargadosActuales + CARGAR_POR_PAGINA);

        siguientesV.forEach(carro => {
          let urlImagen = 'https://via.placeholder.com/400x300?text=Sin+Imagen';
          if (carro.Images) {
            const idsDrive = carro.Images.split('|');
            if (idsDrive.length > 0 && idsDrive[0].trim() !== '') {
              urlImagen = \\\`https://drive.google.com/thumbnail?id=\\\${idsDrive[0].trim()}&sz=w800\\\`;
            }
          }

          let marca = 'Vehículo';
          if (carro['Categorías']) {
            marca = carro['Categorías'].split('>')[0].trim();
          }

          let botonEditarHTML = '';
          const userEmail = typeof localStorage !== 'undefined' ? localStorage.getItem('userEmail') : null;
          const isAdmin = typeof localStorage !== 'undefined' ? localStorage.getItem('isAdmin') === 'true' : false;
          
          if (isAdmin || (userEmail && carro.usuario === userEmail)) {
             botonEditarHTML = \\\`
               <a href="/edit?id=\\\${carro.ID}" class="px-3 bg-amber-100 hover:bg-amber-200 text-amber-800 rounded flex items-center justify-center transition" title="Editar Vehículo">
                 <i data-lucide="pencil" class="w-4 h-4"></i>
               </a>
             \\\`;
          }

          const tarjeta = \\\`
            <div class="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition flex flex-col fade-in">
              <a href="/\\\${carro.ID}/\\\${slugify(carro.Title)}" class="relative aspect-[4/3] bg-gray-100 block group overflow-hidden">
                <img src="\\\${urlImagen}" alt="\\\${carro.Title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" referrerpolicy="no-referrer">
                <div class="absolute top-2 left-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
                  \\\${marca}
                </div>
              </a>
              <div class="p-5 flex flex-col flex-grow">
                <h2 class="text-lg font-bold text-gray-900 leading-tight mb-2 line-clamp-2">\\\${carro.Title}</h2>
                <div class="text-2xl font-extrabold text-red-700 mb-4">\\\${formatearDinero(carro.Price || 0)}</div>
                
                <div class="grid grid-cols-2 gap-y-2 text-sm text-gray-600 mb-4 flex-grow">
                  <div class="flex items-center gap-1.5"><i data-lucide="calendar" class="w-4 h-4 text-gray-400"></i> \\\${carro.a_o || 'N/A'}</div>
                  <div class="flex items-center gap-1.5"><i data-lucide="gauge" class="w-4 h-4 text-gray-400"></i> \\\${carro.Mileage ? formatearKm(carro.Mileage) : '0 km'}</div>
                  <div class="flex items-center gap-1.5"><i data-lucide="settings-2" class="w-4 h-4 text-gray-400"></i> \\\${carro.Transmission || 'N/A'}</div>
                  <div class="flex items-center gap-1.5"><i data-lucide="map-pin" class="w-4 h-4 text-gray-400"></i> <span class="truncate">\\\${carro.ciudad_de_la_placa || 'Colombia'}</span></div>
                </div>
                
                <div class="mt-auto pt-4 border-t border-gray-100 flex gap-2">
                   <a href="/\\\${carro.ID}/\\\${slugify(carro.Title)}" class="flex-1 text-center bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-2 rounded transition text-sm flex items-center justify-center">Ver Detalles</a>
                   \\\${botonEditarHTML}
                </div>
              </div>
            </div>
          \\\`;
          grid.insertAdjacentHTML('beforeend', tarjeta);
        });

        if (window.lucide) {
          window.lucide.createIcons();
        }
        
        cargadosActuales += siguientesV.length;
        cargandoMas = false;

        if (cargadosActuales >= inventarioFiltradoGlobal.length) {
          loadingMas.classList.add('hidden');
          loadingMas.classList.remove('flex');
        } else {
          loadingMas.classList.remove('hidden');
          loadingMas.classList.add('flex');
        }
      }, 600);
    }

    function aplicarFiltros() {
      const texto = document.getElementById('buscador').value.toLowerCase();
      const modelo = document.getElementById('filtroModelo').value;
      const anio = document.getElementById('filtroAnio').value;
      const precioMin = parseFloat(document.getElementById('filtroPrecioMin')?.value) || 0;
      const precioMax = parseFloat(document.getElementById('filtroPrecioMax')?.value) || Infinity;
      const kmMin = parseFloat(document.getElementById('filtroKmMin')?.value) || 0;
      const kmMax = parseFloat(document.getElementById('filtroKmMax')?.value) || Infinity;
      const transmision = document.getElementById('filtroTransmision')?.value || '';
      const combustible = document.getElementById('filtroCombustible')?.value || '';
      const ciudad = document.getElementById('filtroCiudad')?.value || '';

      inventarioFiltradoGlobal = inventarioGlobal.filter(carro => {
        const cumpleTexto = carro.Title.toLowerCase().includes(texto) || (carro['Categorías'] && carro['Categorías'].toLowerCase().includes(texto));
        const cumpleAnio = anio === '' || carro.a_o === anio;
        let cumpleModelo = true;
        if (modelo !== '') cumpleModelo = carro['Categorías'] && carro['Categorías'].includes('>' + modelo);
        const precio = Number(carro.Price) || 0;
        const cumplePrecio = precio >= precioMin && precio <= precioMax;
        const km = Number(carro.Mileage) || 0;
        const cumpleKm = km >= kmMin && km <= kmMax;
        const cumpleTransmision = transmision === '' || (carro.Transmission || '').toLowerCase().includes(transmision.toLowerCase());
        const cumbleCombustible = combustible === '' || (carro['Fuel '] || carro['Fuel'] || '').toLowerCase().includes(combustible.toLowerCase());
        const cumpleCiudad = ciudad === '' || (carro.ciudad_de_la_placa || '').toLowerCase() === ciudad.toLowerCase();
        return cumpleTexto && cumpleAnio && cumpleModelo && cumplePrecio && cumpleKm && cumpleTransmision && cumbleCombustible && cumpleCiudad;
      });

      inventarioFiltradoGlobal = [...inventarioFiltradoGlobal].reverse();

      const grid = document.getElementById('catalogoGrid');
      const sinResultados = document.getElementById('sinResultados');
      const loadingMas = document.getElementById('loadingMas');

      grid.innerHTML = '';
      cargadosActuales = 0;

      if (inventarioFiltradoGlobal.length === 0) {
        grid.classList.add('hidden');
        sinResultados.classList.remove('hidden');
        loadingMas.classList.add('hidden');
        loadingMas.classList.remove('flex');
        return;
      }

      grid.classList.remove('hidden');
      sinResultados.classList.add('hidden');
      cargarMasVehiculos();
    }

    function limpiarFiltros() {
      document.getElementById('buscador').value = '';
      document.getElementById('filtroAnio').value = '';
      document.getElementById('filtroModelo').value = '';
      const ids = ['filtroPrecioMin','filtroPrecioMax','filtroKmMin','filtroKmMax','filtroTransmision','filtroCombustible','filtroCiudad'];
      ids.forEach(id => { const el = document.getElementById(id); if(el) el.value = ''; });
      aplicarFiltros();
    }

    document.getElementById('buscador').addEventListener('input', aplicarFiltros);
    document.getElementById('filtroAnio').addEventListener('change', aplicarFiltros);
    document.getElementById('filtroModelo').addEventListener('change', aplicarFiltros);

    // Funciones filtros Sidebar
    window.abrirMenuFiltros = function() {
      const modal = document.getElementById('modalFiltros');
      const sidebar = document.getElementById('sidebarFiltros');
      modal.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
      setTimeout(() => {
        modal.classList.remove('opacity-0', 'pointer-events-none');
        sidebar.classList.remove('translate-x-full');
      }, 10);
    }

    window.cerrarMenuFiltros = function() {
      const modal = document.getElementById('modalFiltros');
      const sidebar = document.getElementById('sidebarFiltros');
      modal.classList.add('opacity-0', 'pointer-events-none');
      sidebar.classList.add('translate-x-full');

      document.body.style.overflow = '';
      
      setTimeout(() => {
        modal.classList.add('hidden');
      }, 300);
    }

    document.getElementById('modalFiltros').addEventListener('click', function (e) {
      if (e.target === this) window.cerrarMenuFiltros();
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        if (!document.getElementById('modalFiltros').classList.contains('hidden')) window.cerrarMenuFiltros();
      }
    });

    window.addEventListener('scroll', () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      if (scrollTop + clientHeight >= scrollHeight - 400) {
        cargarMasVehiculos();
      }
    });

    cargarCatalogo();
  <\/script> `])), renderComponent($$result2, "Navbar", $$Navbar, {}), renderComponent($$result2, "Hero", $$Hero, {}), maybeRenderHead(), renderComponent($$result2, "FiltrosSidebar", $$FiltrosSidebar, {}), unescapeHTML(JSON.stringify(firebaseData))) })}`;
}, "C:/Users/John Paez/Downloads/autosya/toyotausados-astro/src/pages/index.astro", void 0);

const $$file = "C:/Users/John Paez/Downloads/autosya/toyotausados-astro/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
