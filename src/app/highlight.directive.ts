import {
  Directive,
  ElementRef,
  Input,
  OnChanges,
  Renderer2,
  SimpleChanges,
} from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective implements OnChanges {
  @Input() appHighlight: boolean = false;
  constructor(private el: ElementRef, private render: Renderer2) {}
  ngOnChanges(changes: SimpleChanges): void {
    const color = this.appHighlight ? 'green' : 'red';
    this.render.setStyle(this.el.nativeElement, 'color', color);
  }
}
