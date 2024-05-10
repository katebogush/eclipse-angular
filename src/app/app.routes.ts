import { Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { CorsetsComponent } from './components/corsets/corsets.component';
import { PenuarsComponent } from './components/penuars/penuars.component';
import { KupalnikiComponent } from './components/kupalniki/kupalniki.component';
import { PanchohuComponent } from './components/panchohu/panchohu.component';

export const routes: Routes = [
    {path: '', component: MainComponent},
    {path: 'corsets', component: CorsetsComponent},
    {path: 'penuars', component: PenuarsComponent},
    {path: 'kupalniki', component: KupalnikiComponent},
    {path: 'panchohu', component: PanchohuComponent},
];
