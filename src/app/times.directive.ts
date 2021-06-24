import {Directive, TemplateRef, ViewContainerRef, Input} from '@angular/core';

@Directive({
  selector: '[appTimes]'
})
export class TimesDirective {

  constructor(
    // ViewContainerRef -> reference to the element that we applied our directive to
    private viewContainer: ViewContainerRef,
    // TemplateRef -> reference to whatever elements are placed inside of the element that we applied our directive to
    private templateRef: TemplateRef<any>
  ) {

  }

  @Input('appTimes') set render(times: number) {
    //clear all elements that are currently inside container
    this.viewContainer.clear();

    for (let i = 0; i < times; i++) {
      //create some html as many times as we provide.
      this.viewContainer.createEmbeddedView(this.templateRef, {
        index: i
      });
    }
  }

}
