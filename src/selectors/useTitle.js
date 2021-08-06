import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

export default (defaultTitle = 'Maestra', name = ' ') => {
  const location = useLocation();
  let documentTitle = '';

  switch (location.pathname) {
    case '/':
      documentTitle = 'Accueil - Maestra';
      break;
    case '/pilules':
      documentTitle = 'Liste des pilules - Maestra';
      break;
    // case `/pilule/:slug`:
    //   documentTitle = ` ${name} - Maestra`;
    //   break;
    case '/connexion':
      documentTitle = 'Connexion - Maestra';
      break;
    case '/contact':
      documentTitle = 'Contact - Maestra';
      break;
    case '/mon-compte':
      documentTitle = 'Mon compte - Maestra';
      break;
    // case '/pilule/:slug/ajouter-un-avis':
    //   documentTitle = ` ${name} Ajouter un avis - Maestra`;
    //   break;
    case '/mentions-legales':
      documentTitle = 'Mentions légales - Maestra';
      break;
    case '/equipe':
        documentTitle = 'L\'équipe de dev\' - Maestra';
      break;
      case '/bonnes-pratiques':
        documentTitle = 'Bonnes pratiques - Maestra';
      break;
    default:
      documentTitle = defaultTitle;
  }

  useEffect(
    () => {
      // ici, j'effectue mon traitement
      document.title = documentTitle;
    },
    [],
  );

  return documentTitle;
};