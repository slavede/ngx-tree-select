import { FlatComponent } from './flat/flat.component';
import { HierarchicalComponent } from './hierarchical/hierarchical.component';
import { SimpleValueComponent } from './simple-value/simple-value.component';
export var AppRoutes = [
    { path: '', redirectTo: '/flat', pathMatch: 'full' },
    { path: 'flat', component: FlatComponent },
    { path: 'hierarchical', component: HierarchicalComponent },
    { path: 'simplevalue', component: SimpleValueComponent },
];
//# sourceMappingURL=app.routes.js.map