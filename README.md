¡Perfecto! Sí, ese script está bárbaro para dev en modo **preview build** y simplifica todo. Ahora actualizo el `README.md` para reflejar eso, así queda todo prolijito y realista 👇

---

```markdown
# 🧩 Microfrontends Starter - Vite + React + TypeScript + Module Federation

Este repositorio es una plantilla completa para desarrollar aplicaciones **microfrontend** usando **Vite**, **React**, **TypeScript** y **Module Federation** gracias a `@originjs/vite-plugin-federation`.

---

## 🏗️ Estructura del Proyecto

```
microfrontends-starter/
├── host/        # Aplicación contenedora (host)
├── remote/      # Microfrontend 1 - Botón React
└── remote2/     # Microfrontend 2 - Etiqueta React
```

Cada aplicación es completamente independiente, con su propia configuración de Vite y TypeScript.

---

## 🚀 Tecnologías Utilizadas

- [Vite](https://vitejs.dev/)
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Module Federation](https://webpack.js.org/concepts/module-federation/)
- [vite-plugin-federation](https://github.com/originjs/vite-plugin-federation)

---

## 🧪 ¿Qué incluye?

✅ Microfrontend funcional con props  
✅ Host que consume múltiples remotos  
✅ MFEs independientes con `build` y `serve`  
✅ Compartición de componentes entre apps  
✅ Listo para escalar a más MFEs o frameworks (Vue, Svelte, etc.)

---

## 📦 Instalación

1. Cloná el repo

```bash
git clone https://github.com/tuusuario/microfrontends-starter.git
cd microfrontends-starter
```

2. Instalá dependencias en cada proyecto:

```bash
cd host && npm install
cd ../remote && npm install
cd ../remote2 && npm install
```

---

## 🧑‍💻 Desarrollo

En **3 terminales separadas**, ejecutá lo siguiente:

```bash
# Microfrontend 1
cd remote
npm run preview:mf

# Microfrontend 2
cd remote2
npm run preview:mf

# Host
cd host
npm run dev -- --port 5000
```

👉 Accedé a: [http://localhost:5000](http://localhost:5000)

---

## 🧠 ¿Cómo funciona?

- Cada **remote** expone un componente (`RemoteButton`, `RemoteLabel`) usando `vite-plugin-federation`.
- El **host** los importa dinámicamente como si fueran módulos locales (`remote/RemoteButton`, `remote2/RemoteLabel`).
- Todo funciona gracias a **Module Federation**, que permite compartir código entre apps separadas en tiempo de ejecución.

---

## 🧰 Personalización

- Para agregar más microfrontends: creá otro proyecto con Vite + `vite-plugin-federation`.
- Podés usar otros frameworks como Vue, Svelte o incluso Angular como remotos.
- Agregá comunicación global usando Redux, Zustand o eventos personalizados.

---

## 📜 Scripts útiles

📄 En `remote` y `remote2`:

```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview:mf": "vite build && serve dist --listen 5001 --cors"
}
```

*(en `remote2`, cambiá el puerto a 5002 si es necesario)*

📄 En `host`:

```json
"scripts": {
  "dev": "vite"
}
```

---

## 💡 Créditos

Este starter fue armado con 💙 usando ideas modernas de arquitectura de microfrontends, ayudado por [vite-plugin-federation](https://github.com/originjs/vite-plugin-federation).

---

## 📄 Licencia

MIT
```

---

¿Querés que te lo deje listo para pegar en un repo de GitHub y meterle README renderizado lindo con badges y todo? También puedo armarte el `.gitignore` o workflow de GitHub Actions si querés CI/CD 😉