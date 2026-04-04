import { c as createComponent } from './astro-component_CuseIadU.mjs';
import 'piccolore';
import { m as maybeRenderHead, r as renderTemplate, i as renderComponent, l as renderSlot, n as renderHead } from './server_Ze0N7VEi.mjs';
import 'clsx';
import { registerVersion, getApps, initializeApp } from '@firebase/app';
import { getFirestore } from '@firebase/firestore';

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="bg-white border-t border-gray-100 pt-16 pb-8 relative overflow-hidden mt-20"> <!-- Decoración de fondo roja superior --> <div class="absolute top-0 w-full h-1 bg-gradient-to-r from-red-600 via-red-500 to-red-600"></div> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left mb-12"> <!-- Pico y Placa --> <div class="flex flex-col items-center md:items-start group"> <div class="flex items-center gap-3 mb-6"> <div class="w-12 h-12 rounded-xl bg-red-50 shadow-sm border border-red-100 flex items-center justify-center text-red-600 group-hover:bg-red-600 group-hover:text-white group-hover:-translate-y-1 transition-all duration-300"> <i data-lucide="car-front" class="w-6 h-6"></i> </div> <h3 class="text-xl font-bold text-gray-900 tracking-tight uppercase">Pico y Placa</h3> </div> <div class="bg-gray-50 border border-gray-100 px-6 py-4 rounded-xl w-full text-center md:text-left hover:border-red-200 hover:bg-white hover:shadow-md transition-all"> <p class="text-gray-600 font-medium">Hoy no hay pico y placa</p> </div> </div> <!-- Redes Sociales --> <div class="flex flex-col items-center md:items-start group"> <div class="flex items-center gap-3 mb-6"> <div class="w-12 h-12 rounded-xl bg-red-50 shadow-sm border border-red-100 flex items-center justify-center text-red-600 group-hover:bg-red-600 group-hover:text-white group-hover:-translate-y-1 transition-all duration-300"> <i data-lucide="share-nodes" class="w-6 h-6"></i> </div> <h3 class="text-xl font-bold text-gray-900 tracking-tight uppercase">Nuestras Redes</h3> </div> <div class="flex justify-center md:justify-start gap-4"> <a href="#" class="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center text-gray-600 hover:bg-red-600 hover:text-white hover:-translate-y-1 transition-all duration-300 shadow-sm border border-gray-100"> <i data-lucide="facebook" class="w-5 h-5"></i> </a> <a href="#" class="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center text-gray-600 hover:bg-pink-600 hover:text-white hover:-translate-y-1 transition-all duration-300 shadow-sm border border-gray-100"> <i data-lucide="instagram" class="w-5 h-5"></i> </a> <a href="https://wa.me/573202832616?text=Hola,%20vengo%20de%20toyotausados.com" target="_blank" class="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center text-gray-600 hover:bg-green-500 hover:text-white hover:-translate-y-1 transition-all duration-300 shadow-sm border border-gray-100"> <i data-lucide="message-circle" class="w-5 h-5"></i> </a> <a href="#" class="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center text-gray-600 hover:bg-red-600 hover:text-white hover:-translate-y-1 transition-all duration-300 shadow-sm border border-gray-100"> <i data-lucide="mail" class="w-5 h-5"></i> </a> </div> </div> <!-- Contacto --> <div class="flex flex-col items-center md:items-start group"> <div class="flex items-center gap-3 mb-6"> <div class="w-12 h-12 rounded-xl bg-red-50 shadow-sm border border-red-100 flex items-center justify-center text-red-600 group-hover:bg-red-600 group-hover:text-white group-hover:-translate-y-1 transition-all duration-300"> <i data-lucide="map-pin-house" class="w-6 h-6"></i> </div> <h3 class="text-xl font-bold text-gray-900 tracking-tight uppercase">Contáctenos</h3> </div> <ul class="space-y-4 text-gray-600 w-full"> <li class="flex items-center justify-center md:justify-start gap-4 p-3 bg-gray-50 rounded-xl hover:bg-red-50 hover:text-red-700 transition-colors cursor-default border border-transparent hover:border-red-100"> <i data-lucide="map-pinned" class="w-5 h-5 text-red-500"></i> <span class="font-medium">Calle 11A # 1E - 29 Caobos</span> </li> <li> <a href="tel:3202832616" class="flex items-center justify-center md:justify-start gap-4 p-3 bg-gray-50 rounded-xl hover:bg-red-50 hover:text-red-700 transition-colors border border-transparent hover:border-red-100"> <i data-lucide="phone-call" class="w-5 h-5 text-red-500"></i> <span class="font-bold">320-2832616</span> </a> </li> </ul> </div> </div> <!-- Línea divisoria y Copyright --> <div class="border-t border-gray-200 pt-8 flex flex-col md:flex-row items-center justify-between gap-4"> <div class="flex items-center gap-2 text-2xl font-black tracking-tighter text-gray-900"> <span class="text-red-600">toyota</span>usados<span class="text-red-600 text-lg">.com</span> </div> <p class="text-gray-500 text-sm font-medium">
&copy; ${(/* @__PURE__ */ new Date()).getFullYear()} toyotausados.com. Todos los derechos reservados.
</p> </div> </div> <!-- Botón Flotante WhatsApp --> <a href="https://wa.me/573202832616?text=Hola,%20vengo%20de%20toyotausados.com" target="_blank" class="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex items-center justify-center" title="Contáctanos por WhatsApp"> <i data-lucide="message-circle" class="w-7 h-7"></i> </a> </footer>`;
}, "C:/Users/John Paez/Downloads/autosya/toyotausados-astro/src/components/Footer.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate(_a$1 || (_a$1 = __template$1(['<html lang="es"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>', `</title><meta name="description" content="Encuentra tu Toyota usado ideal. Compra, venta, consignación, permuta y financiación en Colombia."><meta name="theme-color" content="#dc2626"><link rel="manifest" href="/manifest.json"><meta name="mobile-web-app-capable" content="yes"><meta name="apple-mobile-web-app-capable" content="yes"><meta name="apple-mobile-web-app-status-bar-style" content="default"><meta name="apple-mobile-web-app-title" content="Toyota Usados"><link rel="apple-touch-icon" href="/favicon.svg"><!-- Imports for plugins previously loaded via CDN (Lucide, PapaParse, Sortable) --><!-- We load them from CDN as inline to keep the original logic untouched first, or use the node modules --><script src="https://cdnjs.cloudflare.com/ajax/libs/PapaParse/5.4.1/papaparse.min.js"><\/script><script src="https://unpkg.com/lucide@latest"><\/script><script src="https://cdn.jsdelivr.net/npm/sortablejs@latest/Sortable.min.js"><\/script><!-- Google Identity Services --><script src="https://accounts.google.com/gsi/client" async defer><\/script><script>
			// Global auth configuration
			window.ADMIN_EMAILS = ['autosya.co@gmail.com'];
			window.GOOGLE_CLIENT_ID = '733267797443-c7qf50rp48h73cvameiu5ukj3ma9p9t8.apps.googleusercontent.com';

			// Check auth state immediately to prevent flicker
			if (typeof localStorage !== 'undefined') {
				if (localStorage.getItem('isLoggedIn') === 'true') {
					document.documentElement.classList.add('is-logged-in');
				}
				if (localStorage.getItem('isAdmin') === 'true') {
					document.documentElement.classList.add('is-admin');
				}
			}

			function handleCredentialResponse(response) {
				try {
					const token = response.credential;
					const base64Url = token.split('.')[1];
					const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
					const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
						return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
					}).join(''));
					
					const payload = JSON.parse(jsonPayload);
					
					// Guardamos sesión general
					localStorage.setItem('isLoggedIn', 'true');
					localStorage.setItem('userEmail', payload.email);
					if (payload.name) localStorage.setItem('userName', payload.name);
					if (payload.picture) localStorage.setItem('userPicture', payload.picture);
					document.documentElement.classList.add('is-logged-in');

					// Validamos si es admin
					if (window.ADMIN_EMAILS.includes(payload.email)) {
						localStorage.setItem('isAdmin', 'true');
						document.documentElement.classList.add('is-admin');
					} else {
						localStorage.removeItem('isAdmin');
					}
					
					// Notificamos a la aplicación que se actualizó la sesión
					window.location.reload();
				} catch(e) {
					console.error("Error decodificando JWT:", e);
				}
			}

			window.initGoogleAuth = function() {
				if (window.google) {
					window.google.accounts.id.initialize({
						client_id: window.GOOGLE_CLIENT_ID,
						callback: handleCredentialResponse,
						auto_select: true // Intenta loguear automáticamente si la sesión está abierta en Chrome
					});
					
					// Mostramos el popup si nadie está logueado
					if (localStorage.getItem('isLoggedIn') !== 'true') {
						window.google.accounts.id.prompt();
					}
				}
			};

			window.addEventListener('load', function() {
				const checkGoogle = setInterval(() => {
					if (window.google && window.google.accounts) {
						clearInterval(checkGoogle);
						window.initGoogleAuth();
					}
				}, 100);
			});
		<\/script><style>
			/* Clases utilitarias para elementos de administrador */
			.admin-only, .admin-only-flex, .admin-only-block, .admin-only-inline { display: none !important; }
			html.is-admin .admin-only { display: inherit !important; }
			html.is-admin .admin-only-block { display: block !important; }
			html.is-admin .admin-only-flex { display: flex !important; }
			html.is-admin .admin-only-inline { display: inline-block !important; }

			/* Clases para cualquier usuario logueado */
			.logged-only, .logged-only-flex, .logged-only-block { display: none !important; }
			html.is-logged-in .logged-only { display: inherit !important; }
			html.is-logged-in .logged-only-block { display: block !important; }
			html.is-logged-in .logged-only-flex { display: flex !important; }
			
			/* Ocultar elementos si el usuario está logueado (ej: botón de login manual) */
			html.is-logged-in .guest-only,
			html.is-logged-in .guest-only-flex,
			html.is-logged-in .guest-only-block { display: none !important; }
		</style>`, "", '</head> <body class="bg-gray-50 min-h-screen font-sans text-gray-800"> ', " ", " <script>\n			lucide.createIcons();\n			// Registrar Service Worker para PWA\n			if ('serviceWorker' in navigator) {\n				window.addEventListener('load', () => {\n					navigator.serviceWorker.register('/sw.js').catch(() => {});\n				});\n			}\n		<\/script> </body> </html>"])), title, renderSlot($$result, $$slots["head"]), renderHead(), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, {}));
}, "C:/Users/John Paez/Downloads/autosya/toyotausados-astro/src/layouts/Layout.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Navbar = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", `<nav class="bg-white shadow relative z-50"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex justify-between items-center bg-white relative z-50"> <!-- Logo --> <a href="/" class="hover:opacity-80 transition flex-shrink-0"> <img src="https://lh3.googleusercontent.com/d/11WeKEM19rGyJQtjtyTFRDK_Y26QeYBSy" alt="Toyota Usados Logo" class="h-14 w-auto object-contain max-w-[60vw] md:max-w-none"> </a> <!-- Main Navigation (Desktop) --> <div class="hidden md:flex items-center gap-6 text-sm font-semibold text-gray-600"> <a href="/" class="hover:text-red-600 text-gray-900 transition-colors">Inicio</a> <a href="https://wa.me/573202832616" class="hover:text-red-600 transition-colors">Contacto</a> </div> <!-- Right Actions --> <div class="flex items-center gap-3"> <!-- Botón Publica Gratis --> <a href="/add" class="hidden sm:inline-block bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-md font-bold transition-colors shadow-md text-sm cursor-pointer">
Publica Gratis
</a> <!-- Ícono de Login / Avatar de Usuario --> <button id="userIconBtn" class="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-red-600 cursor-pointer overflow-hidden" aria-label="Abrir Perfil o Iniciar Sesión"> <!-- Ícono por defecto (no logueado) --> <span id="navUserIcon" class="flex items-center justify-center w-full h-full text-gray-600"> <i data-lucide="user" class="w-5 h-5 pointer-events-none"></i> </span> <!-- Foto de perfil (logueado) --> <img id="navUserPhoto" src="" alt="Perfil" class="hidden w-full h-full object-cover rounded-full pointer-events-none" referrerpolicy="no-referrer"> </button> <!-- Hamburger (Mobile) --> <div class="md:hidden flex items-center ml-1"> <button id="mobileMenuBtn" class="text-gray-600 hover:text-red-600 focus:outline-none p-2 cursor-pointer" aria-label="Abrir menú principal"> <i data-lucide="menu" class="w-7 h-7 pointer-events-none"></i> </button> </div> </div> </div> <!-- Mobile Main Menu Dropdown --> <div id="mobileMenu" class="md:hidden hidden bg-white border-t border-gray-100 absolute w-full shadow-lg left-0 top-full z-40"> <div class="flex flex-col px-6 pt-2 pb-6 space-y-2 font-semibold text-gray-600"> <a href="/" class="hover:text-red-600 text-gray-900 transition-colors py-3 border-b border-gray-50">Inicio</a> <a href="https://wa.me/573202832616" class="hover:text-red-600 transition-colors py-3 border-b border-gray-50">Contacto</a> <a href="/add" class="bg-red-600 hover:bg-red-700 text-white px-5 py-3 rounded-md font-bold transition-colors text-center mt-6 shadow-md text-lg inline-block w-full">
Publica Gratis
</a> </div> </div> <!-- Overlay --> <div id="userDrawerOverlay" class="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] hidden transition-opacity opacity-0 cursor-pointer"></div> <!-- Drawer lateral --> <div id="userDrawer" class="fixed top-0 right-0 h-full w-[350px] max-w-[85vw] bg-white shadow-2xl z-[110] transform translate-x-full transition-transform duration-300 ease-out flex flex-col"> <!-- Botón cerrar --> <button id="closeDrawerBtn" class="absolute top-4 right-4 text-gray-400 hover:text-red-600 p-2 focus:outline-none bg-white rounded-full hover:bg-red-50 transition w-10 h-10 flex items-center justify-center z-20 shadow-sm border border-gray-100 cursor-pointer"> <i data-lucide="x" class="w-5 h-5 pointer-events-none"></i> </button> <!-- Encabezado del Drawer — fondo de carros --> <div class="flex flex-col items-center pt-10 pb-6 px-6 relative overflow-hidden text-white rounded-b-3xl shadow-md mx-2 mt-2" style="background: linear-gradient(160deg, rgba(180,0,0,0.87) 0%, rgba(30,0,0,0.96) 100%), url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=700&q=80') center/cover no-repeat;"> <!-- Avatar --> <div id="drawerAvatar" class="w-20 h-20 bg-white rounded-full flex items-center justify-center text-red-600 mb-3 shadow-xl z-10 border-4 border-white/40 uppercase text-2xl font-extrabold overflow-hidden"> <i data-lucide="user" class="w-10 h-10"></i> </div> <h3 id="drawerName" class="text-lg font-bold tracking-tight z-10 text-center px-2">Cargando...</h3> <p id="drawerEmail" class="text-xs font-medium opacity-80 mt-1 z-10 text-center px-2 break-all">...</p> <!-- Tag Admin --> <div class="admin-only-inline mt-3 bg-white/20 border border-white/30 text-white text-[10px] px-3 py-1 rounded-full font-bold uppercase tracking-widest z-10 backdrop-blur-sm">
☆ Administrador
</div> </div> <!-- Menu Links --> <div class="flex-grow overflow-y-auto px-4 py-5 space-y-2"> <h4 class="text-[11px] font-extrabold text-gray-400 uppercase tracking-widest mb-3 ml-2">Menú Principal</h4> <a href="/mis-publicaciones" class="flex items-center gap-4 px-4 py-3.5 text-gray-700 hover:text-red-700 hover:bg-red-50 rounded-xl transition-all font-semibold border border-transparent hover:border-red-100 shadow-sm hover:shadow"> <div class="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500"> <i data-lucide="car-front" class="w-4 h-4"></i> </div>
Mis Publicaciones
</a> <!-- Admin Menu --> <div class="admin-only-block mt-4"> <h4 class="text-[11px] font-extrabold text-indigo-400 uppercase tracking-widest mb-3 ml-2 mt-6">Configuración Administrativa</h4> <div class="bg-gray-50 border border-gray-100 rounded-2xl overflow-hidden py-2 space-y-1"> <a href="/admin/usuarios" class="flex items-center gap-4 px-4 py-3 text-gray-700 hover:text-indigo-700 hover:bg-indigo-50 rounded-xl transition-all font-semibold mx-2"> <div class="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center text-indigo-500 border border-indigo-100"> <i data-lucide="users" class="w-4 h-4"></i> </div>
Gestión de Usuarios
</a> <a href="/admin/configuracion" class="flex items-center gap-4 px-4 py-3 text-gray-700 hover:text-indigo-700 hover:bg-indigo-50 rounded-xl transition-all font-semibold mx-2"> <div class="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center text-indigo-500 border border-indigo-100"> <i data-lucide="store" class="w-4 h-4"></i> </div>
Datos del Negocio
</a> </div> </div> </div> <!-- Footer Logout --> <div class="p-5 border-t border-gray-100 bg-gray-50 rounded-t-3xl mt-auto"> <button onclick="if(window.logoutApp) window.logoutApp()" class="w-full flex items-center justify-center gap-3 px-4 py-3.5 bg-white border border-gray-200 hover:bg-red-50 hover:border-red-200 text-gray-700 hover:text-red-700 rounded-xl transition-all font-bold shadow-sm cursor-pointer"> <i data-lucide="log-out" class="w-5 h-5"></i>
Cerrar Sesión
</button> </div> </div> <script>
    document.addEventListener('DOMContentLoaded', () => {
      // Mobile Menu
      const mobileBtn = document.getElementById('mobileMenuBtn');
      const mobileMenu = document.getElementById('mobileMenu');
      if (mobileBtn && mobileMenu) {
        mobileBtn.addEventListener('click', (e) => { e.stopPropagation(); mobileMenu.classList.toggle('hidden'); });
        document.addEventListener('click', (e) => {
          if (!mobileMenu.contains(e.target) && !mobileBtn.contains(e.target)) mobileMenu.classList.add('hidden');
        });
      }

      // Drawer
      const userBtn = document.getElementById('userIconBtn');
      const drawer = document.getElementById('userDrawer');
      const overlay = document.getElementById('userDrawerOverlay');
      const closeBtn = document.getElementById('closeDrawerBtn');

      function getInitials(name) {
        if (!name) return 'U';
        const parts = name.trim().split(' ');
        return parts.length >= 2 ? (parts[0][0] + parts[1][0]).toUpperCase() : name.slice(0, 2).toUpperCase();
      }

      // Actualizar ícono/foto en el navbar según login
      function updateNavbarAvatar() {
        const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
        const picture = localStorage.getItem('userPicture');
        const navIcon = document.getElementById('navUserIcon');
        const navPhoto = document.getElementById('navUserPhoto');
        if (isLoggedIn && picture) {
          navIcon.classList.add('hidden');
          navPhoto.src = picture;
          navPhoto.classList.remove('hidden');
        } else {
          navIcon.classList.remove('hidden');
          navPhoto.classList.add('hidden');
        }
      }
      updateNavbarAvatar();

      function openDrawer() {
        const email = localStorage.getItem('userEmail') || 'Desconocido';
        const picture = localStorage.getItem('userPicture');
        let name = localStorage.getItem('userName') || email.split('@')[0];
        name = name.charAt(0).toUpperCase() + name.slice(1);

        document.getElementById('drawerName').innerText = name;
        document.getElementById('drawerEmail').innerText = email;

        const avatarEl = document.getElementById('drawerAvatar');
        if (picture) {
          avatarEl.innerHTML = \`<img src="\${picture}" alt="Avatar" class="w-full h-full object-cover" referrerpolicy="no-referrer" />\`;
        } else {
          avatarEl.innerHTML = \`<span class="text-2xl font-extrabold text-red-600">\${getInitials(name)}</span>\`;
        }

        overlay.classList.remove('hidden');
        void overlay.offsetWidth;
        overlay.classList.remove('opacity-0');
        drawer.classList.remove('translate-x-full');
        document.body.style.overflow = 'hidden';
      }

      function closeDrawer() {
        overlay.classList.add('opacity-0');
        drawer.classList.add('translate-x-full');
        document.body.style.overflow = '';
        setTimeout(() => overlay.classList.add('hidden'), 300);
      }

      if (userBtn) {
        userBtn.addEventListener('click', () => {
          if (localStorage.getItem('isLoggedIn') === 'true') {
            openDrawer();
          } else {
            if (window.google && window.google.accounts) {
              window.google.accounts.id.prompt();
            } else {
              alert("Por favor espera un momento a que cargue Google Auth.");
            }
          }
        });
      }

      if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
      if (overlay) overlay.addEventListener('click', closeDrawer);
    });

    window.logoutApp = function () {
      if (typeof localStorage !== 'undefined') {
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('isAdmin');
        localStorage.removeItem('userEmail');
        localStorage.removeItem('userName');
        localStorage.removeItem('userPicture');
        window.location.reload();
      }
    };
  <\/script> </nav>`], ["", `<nav class="bg-white shadow relative z-50"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex justify-between items-center bg-white relative z-50"> <!-- Logo --> <a href="/" class="hover:opacity-80 transition flex-shrink-0"> <img src="https://lh3.googleusercontent.com/d/11WeKEM19rGyJQtjtyTFRDK_Y26QeYBSy" alt="Toyota Usados Logo" class="h-14 w-auto object-contain max-w-[60vw] md:max-w-none"> </a> <!-- Main Navigation (Desktop) --> <div class="hidden md:flex items-center gap-6 text-sm font-semibold text-gray-600"> <a href="/" class="hover:text-red-600 text-gray-900 transition-colors">Inicio</a> <a href="https://wa.me/573202832616" class="hover:text-red-600 transition-colors">Contacto</a> </div> <!-- Right Actions --> <div class="flex items-center gap-3"> <!-- Botón Publica Gratis --> <a href="/add" class="hidden sm:inline-block bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-md font-bold transition-colors shadow-md text-sm cursor-pointer">
Publica Gratis
</a> <!-- Ícono de Login / Avatar de Usuario --> <button id="userIconBtn" class="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-red-600 cursor-pointer overflow-hidden" aria-label="Abrir Perfil o Iniciar Sesión"> <!-- Ícono por defecto (no logueado) --> <span id="navUserIcon" class="flex items-center justify-center w-full h-full text-gray-600"> <i data-lucide="user" class="w-5 h-5 pointer-events-none"></i> </span> <!-- Foto de perfil (logueado) --> <img id="navUserPhoto" src="" alt="Perfil" class="hidden w-full h-full object-cover rounded-full pointer-events-none" referrerpolicy="no-referrer"> </button> <!-- Hamburger (Mobile) --> <div class="md:hidden flex items-center ml-1"> <button id="mobileMenuBtn" class="text-gray-600 hover:text-red-600 focus:outline-none p-2 cursor-pointer" aria-label="Abrir menú principal"> <i data-lucide="menu" class="w-7 h-7 pointer-events-none"></i> </button> </div> </div> </div> <!-- Mobile Main Menu Dropdown --> <div id="mobileMenu" class="md:hidden hidden bg-white border-t border-gray-100 absolute w-full shadow-lg left-0 top-full z-40"> <div class="flex flex-col px-6 pt-2 pb-6 space-y-2 font-semibold text-gray-600"> <a href="/" class="hover:text-red-600 text-gray-900 transition-colors py-3 border-b border-gray-50">Inicio</a> <a href="https://wa.me/573202832616" class="hover:text-red-600 transition-colors py-3 border-b border-gray-50">Contacto</a> <a href="/add" class="bg-red-600 hover:bg-red-700 text-white px-5 py-3 rounded-md font-bold transition-colors text-center mt-6 shadow-md text-lg inline-block w-full">
Publica Gratis
</a> </div> </div> <!-- Overlay --> <div id="userDrawerOverlay" class="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] hidden transition-opacity opacity-0 cursor-pointer"></div> <!-- Drawer lateral --> <div id="userDrawer" class="fixed top-0 right-0 h-full w-[350px] max-w-[85vw] bg-white shadow-2xl z-[110] transform translate-x-full transition-transform duration-300 ease-out flex flex-col"> <!-- Botón cerrar --> <button id="closeDrawerBtn" class="absolute top-4 right-4 text-gray-400 hover:text-red-600 p-2 focus:outline-none bg-white rounded-full hover:bg-red-50 transition w-10 h-10 flex items-center justify-center z-20 shadow-sm border border-gray-100 cursor-pointer"> <i data-lucide="x" class="w-5 h-5 pointer-events-none"></i> </button> <!-- Encabezado del Drawer — fondo de carros --> <div class="flex flex-col items-center pt-10 pb-6 px-6 relative overflow-hidden text-white rounded-b-3xl shadow-md mx-2 mt-2" style="background: linear-gradient(160deg, rgba(180,0,0,0.87) 0%, rgba(30,0,0,0.96) 100%), url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=700&q=80') center/cover no-repeat;"> <!-- Avatar --> <div id="drawerAvatar" class="w-20 h-20 bg-white rounded-full flex items-center justify-center text-red-600 mb-3 shadow-xl z-10 border-4 border-white/40 uppercase text-2xl font-extrabold overflow-hidden"> <i data-lucide="user" class="w-10 h-10"></i> </div> <h3 id="drawerName" class="text-lg font-bold tracking-tight z-10 text-center px-2">Cargando...</h3> <p id="drawerEmail" class="text-xs font-medium opacity-80 mt-1 z-10 text-center px-2 break-all">...</p> <!-- Tag Admin --> <div class="admin-only-inline mt-3 bg-white/20 border border-white/30 text-white text-[10px] px-3 py-1 rounded-full font-bold uppercase tracking-widest z-10 backdrop-blur-sm">
☆ Administrador
</div> </div> <!-- Menu Links --> <div class="flex-grow overflow-y-auto px-4 py-5 space-y-2"> <h4 class="text-[11px] font-extrabold text-gray-400 uppercase tracking-widest mb-3 ml-2">Menú Principal</h4> <a href="/mis-publicaciones" class="flex items-center gap-4 px-4 py-3.5 text-gray-700 hover:text-red-700 hover:bg-red-50 rounded-xl transition-all font-semibold border border-transparent hover:border-red-100 shadow-sm hover:shadow"> <div class="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500"> <i data-lucide="car-front" class="w-4 h-4"></i> </div>
Mis Publicaciones
</a> <!-- Admin Menu --> <div class="admin-only-block mt-4"> <h4 class="text-[11px] font-extrabold text-indigo-400 uppercase tracking-widest mb-3 ml-2 mt-6">Configuración Administrativa</h4> <div class="bg-gray-50 border border-gray-100 rounded-2xl overflow-hidden py-2 space-y-1"> <a href="/admin/usuarios" class="flex items-center gap-4 px-4 py-3 text-gray-700 hover:text-indigo-700 hover:bg-indigo-50 rounded-xl transition-all font-semibold mx-2"> <div class="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center text-indigo-500 border border-indigo-100"> <i data-lucide="users" class="w-4 h-4"></i> </div>
Gestión de Usuarios
</a> <a href="/admin/configuracion" class="flex items-center gap-4 px-4 py-3 text-gray-700 hover:text-indigo-700 hover:bg-indigo-50 rounded-xl transition-all font-semibold mx-2"> <div class="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center text-indigo-500 border border-indigo-100"> <i data-lucide="store" class="w-4 h-4"></i> </div>
Datos del Negocio
</a> </div> </div> </div> <!-- Footer Logout --> <div class="p-5 border-t border-gray-100 bg-gray-50 rounded-t-3xl mt-auto"> <button onclick="if(window.logoutApp) window.logoutApp()" class="w-full flex items-center justify-center gap-3 px-4 py-3.5 bg-white border border-gray-200 hover:bg-red-50 hover:border-red-200 text-gray-700 hover:text-red-700 rounded-xl transition-all font-bold shadow-sm cursor-pointer"> <i data-lucide="log-out" class="w-5 h-5"></i>
Cerrar Sesión
</button> </div> </div> <script>
    document.addEventListener('DOMContentLoaded', () => {
      // Mobile Menu
      const mobileBtn = document.getElementById('mobileMenuBtn');
      const mobileMenu = document.getElementById('mobileMenu');
      if (mobileBtn && mobileMenu) {
        mobileBtn.addEventListener('click', (e) => { e.stopPropagation(); mobileMenu.classList.toggle('hidden'); });
        document.addEventListener('click', (e) => {
          if (!mobileMenu.contains(e.target) && !mobileBtn.contains(e.target)) mobileMenu.classList.add('hidden');
        });
      }

      // Drawer
      const userBtn = document.getElementById('userIconBtn');
      const drawer = document.getElementById('userDrawer');
      const overlay = document.getElementById('userDrawerOverlay');
      const closeBtn = document.getElementById('closeDrawerBtn');

      function getInitials(name) {
        if (!name) return 'U';
        const parts = name.trim().split(' ');
        return parts.length >= 2 ? (parts[0][0] + parts[1][0]).toUpperCase() : name.slice(0, 2).toUpperCase();
      }

      // Actualizar ícono/foto en el navbar según login
      function updateNavbarAvatar() {
        const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
        const picture = localStorage.getItem('userPicture');
        const navIcon = document.getElementById('navUserIcon');
        const navPhoto = document.getElementById('navUserPhoto');
        if (isLoggedIn && picture) {
          navIcon.classList.add('hidden');
          navPhoto.src = picture;
          navPhoto.classList.remove('hidden');
        } else {
          navIcon.classList.remove('hidden');
          navPhoto.classList.add('hidden');
        }
      }
      updateNavbarAvatar();

      function openDrawer() {
        const email = localStorage.getItem('userEmail') || 'Desconocido';
        const picture = localStorage.getItem('userPicture');
        let name = localStorage.getItem('userName') || email.split('@')[0];
        name = name.charAt(0).toUpperCase() + name.slice(1);

        document.getElementById('drawerName').innerText = name;
        document.getElementById('drawerEmail').innerText = email;

        const avatarEl = document.getElementById('drawerAvatar');
        if (picture) {
          avatarEl.innerHTML = \\\`<img src="\\\${picture}" alt="Avatar" class="w-full h-full object-cover" referrerpolicy="no-referrer" />\\\`;
        } else {
          avatarEl.innerHTML = \\\`<span class="text-2xl font-extrabold text-red-600">\\\${getInitials(name)}</span>\\\`;
        }

        overlay.classList.remove('hidden');
        void overlay.offsetWidth;
        overlay.classList.remove('opacity-0');
        drawer.classList.remove('translate-x-full');
        document.body.style.overflow = 'hidden';
      }

      function closeDrawer() {
        overlay.classList.add('opacity-0');
        drawer.classList.add('translate-x-full');
        document.body.style.overflow = '';
        setTimeout(() => overlay.classList.add('hidden'), 300);
      }

      if (userBtn) {
        userBtn.addEventListener('click', () => {
          if (localStorage.getItem('isLoggedIn') === 'true') {
            openDrawer();
          } else {
            if (window.google && window.google.accounts) {
              window.google.accounts.id.prompt();
            } else {
              alert("Por favor espera un momento a que cargue Google Auth.");
            }
          }
        });
      }

      if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
      if (overlay) overlay.addEventListener('click', closeDrawer);
    });

    window.logoutApp = function () {
      if (typeof localStorage !== 'undefined') {
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('isAdmin');
        localStorage.removeItem('userEmail');
        localStorage.removeItem('userName');
        localStorage.removeItem('userPicture');
        window.location.reload();
      }
    };
  <\/script> </nav>`])), maybeRenderHead());
}, "C:/Users/John Paez/Downloads/autosya/toyotausados-astro/src/components/Navbar.astro", void 0);

var name = "firebase";
var version = "12.11.0";

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
registerVersion(name, version, 'app');

const firebaseConfig = {
  apiKey: "AIzaSyD7Kcfxy-jAtrH69MWKWR3M8ft1LDmccso",
  authDomain: "toyotausados.firebaseapp.com",
  projectId: "toyotausados",
  storageBucket: "toyotausados.firebasestorage.app",
  messagingSenderId: "308604847797",
  appId: "1:308604847797:web:f8e583ee15c785546ee0fc",
  measurementId: "G-GVW40Q3LX2"
};
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
const db = getFirestore(app);

export { $$Layout as $, $$Navbar as a, db as d };
