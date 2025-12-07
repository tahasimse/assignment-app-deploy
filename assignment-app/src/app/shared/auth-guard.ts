import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { inject } from '@angular/core';

// appelée lors de la navigation vers une route protégée
// ex: /assignment/1/edit
// on doit retourner true si on autorise la navigation
// ou false si on refuse la navigation
// on peut aussi retourner une Promise ou un Observable
// qui résout true ou false plus tard (utile pour les appels
// asynchrones vers un serveur distant par exemple)
export const authGuard: CanActivateFn = (route, state) => {
  // injecter le service AuthService
  const authService = inject(AuthService);
  const router = inject(Router);

  // si ça renvoie true, alors, on peut activer la route
  return authService.isAdmin()
    .then(authentifie => {
      if(authentifie) {
        console.log("Vous êtes admin, navigation autorisée !");
        return true;
      } else {
        console.log("Vous n'êtes pas admin ! Navigation refusée !")
        // et on retourne vers la page d'accueil
        router.navigate(["/home"]);
        return false;
      }
    });
};
