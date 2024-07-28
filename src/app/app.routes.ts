import { Routes } from '@angular/router';
import { StarScreenComponent } from './star-screen/star-screen.component';
import { GameComponent } from './game/game.component';

export const routes: Routes = [
    { path: '', component: StarScreenComponent },
    { path: 'game', component: GameComponent }
];
