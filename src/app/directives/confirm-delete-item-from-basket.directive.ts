import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appConfirmDeleteItemFromBasket]',
  standalone: true
})
export class ConfirmDeleteItemFromBasketDirective {

  @Input("appConfirmDeleteItemFromBasket")
  onConfirmed: Function = () => {};

  @HostListener("click", ['$event']) 
  confirm(event: Event): void {
    event.stopImmediatePropagation();
    let confirmed = window.confirm("Ви впевнені, що хочете видалити цю позицію з корзини?");
    if (confirmed) {
      this.onConfirmed();
    }
  }
}
