import { Component } from "@angular/core";
import { TopMenu } from "./top-menu/top-menu";
import { MainMenu } from "./main-menu/main-menu";

@Component({
    selector:'app-header',
    templateUrl:'./header.component.html',
    styleUrls: ['./header.component.css'],
    imports: [TopMenu, MainMenu]
})

export class HeaderComponent{

}