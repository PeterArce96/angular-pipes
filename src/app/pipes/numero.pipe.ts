import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numero'
})
export class NumeroPipe implements PipeTransform {

  transform(value: number, decimales: number): number {
    const factor = Math.pow(10,decimales);
    let valorRedondeado;
    if(value >=0){
      valorRedondeado = Math.round(value * factor)/factor;
    }else {
      valorRedondeado = (Math.round(-value * factor)/factor) * -1;
    }
    return valorRedondeado;
  }

}
