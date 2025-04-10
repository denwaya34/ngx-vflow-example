import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {Vflow, Node, Edge} from 'ngx-vflow';

@Component({
  selector: 'app-root',
  imports: [Vflow],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <vflow
      view="auto"
      [nodes]="nodes()"
      [edges]="edges()"
      [snapGrid]="[25, 25]"
      [background]="{ type: 'dots' }"
    >
      <mini-map />
    </vflow>
`,
})
export class AppComponent {
  public nodes = signal<Node[]>(
    [
      {
        id: '1',
        point: { x: 60, y: 150 },
        type: 'default',
        text: '1',
      },
      {
        id: '2',
        point: { x: 300, y: 100 },
        type: 'default',
        text: '2',
      },
    ]
  );

  public edges = signal<Edge[]>([
    {
      id: '1 -> 2',
      source: '1',
      target: '2',
    },
    {
      id: '1 -> 3',
      source: '1',
      target: '3',
    },
  ]);
}
