import { Element, Component, Prop, h, Watch } from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true
})
export class MyComponent {
  @Element() el: HTMLElement;

  @Prop() histogram: [number, number];
  @Watch("histogram")
  histogramWatcher() {
    console.log(`MyComponent#${this.el.getAttribute("id")} histogramWatcher fired`);
  }

  render() {
    return <div>{this.el.getAttribute("id")}</div>;
  }
}
