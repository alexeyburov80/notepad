import { Directive, Output, Input, EventEmitter, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDragDrop]'
})
export class DragDropDirective {
  @Output() onFileDropped = new EventEmitter<any>();

  @HostBinding('style.background-color') private background = '#f5fcff'
  @HostBinding('style.opacity') private opacity = '1'

  
  //Dragover listener
  @HostListener('dragover', ['$event']) onDragOver(evt) {
    alert(21);
    evt.preventDefault();
    evt.stopPropagation();
    this.background = '#9ecbec';
    this.opacity = '0.8'
  }
  //Dragleave listener
  @HostListener('dragleave', ['$event']) public onDragLeave(evt) {
    alert(11);
    evt.preventDefault();
    evt.stopPropagation();
    this.background = '#f5fcff'
    this.opacity = '1'
  }
  //Drop listener
  @HostListener('drop', ['$event']) public ondrop(evt) {
    alert(1);
    evt.preventDefault();
    alert(2);
    evt.stopPropagation();
    alert(3);
    this.background = '#f5fcff'
    alert(4);
    this.opacity = '1'
    alert(5);
    const files = evt.dataTransfer.files;
    alert(files);
    if (files.length > 0) {
      this.onFileDropped.emit(files)
    }

  }

}
