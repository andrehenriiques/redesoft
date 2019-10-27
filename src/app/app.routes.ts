import { Routes } from '@angular/router'

import { PromocoesComponent } from './promocoes/promocoes.component'
import { TopoComponent } from './topo/topo.component'
import { MenuComponent } from './menu/menu.component';


export const ROUTES : Routes = [
    {  path: '', component: TopoComponent},
    {  path: 'promocoes', component: PromocoesComponent},
    {  path: 'menu', component: MenuComponent}
]