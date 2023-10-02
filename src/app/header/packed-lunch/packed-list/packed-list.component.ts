import { Component } from '@angular/core';
import { Package } from './packed.model';

@Component({
  selector: 'app-packed-list',
  templateUrl: './packed-list.component.html',
  styleUrls: ['./packed-list.component.css']
})
export class PackedListComponent {
  packages: Package[] = [new Package("Churrasco","Churrasco da Vania","https://www.sabornamesa.com.br/media/k2/items/cache/7b98703f48b0025160f2b9b5aad2a874_XL.jpg")];
  name:string = "";
  description:string = "";
  getFoodName() {
    this.packages.push(new Package(this.name,this.description,""));
  }
}

