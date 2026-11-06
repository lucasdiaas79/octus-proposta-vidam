/**
 * ATIVOS VISUAIS — Fotos: site oficial do VIDAM Hotel (hotelvidam.com). Uso definitivo depende de autorização.
 */
import facadeImg from '../assets/photos/01_fachada_piscina.jpg'
import rooftopImg from '../assets/photos/02_rooftop_vista_mar.jpg'
import jacuzziImg from '../assets/photos/03_jacuzzi_rooftop.jpg'
import restaurantImg from '../assets/photos/04_restaurante_raizes.jpg'
import suiteImg from '../assets/photos/05_suite.jpg'
import nauticoImg from '../assets/photos/06_nautico_aereo.jpg'
import eventsImg from '../assets/photos/07_eventos_auditorio.jpg'
import spaImg from '../assets/photos/08_spa.jpg'
import breakfastImg from '../assets/photos/09_cafe_da_manha.jpg'
import logoLight from '../assets/brand/octus-logo.png'
import logoDark from '../assets/brand/octus-logo-dark.png'
import symbol from '../assets/brand/octus-symbol.png'

export type PhotoAsset = { id: string; alt: string; src: string; focus?: string }

export const photos = {
  hero: { id: '01_fachada_piscina', alt: 'VIDAM Hotel e piscina na Orla de Atalaia', src: facadeImg, focus: '55% 55%' },
  secondary: { id: '02_rooftop_vista_mar', alt: 'Rooftop do VIDAM com vista para o mar', src: rooftopImg, focus: '45% 60%' },
  room: { id: '05_suite', alt: 'Suíte do VIDAM Hotel', src: suiteImg, focus: '55% 55%' },
  moment: { id: '03_jacuzzi_rooftop', alt: 'Jacuzzi no rooftop com vista para o mar', src: jacuzziImg, focus: '45% 55%' },
  spa: { id: '08_spa', alt: 'Experiência no Lotus Day SPA', src: spaImg, focus: '62% 45%' },
  nautico: { id: '06_nautico_aereo', alt: 'Vista aérea do VIDAM Náutico Clube & Praias', src: nauticoImg, focus: '50% 50%' },
  events: { id: '07_eventos_auditorio', alt: 'Auditório principal do VIDAM em evento', src: eventsImg, focus: '60% 60%' },
  restaurant: { id: '04_restaurante_raizes', alt: 'Restaurante Raízes', src: restaurantImg, focus: '50% 55%' },
  breakfast: { id: '09_cafe_da_manha', alt: 'Café da manhã do VIDAM', src: breakfastImg, focus: '50% 50%' },
} satisfies Record<string, PhotoAsset>

export const brand = { logoLight, logoDark, symbol, name: 'Studio Octus' }
