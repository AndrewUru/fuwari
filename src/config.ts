import type {
  LicenseConfig,
  NavBarConfig,
  ProfileConfig,
  SiteConfig,
} from './types/config'
import { LinkPreset } from './types/config'

export const siteConfig: SiteConfig = {
  title: 'ElSaltoWeb.es',
  subtitle: 'Diseño y desarrollo web',
  lang: 'es',  // 'en', 'zh_CN', 'zh_TW', 'ja', 'ko'
  themeColor: {
    hue: 250,  // Ejemplo: cian, entre 0 a 360 (personaliza según colores)
    fixed: false,  // El visitante no podrá cambiar el color del tema
  },
banner: {
  enable: true,
  src: 'assets/images/grafiti.webp',
  srcset: [
    {
      src: 'assets/images/grafiti-small.webp',
      media: '(max-width: 600px)',
      width: '600w'
    },
    {
      src: 'assets/images/grafiti-large.webp',
      media: '(min-width: 1200px)',
      width: '1200w'
    }
  ],
  position: 'center',
  credit: {
    enable: true,
    text: 'Studio Kuntur',
    url: 'https://www.instagram.com/studiokuntur/',
  }
},

  favicon: [
    {
      src: '/favicon/icon.png',  // Ruta de tu favicon
      theme: 'light',  // Favicon para modo claro
      sizes: '32x32',  // Tamaño estándar del favicon
    },
    {
      src: '/favicon/icon-dark.png',  // Favicon alternativo para modo oscuro
      theme: 'dark',
      sizes: '32x32',
    },
  ]
}

export const navBarConfig: NavBarConfig = {
  links: [
    LinkPreset.Home,
    LinkPreset.Archive,
    LinkPreset.About,
    {
      name: 'GitHub',
      url: 'https://github.com/AndrewUru/fuwari',  // Asegúrate de revisar la URL del proyecto
      external: true,  // Abre en una nueva pestaña
    },
  ],
}

export const profileConfig: ProfileConfig = {
  avatar: 'assets/images/andres.png',  // Ruta relativa para tu avatar
  name: 'Andrés Tobío',
  bio: 'Web developer and bussy father, especializado en soluciones modernas y optimizadas.',
  links: [
    {
      name: 'Linkedin',
      icon: 'fa6-brands:linkedin',
      url: 'https://www.linkedin.com/in/andr%C3%A9s-tob%C3%ADo-037b33241/',  // Actualiza con tu perfil real
    },
    {
      name: 'Instagram',
      icon: 'fa6-brands:instagram',
      url: 'https://www.instagram.com/elsaltoweb/',  // O tu perfil personalizado de Steam
    },
    {
      name: 'GitHub',
      icon: 'fa6-brands:github',
      url: 'https://github.com/AndrewUru',  // Repositorio principal
    },
  ],
  location: 'Valencia, España',  // Añadido para personalizar más el perfil
}

export const licenseConfig: LicenseConfig = {
  enable: true,
  name: 'CC BY-NC-SA 4.0',  // Licencia por defecto: Atribución, no comercial, compartir igual
  url: 'https://creativecommons.org/licenses/by-nc-sa/4.0/',
  description: 'Contenido licenciado bajo Creative Commons, no comercial, compartición con atribución.',  // Resumen de la licencia
}
