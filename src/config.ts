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
    src: 'assets/images/grafiti.jpeg',  // Asegúrate de tener la imagen correctamente en /src o /public
    position: 'center',  // Posiciona la imagen en el centro
    credit: {
      enable: true,  // Activamos los créditos por si es necesario
      text: 'Fotografía por Nombre del Fotógrafo',  // Texto del crédito (opcional)
      url: 'https://ejemplo.com/fotografo',  // URL hacia el creador de la imagen
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
      url: 'https://github.com/saicaca/fuwari',  // Asegúrate de revisar la URL del proyecto
      external: true,  // Abre en una nueva pestaña
    },
  ],
}

export const profileConfig: ProfileConfig = {
  avatar: 'assets/images/andres.png',  // Ruta relativa para tu avatar
  name: 'Andrés Tobío',
  bio: 'Desarrollador web apasionado y padre siempre ocupado, especializado en soluciones modernas y optimizadas.',
  links: [
    {
      name: 'Twitter',
      icon: 'fa6-brands:twitter',
      url: 'https://twitter.com/andrestobio',  // Actualiza con tu perfil real
    },
    {
      name: 'Steam',
      icon: 'fa6-brands:steam',
      url: 'https://store.steampowered.com',  // O tu perfil personalizado de Steam
    },
    {
      name: 'GitHub',
      icon: 'fa6-brands:github',
      url: 'https://github.com/saicaca/fuwari',  // Repositorio principal
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
