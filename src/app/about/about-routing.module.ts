import { NgModule } from "@angular/core";
import { AboutComponent } from "./about.component";
import { RouterModule } from "@angular/router";

const routes = [
    { path: '', component: AboutComponent }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]

})

export class AboutRouting { }