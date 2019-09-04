import { routes } from '../../routes/routes.config';
import { NavClass } from './NavClass';

export function navObjects() {
  return routes.map(translateRoute);
}

function translateRoute(route) {
  let routeObject = {};

  switch (route) {
    case 'Literature':
      routeObject = new NavClass('Literature', 'book', '/Literature');
      break;
    case 'Reconstruction':
      routeObject = new NavClass('Reconstruction', 'write', '/Reconstruct');
      break;
    case 'Dashboard':
      routeObject = new NavClass('Dashboard', 'dashboard', '/');
      break;
    case 'Login':
      routeObject = new NavClass('Login', 'ticket', '/Login');
      break;
    default:
      routeObject = {};
  }
  return routeObject;
}
