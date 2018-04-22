import {NgModule} from "@angular/core";
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatToolbarModule, MatCardModule, MatInputModule } from '@angular/material';

@NgModule({
imports: [ CommonModule, MatButtonModule, MatToolbarModule, MatCardModule, MatInputModule ],
exports: [ CommonModule, MatButtonModule, MatToolbarModule, MatCardModule, MatInputModule ],
})
export class CustomMaterialModule { }
