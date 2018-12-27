import { Info } from "./info.model";

export class InfoService{
    infos = [
        new Info('home','Kirchwerder Landweg 6 <br>Hamburg , 21037'),
        new Info('phone','+49 15901389074'),
        new Info('envelope','ahmed.elkayaty92@gmail.com'),
        new Info('calendar','03.02.1992'),
        new Info('flag','Ägypter','Egyptian'),
        new Info('globe','<a href="http://www.ahmedelkayaty92.de" class="white">www.ahmedelkayaty92.de</a>'),
    ];
    getInfos(){
        console.log(this.infos);
        
        return this.infos;
    }
}